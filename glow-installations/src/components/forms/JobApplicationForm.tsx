"use client";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { jobApplicationSchema } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

type JobValues = z.infer<typeof jobApplicationSchema>;

export function JobApplicationForm({ role }: { role: string }) {
  const form = useForm<JobValues>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: { role, _gotcha: "", portfolioUrl: "", resumeUrl: "" },
  });

  async function onSubmit(values: JobValues) {
    await fetch("/api/submit-job-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    form.reset({ role });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border bg-white p-6">
      <input type="text" {...form.register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />
      <input {...form.register("role")} type="hidden" />
      <input placeholder="Full Name*" {...form.register("fullName")} className="w-full rounded-lg border p-3" />
      <input placeholder="Email*" {...form.register("email")} className="w-full rounded-lg border p-3" />
      <input placeholder="Phone*" {...form.register("phone")} className="w-full rounded-lg border p-3" />
      <input placeholder="LinkedIn/Portfolio URL (optional)" {...form.register("portfolioUrl")} className="w-full rounded-lg border p-3" />
      <textarea
        placeholder="Why do you want to join Glow?*"
        {...form.register("whyJoin")}
        className="min-h-28 w-full rounded-lg border p-3"
      />
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) form.setValue("resumeUrl", file.name);
        }}
        className="w-full rounded-lg border p-3"
      />
      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001"}
        onVerify={(token) => form.setValue("hcaptchaToken", token)}
      />
      <Button type="submit">Apply Now</Button>
    </form>
  );
}
