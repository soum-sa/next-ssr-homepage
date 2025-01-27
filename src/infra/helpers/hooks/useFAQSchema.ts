"use client";

import { useI18nStore } from "@src/i18n/useI18nStore";
import { WithContext, FAQPage } from "schema-dts";

export const faqSchemaEn: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Soum trustworthy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Soum Platform Trading Company is registered at the Ministry of Commerce in Saudi Arabia. Registration number: 1010664186",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact the seller?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For any inquires, you can contact customer support at: https://wa.link/oeqmna",
      },
    },
    {
      "@type": "Question",
      name: "How can I ensure that the product has the same specifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Soum will guarantee you the description and condition details match the delivered product",
      },
    },
    {
      "@type": "Question",
      name: "Which cities does Soum ship to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Soum ships to every city in Saudi Arabia.",
      },
    },
    {
      "@type": "Question",
      name: "When can I expect to receive my item?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver in about 5-7 business days after confirming the availability of the product",
      },
    },
  ],
};

export const faqSchemaAr: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "هل منصة سوم موثوقة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم منصة سوم موثوقة، ومسجلة في وزارة التجارة، ومسجلة أيضاً في 'معروف' بالرقم التالي: 164634",
      },
    },
    {
      "@type": "Question",
      name: "كيف أتواصل مع خدمة العملاء؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "https://wa.link/oeqmna نسعد بخدمتكم عبر الواتساب",
      },
    },
    {
      "@type": "Question",
      name: "ماذا أفعل في حال استلمت منتج تختلف مواصفاته عن المذكورة في الموقع؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "سوم توفر مدة 24 ساعة للتأكد من مطابقة المنتج للمواصفات قبل إيداع المبلغ للبائع، كما يمكن رفع اعتراض عن طريق خانة رفع الاعتراض في حال كان هناك اختلاف في المواصفات المذكورة",
      },
    },
    {
      "@type": "Question",
      name: "ما هي المدن التي تغطيها سوم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نوصل من وإلى جميع مناطق ومدن المملكة عن طريق أفضل الشركات اللوجستية",
      },
    },
    {
      "@type": "Question",
      name: "كم الوقت المستغرق لتوصيل المنتج؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الوقت المتوقع لتوصيل المنتج يعتمد على مدينتك ومدينة البائع، ولكن تأكد بأن الفريق يبذل قصارى جهده لتوصيل المنتج في أسرع وقت ممكن",
      },
    },
  ],
};

export function useFAQSchema(): WithContext<FAQPage> {
  const { isRTL } = useI18nStore();
  const schema = isRTL ? faqSchemaAr : faqSchemaEn;
  return schema;
}
