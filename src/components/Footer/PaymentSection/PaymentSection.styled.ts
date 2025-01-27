import { css } from "@panda-styled-system/css";

export const paymentSectionContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: 6,
  md: {
    flexDirection: "column",
  },
});

export const paymentSectionTitle = css({
  paddingBlockEnd: 3,
  fontWeight: "medium",
  color: "white",
  md: {
    paddingBlockEnd: 6,
  },
});
