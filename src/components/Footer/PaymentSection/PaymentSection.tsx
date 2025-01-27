"use client";

import { useTranslations } from "next-intl";
import Image from "next/legacy/image";
import paymentMethods from "@public/svgs/payment_methods.svg";

import {
  paymentSectionTitle,
  paymentSectionContainer,
} from "./PaymentSection.styled";

export function PaymentSection() {
  const t = useTranslations("footer");

  return (
    <div className={paymentSectionContainer}>
      <div>
        <p className={paymentSectionTitle}>{t("paymentMethods")}</p>
        <Image
          width="273.17"
          height="30"
          src={paymentMethods}
          layout="fixed"
          alt={t("altPaymentMethods")!}
        />
      </div>
    </div>
  );
}
