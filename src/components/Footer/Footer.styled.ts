import { css } from '@panda-styled-system/css';

export const footerDivider = css({
  borderBlockEnd: '1px solid #303639',
});

export const footerInformationContainer = css({
  display: 'flex',
  flexDirection: 'column',
  paddingBlockEnd: 6,
  maxInlineSize: '75rem',
  inlineSize: '100%',
  paddingInline: 4,
  md: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginInline: 'auto',
    paddingInline: 2,
    paddingBlockEnd: '4.5rem',
  },
});

export const footerContainer = css({
  backgroundColor: 'blue-base',
  paddingBlockStart: 8,
  paddingInline: 0,
  md: {
    paddingBlockStart: '4.5rem',
  },
});

export const footerInformationSection = css({
  display: 'flex',
  paddingBlockStart: 6,
  flexDirection: 'column',
  gap: 6,
  md: {
    paddingBlock: 0,
    flexDirection: 'row',
    gap: 7,
    paddingBlockStart: 3,
  },
});

export const footerPaymentSection = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  md: {
    flexDirection: 'column',
  },
});

export const footerCopyrightSection = css({
  blockSize: '4.25rem',
  color: 'white',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
