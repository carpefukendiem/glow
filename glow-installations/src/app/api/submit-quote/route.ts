import { NextRequest, NextResponse } from "next/server";
import { addToPipeline, createGHLContact, sendSMSNotification, verifyHcaptcha } from "@/lib/ghl";
import { quoteFormSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const captchaOK = await verifyHcaptcha(body.hcaptchaToken);
    if (!captchaOK || body._gotcha) {
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
      tags: ["website-lead"],
      source: "Quote Form",
    });

    const contactId = contact?.contact?.id;
    if (contactId) {
      await addToPipeline(contactId, {
        name: `${data.firstName} ${data.lastName}`,
        serviceType: data.serviceType,
        estimatedBudget: data.estimatedBudget,
      });
    }

    await sendSMSNotification(
      `🎄 NEW LEAD\nName: ${data.firstName} ${data.lastName}\nPhone: ${data.phone}\nEmail: ${data.email}`,
    );

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
