"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  CirclePlay,
  Clock3,
  Command,
  FileCheck2,
  type LucideIcon,
  Menu,
  MessageSquareText,
  ShieldCheck,
  WalletCards,
  X,
} from "lucide-react";
import { useState, type MouseEvent } from "react";

import { LanguageToggle } from "@/components/LanguageToggle";
import { Button } from "@/components/ui/button";
import {
  useLanguageContext,
  type TranslationDictionary,
} from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const commandInboxIcons = [MessageSquareText, WalletCards, Clock3] as const;

const appear = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) {
    window.location.hash = id;
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  onNavigate?: () => void,
) {
  const id = href.replace("#", "");

  event.preventDefault();
  scrollToSection(id);
  onNavigate?.();
}

export function NexusHero() {
  const { dict } = useLanguageContext();
  const copy = dict.hero;
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 0.45], [0, -72]);
  const sceneY = useTransform(scrollYProgress, [0, 0.45], [0, 48]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.68]);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-background text-white"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(30,41,59,0.36),rgba(5,7,12,0.12)_58%,transparent_82%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0)_0%,rgba(5,7,12,0.1)_70%,rgba(5,7,12,0.42)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(5,7,12,0),rgba(5,7,12,0.45))]" />
      </motion.div>

      <Navigation
        copy={copy}
        navItems={dict.nav}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-84px)] max-w-7xl flex-col px-5 pb-14 pt-14 sm:px-6 sm:pb-16 lg:px-8">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center"
        >
          <motion.div
            variants={appear}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex h-9 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur"
          >
            <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.35)]" />
            {copy.badge}
          </motion.div>

          <motion.h1
            variants={appear}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[23rem] text-balance text-4xl font-bold leading-[1.02] tracking-normal text-white sm:max-w-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block bg-[linear-gradient(180deg,#ffffff_0%,#dbeafe_44%,#94a3b8_100%)] bg-clip-text text-transparent">
              {copy.headlineTop}
            </span>
            <span className="block bg-[linear-gradient(100deg,#f8fafc_0%,#bae6fd_38%,#c7d2fe_72%,#fef3c7_100%)] bg-clip-text text-transparent">
              {copy.headlineBottom}
            </span>
          </motion.h1>

          <motion.p
            variants={appear}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-[22rem] text-balance text-base leading-7 text-slate-200 sm:max-w-2xl sm:text-lg sm:leading-8"
          >
            {copy.subtitle}
          </motion.p>

          <motion.div
            variants={appear}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("pricing")}
              className="group h-[52px] w-full rounded-md px-7 text-[15px] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_42px_rgba(186,230,253,0.12)] active:translate-y-0 sm:w-auto"
            >
              {copy.startFree}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => alert(copy.demoAlert)}
              className="h-[52px] w-full rounded-md px-7 text-[15px] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/[0.075] hover:shadow-[0_12px_38px_rgba(125,211,252,0.08)] active:translate-y-0 sm:w-auto"
            >
              <CirclePlay className="size-4" />
              {copy.watchDemo}
            </Button>
          </motion.div>

          <motion.div
            style={{ y: sceneY, opacity: sceneOpacity }}
            variants={appear}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 w-full"
          >
            <CommandSurface copy={copy.command} />
          </motion.div>
        </motion.div>

        <TrustBar items={copy.trust} />
      </div>
    </section>
  );
}

type HeroCopy = TranslationDictionary["hero"];
type NavItem = TranslationDictionary["nav"][number];

type NavigationProps = {
  copy: HeroCopy;
  navItems: readonly NavItem[];
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

function Navigation({
  copy,
  navItems,
  menuOpen,
  setMenuOpen,
}: NavigationProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -14, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 mx-auto flex h-[84px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
    >
      <a
        href="#top"
        onClick={(event) => handleAnchorClick(event, "#top")}
        className="group flex items-center gap-3"
        aria-label="Nexus AI"
      >
        <span className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:bg-white/[0.075] group-hover:shadow-[0_12px_30px_rgba(125,211,252,0.06)]">
          <Command className="size-5 text-cyan-100" />
        </span>
        <span className="text-base font-semibold text-white">Nexus AI</span>
      </a>

      <nav
        aria-label={copy.primaryNavigation}
        className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/[0.028] p-1 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur md:flex"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(event) => handleAnchorClick(event, item.href)}
            className="rounded-md px-4 py-2 transition-all duration-300 ease-out hover:-translate-y-px hover:bg-white/[0.055] hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-3 md:flex">
        <LanguageToggle />
        <Button
          variant="secondary"
          onClick={() => scrollToSection("pricing")}
          className="group h-10 px-4 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/[0.075] hover:shadow-[0_12px_34px_rgba(125,211,252,0.08)] active:translate-y-0"
        >
          {copy.tryFree}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Button>
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/[0.075] md:hidden"
        aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-5 top-20 rounded-md border border-white/10 bg-[#080c13]/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) =>
                  handleAnchorClick(event, item.href, () => setMenuOpen(false))
                }
                className="block rounded-md px-4 py-3 text-sm text-slate-200 transition-colors hover:bg-white/[0.055] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="group mt-2 w-full transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_14px_40px_rgba(186,230,253,0.12)]"
              onClick={() => {
                setMenuOpen(false);
                scrollToSection("pricing");
              }}
            >
              {copy.tryFree}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
            <div className="mt-2 flex justify-center">
              <LanguageToggle />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

type CommandCopy = HeroCopy["command"];

function CommandSurface({ copy }: { copy: CommandCopy }) {
  return (
    <div className="relative mx-auto h-[340px] w-full overflow-hidden rounded-lg border border-white/10 bg-[#080c13]/76 shadow-[0_20px_62px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl sm:h-[390px] lg:h-[430px]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.045),transparent_38%,rgba(125,211,252,0.035)_66%,transparent_88%)]" />
      <div className="relative flex h-12 items-center justify-between border-b border-white/10 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-rose-300/80" />
            <span className="size-2.5 rounded-full bg-amber-200/80" />
            <span className="size-2.5 rounded-full bg-emerald-300/80" />
          </div>
          <div className="hidden h-5 w-px bg-white/10 sm:block" />
          <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
            <Command className="size-3.5 text-cyan-200" />
            Nexus Command
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <span className="hidden sm:inline">{copy.liveWorkspace}</span>
          <span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-2 py-1 text-emerald-200">
            {copy.synced}
          </span>
        </div>
      </div>

      <div className="relative grid h-[calc(100%-48px)] grid-cols-1 md:grid-cols-[0.86fr_1.38fr_0.86fr]">
        <div className="hidden border-r border-white/10 p-5 md:block">
          <p className="text-xs uppercase text-slate-400">{copy.signals}</p>
          <div className="mt-5 space-y-4">
            {copy.inbox.map((label, index) => {
              const Icon = commandInboxIcons[index] ?? MessageSquareText;

              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex h-14 items-center gap-3 rounded-md border border-white/[0.08] bg-white/[0.028] px-3"
                >
                  <span className="grid size-8 place-items-center rounded-md bg-white/[0.045] text-cyan-100">
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0 truncate text-sm text-slate-200">
                    {label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden p-5 sm:p-6">
          <div className="absolute inset-x-6 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.28),transparent)]" />
          <div className="relative mx-auto flex h-full max-w-xl flex-col justify-between">
            <div>
              <p className="text-xs uppercase text-slate-400">{copy.today}</p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div>
                  <p className="text-2xl font-semibold text-white sm:text-3xl">
                    {copy.decisions}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {copy.prepared}
                  </p>
                </div>
                <div className="rounded-md border border-cyan-200/15 bg-cyan-200/[0.055] px-3 py-2 text-right">
                  <p className="text-xs text-cyan-100">{copy.focusSaved}</p>
                  <p className="text-lg font-semibold text-white">3.8h</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {copy.actions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.12 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex min-h-16 items-center justify-between gap-3 rounded-md border border-white/10 bg-[#0b1018]/72 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:px-4"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-white">
                      {action.title}
                    </p>
                    <p className="mt-1 truncate text-xs text-slate-300">
                      {action.copy}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 rounded-md border px-2.5 py-1 text-xs",
                      index === 0 &&
                        "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
                      index === 1 &&
                        "border-cyan-200/20 bg-cyan-200/10 text-cyan-100",
                      index === 2 &&
                        "border-amber-200/20 bg-amber-200/10 text-amber-100",
                    )}
                  >
                    {action.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden border-l border-white/10 p-5 md:block">
          <p className="text-xs uppercase text-slate-400">{copy.control}</p>
          <div className="mt-5 space-y-4">
            <Metric
              icon={ShieldCheck}
              label={copy.contracts}
              value="12/12"
              tone="emerald"
            />
            <Metric
              icon={FileCheck2}
              label={copy.projects}
              value="89%"
              tone="cyan"
            />
            <div className="rounded-md border border-white/10 bg-white/[0.028] p-4">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>{copy.cashflow}</span>
                <span className="text-emerald-200">+18%</span>
              </div>
              <div className="mt-4 flex h-20 items-end gap-2">
                {[42, 64, 50, 72, 58, 86, 76].map((height, index) => (
                  <motion.span
                    key={index}
                    initial={{ height: 12 }}
                    whileInView={{ height }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full rounded-sm bg-[linear-gradient(180deg,#bae6fd,#334155)]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type MetricProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  tone: "emerald" | "cyan";
};

function Metric({ icon: Icon, label, value, tone }: MetricProps) {
  return (
    <div className="flex h-20 items-center justify-between rounded-md border border-white/10 bg-white/[0.028] px-4">
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "grid size-9 place-items-center rounded-md",
            tone === "emerald" && "bg-emerald-300/10 text-emerald-200",
            tone === "cyan" && "bg-cyan-200/10 text-cyan-100",
          )}
        >
          <Icon className="size-4" />
        </span>
        <span className="text-sm text-slate-200">{label}</span>
      </div>
      <span className="text-lg font-semibold text-white">{value}</span>
    </div>
  );
}

function TrustBar({ items }: { items: readonly string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-10 flex w-full max-w-4xl flex-col items-center justify-center gap-3 rounded-md border border-white/10 bg-white/[0.028] px-5 py-4 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur sm:flex-row sm:gap-6"
    >
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2">
          <Check className="size-4 text-emerald-200" />
          <span>{item}</span>
        </div>
      ))}
    </motion.div>
  );
}
