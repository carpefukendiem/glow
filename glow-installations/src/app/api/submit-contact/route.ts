import { NextRequest, NextResponse } from "next/server";
import { addGHLOpportunity, createGHLContact, sendLeadSMS, verifyHcaptcha } from "@/lib/ghl";
import { contactFormSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body._gotcha) {
      return NextResponse.json({ success: true });
    }

    const captchaOK = await verifyHcaptcha(body.hcaptchaToken);
    if (!captchaOK) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
    }

    const [firstName, ...last] = parsed.data.name.trim().split(" ");
    const lastName = last.join(" ") || "Website Contact";

    const contact = await createGHLContact({
      firstName,
      lastName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      customField: { message: parsed.data.message },
      tags: ["website-lead", "contact-form"],
      source: "Website Contact Form",
    });

    const contactId = contact?.contact?.id;
    if (contactId) {
      await addGHLOpportunity(contactId, {
        name: `${parsed.data.name} — General Inquiry`,
        source: "Website Contact Form",
      });
    }

    await sendLeadSMS(
      `📩 NEW CONTACT — Glow Installations\n` +
        `Name: ${parsed.data.name}\n` +
        `Phone: ${parsed.data.phone}\n` +
        `Email: ${parsed.data.email}\n` +
        `Message: ${parsed.data.message}`,
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please call us at (805) 720-2559." },
      { status: 500 },
    );
  }
}
