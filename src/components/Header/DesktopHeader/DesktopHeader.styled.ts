import { hstack } from "@panda-styled-system/patterns";
import { css, cx } from "@panda-styled-system/css";

export const header = css({
  paddingBlock: "5",
  display: "flex",
  gap: 12,
  alignItems: "center",
  md: {
    gap: 10,
  },
  sm: {
    gap: 2,
  },
});

export const searchPanelRoot = css({
  overflow: "hidden",
  transition: "opacity .2s ease-in,filter .2s ease-in",
  position: "absolute",
  insetBlockStart: 14,
  insetInline: 0,
  background: "white",
  zIndex: 4,
});

export const searchList = css({
  borderRadius: "0.1875rem",
  border: "1px solid",
  borderColor: "natural",
  boxShadow: "0px 8px 40px 0px",
  boxShadowColor: "gray-15",
  paddingInline: 4,
  paddingBlock: 4,
  "& > * + *": {
    borderBlockStart: "0.03125rem solid",
    borderBlockStartColor: "natural",
  },
});

export const searchLink = css({
  paddingBlock: 5,
  fontSize: "sm",
  display: "inline-block",
  width: "100%",
  _hover: {
    color: "primary",
  },
  _active: {
    color: "primary",
  },
  _focus: {
    color: "primary",
  },
});

export const highlightedItem = css({
  fontWeight: "bold",
});

export const navList = cx(
  hstack({
    gap: 10,
    md: {
      gap: 8,
    },
    sm: {
      gap: 2,
    },
  }),
  css({
    fontSize: "sm",
    color: "gray-40",
  })
);

export const navLink = css({
  _hover: {
    color: "primary",
  },
  _active: {
    color: "primary",
  },
  _focus: {
    color: "primary",
  },
});

export const langSwitcherStyles = hstack({
  gap: 2,
  cursor: "pointer",
  color: "violet-base",
  fontSize: "sm",
  _hover: {
    color: "primary",
  },
  _active: {
    color: "primary",
  },
  _focus: {
    color: "primary",
  },
  sm: {
    gap: 0,
  },
});
