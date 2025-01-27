"use client";

import { Suspense } from "react";

import { useParams } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

import ar from "@src/translations/ar.js";
import en from "@src/translations/en.js";

type Props = { children: React.ReactNode };
type ExtendedIntlMessages = {
  [key: string]: string | ExtendedIntlMessages;
};

export function Providers({ children }: Props) {
  const { locale } = useParams() as { locale: "ar" | "en" | "ar-SA" | "en-SA" };

  const messages = (locale.includes("ar")
    ? ar
    : en) as unknown as ExtendedIntlMessages;

  return (
    <Suspense>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        timeZone="Asia/Riyadh"
      >
        {children}
      </NextIntlClientProvider>
    </Suspense>
  );
}
