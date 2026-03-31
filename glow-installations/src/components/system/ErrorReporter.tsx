"use client";

import { useEffect } from "react";

export function ErrorReporter() {
  useEffect(() => {
    const send = (payload: Record<string, string | undefined>) => {
      void fetch("/api/report-error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, url: typeof window !== "undefined" ? window.location.href : "" }),
      });
    };

    const onError = (event: ErrorEvent) => {
      send({
        source: "window.onerror",
        message: event.message || "Error",
        stack: event.error?.stack,
      });
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message = reason instanceof Error ? reason.message : String(reason);
      const stack = reason instanceof Error ? reason.stack : undefined;
      send({ source: "unhandledrejection", message, stack });
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
