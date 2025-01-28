import { css } from "@panda-styled-system/css";

export const followUsTitle = css({
  paddingBlockEnd: 3,
  fontWeight: "medium",
  color: "white",
  md: {
    paddingBlockEnd: 6,
  },
});

export const socialMediaIcons = css({
  display: "flex",
  gap: 6,
  flexDirection: "row",
});

export const socialMediaIcon = css({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.3)",
  },
});
