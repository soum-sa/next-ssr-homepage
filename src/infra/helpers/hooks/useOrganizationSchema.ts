"use client";

import { useI18nStore } from "@src/i18n/useI18nStore";
import { WithContext, Organization } from "schema-dts";

export const orgSchemaEn: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Soum",
  description:
    "Soum is a platform connecting millions of customers with a diverse collective of individual and small business sellers, offering convenient and trustworthy access to over 14,000 listings from 150+ cities in the MENA region.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966920035039",
  },
};

export const orgSchemaAr: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "سوم",
  description:
    "سوم هي منصة تربط ملايين العملاء بمجموعة متنوعة من البائعين الأفراد والشركات الصغيرة، وتوفر وصولاً مريحًا وجديرًا بالثقة لأكثر من 14000 قائمة من أكثر من 150 مدينة في منطقة الشرق الأوسط وشمال إفريقيا.",

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966920035039",
  },
};

export function useOrganizationSchema(): WithContext<Organization> {
  const { isRTL } = useI18nStore();
  const schema = isRTL ? orgSchemaAr : orgSchemaEn;
  return schema;
}
