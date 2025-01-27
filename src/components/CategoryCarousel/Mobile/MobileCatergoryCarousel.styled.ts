import { css } from "@panda-styled-system/css";

export const carouselWrapperStyle = css({
  position: "relative",
  blockSize: "4.5rem",
  display: "inline-flex",
  justifyContent: "center",
  inlineSize: "100%",
  boxShadow: "0.625rem 0.375rem 1.25rem 0rem rgba(0, 0, 0, 0.1)",
});

export const emblaStyle = css({
  overflow: "hidden",
  inlineSize: "calc(100% - 2.0313rem)",
});

export const emblaContainerStyle = css({
  display: "flex",
  gap: "4",
  userSelect: "none",
  blockSize: "100%",
});

export const emblaSlideStyle = css({
  flex: "0 0 auto",
  minInlineSize: "0",
  maxInlineSize: "fit-content",
  blockSize: "100%",
});

export const categoryItemStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  paddingInline: "0.8438rem",
  cursor: "pointer",
  blockSize: "100%",
});

export const selectedItemStyle = css({
  backgroundColor: "blue-base !important",
  color: "white",
});

export const iconStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "1.5rem",
});

export const labelStyle = css({
  fontSize: "0.8125rem",
  fontWeight: "500",
  color: "violet-base",
});

export const selectedLabelStyle = css({
  color: "white !important",
});
