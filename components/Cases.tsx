"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brush,
  Code2,
  Film,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

import {
  useLanguageContext,
  type TranslationDictionary,
} from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

type Case = TranslationDictionary["cases"]["items"][number] & {
  icon: LucideIcon;
  className?: string;
};

const caseVisuals = [
  { icon: Brush, className: "lg:col-span-5" },
  { icon: Code2, className: "lg:col-span-4" },
  { icon: Users, className: "lg:col-span-3" },
  { icon: Film, className: "lg:col-span-12" },
] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Cases() {
  const { dict } = useLanguageContext();
  const copy = dict.cases;

  return (
    <section
      id="cases"
      className="relative overflow-hidden scroll-mt-8 bg-background px-5 py-28 text-white sm:px-6 sm:py-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0),rgba(15,23,42,0.14)_48%,rgba(5,7,12,0))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.22),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-medium text-cyan-100">{copy.eyebrow}</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {copy.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            {copy.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-140px" }}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-12"
        >
          {copy.items.map((item, index) => (
            <CaseCard
              key={`${item.name}-${item.eyebrow}`}
              item={{
                ...item,
                ...(caseVisuals[index] ?? caseVisuals[0]),
              }}
              beforeLabel={copy.before}
              afterLabel={copy.after}
              linkLabel={copy.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CaseCard({
  item,
  beforeLabel,
  afterLabel,
  linkLabel,
}: {
  item: Case;
  beforeLabel: string;
  afterLabel: string;
  linkLabel: string;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      variants={itemVariants}
      transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-md border border-white/10 bg-white/[0.028] p-6 shadow-[0_16px_54px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/[0.04] hover:shadow-[0_20px_64px_rgba(14,165,233,0.07),inset_0_1px_0_rgba(255,255,255,0.1)] sm:p-7",
        item.className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-7 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(186,230,253,0.36),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-md border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(186,230,253,0.16),rgba(14,165,233,0.08),transparent_72%)] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <Icon className="size-6" />
            </div>
            <div>
              <p className="text-sm text-cyan-100">{item.eyebrow}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-slate-300">{item.role}</p>
            </div>
          </div>

          <TrendingUp className="size-5 shrink-0 text-cyan-100/70" />
        </div>

        <div className="mt-9 rounded-md border border-cyan-200/10 bg-cyan-200/[0.035] p-4">
          <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
            <p className="text-4xl font-semibold tracking-normal text-white">
              {item.result}
            </p>
            <p className="pb-1 text-sm text-cyan-50">{item.metric}</p>
          </div>
        </div>

        <div className="mt-7 grid gap-3 lg:grid-cols-2">
          <StoryBlock label={beforeLabel} text={item.before} />
          <StoryBlock label={afterLabel} text={item.after} accent />
        </div>

        <div className="mt-auto pt-7">
          <div className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-300 group-hover:text-cyan-50">
            {linkLabel}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function StoryBlock({
  label,
  text,
  accent = false,
}: {
  label: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-md border border-white/10 bg-white/[0.022] p-4",
        accent && "border-cyan-200/10 bg-cyan-200/[0.03]",
      )}
    >
      <p className={cn("text-xs text-slate-400", accent && "text-cyan-100")}>
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}
