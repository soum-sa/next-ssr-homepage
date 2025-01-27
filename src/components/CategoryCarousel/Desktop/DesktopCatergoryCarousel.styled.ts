import { css } from '@panda-styled-system/css';

export const carouselHeaderStyle = css({
  display: ' flex',
  justifyContent: 'center',
  boxShadow: '0.625rem 0.375rem 1.25rem 0rem rgba(0, 0, 0, 0.1)',
});

export const carouselWrapperStyle = css({
  position: 'relative',
  blockSize: '4.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  inlineSize: 'min(82rem, 100%)',
});

export const emblaStyle = css({
  overflow: 'hidden',
  position: 'relative',
  blockSize: '100%',
});

export const emblaContainerStyle = css({
  display: 'flex',
  gap: '8',
  userSelect: 'none',
  justifyContent: 'start',
  blockSize: '100%',
});

export const iconStyle = css({
  backgroundColor: 'blue-base',
  borderRadius: '50%',
  display: 'inline-block',
  paddingBlock: '0.625rem',
  paddingInline: '0.625rem',
  blockSize: '2.875rem',
  inlineSize: '2.875rem',
  color: 'white',
});

export const buttonStyle = {
  border: 'none',
  paddingBlock: 0,
  paddingInline: 0,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  inlineSize: '2.8rem',
};
