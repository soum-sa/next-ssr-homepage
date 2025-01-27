import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { unstable_setRequestLocale } from "next-intl/server";

import { css, cx } from "@panda-styled-system/css";

import { Providers } from "@src/providers";
import { routing } from "@src/i18n/routing";
import { LOCALE } from "@src/infra/helpers/middleware/withLocale.types";

import "../globals.css";

const IBM_Plex_Sans = IBM_Plex_Sans_Arabic({
  preload: true,
  weight: ["400", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
  variable: "--global-font-body",
});

const containerStyles = css({
  md: {
    overflow: "auto !important",
    padding: "0 !important",
  },
});

type LocaleRootLayoutProps = {
  children: React.ReactNode;
  params: { locale: LOCALE };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleRootLayout({
  children,
  params,
}: LocaleRootLayoutProps) {
  const { locale } = params;

  unstable_setRequestLocale(locale);

  const direction = locale === "ar" ? "rtl" : "ltr";

  // await fetch();

  return (
    <html
      lang={locale}
      dir={direction}
      className={cx(IBM_Plex_Sans.variable, containerStyles)}
    >
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body>
        {/*
          This page fetches feature flags and experiments at build time, but waits
          to evaluate them until client-side rendering. This gives us flexibility
          while avoiding `flicker` effect if used witout prerendering client page.
        */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
