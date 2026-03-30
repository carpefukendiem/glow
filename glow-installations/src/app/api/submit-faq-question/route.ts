import { NextRequest, NextResponse } from "next/server";
import { createGHLContact, sendSMSNotification, verifyHcaptcha } from "@/lib/ghl";
import { faqQuestionSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const captchaOK = await verifyHcaptcha(body.hcaptchaToken);
    if (!captchaOK || body._gotcha) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }
    const parsed = faqQuestionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
    }

    const [firstName, ...last] = parsed.data.name.split(" ");
    await createGHLContact({
      firstName,
      lastName: last.join(" ") || "FAQ Request",
      email: parsed.data.email,
      phone: "",
      customField: {
        question1: parsed.data.question1,
        question2: parsed.data.question2 || "",
        question3: parsed.data.question3 || "",
      },
      tags: ["website-faq-question"],
      source: "FAQ Form",
    });
    await sendSMSNotification(
      `❓ FAQ QUESTION\nName: ${parsed.data.name}\nEmail: ${parsed.data.email}`,
    );
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
