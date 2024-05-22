import ContactMeBtn from "@/components/ContactMeBtn";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="mt-20 text-center flex justify-center items-center">
      <div className="max-w-screen-md">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight dark:text-white">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-slate-200">{t("desc")}</p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/Resume.docx"
            className="text-white bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-slate-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center gap-2"
            download
          >
            {t("downloadCv")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-download"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </a>
          <ContactMeBtn label={t("contactMe")} />
        </div>
      </div>
    </div>
  );
}
