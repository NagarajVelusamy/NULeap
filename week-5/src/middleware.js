import createMiddleware from "next-intl/middleware";
import { supportedLocales } from "./lib/data";

export default createMiddleware({
  // A list of all locales that are supported
  locales: supportedLocales,

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(ta_IN|en|es|ar)/:path*`],
};
