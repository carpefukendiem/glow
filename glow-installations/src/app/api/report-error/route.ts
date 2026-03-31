import { NextRequest, NextResponse } from "next/server";
import { sendErrorNotificationEmail } from "@/lib/error-email";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      message?: string;
      stack?: string;
      source?: string;
      url?: string;
    };
    const message = body.message || "Unknown client error";
    await sendErrorNotificationEmail(
      `Client: ${body.source || "report"} — ${message.slice(0, 100)}`,
      `<p><strong>URL:</strong> ${body.url ?? ""}</p><p><strong>Message:</strong> ${message}</p><pre>${body.stack ?? ""}</pre>`,
    );
  } catch {
    /* ignore */
  }
  return NextResponse.json({ ok: true });
}
