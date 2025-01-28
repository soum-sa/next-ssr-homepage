import { css } from "@panda-styled-system/css";

export const collection_container = css({
  display: "flex",
  flexDirection: "column",
  gap: 6,
  position: "relative",
});

export const feed_title = css({
  fontSize: "lg",
  fontWeight: "semibold",
  md: {
    fontSize: "2rem",
  },
});

export const embla = css({
  overflow: "hidden",
  md: {
    cursor: "default",
  },
});

export const embla__container = css({
  display: "flex",
  gap: 4,
  md: {
    gap: "1.65rem",
  },
});

export const embla__slide = (isHomepage: boolean) =>
  css({
    flexShrink: 0,
    flexGrow: 0,
    inlineSize: "12rem",
    md: {
      inlineSize: "17.35rem",
    },

    ...(isHomepage
      ? {
          inlineSize: "8.6875rem",
        }
      : {}),
  });

export const buttonStyle = css({
  border: "none",
  paddingBlock: 0,
  paddingInline: 0,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  zIndex: 1,
  blockSize: "fit-content",
  inlineSize: "fit-content",
});

export const iconStyle = css({
  backgroundColor: "white",
  borderRadius: "50%",
  display: "none",
  paddingBlock: "0.625rem",
  paddingInline: "0.625rem",
  blockSize: "2.875rem",
  inlineSize: "2.875rem",
  color: "primary",

  md: {
    display: "inline-block",
  },
});

export const leftArrowButtonStyle = css({
  position: "absolute",
  insetBlockStart: "12rem",
  insetInlineStart: "-2rem",
  filter: "drop-shadow(0px 0px 4px rgba(15, 72, 132, 0.3))",
  _rtl: { transform: "rotate(-180deg)" },
});

export const rightArrowButtonStyle = css({
  position: "absolute",
  insetBlockStart: "12rem",
  insetInlineEnd: "-2rem",
  transform: "rotate(180deg)",
  filter: "drop-shadow(0px 0px 4px rgba(15, 72, 132, 0.3))",
  _rtl: {
    transform: "rotate(0deg)",
  },
});

export const viewMoreText = css({
  fontSize: "0.6875rem",
  fontWeight: "bold",
  color: "primary",
  marginInlineEnd: 2,
  md: {
    fontSize: "1.25rem",
    marginInlineEnd: 0,
  },
});
