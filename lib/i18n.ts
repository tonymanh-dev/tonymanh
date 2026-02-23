export type Locale = "en" | "ja";

export const defaultLocale: Locale = "en";

const messages = {
  en: {
    header_greeting: "Hello, I'm Tony Manh👋",
    header_bio:
      "I'm an indie hacker from Vietnam 🇻🇳 I'm currently working in Japan 🇯🇵",
    products_title: "⭐️My products",
    products_productHunt: "product hunt",
    products_visitWebsite: "visit website",
    socials_title: "🍻Connect with me",
    lang_switch_en: "English",
    lang_switch_ja: "日本語",
  },
  ja: {
    header_greeting: "こんにちは、Tony Manhです👋",
    header_bio:
      "ベトナム出身のインディーハッカーです 🇻🇳 現在は日本で活動しています 🇯🇵",
    products_title: "⭐️プロダクト",
    products_productHunt: "Product Hunt",
    products_visitWebsite: "公式サイト",
    socials_title: "🍻つながりましょう",
    lang_switch_en: "English",
    lang_switch_ja: "日本語",
  },
} satisfies Record<Locale, Record<string, string>>;

export const t = (locale: Locale, key: keyof (typeof messages)["en"]) => {
  return messages[locale]?.[key] ?? messages[defaultLocale][key];
};
