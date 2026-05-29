"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import {
  useLanguageContext,
  type TranslationDictionary,
} from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

type Testimonial = TranslationDictionary["testimonials"]["items"][number] & {
  avatarClass: string;
  className?: string;
};

const testimonialVisuals = [
  {
    avatarClass: "from-cyan-100/75 via-sky-200/35 to-slate-700",
    className: "lg:col-span-5",
  },
  {
    avatarClass: "from-blue-100/75 via-cyan-200/30 to-slate-700",
    className: "lg:col-span-4",
  },
  {
    avatarClass: "from-indigo-100/75 via-cyan-200/25 to-slate-700",
    className: "lg:col-span-3",
  },
  {
    avatarClass: "from-slate-100/75 via-cyan-200/25 to-slate-700",
    className: "lg:col-span-4",
  },
  {
    avatarClass: "from-cyan-100/70 via-indigo-200/25 to-slate-700",
    className: "lg:col-span-8",
  },
] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Testimonials() {
  const { dict } = useLanguageContext();
  const copy = dict.testimonials;

  return (
    <section className="relative overflow-hidden bg-background px-5 py-28 text-white sm:px-6 sm:py-32 lg:px-8">
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
          {copy.items.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={{
                ...testimonial,
                ...(testimonialVisuals[index] ?? testimonialVisuals[0]),
              }}
              ratingLabel={copy.ratingLabel}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  ratingLabel,
}: {
  testimonial: Testimonial;
  ratingLabel: string;
}) {
  return (
    <motion.article
      variants={itemVariants}
      transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-md border border-white/10 bg-white/[0.028] p-6 shadow-[0_16px_54px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/[0.04] hover:shadow-[0_20px_64px_rgba(14,165,233,0.07),inset_0_1px_0_rgba(255,255,255,0.1)] sm:p-7",
        testimonial.className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-7 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(186,230,253,0.36),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "grid size-12 place-items-center rounded-md border border-white/10 bg-[radial-gradient(circle_at_30%_20%,var(--tw-gradient-stops))] text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
                testimonial.avatarClass,
              )}
              aria-label={testimonial.name}
            >
              {testimonial.initials}
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">
                {testimonial.name}
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                {testimonial.role}
              </p>
            </div>
          </div>

          <Quote className="size-5 shrink-0 text-cyan-100/70" />
        </div>

        <Stars label={ratingLabel} />

        <p className="mt-6 text-base leading-8 text-slate-200">
          “{testimonial.text}”
        </p>
      </div>

      <div className="mt-8 inline-flex w-fit rounded-md border border-cyan-200/10 bg-cyan-200/[0.035] px-3 py-2 text-sm text-cyan-50">
        {testimonial.result}
      </div>
    </motion.article>
  );
}

function Stars({ label }: { label: string }) {
  return (
    <div className="mt-5 flex items-center gap-1.5" aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="size-4 fill-cyan-100 text-cyan-100 opacity-85"
        />
      ))}
    </div>
  );
}
