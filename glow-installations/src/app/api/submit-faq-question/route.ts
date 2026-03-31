import { NextRequest, NextResponse } from "next/server";
import { addGHLOpportunity, createGHLContact, sendLeadSMS, verifyHcaptcha } from "@/lib/ghl";
import { faqQuestionSchema } from "@/lib/validations";

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

    const parsed = faqQuestionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
    }

    const [firstName, ...last] = parsed.data.name.trim().split(" ");
    const lastName = last.join(" ") || "FAQ";

    const contact = await createGHLContact({
      firstName,
      lastName,
      email: parsed.data.email,
      customField: {
        question1: parsed.data.question1,
        question2: parsed.data.question2 || "",
        question3: parsed.data.question3 || "",
        requestContact: parsed.data.requestContact ? "yes" : "no",
      },
      tags: ["website-lead", "faq-question"],
      source: "Website FAQ Form",
    });

    const contactId = contact?.contact?.id;
    if (contactId) {
      await addGHLOpportunity(contactId, {
        name: `${parsed.data.name} — FAQ Question`,
        source: "Website FAQ Form",
      });
    }

    await sendLeadSMS(
      `❓ FAQ — Glow Installations\n` +
        `Name: ${parsed.data.name}\n` +
        `Email: ${parsed.data.email}\n` +
        `Q1: ${parsed.data.question1}\n` +
        `Q2: ${parsed.data.question2 || "—"}\n` +
        `Q3: ${parsed.data.question3 || "—"}\n` +
        `Wants contact: ${parsed.data.requestContact ? "yes" : "no"}`,
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("FAQ form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please call us at (805) 720-2559." },
      { status: 500 },
    );
  }
}
