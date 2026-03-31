"use client";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { faqQuestionSchema } from "@/lib/validations";

type FaqValues = z.input<typeof faqQuestionSchema>;

const inputClass =
  "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 transition-all duration-200 focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20";

export function FaqQuestionForm() {
  const form = useForm<FaqValues>({
    resolver: zodResolver(faqQuestionSchema),
    defaultValues: { _gotcha: "", requestContact: false },
  });

  async function onSubmit(values: FaqValues) {
    await fetch("/api/submit-faq-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <input type="text" {...form.register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80">Name *</label>
        <input placeholder="Your name" {...form.register("name")} className={inputClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80">Email *</label>
        <input
          type="email"
          placeholder="Email address"
          {...form.register("email")}
          className={inputClass}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80">Question 1 *</label>
        <textarea
          placeholder="Your question"
          rows={4}
          {...form.register("question1")}
          className={`resize-none ${inputClass}`}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80">Question 2 (optional)</label>
        <textarea
          rows={3}
          placeholder="Additional question"
          {...form.register("question2")}
          className={`resize-none ${inputClass}`}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80">Question 3 (optional)</label>
        <textarea
          rows={3}
          placeholder="Additional question"
          {...form.register("question3")}
          className={`resize-none ${inputClass}`}
        />
      </div>
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          {...form.register("requestContact")}
          className="h-4 w-4 cursor-pointer rounded border-white/30 bg-white/10 accent-[var(--gold)]"
        />
        <span className="text-sm text-white/75">Please contact me to answer my question(s)</span>
      </label>
      <HCaptcha
        theme="dark"
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001"}
        onVerify={(token) => form.setValue("hcaptchaToken", token)}
      />
      <button
        type="submit"
        className="font-ui w-full rounded-xl bg-[var(--crimson)] px-6 py-3.5 font-bold text-white transition-all duration-200 hover:scale-[1.01] hover:bg-[var(--crimson-hover)]"
      >
        Submit Question
      </button>
    </form>
  );
}
