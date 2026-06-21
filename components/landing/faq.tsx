"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionHeading } from "@/components/landing/section-heading";
import { FAQ_CATEGORIES, FAQ_ITEMS, type FaqCategory } from "@/lib/faq";
import { cn } from "@/lib/utils";

export function Faq() {
  const faqIdPrefix = useId();
  const [category, setCategory] = useState<FaqCategory>("about");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = FAQ_ITEMS[category];

  function selectCategory(id: FaqCategory) {
    setCategory(id);
    setOpenIndex(0);
  }

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-[#050505]/60">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="blur" className="text-center mb-12">
          <SectionLabel>FAQ</SectionLabel>
          <SectionHeading>We have all the answers you need</SectionHeading>
          <p className="text-white/40 text-sm tracking-wide max-w-xl mx-auto">
            Find answers about ZCore, our mission, technology, and how you can
            participate.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {FAQ_CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                aria-pressed={category === id}
                onClick={() => selectCategory(id)}
                className={cn(
                  "px-4 py-2 text-[10px] font-bold uppercase tracking-zk border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black zk-badge",
                  category === id
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-white/10 bg-transparent text-white/40 hover:text-white/70 hover:border-white/20"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto border border-white/[0.08] bg-[#0a0a0a]/60">
            {items.map(({ question, answer }, i) => {
              const isOpen = openIndex === i;
              const buttonId = `${faqIdPrefix}-${category}-${i}-trigger`;
              const panelId = `${faqIdPrefix}-${category}-${i}-panel`;

              return (
                <div
                  key={question}
                  className="border-b border-white/[0.06] last:border-0"
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/50"
                  >
                    <span className="text-sm font-bold tracking-wide text-white/90">
                      {question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "w-4 h-4 shrink-0 text-white/40 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="px-5 pb-4 text-xs text-white/45 leading-relaxed tracking-wide">
                      {answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
