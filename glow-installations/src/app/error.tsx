"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
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
        source: "error.tsx",
        message: error.message,
        stack: error.stack,
        digest: error.digest,
        url: typeof window !== "undefined" ? window.location.href : "",
      }),
    });
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 bg-[var(--night)] px-6 py-24 text-center text-white">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="max-w-md text-white/70">Please try again or return home.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-[var(--crimson)] px-6 py-3 font-semibold text-white"
        >
          Try again
        </button>
        <Link href="/" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white">
          Home
        </Link>
      </div>
    </div>
  );
}
