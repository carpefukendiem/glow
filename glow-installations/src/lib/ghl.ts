const GHL_BASE_URL = "https://services.leadconnectorhq.com";

type GHLContactInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1?: string;
  customField?: Record<string, string>;
  tags?: string[];
  source?: string;
};

export async function verifyHcaptcha(token: string) {
  if (!process.env.HCAPTCHA_SECRET_KEY) return true;
  const response = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.HCAPTCHA_SECRET_KEY,
      response: token,
    }),
  });
  const result = (await response.json()) as { success?: boolean };
  return Boolean(result.success);
}

export async function createGHLContact(data: GHLContactInput) {
  const res = await fetch(`${GHL_BASE_URL}/contacts/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GHL_API_KEY}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    body: JSON.stringify({ ...data, locationId: process.env.GHL_SUBACCOUNT_ID }),
  });
  return res.json();
}

export async function addToPipeline(
  contactId: string,
  customData: Record<string, string>,
) {
  const res = await fetch(`${GHL_BASE_URL}/opportunities/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GHL_API_KEY}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    body: JSON.stringify({
      pipelineId: process.env.GHL_PIPELINE_ID,
      locationId: process.env.GHL_SUBACCOUNT_ID,
      name: `New Lead - ${customData.name || "Website Inquiry"}`,
      pipelineStageId: process.env.GHL_STAGE_ID,
      contactId,
      customFields: customData,
    }),
  });
  return res.json();
}

export async function sendSMSNotification(message: string) {
  const phones = [process.env.LEAD_PHONE_1, process.env.LEAD_PHONE_2].filter(
    Boolean,
  );
  await Promise.all(
    phones.map((phone) =>
      fetch(`${GHL_BASE_URL}/conversations/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
        body: JSON.stringify({
          type: "SMS",
          message,
          toNumber: phone,
          locationId: process.env.GHL_SUBACCOUNT_ID,
        }),
      }),
    ),
  );
}
