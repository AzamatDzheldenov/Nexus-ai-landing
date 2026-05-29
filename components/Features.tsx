"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  Check,
  FileText,
  MessageSquareText,
  Plug,
  Send,
  TimerReset,
  type LucideIcon,
  WalletCards,
} from "lucide-react";
import type { ReactNode } from "react";

import {
  useLanguageContext,
  type TranslationDictionary,
} from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

type Tone = "cyan" | "blue" | "indigo";

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const toneStyles: Record<Tone, string> = {
  cyan: "from-cyan-200/15 via-sky-300/10 to-transparent text-cyan-100",
  blue: "from-blue-300/15 via-cyan-300/10 to-transparent text-sky-100",
  indigo: "from-indigo-300/15 via-blue-300/10 to-transparent text-indigo-100",
};

const integrations = ["Telegram", "Gmail", "Notion", "WhatsApp"];

export function Features() {
  const { dict } = useLanguageContext();
  const copy = dict.features;

  return (
    <section
      id="features"
      className="relative overflow-hidden scroll-mt-8 bg-background px-5 py-28 text-white sm:px-6 sm:py-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0),rgba(15,23,42,0.16)_48%,rgba(5,7,12,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.24),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
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
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-140px" }}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-24 lg:grid-cols-[0.95fr_1.22fr_0.95fr] lg:items-start"
        >
          <div className="space-y-5">
            <InboxFeature copy={copy.inbox} />
            <FinanceFeature copy={copy.finance} />
          </div>

          <div className="space-y-5 lg:pt-12">
            <CommandCenterFeature copy={copy.tasks} />
            <ProposalFeature copy={copy.proposal} />
          </div>

          <div className="space-y-5 md:col-span-2 lg:col-span-1">
            <FocusFeature copy={copy.focus} />
            <IntegrationsFeature copy={copy.integrations} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type FeatureCopy = TranslationDictionary["features"];

function InboxFeature({ copy }: { copy: FeatureCopy["inbox"] }) {
  return (
    <PremiumCard className="min-h-[390px]">
      <FeatureHeader
        icon={MessageSquareText}
        tone="cyan"
        label={copy.label}
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-7 grid gap-3">
        <BeforeAfter
          beforeLabel={copy.beforeLabel}
          afterLabel={copy.afterLabel}
          before={copy.before}
          after={copy.after}
        />
        <div className="flex items-center justify-between rounded-md border border-cyan-200/10 bg-cyan-200/[0.035] px-4 py-3 text-sm">
          <span className="text-slate-200">{copy.draft}</span>
          <span className="flex items-center gap-2 text-cyan-100">
            {copy.time}
            <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </PremiumCard>
  );
}

function CommandCenterFeature({ copy }: { copy: FeatureCopy["tasks"] }) {
  return (
    <PremiumCard className="min-h-[510px] bg-[#080c13]/72">
      <div className="flex items-center justify-between gap-3">
        <FeatureIcon icon={CalendarClock} tone="blue" />
        <div className="rounded-md border border-emerald-300/15 bg-emerald-300/[0.07] px-3 py-1.5 text-xs text-emerald-100">
          {copy.badge}
        </div>
      </div>

      <div className="mt-7">
        <p className="text-sm font-medium text-sky-100">{copy.label}</p>
        <h3 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
          {copy.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-200">
          {copy.description}
        </p>
      </div>

      <div className="mt-9 rounded-md border border-white/10 bg-black/10 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs text-slate-500">{copy.today}</span>
          <span className="text-xs text-cyan-100">{copy.actions}</span>
        </div>
        <div className="mt-4 space-y-3">
          {copy.timeline.map((item, index) => (
            <div
              key={item.label}
              className="group/row flex items-center gap-3 rounded-md border border-white/[0.08] bg-white/[0.028] px-3 py-3 transition-all duration-300 hover:border-cyan-200/15 hover:bg-white/[0.045]"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-md bg-white/[0.045] text-xs text-cyan-100">
                0{index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">
                  {item.label}
                </p>
                <p className="mt-1 truncate text-xs text-slate-300">
                  {item.value}
                </p>
              </div>
              <ArrowRight className="size-4 text-slate-500 transition-all duration-300 group-hover/row:translate-x-1 group-hover/row:text-cyan-100" />
            </div>
          ))}
        </div>
      </div>
    </PremiumCard>
  );
}

function FinanceFeature({ copy }: { copy: FeatureCopy["finance"] }) {
  return (
    <PremiumCard className="min-h-[275px]">
      <FeatureHeader
        icon={WalletCards}
        tone="indigo"
        label={copy.label}
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Metric value="$4.8k" label={copy.expected} />
        <Metric value="91%" label={copy.onTime} />
      </div>
    </PremiumCard>
  );
}

function ProposalFeature({ copy }: { copy: FeatureCopy["proposal"] }) {
  return (
    <PremiumCard className="min-h-[285px]">
      <FeatureHeader
        icon={FileText}
        tone="cyan"
        label={copy.label}
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-7 rounded-md border border-white/10 bg-white/[0.028] p-4">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span>{copy.fileName}</span>
          <span className="text-cyan-100">{copy.ready}</span>
        </div>
        <div className="mt-4 space-y-2">
          <SkeletonLine width="w-11/12" />
          <SkeletonLine width="w-8/12" />
          <SkeletonLine width="w-10/12" />
        </div>
      </div>
    </PremiumCard>
  );
}

function FocusFeature({ copy }: { copy: FeatureCopy["focus"] }) {
  return (
    <PremiumCard className="min-h-[325px]">
      <FeatureHeader
        icon={TimerReset}
        tone="blue"
        label={copy.label}
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-7 flex items-end justify-between gap-4">
        <div>
          <p className="bg-[linear-gradient(100deg,#ffffff,#bae6fd_58%,#c7d2fe)] bg-clip-text text-5xl font-semibold text-transparent">
            3.8h
          </p>
          <p className="mt-2 text-sm text-slate-300">{copy.saved}</p>
        </div>
        <div className="flex h-24 items-end gap-1.5">
          {[38, 62, 44, 76, 58, 88].map((height, index) => (
            <span
              key={index}
              style={{ height }}
              className="w-3 rounded-sm bg-[linear-gradient(180deg,#bae6fd,#1e293b)] opacity-70 transition-all duration-300 group-hover:opacity-90"
            />
          ))}
        </div>
      </div>
    </PremiumCard>
  );
}

function IntegrationsFeature({ copy }: { copy: FeatureCopy["integrations"] }) {
  return (
    <PremiumCard className="min-h-[355px]">
      <FeatureHeader
        icon={Plug}
        tone="indigo"
        label={copy.label}
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 grid grid-cols-2 gap-3">
        {integrations.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-slate-200 transition-all duration-300 hover:border-cyan-200/20 hover:bg-white/[0.055]"
          >
            <span>{item}</span>
            <Check className="size-4 text-cyan-100" />
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-md border border-cyan-200/10 bg-cyan-200/[0.035] px-4 py-3 text-sm text-cyan-50">
        {copy.note}
      </div>
    </PremiumCard>
  );
}

function PremiumCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      variants={itemVariants}
      transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-md border border-white/10 bg-white/[0.028] p-6 shadow-[0_16px_54px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/[0.042] hover:shadow-[0_22px_70px_rgba(14,165,233,0.08),inset_0_1px_0_rgba(255,255,255,0.1)] sm:p-7",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(186,230,253,0.055),transparent_34%,rgba(99,102,241,0.045)_76%,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-7 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(186,230,253,0.42),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </motion.article>
  );
}

function FeatureHeader({
  icon,
  tone,
  label,
  title,
  description,
}: {
  icon: LucideIcon;
  tone: Tone;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <FeatureIcon icon={icon} tone={tone} />
        <span className="rounded-md border border-white/10 bg-white/[0.028] px-2.5 py-1 text-xs text-slate-300">
          {label}
        </span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-300 transition-colors duration-300 group-hover:text-slate-200">
        {description}
      </p>
    </div>
  );
}

function FeatureIcon({ icon: Icon, tone }: { icon: LucideIcon; tone: Tone }) {
  return (
    <div
      className={cn(
        "relative grid size-14 place-items-center overflow-hidden rounded-md border border-white/10 bg-[radial-gradient(circle_at_30%_20%,var(--tw-gradient-stops))] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.02]",
        toneStyles[tone],
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_46%,rgba(255,255,255,0.04))]" />
      <Icon className="relative size-7 text-white drop-shadow-[0_0_12px_rgba(125,211,252,0.28)]" />
    </div>
  );
}

function BeforeAfter({
  beforeLabel,
  afterLabel,
  before,
  after,
}: {
  beforeLabel: string;
  afterLabel: string;
  before: string;
  after: string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-md border border-white/10 bg-white/[0.022] p-4">
        <p className="text-xs text-slate-400">{beforeLabel}</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">{before}</p>
      </div>
      <div className="rounded-md border border-cyan-200/10 bg-cyan-200/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <p className="text-xs text-cyan-100">{afterLabel}</p>
        <p className="mt-3 text-sm leading-6 text-slate-200">{after}</p>
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.028] p-4">
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-300">{label}</p>
    </div>
  );
}

function SkeletonLine({ width }: { width: string }) {
  return (
    <span
      className={cn(
        "block h-2 rounded-sm bg-[linear-gradient(90deg,rgba(125,211,252,0.12),rgba(255,255,255,0.09))]",
        width,
      )}
    />
  );
}
