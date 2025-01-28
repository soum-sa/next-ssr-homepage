"use client";

import Image from "next/legacy/image";
import { useTranslations } from "next-intl";

import vat from "@public/svgs/vat.svg";

import {
  taxNumberStyle,
  vatContainerStyle,
  registrationStyle,
  registrationContainerStyle,
  registrationInfoStyle,
} from "./FooterLegalInformation.styled";

export function FooterLegalInformation() {
  const t = useTranslations("footer");

  return (
    <>
      <div>
        <p className={taxNumberStyle}>{t("taxNumber")}</p>
        <div className={vatContainerStyle}>
          <Image
            width="12"
            height="16"
            src={vat}
            layout="fixed"
            alt={t("altVat")!}
          />
          <p>310985751500003</p>
        </div>
      </div>
      <div className={registrationContainerStyle}>
        <p className={registrationStyle}>{t("registration")}</p>
        <div className={registrationInfoStyle}>
          <p>{t("maroof")}: 221919</p>
        </div>
      </div>
    </>
  );
}
