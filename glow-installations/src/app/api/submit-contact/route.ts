import { NextRequest, NextResponse } from "next/server";
import { createGHLContact, sendSMSNotification, verifyHcaptcha } from "@/lib/ghl";
import { contactFormSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const captchaOK = await verifyHcaptcha(body.hcaptchaToken);
    if (!captchaOK || body._gotcha) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }
    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
    }

    const [firstName, ...last] = parsed.data.name.split(" ");
    await createGHLContact({
      firstName,
      lastName: last.join(" ") || "Website Contact",
      email: parsed.data.email,
      phone: parsed.data.phone,
      customField: { message: parsed.data.message },
      tags: ["website-contact"],
      source: "Contact Form",
    });
    await sendSMSNotification(
      `📩 CONTACT REQUEST\nName: ${parsed.data.name}\nPhone: ${parsed.data.phone}\nEmail: ${parsed.data.email}`,
    );
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
