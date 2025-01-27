import { css } from "@panda-styled-system/css";

export const singleSlideStyle = css({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  inlineSize: "auto",
});

export const carouselContainerStyle = css({});

export const carouselStyle = css({
  position: "relative",
  maxBlockSize: "auto",
});

export const emblaStyle = css({
  overflow: "hidden",
});

export const emblaContainerStyle = css({
  display: "flex",
});

export const emblaSlideStyle = css({
  position: "relative",
  display: "flex",
  flex: "0 0 100%",
  alignContent: "center",
});

export const dotsContainerStyle = css({
  display: "flex",
  justifyContent: "center",
  marginBlockStart: 8,
  gap: 5,
});

export const dotStyle = css({
  cursor: "pointer",
  inlineSize: "0.625rem",
  blockSize: "0.625rem",
  borderRadius: "50%",
  backgroundColor: "text-one-84",
  border: "none",
  paddingBlock: 0,
  paddingInline: 0,
});

export const dotSelectedStyle = css({
  backgroundColor: "violet-base !important",
});
