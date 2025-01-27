import { css } from '@panda-styled-system/css';

export const logoContainer = css({
  borderBlockEnd: '1px solid rgba(255, 255, 255, 0.15)',
  paddingBlockEnd: 6,
  md: {
    maxInlineSize: '17.625rem',
    borderBlockEnd: 'none',
  },
});

export const logoSection = css({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
});

export const logoDescription = css({
  color: '#FFFFFF',
  paddingBlockStart: 4,
  md: {
    maxInlineSize: '14.875rem',
  },
});
