"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

import {
  useLanguageContext,
  type TranslationDictionary,
} from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

type FAQItem = TranslationDictionary["faq"]["items"][number];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function FAQ() {
  const { dict } = useLanguageContext();
  const copy = dict.faq;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden scroll-mt-8 bg-background px-5 py-28 text-white sm:px-6 sm:py-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0),rgba(15,23,42,0.13)_48%,rgba(5,7,12,0))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.22),transparent)]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-10 lg:self-start"
        >
          <div className="grid size-12 place-items-center rounded-md border border-white/10 bg-white/[0.028] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
            <HelpCircle className="size-6" />
          </div>
          <p className="mt-7 text-sm font-medium text-cyan-100">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            {copy.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-140px" }}
          className="space-y-4"
        >
          {copy.items.map((item, index) => (
            <FAQRow
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQRow({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerId = `faq-answer-${index}`;

  return (
    <motion.article
      variants={itemVariants}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-md border border-white/10 bg-white/[0.028] shadow-[0_14px_46px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.07)] transition-colors duration-300 hover:border-cyan-200/20 hover:bg-white/[0.038]"
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
      >
        <span className="text-base font-medium leading-7 text-white sm:text-lg">
          {item.question}
        </span>
        <span
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.028] text-slate-300 transition-all duration-300",
            isOpen && "border-cyan-200/20 bg-cyan-200/[0.04] text-cyan-100",
          )}
        >
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-300",
              isOpen && "rotate-180",
            )}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={answerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 pt-0 sm:px-6">
              <div className="h-px w-full bg-white/10" />
              <p className="pt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {item.answer}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
