import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { twJoin } from "tailwind-merge";
import "../globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" dir={locale === 'ar' ? "rtl" : "ltr"}>
      <body
        className={twJoin(
          inter.className,
          "h-screen mx-auto max-w-screen-lg px-4 bg-no-repeat dark:bg-slate-900 dark:text-white"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <NavBar locale={locale} />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}