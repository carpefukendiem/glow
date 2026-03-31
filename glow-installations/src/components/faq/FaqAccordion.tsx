"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

type Faq = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: readonly Faq[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((faq, index) => (
        <Accordion.Item
          key={faq.question}
          value={`faq-${index}`}
          className="rounded-xl border border-white/10 bg-[var(--navy)] transition-all data-[state=open]:border-[var(--gold)]/35"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center gap-3 p-4 font-semibold text-white">
              <span className="flex-1 text-center">{faq.question}</span>
              <ChevronDown className="h-4 w-4 shrink-0 text-[var(--gold)] transition-transform data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-4 pb-4 text-center text-sm text-white/75">
            {faq.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
