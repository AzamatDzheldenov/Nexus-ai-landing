"use client";

import { Github, Linkedin, MessageCircle, Sparkles } from "lucide-react";
import type { MouseEvent } from "react";

import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguageContext } from "@/contexts/LanguageContext";

const socials = [
  { label: "Telegram", href: "#", icon: MessageCircle },
  { label: "GitHub", href: "#", icon: Github },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  const id = href.replace("#", "");
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  event.preventDefault();
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function Footer() {
  const { currentLang, dict } = useLanguageContext();
  const copy = dict.footer;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background px-5 py-14 text-white sm:px-6 sm:py-16 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.22),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-12">
          <div>
            <a
              href="#top"
              onClick={(event) => handleAnchorClick(event, "#top")}
              className="group inline-flex items-center gap-3"
              aria-label="Nexus AI"
            >
              <span className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/[0.035] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-white/[0.055]">
                <Sparkles className="size-5" />
              </span>
              <span className="text-base font-semibold text-white">
                Nexus AI
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              {copy.description}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-medium text-white">{copy.navigation}</p>
            <div className="mt-5 grid gap-3">
              {dict.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleAnchorClick(event, item.href)}
                  className="w-fit text-sm text-slate-300 transition-colors duration-300 hover:text-cyan-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="lg:justify-self-end">
            <p className="text-sm font-medium text-white">{copy.social}</p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/[0.028] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/[0.055] hover:text-cyan-50"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-white">{copy.language}</p>
              <LanguageToggle className="mt-4" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{copy.copyright}</p>
          <p>
            {copy.currentLanguage}:{" "}
            <span className="text-slate-200">{currentLang.toUpperCase()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
