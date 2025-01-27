import { css } from '@panda-styled-system/css';

export const desktopMostSoldDevicesCollectionContainer = css({
  backgroundColor: 'gray-95',
  paddingBlockStart: '2.6875rem',
  paddingBlockEnd: '2.5625rem',
  position: 'relative',
});

export const desktopMostSoldDevicesCollectionTitleStyle = css({
  fontSize: 32,
  fontWeight: 'bold',
  '& span': {
    fontWeight: 'normal',
  },
});

export const headerContainerStyle = css({
  background: 'gray-95',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  inlineSize: '100vw',
  position: 'relative',
  insetInlineStart: '50%',
  insetInlineEnd: '50%',
  marginInlineStart: '-50vw',
  marginInlineEnd: '-50vw',
});

export const innerContainer = css({
  maxInlineSize: 1200,
});

export const titleContainerStyle = css({
  blockSize: '2.875rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBlockEnd: 10,
});

export const innerContainerStyle = css({
  gap: 6,
  display: 'flex',
  inlineSize: '100%',
  maxInlineSize: 1200,
  alignItems: 'center',
  paddingInline: '3.3125rem',
  justifyContent: 'space-between',
  md: { paddingInline: 4 },
});

export const embla = css({
  overflow: 'hidden',
});

export const emblaContainer = css({
  display: 'flex',
  gap: 4,
  md: {
    gap: '1.65rem',
  },
});

export const emblaSlide = css({
  minInlineSize: '12rem',
  md: {
    minInlineSize: '17.35rem',
  },
  flex: '0 0 auto',
  maxInlineSize: '100%',
});

export const iconStyle = css({
  backgroundColor: 'white',
  borderRadius: '50%',
  display: 'none',
  paddingBlock: '0.625rem',
  paddingInline: '0.625rem',
  blockSize: '2.875rem',
  inlineSize: '2.875rem',
  md: {
    display: 'inline-block',
  },
});

export const arrowContainerStyles = css({
  display: 'flex',
  gap: 2,
});

export const leftArrowButtonStyle = css({
  insetBlockStart: '2.5625rem',
  insetInlineEnd: '4.625rem',
  _rtl: { transform: 'rotate(-180deg)' },
  cursor: 'pointer',
  _disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const rightArrowButtonStyle = css({
  insetBlockStart: '2.5625rem',
  insetInlineEnd: '1.25rem',
  transform: 'rotate(180deg)',
  _rtl: {
    transform: 'rotate(0deg)',
  },
  cursor: 'pointer',
  _disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});
