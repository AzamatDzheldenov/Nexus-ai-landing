"use client";

import {
  LANGUAGE_OPTIONS,
  useLanguageContext,
} from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

type LanguageToggleProps = {
  className?: string;
};

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { currentLang, setLanguage, t } = useLanguageContext();

  return (
    <div
      className={cn(
        "inline-flex rounded-md border border-white/10 bg-white/[0.028] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className,
      )}
      aria-label={t("language.switcherLabel")}
    >
      {LANGUAGE_OPTIONS.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => setLanguage(item.value)}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm transition-all duration-300",
            currentLang === item.value
              ? "bg-white text-[#05070c]"
              : "text-slate-300 hover:text-white",
            "min-h-9 min-w-10 px-3.5 py-2 sm:min-h-8 sm:min-w-9 sm:px-3 sm:py-1.5",
          )}
          aria-pressed={currentLang === item.value}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
