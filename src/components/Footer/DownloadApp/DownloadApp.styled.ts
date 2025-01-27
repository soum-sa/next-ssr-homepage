import { css } from "@panda-styled-system/css";

export const downloadTitle = css({
  paddingBlockEnd: 3,
  fontWeight: "medium",
  color: "white",
  md: {
    paddingBlockEnd: 18,
  },
});

export const downloadIconContainer = css({
  display: "flex",
  flexDirection: "row",
  gap: 2,
  md: {
    flexDirection: "column",
    gap: 3,
  },
});
