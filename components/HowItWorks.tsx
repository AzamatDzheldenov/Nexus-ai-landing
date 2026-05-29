"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  FileCheck2,
  Mail,
  MessageCircle,
  NotepadText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import {
  useLanguageContext,
  type TranslationDictionary,
} from "@/contexts/LanguageContext";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const stepIcons = [MessageCircle, Bot, FileCheck2] as const;

const sources = [
  { label: "Telegram", icon: MessageCircle },
  { label: "Gmail", icon: Mail },
  { label: "Notion", icon: NotepadText },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function HowItWorks() {
  const { dict } = useLanguageContext();
  const copy = dict.how;
  const steps = copy.steps.map((step, index) => ({
    ...step,
    icon: stepIcons[index] ?? MessageCircle,
  }));

  return (
    <section className="relative overflow-hidden bg-background px-5 py-28 text-white sm:px-6 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0),rgba(8,13,23,0.42)_52%,rgba(5,7,12,0))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.24),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-cyan-100">{copy.eyebrow}</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {copy.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            {copy.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-7 top-8 hidden w-px bg-[linear-gradient(180deg,rgba(125,211,252,0),rgba(125,211,252,0.26),rgba(125,211,252,0))] sm:block"
            />
            <div className="space-y-5">
              {steps.map((step) => (
                <TimelineStep key={step.number} step={step} />
              ))}
            </div>
          </motion.div>

          <ProcessMockup copy={copy} />
        </div>
      </div>
    </section>
  );
}

type HowCopy = TranslationDictionary["how"];

function TimelineStep({ step }: { step: Step }) {
  const Icon = step.icon;

  return (
    <motion.article
      variants={itemVariants}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-md border border-white/10 bg-white/[0.028] p-6 shadow-[0_14px_46px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/[0.042] hover:shadow-[0_20px_62px_rgba(14,165,233,0.08),inset_0_1px_0_rgba(255,255,255,0.1)] sm:pl-24"
    >
      <div className="flex gap-4 sm:block">
        <div className="relative shrink-0 sm:absolute sm:left-5 sm:top-5">
          <div className="grid size-14 place-items-center overflow-hidden rounded-md border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(186,230,253,0.16),rgba(14,165,233,0.08),transparent_72%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:scale-[1.02]">
            <Icon className="size-7 text-white drop-shadow-[0_0_12px_rgba(125,211,252,0.28)]" />
          </div>
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-cyan-200/10 bg-cyan-200/[0.04] px-2.5 py-1 text-xs text-cyan-100">
              {step.number}
            </span>
            <span className="h-px w-10 bg-[linear-gradient(90deg,rgba(125,211,252,0.32),transparent)]" />
          </div>
          <h3 className="mt-4 text-xl font-semibold leading-tight text-white sm:text-2xl">
            {step.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300 transition-colors duration-300 group-hover:text-slate-200">
            {step.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function ProcessMockup({ copy }: { copy: HowCopy }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-md border border-white/10 bg-[#080c13]/76 p-5 shadow-[0_22px_78px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-6"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(186,230,253,0.05),transparent_42%,rgba(99,102,241,0.04)_82%,transparent)]"
      />
      <div className="relative flex h-11 items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-cyan-100" />
          <span className="text-sm font-medium text-white">
            {copy.mockupTitle}
          </span>
        </div>
        <span className="rounded-md border border-emerald-300/15 bg-emerald-300/[0.07] px-2.5 py-1 text-xs text-emerald-100">
          {copy.synced}
        </span>
      </div>

      <div className="relative mt-6 grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="space-y-4">
          {sources.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="group/source flex items-center justify-between rounded-md border border-white/10 bg-white/[0.028] px-3 py-3 transition-all duration-300 hover:border-cyan-200/15 hover:bg-white/[0.045]"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-md bg-white/[0.045] text-cyan-100">
                  <Icon className="size-4" />
                </span>
                <span className="text-sm text-slate-200">{label}</span>
              </div>
              <Check className="size-4 text-cyan-100" />
            </div>
          ))}
        </div>

        <div className="rounded-md border border-white/10 bg-black/10 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">{copy.today}</span>
            <span className="text-xs text-cyan-100">{copy.ready}</span>
          </div>

          <div className="mt-5 space-y-4">
            {copy.brief.map((item) => (
              <BriefItem
                key={item.title}
                title={item.title}
                detail={item.detail}
              />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-md border border-cyan-200/10 bg-cyan-200/[0.035] px-4 py-3">
            <div>
              <p className="text-sm font-medium text-white">
                {copy.morningPack}
              </p>
              <p className="mt-1 text-xs text-slate-300">
                {copy.packDetails}
              </p>
            </div>
            <ArrowRight className="size-4 text-cyan-100" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BriefItem({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-md border border-white/[0.08] bg-white/[0.028] px-3 py-3">
      <p className="text-sm font-medium text-white">{title}</p>
      <p className="mt-1 text-xs text-slate-300">{detail}</p>
    </div>
  );
}
