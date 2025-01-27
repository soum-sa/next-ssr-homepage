import { css } from "@panda-styled-system/css";

export const getImageOutlineStyles = (
  showTenDaysGuaranteeTag: boolean,
  isHomepage: boolean
) =>
  css({
    overflow: "hidden",
    borderRadius: 12,
    height: "100%",
    transition: "1s",
    inlineSize: "12rem",
    blockSize: "12rem",
    objectFit: "cover",
    md: {
      inlineSize: "17.35rem",
      blockSize: "17.35rem",
    },
    ...(showTenDaysGuaranteeTag
      ? {
          position: "absolute",
          borderColor: "violet-dark",
          borderWidth: 4,
          borderStyle: "solid",
        }
      : {}),
    ...(isHomepage
      ? {
          inlineSize: "8.6875rem",
          blockSize: "8.6875rem",
        }
      : {}),
  });

export const returnBadge = (isRTL: boolean) =>
  css({
    display: "grid",
    placeItems: "center",
    inlineSize: 9,
    blockSize: 9,
    position: "absolute",
    right: !isRTL ? 0 : "auto",
    left: isRTL ? 0 : "auto",
    insetBlockEnd: 0,
    background: "violet-dark",
    borderRadius: isRTL ? "0 12px 0 12px" : "12px 0 12px 0",
    md: {
      inlineSize: "4.375rem",
      blockSize: 16,
    },
  });

export const badgeStyles = css({
  inlineSize: "1.875rem ",
  blockSize: "1.375rem",
  md: {
    inlineSize: "3.75rem",
    blockSize: "2.75rem",
  },
});
export const overlay = css({
  position: "absolute",
  insetBlockStart: 0,
  insetInlineStart: 0,
  inlineSize: "100%",
  blockSize: "100%",
  backgroundColor: "#313437",
  opacity: 0.7,
  pointerEvents: "none",
  borderRadius: 12,
});

export const soldOutStyles = css({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  fontSize: 16,
  alignItems: "center",
  justifyContent: "center",
  blockSize: "100%",
  fontWeight: "bold",
  color: "white",
  md: {
    fontSize: 18,
  },
});

export const timeSinceSoldStyles = css({
  fontSize: 11,
  fontWeight: 500,
  md: { fontSize: 13 },
});

export const emblaMobileSlideStyles = (isHomepage: boolean) =>
  css({
    transform: "translate3d(0, 0, 0)",
    flex: "0 0 100%",
    inlineSize: "12rem",
    blockSize: "12rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",

    md: {
      inlineSize: "17.35rem",
      blockSize: "17.35rem",
    },
    ...(isHomepage
      ? {
          inlineSize: "8.6875rem",
          blockSize: "8.6875rem",
        }
      : {}),
  });

export const guaranteeTagStyle = (isHomepage: boolean) =>
  css({
    position: "absolute",
    insetBlockStart: 0,
    inlineSize: "100%",
    maxInlineSize: isHomepage ? "8.688rem" : "12rem",
    blockSize: isHomepage ? "8.688rem" : "12rem",
    zIndex: 10,
    md: {
      inlineSize: "100%",
      maxInlineSize: "17.35rem",
      blockSize: "17.35rem",
    },
  });
