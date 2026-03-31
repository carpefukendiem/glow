"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    void fetch("/api/report-error", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "global-error.tsx",
        message: error.message,
        stack: error.stack,
        digest: error.digest,
        url: typeof window !== "undefined" ? window.location.href : "",
      }),
    });
  }, [error]);

  return (
    <html lang="en">
      <body style={{ background: "#0a0a0f", color: "#fff", fontFamily: "system-ui", padding: 48, textAlign: "center" }}>
        <h1 style={{ fontSize: 24, marginBottom: 16 }}>Something went wrong</h1>
        <button type="button" onClick={() => reset()} style={{ padding: "12px 24px", cursor: "pointer" }}>
          Try again
        </button>
      </body>
    </html>
  );
}
