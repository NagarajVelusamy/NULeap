import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // reactStrictMode: true,
  // basePath: "/next-portfolio",
};

export default withNextIntl(nextConfig);
