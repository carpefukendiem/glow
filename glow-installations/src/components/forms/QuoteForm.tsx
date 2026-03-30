"use client";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema } from "@/lib/validations";
import { z } from "zod";
import { SEASONAL_NOTICE } from "@/lib/content";
import { Button } from "@/components/ui/Button";

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const serviceOptions = [
  "Roof Line",
  "Roof Ridges",
  "Trees, Bushes, & Lawn Lighting/Decor",
  "Windows",
  "Patios & Railing",
];

export function QuoteForm() {
  const [success, setSuccess] = useState("");
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: { servicesDesired: [], _gotcha: "", specialNotes: "" },
  });

  async function onSubmit(values: QuoteFormValues) {
    const response = await fetch("/api/submit-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      setSuccess(
        "🎁 You're all set! We'll reach out soon to get started planning for 2026. Because you signed up early, you'll receive exclusive early access to our 2026 calendar before we open to the public.",
      );
      form.reset();
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border bg-white p-6">
      <p className="rounded-lg bg-[#F8F6F3] p-3 text-sm text-[#8B060B]">{SEASONAL_NOTICE}</p>
      <input type="text" {...form.register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />
      <select {...form.register("serviceType")} className="w-full rounded-lg border p-3">
        <option value="">Type of Service*</option>
        <option>Full Service - Residential Property</option>
        <option>Full Service - Commercial Property</option>
        <option>Permanent Lighting (coming soon in early 2026)</option>
        <option>Year-Round Tree Lighting</option>
      </select>
      <div className="grid gap-3 md:grid-cols-2">
        <input placeholder="First Name*" {...form.register("firstName")} className="rounded-lg border p-3" />
        <input placeholder="Last Name*" {...form.register("lastName")} className="rounded-lg border p-3" />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <input placeholder="Email Address*" {...form.register("email")} className="rounded-lg border p-3" />
        <input placeholder="Phone Number*" {...form.register("phone")} className="rounded-lg border p-3" />
      </div>
      <input placeholder="Property Address*" {...form.register("address1")} className="w-full rounded-lg border p-3" />
      <input placeholder="Estimated Budget*" {...form.register("estimatedBudget")} className="w-full rounded-lg border p-3" />
      <div className="space-y-2">
        <p className="text-sm font-medium">Services Desired*</p>
        {serviceOptions.map((option) => (
          <label key={option} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              value={option}
              {...form.register("servicesDesired")}
            />
            {option}
          </label>
        ))}
      </div>
      <textarea
        placeholder="Special Notes"
        {...form.register("specialNotes")}
        className="min-h-28 w-full rounded-lg border p-3"
      />
      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001"}
        onVerify={(token) => form.setValue("hcaptchaToken", token)}
      />
      <p className="text-xs text-[#1A1A1A]/70">
        No Obligation. We&apos;ll send you a custom proposal within 24 hours.
        Deposit required only after you approve. Commercial quotes may require
        more than 24 hours.
      </p>
      <Button type="submit">Get My Free Quote →</Button>
      {success && <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800">{success}</p>}
    </form>
  );
}
