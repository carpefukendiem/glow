const GHL_BASE_URL = "https://services.leadconnectorhq.com";

type GHLContactInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
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
  const { phone, customField, ...rest } = data;
  const payload: Record<string, unknown> = {
    ...rest,
    locationId: process.env.GHL_SUBACCOUNT_ID,
  };
  if (phone?.trim()) payload.phone = phone.trim();
  if (customField && Object.keys(customField).length > 0) {
    payload.customField = customField;
  }

  const res = await fetch(`${GHL_BASE_URL}/contacts/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GHL_API_KEY}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    body: JSON.stringify(payload),
  });
  const json = (await res.json()) as { contact?: { id?: string }; message?: string };
  if (!res.ok) {
    throw new Error(`GHL contact creation failed: ${res.status} ${JSON.stringify(json)}`);
  }
  return json;
}

export async function addGHLOpportunity(
  contactId: string,
  data: { name: string; source?: string },
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
      pipelineStageId: process.env.GHL_STAGE_ID,
      locationId: process.env.GHL_SUBACCOUNT_ID,
      contactId,
      name: data.name,
      source: data.source ?? "Website",
      monetaryValue: 0,
      status: "open",
    }),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(`GHL opportunity creation failed: ${res.status} ${JSON.stringify(json)}`);
  }
  return json;
}

/** @deprecated use addGHLOpportunity */
export const addToPipeline = addGHLOpportunity;

export async function sendLeadSMS(message: string) {
  const phones = [process.env.LEAD_PHONE_1, process.env.LEAD_PHONE_2].filter(Boolean) as string[];
  const fromNumber = process.env.GHL_PHONE_NUMBER?.trim();
  const useOutbound = Boolean(fromNumber);

  const results = await Promise.allSettled(
    phones.map(async (toNumber) => {
      const url = useOutbound
        ? `${GHL_BASE_URL}/conversations/messages/outbound`
        : `${GHL_BASE_URL}/conversations/messages`;
      const body: Record<string, unknown> = {
        type: "SMS",
        message,
        toNumber,
        locationId: process.env.GHL_SUBACCOUNT_ID,
      };
      if (useOutbound && fromNumber) body.fromNumber = fromNumber;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(`SMS ${res.status}: ${err}`);
      }
    }),
  );

  results.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(`SMS to ${phones[i]} failed:`, r.reason);
    }
  });
}

/** @deprecated use sendLeadSMS */
export const sendSMSNotification = sendLeadSMS;
