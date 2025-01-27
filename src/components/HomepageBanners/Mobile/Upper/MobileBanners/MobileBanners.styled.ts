import { css } from '@panda-styled-system/css';

export const mobileCarouselStyles = css({
  position: 'relative',
  inlineSize: '100%',
  marginBlockStart: '1.25rem',
  marginBlockEnd: '2.3125rem',
});

export const emblaStyles = css({
  inlineSize: '100%',
  overflow: 'hidden',
  position: 'relative',
});

export const emblaContainerStyles = css({
  display: 'flex',
});

export const mobileSingleImageContainerStyle = css({
  marginBlockStart: '1.25rem',
  marginBlockEnd: '2.3125rem',
});

export const mobileSlideStyles = css({
  position: 'relative',
  flex: '0 0 100%',
  maxInlineSize: '80.167vw',
  marginInline: '0.5rem',
});

export const mobileMiddleSlideStyles = css({
  maxInlineSize: '18.75rem',
  blockSize: '14.563rem',
});

export const mobileMiddleSingleImageStyles = css({
  marginInline: 'auto',
  maxInlineSize: '24.875rem',
  maxBlockSize: '19.375rem',
});

export const mobileDotsStyles = css({
  position: 'absolute',
  insetInlineStart: '37.5%',
  insetBlockEnd: '-1.5rem',
  display: 'flex',
  gap: '1rem',
});

export const mobileDotStyles = css({
  inlineSize: '0.3125rem',
  blockSize: '0.3125rem',
  borderRadius: '50%',
  backgroundColor: 'gray-base',
  border: 'none',
  padding: 0,
});

export const mobileDotSelectedStyles = css({
  backgroundColor: 'violet-base !important',
});
