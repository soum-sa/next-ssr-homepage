import { css } from '@panda-styled-system/css';

export const emblaDotsStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 5,
});

export const emblaDotStyles = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  touchAction: 'manipulation',
  appearance: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  paddingBlock: 0,
  paddingInline: 0,
  marginBlock: 0,
  marginInline: 0,
  border: 0,
  inlineSize: 2,
  blockSize: 2,
});
