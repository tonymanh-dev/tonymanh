import type { Locale } from "./i18n";

export const navLinks = [
  {
    href: "/",
    title: "home",
  },
  {
    href: "/",
    title: "products",
  },
  {
    href: "/",
    title: "blog",
  },
];

const productData = [
  {
    name: "Stuley",
    descriptions: {
      en: "The #1 study tool that helps you ace exams and learn faster without burnout.",
      ja: "試験に合格し、燃え尽きずに速く学べる、ナンバーワンの学習ツール。",
    },
    link: "https://stuley.com/",
    icon: "/stuley.png",
    phLink: "https://stuley.com/",
  },
  {
    name: "Loomr",
    descriptions: {
      en: "Build a standalone AI agent in minutes to automate conversations, answer questions, and qualify leads with a simple link.",
      ja: "数分でスタンドアロンのAIエージェントを構築し、会話を自動化、質問に回答、リードを獲得。",
    },
    link: "https://www.loomr.co/",
    icon: "/loomr.png",
    phLink: "https://www.loomr.co/",
  },
  {
    name: "Kachi AI",
    descriptions: {
      en: "Transform your trading strategy with real-time AI analysis, predictive insights, and actionable recommendations.",
      ja: "リアルタイムAI分析、予測インサイト、実行可能な推奨事項で取引戦略を変革。",
    },
    link: "https://www.kachiai.app/",
    icon: "/kachiai.png",
    phLink: "https://www.kachiai.app/",
  },

  {
    name: "Instagen",
    descriptions: {
      en: "Instantly create stunning images and videos with the world's top AI model. Perfect for creators, marketers, and businesses.",
      ja: "世界トップのAIモデルで、驚くほど美しい画像と動画を即座に生成。クリエイター、マーケター、ビジネスに最適。",
    },
    link: "https://www.instagen.com/",
    icon: "/instagen.png",
    phLink: "https://www.producthunt.com/posts/instagen",
  },
  {
    name: "Honkist",
    descriptions: {
      en: "Expand your mind with collections of short, concise ideas from books, enhanced by powerful AI insights.",
      ja: "本からの短く簡潔なアイデアのコレクションで、強力なAIインサイトで知識を拡張。",
    },
    link: "https://www.honkist.com/",
    icon: "/honkist.png",
    phLink: "https://www.producthunt.com/products/honkist",
  },
];

export const getLocalizedProducts = (locale: Locale) =>
  productData.map((p) => ({
    ...p,
    description: p.descriptions[locale] ?? p.descriptions.en,
  }));
