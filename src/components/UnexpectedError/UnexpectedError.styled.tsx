import { css } from "@panda-styled-system/css";

export const errorContainerStyles = css({ marginBlock: 24 });

export const errorIconBoxStyles = css({
  display: "flex",
  justifyContent: "center",
});

export const errorTitleStyles = css({ fontSize: 60, fontWeight: "bold" });

export const errorCaptionStyles = css({ fontSize: 32, fontWeight: "bold" });

export const errorMessageStyles = css({ fontSize: 22, fontWeight: "semibold" });

export const errorBodyStyles = css({
  display: "flex",
  flexDirection: "column",
  marginBlockStart: 4,
  gap: 2,
  md: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 32,
  },
});

export const baseButtonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  borderRadius: 50,
  paddingBlock: 3,
  paddingInline: 5,
  inlineSize: "100%",
  cursor: "pointer",
  fontSize: 18,
  fontWeight: "bold",
};

export const homeButtonStyles = css(baseButtonStyles, {
  backgroundColor: "primary",
  color: "white",
});

export const refreshButtonStyles = css(baseButtonStyles, {
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "primary",
  color: "primary",
});
