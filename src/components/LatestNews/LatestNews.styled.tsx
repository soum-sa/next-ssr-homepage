import { css } from '@panda-styled-system/css';

export const latestNewsContainerStyles = css({
  marginBlockStart: 5,
  marginBlockEnd: 10,
  md: {
    marginBlockEnd: 20,
  },
});

export const newsListStyles = css({
  display: 'flex',
  gap: 5,
  overflowX: 'auto',
});

export const testimonalsContainerStyles = css({
  marginBlockStart: 5,
  marginBlockEnd: 5,
});

export const sectionTitleStyles = css({
  fontSize: 18,
  fontWeight: 'semibold',
  marginBlockEnd: 4,
  md: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export const emblaStyles = css({
  overflow: 'hidden',
  marginBlockEnd: 2,
});

export const emblaContainerStyles = css({
  display: 'flex',
  gap: 5,
  marginBlockStart: 5,
  textDecoration: 'none',
});

export const emblaSlideStyles = css({
  flexShrink: 0,
  flexGrow: 0,
  inlineSize: '21rem',
});
