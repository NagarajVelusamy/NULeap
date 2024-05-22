import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { supportedLocales } from "./lib/data";

// Can be imported from a shared config
const locales = supportedLocales;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`./lib/messages/${locale}.json`)).default,
  };
});
