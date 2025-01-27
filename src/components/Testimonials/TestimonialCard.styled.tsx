import { css } from '@panda-styled-system/css';

export const cardContainerStyles = css({
  paddingInline: 8,
  paddingBlock: 8,
  borderRadius: 12,
  cursor: 'grab',
  borderWidth: '0.09rem',
  borderColor: 'natural',
  borderStyle: 'solid',
});

export const cardHeaderStyles = css({
  display: 'flex',
  gap: 4,
  marginBlockEnd: 6,
});

export const cardAvatarStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  blockSize: 12,
  inlineSize: 12,
  fontSize: 14,
  borderRadius: '50%',
  backgroundColor: 'secondaryTwo',
  boxShadow: '0px 0px 20px 0px #00000012',
});

export const cardUsernameStyles = css({
  fontSize: 18,
  fontWeight: 'bold',
});

export const cardRatingStyles = css({
  display: 'flex',
  gap: 1,
});

export const cardContentStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
});

export const cardBodyTitleStyles = css({
  fontSize: 18,
  fontWeight: 'bold',
  userSelect: 'none',
});

export const cardBodyTextStyles = css({
  fontSize: 13,
  userSelect: 'none',
});
