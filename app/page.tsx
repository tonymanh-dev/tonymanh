import Header from "@/components/home/header";
import Product from "@/components/home/product";
import Socials from "@/components/home/socials";
import Image from "next/image";
import { Particles } from "@/components/magicui/particles";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import ChatPopup from "@/components/chat";
import { LocaleProvider } from "@/components/locale-provider";
import { getLocale } from "@/lib/i18n-server";

export default function Home() {
  const locale = getLocale();

  return (
    <LocaleProvider initialLocale={locale}>
      <main className="flex min-h-screen w-full max-w-2xl mx-auto flex-col items-center justify-between px-4 pb-24">
        <SmoothCursor />
        {/* <ChatPopup /> */}
        <div className="fixed -z-10 inset-0 overflow-hidden h-screen w-screen">
          <Particles quantity={20} />
        </div>
        <Header />
        <Product />
        <Socials />
      </main>
    </LocaleProvider>
  );
}
