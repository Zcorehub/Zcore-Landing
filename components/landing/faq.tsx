"use client";

import { type KeyboardEvent, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionHeading } from "@/components/landing/section-heading";
import { FAQ_CATEGORIES, FAQ_ITEMS, type FaqCategory } from "@/lib/faq";
import { cn } from "@/lib/utils";

export function Faq() {
  const [category, setCategory] = useState<FaqCategory>("about");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const itemButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const items = FAQ_ITEMS[category];

  function selectCategory(id: FaqCategory) {
    setCategory(id);
    setOpenIndex(0);
    itemButtonRefs.current = [];
  }

  function focusQuestion(index: number) {
    itemButtonRefs.current[index]?.focus();
  }

  function handleQuestionKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusQuestion((index + 1) % items.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      focusQuestion((index - 1 + items.length) % items.length);
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusQuestion(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      focusQuestion(items.length - 1);
    }
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
                aria-pressed={category === id}
                type="button"
                onClick={() => selectCategory(id)}
                className={cn(
                  "px-4 py-2 text-[10px] font-bold uppercase tracking-zk border transition-colors zk-badge focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
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
              const buttonId = `faq-${category}-button-${i}`;
              const panelId = `faq-${category}-panel-${i}`;
              return (
                <div
                  key={question}
                  className="border-b border-white/[0.06] last:border-0"
                >
                  <button
                    ref={(button) => {
                      itemButtonRefs.current[i] = button;
                    }}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    onKeyDown={(event) => handleQuestionKeyDown(event, i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70"
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
                    aria-hidden={!isOpen}
                    aria-labelledby={buttonId}
                    id={panelId}
                    role="region"
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
