import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const store = new Map<string, { count: number; reset: number }>();

function getIp(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function proxy(req: NextRequest) {
  const ip = getIp(req);
  const now = Date.now();
  const record = store.get(ip);

  if (!record || now > record.reset) {
    store.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS });
    return NextResponse.next();
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return NextResponse.json(
      { error: "Rate limit exceeded. Please try again later." },
      { status: 429 },
    );
  }

  record.count += 1;
  store.set(ip, record);
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/submit-quote",
    "/api/submit-contact",
    "/api/submit-faq-question",
    "/api/submit-job-application",
  ],
};
