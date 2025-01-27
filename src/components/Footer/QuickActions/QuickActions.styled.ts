import { css } from "@panda-styled-system/css";

export const quickActionsContainer = css({
  paddingBlock: 6,
  borderBlockEnd: "1px solid rgba(255, 255, 255, 0.15)",
  md: {
    borderBlockEnd: "none",
    paddingBlock: 0,
    paddingBlockStart: 3,
  },
});

export const quickActionsHeading = css({
  paddingBlockEnd: 3,
  fontWeight: "medium",
  color: "white",
});

export const quickActionsList = css({
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
});

export const quickActionItem = css({
  fontSize: "sm",
  color: "gray-55",
  _hover: {
    color: "white",
  },
});
