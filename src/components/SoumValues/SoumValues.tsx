import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import {
  layoutContainerStyles,
  valueListStyles,
  valueItemStyles,
  valueItemContentStyles,
  vr__divider,
  soumValueTitleStyles,
  soumValueDescStyles,
  valueIconStyles,
  valueTextBodyStyles,
} from "./SoumValues.styled";

const SoumDeliveryValueIcon = dynamic(() =>
  import("@src/styles/icons").then((mod) => mod.SoumDeliveryValueIcon)
);
const SoumGuaranteeValueIcon = dynamic(() =>
  import("@src/styles/icons").then((mod) => mod.SoumGuaranteeValueIcon)
);
const SoumPaymentValueIcon = dynamic(() =>
  import("@src/styles/icons").then((mod) => mod.SoumPaymentValueIcon)
);
const SoumSupportValueIcon = dynamic(() =>
  import("@src/styles/icons").then((mod) => mod.SoumSupportValueIcon)
);

const SOUM_VALUES = [
  {
    title: "deliveryTitleKey",
    subtext: "deliveryDescKey",
    icon: <SoumDeliveryValueIcon />,
  },
  {
    title: "guaranteeTitleKey",
    subtext: "guaranteeDescKey",
    icon: <SoumGuaranteeValueIcon />,
  },
  {
    title: "paymentTitleKey",
    subtext: "paymentDescKey",
    icon: <SoumPaymentValueIcon />,
  },
  {
    title: "supportTitleKey",
    subtext: "supportDescKey",
    icon: <SoumSupportValueIcon />,
  },
];

export function SoumValues() {
  const t = useTranslations("soumValues");

  return (
    <div className={layoutContainerStyles}>
      <ul className={valueListStyles}>
        {SOUM_VALUES.map((item, index) => (
          <li className={valueItemStyles} key={item.title}>
            <div className={valueItemContentStyles}>
              <figure className={valueIconStyles}>{item.icon}</figure>
              <div className={valueTextBodyStyles}>
                <h2 className={soumValueTitleStyles}>{t(item.title)}</h2>
                <h3 className={soumValueDescStyles}>{t(item.subtext)}</h3>
              </div>
            </div>
            {index !== 3 && <div className={vr__divider} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
