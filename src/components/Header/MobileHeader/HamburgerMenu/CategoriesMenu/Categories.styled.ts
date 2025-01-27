import { css } from "@panda-styled-system/css";

export const nav = css({
  flex: 1,
  overflowY: "auto",
  position: "relative",
  paddingBottom: 4,
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const nav__heading = (isAuthenticated: boolean) =>
  css({
    marginBlockStart: !isAuthenticated ? 6 : 20,
    display: "inline-flex",
    alignItems: "center",
    fontSize: "sm",
    fontWeight: "bold",
    color: "secondary",
    paddingInline: 4,
    gap: 2,
  });

export const nav__categories_list = css({
  paddingInlineStart: 12,
  paddingInlineEnd: 4,
  display: "flex",
  flexDirection: "column",
  gap: 3,
  paddingBlockEnd: 4,
  "& > li": {
    fontSize: "sm",
    fontWeight: "normal",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "gray-40",
  },
});

export const nav__categories_list_button = css({
  cursor: "pointer",
  inlineSize: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",

  _hover: {
    color: "primary",
  },
  _active: {
    color: "primary",
  },
  _focus: {
    color: "primary",
  },
  "& > span": {
    paddingBlock: 2,
    display: "inline-flex",
  },
  "& > svg": {
    _rtl: {
      transform: "rotate(180deg)",
    },
  },
});

export const nav__extra_list = css({
  fontSize: "sm",
  fontWeight: "normal",
  color: "secondary",
  display: "flex",
  flexDirection: "column",
  paddingInline: 4,
  gap: 4,
  "& > li": {
    display: "flex",
    gap: 1,
    "& > a": {
      display: "inline-block",
      width: "100%",
      paddingInlineStart: 3,
      paddingBlockEnd: 4,
    },
  },
});

export const lang__change = css({
  display: "flex !important",
  flex: "1",
  justifyContent: "space-between",
  cursor: "pointer",
  paddingInlineStart: 3,
  paddingBlockEnd: 4,
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

export const border_bottom = css({
  borderBlockEnd: "0.03125rem solid",
  borderBlockEndColor: "natural",
});

export const auth = css({
  backgroundColor: "gray-95",
  paddingInline: 4,
  paddingBlock: 6,
});

export const auth__heading = css({
  color: "secondary",
  fontSize: "xl",
  fontWeight: "bold",
  marginBlockEnd: 4,
});

export const auth__login = css({
  minBlockSize: 10,
  minInlineSize: 48,
  justifyContent: "center",
  paddingInline: 0,
});
