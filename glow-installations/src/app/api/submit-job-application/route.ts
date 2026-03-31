import { NextRequest, NextResponse } from "next/server";
import { formatErrorHtml, sendErrorNotificationEmail } from "@/lib/error-email";
import { createGHLContact, sendSMSNotification, verifyHcaptcha } from "@/lib/ghl";
import { jobApplicationSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const captchaOK = await verifyHcaptcha(body.hcaptchaToken);
    if (!captchaOK || body._gotcha) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }
    const parsed = jobApplicationSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
    }

    const [firstName, ...last] = parsed.data.fullName.split(" ");
    await createGHLContact({
      firstName,
      lastName: last.join(" ") || "Applicant",
      email: parsed.data.email,
      phone: parsed.data.phone,
      customField: {
        role: parsed.data.role,
        whyJoin: parsed.data.whyJoin,
        portfolioUrl: parsed.data.portfolioUrl || "",
        resumeUrl: parsed.data.resumeUrl || "",
      },
      tags: ["job-applicant"],
      source: "Job Application Form",
    });
    await sendSMSNotification(
      `💼 NEW JOB APPLICATION\nName: ${parsed.data.fullName}\nRole: ${parsed.data.role}\nPhone: ${parsed.data.phone}`,
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Job application error:", err);
    await sendErrorNotificationEmail("API submit-job-application", formatErrorHtml("submit-job-application", err));
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
