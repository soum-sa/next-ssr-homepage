import { css } from '@panda-styled-system/css';

export const testimonalsContainerStyles = css({
  marginBlockStart: 5,
  marginBlockEnd: 5,
  md: {
    marginBlockEnd: 20,
  },
});

export const testimonalsTitleStyles = css({
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
});

export const emblaContainerStyles = css({
  display: 'flex',
  gap: 5,
  marginBlockStart: 5,
  marginBlockEnd: 2,
});

export const emblaSlideStyles = css({
  flexShrink: 0,
  flexGrow: 0,
  inlineSize: '20.8rem',
});
