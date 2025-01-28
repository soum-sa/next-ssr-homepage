import { css } from "@panda-styled-system/css";

export const taxNumberStyle = css({
  fontWeight: "medium",
  color: "white",
  paddingBlockEnd: 1,
  paddingBlockStart: 6,
  fontSize: "md",
  md: {
    fontSize: "sm",
  },
});

export const vatContainerStyle = css({
  display: "flex",
  alignItems: "center",
  gap: 4,
  color: "white",
  fontSize: "sm",
});

export const registrationStyle = css({
  fontWeight: "medium",
  color: "white",
  paddingBlockEnd: 1,
  fontSize: "md",
  md: {
    fontSize: "sm",
  },
});

export const registrationContainerStyle = css({
  paddingBlockStart: 4,
});

export const registrationInfoStyle = css({
  display: "flex",
  alignItems: "center",
  color: "white",
  fontSize: "sm",
});
