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

const fieldClass =
  "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 transition-all duration-200 focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20";

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
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <p className="rounded-xl border border-[var(--gold)]/25 bg-[var(--gold)]/10 p-3 text-sm text-[var(--gold)]">
        {SEASONAL_NOTICE}
      </p>
      <input type="text" {...form.register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />
      <select {...form.register("serviceType")} className={fieldClass}>
        <option value="" className="bg-[#1a2820] text-white">
          Type of Service*
        </option>
        <option className="bg-[#1a2820] text-white">Full Service - Residential Property</option>
        <option className="bg-[#1a2820] text-white">Full Service - Commercial Property</option>
        <option className="bg-[#1a2820] text-white">Permanent Lighting (coming soon in early 2026)</option>
        <option className="bg-[#1a2820] text-white">Year-Round Tree Lighting</option>
      </select>
      <div className="grid gap-3 md:grid-cols-2">
        <input placeholder="First Name*" {...form.register("firstName")} className={fieldClass} />
        <input placeholder="Last Name*" {...form.register("lastName")} className={fieldClass} />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <input placeholder="Email Address*" {...form.register("email")} className={fieldClass} />
        <input placeholder="Phone Number*" {...form.register("phone")} className={fieldClass} />
      </div>
      <input placeholder="Property Address*" {...form.register("address1")} className={fieldClass} />
      <input placeholder="Estimated Budget*" {...form.register("estimatedBudget")} className={fieldClass} />
      <div className="space-y-2">
        <p className="text-sm font-medium text-white/80">Services Desired*</p>
        {serviceOptions.map((option) => (
          <label key={option} className="flex items-center gap-2 text-sm text-white/75">
            <input
              type="checkbox"
              value={option}
              {...form.register("servicesDesired")}
              className="h-4 w-4 cursor-pointer rounded border-white/30 bg-white/10 accent-[var(--gold)]"
            />
            {option}
          </label>
        ))}
      </div>
      <textarea
        placeholder="Special Notes"
        {...form.register("specialNotes")}
        className={`min-h-28 resize-none ${fieldClass}`}
      />
      <HCaptcha
        theme="dark"
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001"}
        onVerify={(token) => form.setValue("hcaptchaToken", token)}
      />
      <p className="text-xs text-white/55">
        No Obligation. We&apos;ll send you a custom proposal within 24 hours.
        Deposit required only after you approve. Commercial quotes may require
        more than 24 hours.
      </p>
      <Button type="submit" className="font-ui w-full rounded-xl py-3.5 font-bold">
        Get A Free Quote →
      </Button>
      {success && (
        <p className="rounded-xl border border-green-500/30 bg-green-950/40 p-3 text-sm text-green-100">{success}</p>
      )}
    </form>
  );
}
