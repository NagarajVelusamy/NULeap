"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const ContactMeBtn = ({ label }) => {
  const { locale } = useParams();

  return (
    <Link
      href={`${locale}/contact`}
      className="text-white bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
    >
      {label}
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  );
};

export default ContactMeBtn;
