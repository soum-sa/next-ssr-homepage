"use client";

import { useTranslations } from "next-intl";

import { DownloadAppAndroid, DownloadAppIOS } from "@src/styles/icons";

import { downloadTitle, downloadIconContainer } from "./DownloadApp.styled";
import { MediaQueryWrapper } from "@src/styles/components";

export function DownloadApp() {
  const t = useTranslations("footer");
  const seoTranslations = useTranslations("seo");

  return (
    <div>
      <p className={downloadTitle}>{t("download")}</p>
      <div className={downloadIconContainer}>
        <a
          href={process.env.NEXT_PUBLIC_PLAY_STORE_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label={seoTranslations("downloadAppAndroid.linkText")}
        >
          <MediaQueryWrapper
            mobile={
              <DownloadAppAndroid
                isMobile={true}
                role="img"
                aria-label={seoTranslations("downloadAppAndroid.imgText")}
              />
            }
            tablet={
              <DownloadAppAndroid
                role="img"
                aria-label={seoTranslations("downloadAppAndroid.imgText")}
              />
            }
          />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_APP_STORE_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label={seoTranslations("downloadAppIOS.linkText")}
        >
          <MediaQueryWrapper
            mobile={
              <DownloadAppIOS
                isMobile={true}
                role="img"
                aria-label={seoTranslations("downloadAppIOS.imgText")}
              />
            }
            tablet={
              <DownloadAppIOS
                role="img"
                aria-label={seoTranslations("downloadAppIOS.imgText")}
              />
            }
          />
        </a>
      </div>
    </div>
  );
}
