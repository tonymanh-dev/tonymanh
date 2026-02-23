import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "../styles/globals.css";
import Nav from "@/components/nav";
import { getLocale } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Tony Manh",
  description: "",
  icons: "👋",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getLocale();

  return (
    <html lang={locale}>
      <body className={GeistSans.className}>
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}
