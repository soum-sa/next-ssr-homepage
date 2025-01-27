import { css } from "@panda-styled-system/css";

export const categoryContainer = css({
  paddingBlock: 6,
  borderBlockEnd: "1px solid rgba(255, 255, 255, 0.15)",
  md: {
    borderBlockEnd: "none",
    paddingBlock: 0,
    paddingBlockStart: 3,
  },
});

export const categoryHeading = css({
  paddingBlockEnd: 3,
  fontWeight: "medium",
  color: "white",
});

export const categoryList = css({
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
});

export const categoryItem = css({
  fontSize: "sm",
  fontWeight: "medium",
  color: "gray-55",
  _hover: {
    color: "white",
  },
});

export const browseButton = css({
  display: "flex",
  alignItems: "center",
  gap: 2,
  color: "white",
  fontWeight: "medium",
  fontSize: "sm",
});
