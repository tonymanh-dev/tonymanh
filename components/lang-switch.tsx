"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function LangSwitch({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(currentLocale);

  const switchLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    // Trigger a re-render in parent by dispatching a custom event
    window.dispatchEvent(
      new CustomEvent("localeChanged", { detail: newLocale }),
    );
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        🇺🇸 English
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => switchLocale("ja")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "ja"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        🇯🇵 日本語
      </button>
    </div>
  );
}
