/** Server-only: notify rubenstips@gmail.com (or ERROR_NOTIFICATION_TO) when RESEND_API_KEY is set. */
export async function sendErrorNotificationEmail(subject: string, html: string) {
  const to = process.env.ERROR_NOTIFICATION_TO || "rubenstips@gmail.com";
  const key = process.env.RESEND_API_KEY;
  const from = process.env.ERROR_EMAIL_FROM || "Glow Site <onboarding@resend.dev>";

  if (!key) {
    console.error("[error-email] RESEND_API_KEY missing —", subject, html.slice(0, 500));
    return;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `[Glow] ${subject}`,
        html,
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.error("[error-email] Resend failed:", res.status, t);
    }
  } catch (e) {
    console.error("[error-email]", e);
  }
}

export function formatErrorHtml(context: string, err: unknown) {
  const message = err instanceof Error ? err.message : String(err);
  const stack = err instanceof Error ? err.stack ?? "" : "";
  return `<p><strong>Context:</strong> ${escapeHtml(context)}</p><p><strong>Message:</strong> ${escapeHtml(message)}</p><pre style="white-space:pre-wrap;font-size:12px">${escapeHtml(stack)}</pre>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
