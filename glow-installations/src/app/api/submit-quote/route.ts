import { NextRequest, NextResponse } from "next/server";
import { addGHLOpportunity, createGHLContact, sendLeadSMS, verifyHcaptcha } from "@/lib/ghl";
import { quoteFormSchema } from "@/lib/validations";

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

    const parsed = quoteFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
    }

    const data = parsed.data;
    const contact = await createGHLContact({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address1: data.address1,
      customField: {
        serviceType: data.serviceType,
        estimatedBudget: data.estimatedBudget,
        servicesDesired: data.servicesDesired.join(", "),
        specialNotes: data.specialNotes || "",
      },
      tags: ["website-lead", "quote-request"],
      source: "Website Quote Form",
    });

    const contactId = contact?.contact?.id;
    if (!contactId) {
      throw new Error("No contact ID returned from GHL");
    }

    await addGHLOpportunity(contactId, {
      name: `${data.firstName} ${data.lastName} — ${data.serviceType}`,
      source: "Website Quote Form",
    });

    await sendLeadSMS(
      `🎄 NEW QUOTE — Glow Installations\n` +
        `Name: ${data.firstName} ${data.lastName}\n` +
        `Phone: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `Address: ${data.address1}\n` +
        `Service: ${data.serviceType}\n` +
        `Budget: ${data.estimatedBudget}\n` +
        `Services: ${data.servicesDesired.join(", ")}\n` +
        `Notes: ${data.specialNotes || "None"}`,
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please call us at (805) 720-2559." },
      { status: 500 },
    );
  }
}
