"use client";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactFormSchema } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

type ContactValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { _gotcha: "" },
  });

  async function onSubmit(values: ContactValues) {
    await fetch("/api/submit-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    form.reset();
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4 text-center [&_input]:text-left [&_textarea]:text-left"
    >
      <input type="text" {...form.register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />
      <input placeholder="Name*" {...form.register("name")} className="w-full rounded-lg border p-3" />
      <input placeholder="Email*" {...form.register("email")} className="w-full rounded-lg border p-3" />
      <input placeholder="Phone*" {...form.register("phone")} className="w-full rounded-lg border p-3" />
      <textarea placeholder="Message*" {...form.register("message")} className="min-h-32 w-full rounded-lg border p-3" />
      <div className="flex justify-center">
        <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001"}
          onVerify={(token) => form.setValue("hcaptchaToken", token)}
        />
      </div>
      <div className="flex justify-center pt-1">
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}
