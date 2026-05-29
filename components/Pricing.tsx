"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  description: string;
  price: string;
  period?: string;
  cta: string;
  features: readonly string[];
  popular?: boolean;
  className?: string;
};

const planVisuals = [
  { className: "lg:min-h-[560px]" },
  { popular: true, className: "lg:-mt-6 lg:min-h-[640px]" },
  { className: "lg:min-h-[590px]" },
] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Pricing() {
  const { dict } = useLanguageContext();
  const copy = dict.pricing;

  return (
    <section
      id="pricing"
      className="relative overflow-hidden scroll-mt-8 bg-background px-5 py-28 text-white sm:px-6 sm:py-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0),rgba(15,23,42,0.15)_48%,rgba(5,7,12,0))]"
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
          className="mx-auto max-w-3xl text-center"
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
          className="mt-16 grid grid-cols-1 gap-5 lg:mt-24 lg:grid-cols-3 lg:items-start"
        >
          {copy.plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={{
                ...plan,
                ...(planVisuals[index] ?? planVisuals[0]),
              }}
              popularLabel={copy.popular}
              proValue={copy.proValue}
              alertText={(planName) => `${planName}: ${copy.alertSuffix}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  popularLabel,
  proValue,
  alertText,
}: {
  plan: Plan;
  popularLabel: string;
  proValue: string;
  alertText: (plan: string) => string;
}) {
  return (
    <motion.article
      variants={itemVariants}
      transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex min-h-[540px] flex-col overflow-hidden rounded-md border border-white/10 bg-white/[0.028] p-6 shadow-[0_16px_54px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/[0.04] hover:shadow-[0_20px_64px_rgba(14,165,233,0.07),inset_0_1px_0_rgba(255,255,255,0.1)] sm:p-7",
        plan.popular &&
          "border-cyan-200/20 bg-white/[0.04] shadow-[0_22px_72px_rgba(14,165,233,0.09),inset_0_1px_0_rgba(255,255,255,0.1)]",
        plan.className,
      )}
    >
      {plan.popular ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(186,230,253,0.06),transparent_38%,rgba(99,102,241,0.045)_82%,transparent)]"
        />
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-x-7 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(186,230,253,0.36),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
              {plan.description}
            </p>
          </div>

          {plan.popular ? (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-cyan-200/15 bg-cyan-200/[0.05] px-3 py-1.5 text-xs text-cyan-50">
              <Sparkles className="size-3.5" />
              {popularLabel}
            </span>
          ) : null}
        </div>

        <div className="mt-9 flex items-end gap-2">
          <span className="text-5xl font-semibold tracking-normal text-white">
            {plan.price}
          </span>
          {plan.period ? (
            <span className="pb-1 text-base text-slate-300">{plan.period}</span>
          ) : null}
        </div>

        {plan.popular ? (
          <div className="mt-6 rounded-md border border-cyan-200/10 bg-cyan-200/[0.035] px-4 py-3 text-sm leading-6 text-cyan-50">
            {proValue}
          </div>
        ) : null}

        <ul className="mt-8 space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm leading-6">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border border-cyan-200/10 bg-cyan-200/[0.035] text-cyan-100">
                <Check className="size-3.5" />
              </span>
              <span className="text-slate-200">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-9">
          <Button
            variant={plan.popular ? "default" : "secondary"}
            className={cn(
              "group/cta h-[52px] w-full rounded-md text-[15px] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0",
              plan.popular
                ? "hover:shadow-[0_14px_42px_rgba(186,230,253,0.12)]"
                : "hover:border-cyan-200/20 hover:bg-white/[0.075] hover:shadow-[0_12px_34px_rgba(125,211,252,0.07)]",
            )}
            onClick={() => alert(alertText(plan.name))}
          >
            {plan.cta}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
