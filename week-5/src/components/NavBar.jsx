"use client";

import { navLinks, supportedLocales } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twJoin } from "tailwind-merge";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = ({ locale }) => {
  const path = usePathname();

  return (
    <header>
      <nav className="p-6 flex justify-between">
        <ul className="flex gap-6">
          {(navLinks[locale] ?? navLinks["en"]).map((data) => (
            <li key={data.link}>
              <Link
                href={data.link}
                className={twJoin(
                  "font-medium px-4 py-2 rounded",
                  path === data.link ? "bg-zinc-800 text-white dark:bg-white dark:text-black" : ""
                )}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>

        <div  className="flex gap-4 items-center">
          <ul className="flex gap-2">
            {supportedLocales.map((data) => (
              <li key={data}>
                <Link
                  href={`/${data}`}
                  className={twJoin(
                    "font-medium px-4 py-2 rounded",
                    locale === data ? "bg-zinc-800 text-white dark:bg-white dark:text-black" : ""
                  )}
                >
                  {data}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
