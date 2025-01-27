import { css } from "@panda-styled-system/css";

export const newsCardStyles = css({
  paddingBlock: 5,
  paddingInline: 5,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#E4E7E9",
  borderRadius: 5,
  cursor: "grab",
});

export const newsCardBodyStyles = css({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

export const cardImageStyles = css({
  position: "relative",
  inlineSize: "18rem",
  blockSize: "13rem",
  borderRadius: 5,
});

export const cardTitleStyles = css({
  fontWeight: "bold",
  overflow: "hidden",
  display: "-webkit-box",
  // @ts-ignore
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": 2,
  whiteSpace: "pre-wrap",
  fontSize: 14,
  md: {
    fontSize: 16,
  },
});

export const cardSummaryStyles = css({
  overflow: "hidden",
  display: "-webkit-box",
  // @ts-ignore
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": 4,
  whiteSpace: "pre-wrap",
  fontSize: 14,
  md: {
    fontSize: 16,
  },
});

export const cardButtonStyles = css({
  paddingBlock: 3,
  borderRadius: 5,
  marginBlockStart: 5,
  backgroundColor: "primary",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: 13,
  md: {
    fontSize: 16,
  },
  textAlign: "center",
});
