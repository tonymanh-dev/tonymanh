"use client";

import Image from "next/image";
import React from "react";
import { t } from "@/lib/i18n";
import LangSwitch from "@/components/lang-switch";
import LangTransitionWrapper from "@/components/lang-transition-wrapper";
import { useLocale } from "@/components/locale-provider";

export default function Header() {
  const { locale } = useLocale();

  return (
    <section className="w-full pt-4">
      <div className="flex justify-end mb-4">
        <LangSwitch currentLocale={locale} />
      </div>
      <LangTransitionWrapper locale={locale}>
        <div className="mb-4">
          <Image
            src="/profile.jpg"
            alt="profile"
            width={80}
            height={80}
            className="object-contain rounded-full "
          />
        </div>

        <div>
          <h4 className="text-xl sm:text-2xl mb-4 font-semibold">
            {t(locale, "header_greeting")}
          </h4>
          <p className="text-muted-foreground">{t(locale, "header_bio")}</p>
        </div>
      </LangTransitionWrapper>
    </section>
  );
}
