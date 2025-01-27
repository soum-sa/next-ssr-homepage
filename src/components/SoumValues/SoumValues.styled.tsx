import { css } from '@panda-styled-system/css';

export const layoutContainerStyles = css({
  marginBlockStart: 6,
  marginBlockEnd: 6,
  md: {
    marginBlockStart: '1.25rem',
    marginBlockEnd: 12,
  },
});

export const valueListStyles = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  backgroundColor: 'white',
  listStyle: 'none',
  gap: 2,
  md: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    backgroundColor: 'gray-95',
    gap: 0,
    borderRadius: 6,
  },
});

export const valueItemStyles = css({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 5,
  borderWidth: '0.016rem',
  borderColor: '#8E9099',
  md: {
    borderRadius: 0,
    borderWidth: 0,
  },
});

export const valueItemContentStyles = css({
  paddingInline: 1,
  paddingBlock: 2,
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  md: {
    paddingInline: 3,
    paddingBlock: 4,
  },
});

export const valueIconStyles = css({
  flex: 1,
  blockSize: 6,
  md: {
    blockSize: 10,
  },
});

export const valueTextBodyStyles = css({
  flex: 5,
});

export const vr__divider = css({
  display: 'none',
  md: {
    display: 'block',
    inlineSize: '0.09rem',
    blockSize: 14,
    backgroundColor: '#E4E7E9',
  },
});

export const soumValueTitleStyles = css({
  fontWeight: 'semibold',
  color: 'secondary',
  fontSize: 11,
  md: {
    fontSize: 16,
  },
});

export const soumValueDescStyles = css({
  fontSize: 10,
  md: {
    fontSize: 14,
  },
});
