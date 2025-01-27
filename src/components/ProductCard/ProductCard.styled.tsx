import { css } from "@panda-styled-system/css";

export const card_container = (isProductSold: boolean) =>
  css({
    overflow: "hidden",
    inlineSize: "100%",
    ...(isProductSold && {
      cursor: "default",
    }),
  });

export const card_title = (isProductSold: boolean, isHomepage: boolean) =>
  css({
    display: "flex",
    alignItems: "center",
    gap: 1,
    flexWrap: "wrap",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontWeight: "semibold",
    fontSize: "md",
    color: isProductSold ? "text-disabled" : "text-default",
    md: {
      fontWeight: "bold",
      fontSize: "23",
    },
    ...(isHomepage
      ? {
          fontSize: "sm",
        }
      : {}),
  });

export const attribute_title = (isProductSold: boolean) =>
  css({
    color: isProductSold ? "text-disabled" : "text-one-84",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontSize: 10,
    md: {
      fontSize: 14,
    },
  });

export const product_container = (isProductSold: boolean) =>
  css({
    opacity: isProductSold ? 0.5 : 1,
    paddingBlockStart: 2,
    paddingBlockEnd: 2,
    display: "flex",
    flexDirection: "column",
    gap: 1,
    md: {
      gap: 2,
      paddingBlockStart: 3,
      paddingBlockEnd: 2,
    },
  });

export const badge__container = css({
  fontSize: 10,
  paddingBlock: 1,
  paddingInline: 2,
  borderRadius: 5,
  md: {
    paddingInline: 4,
    fontSize: "sm",
    fontWeight: "medium",
  },
});

export const price_container = css({
  display: "flex",
  gap: 2,
  alignItems: "start",
});

export const sell_price = css({
  fontSize: "sm",
  fontWeight: "bold",
  md: {
    fontSize: "xl",
  },
});

export const installment_options_container = css({
  fontWeight: "bold",
  fontSize: "xs",
});

export const bnpl_payment_icon = css({
  display: "inline-block",
  inlineSize: "2.3rem",
  blockSize: "1rem",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
});

export const bnpl_payment_box = css({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1,
  fontSize: 10,
  fontWeight: "semibold",
  md: {
    fontSize: "sm",
  },
});

export const helper_text = css({
  color: "gray-55",
});

export const sell_price_text = css({
  fontWeight: "normal",
});

export const attributesStyle = css({
  display: "flex",
  flexWrap: "wrap",
  gap: 1,
});

export const badge_section = css({
  display: "flex",
  gap: 2,
  alignItems: "center",
  flexWrap: "wrap",
});

export const guarantee_badge = (isHomepage?: boolean) =>
  css({
    display: "flex",
    color: "violet-dark",
    borderRadius: 4,
    fontWeight: "medium",
    fontSize: 10,
    backgroundColor: "#F1ECF7",
    inlineSize: "fit-content",
    blockSize: 4,
    alignItems: "center",
    justifyContent: "center",
    paddingBlock: 1,
    paddingInline: "3px",

    md: {
      fontWeight: "semibold",
      fontSize: 13,
      blockSize: 25,
      paddingInline: 1,
    },
    ...(isHomepage
      ? {
          fontSize: 8,
        }
      : {}),
  });

export const productDetailsContainer = (isProductSold: boolean) =>
  css({
    pointerEvents: isProductSold ? "none" : "auto",
    userSelect: isProductSold ? "none" : "auto",
  });

export const cashBadgeStyles = css({
  background: "violet-base",
  fontWeight: "medium",
  color: "white",
  paddingInline: 0.5,
  borderRadius: 4,
  fontSize: 10,
  md: {
    fontSize: 12,
  },
});
