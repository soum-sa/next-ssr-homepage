import { css } from '@panda-styled-system/css';

export const emblaSlideStyle = css({
  flex: '0 0 auto',
  minInlineSize: '0',
  blockSize: '100%',
});

export const selectedItemStyle = css({
  backgroundColor: 'blue-base',
  color: 'white !important',
});

export const selectedTextStyle = css({
  color: 'white !important',
});

export const categoryItemStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
  paddingInline: '0.8438rem',
  cursor: 'pointer',
  blockSize: '100%',
  color: 'violet-base',
  _hover: {
    backgroundColor: 'blue-base',
    color: 'white',
  },
});

export const iconStyle = css({
  display: 'flex',
  gap: 1,
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '1.5rem',
});

export const labelStyle = css({
  fontSize: '0.8125rem',
  fontWeight: '500',

  _hover: {
    color: 'white',
  },
});
