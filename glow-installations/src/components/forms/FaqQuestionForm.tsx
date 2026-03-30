"use client";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { faqQuestionSchema } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

type FaqValues = z.input<typeof faqQuestionSchema>;

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
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border bg-white p-6">
      <h3 className="text-2xl font-semibold">Ask a Question</h3>
      <input type="text" {...form.register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />
      <input placeholder="Name*" {...form.register("name")} className="w-full rounded-lg border p-3" />
      <input placeholder="Email Address*" {...form.register("email")} className="w-full rounded-lg border p-3" />
      <textarea placeholder="Question 1*" {...form.register("question1")} className="min-h-24 w-full rounded-lg border p-3" />
      <textarea placeholder="Question 2 (optional)" {...form.register("question2")} className="min-h-20 w-full rounded-lg border p-3" />
      <textarea placeholder="Question 3 (optional)" {...form.register("question3")} className="min-h-20 w-full rounded-lg border p-3" />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" {...form.register("requestContact")} />
        Please contact me to answer my question(s)
      </label>
      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001"}
        onVerify={(token) => form.setValue("hcaptchaToken", token)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
