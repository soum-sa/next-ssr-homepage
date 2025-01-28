import { css } from "@panda-styled-system/css";

export const collections_container = css({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  paddingBlock: 2,
  paddingInline: 1,
  md: {
    paddingBlockStart: 7,
    paddingBlockEnd: 10,
  },
});
