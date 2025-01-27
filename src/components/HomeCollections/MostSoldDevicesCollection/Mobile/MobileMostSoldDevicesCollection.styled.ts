import { css } from '@panda-styled-system/css';

export const mobileMostSoldContainerStyle = css({
  backgroundColor: 'gray-95',
  paddingBlockStart: 6,
  paddingBlockEnd: 5,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  inlineSize: '100vw',
  position: 'relative',
  insetInlineStart: '50%',
  insetInlineEnd: '50%',
  marginInlineStart: '-50vw',
  marginInlineEnd: '-50vw',
});

export const mobileMostSoldTitleStyle = css({
  fontSize: 18,
  fontWeight: 'bold',
  alignSelf: 'flex-start',
  marginInlineStart: 4,
  paddingBlockEnd: 3,
  lineHeight: '1.2rem',
});

export const mobileMostSoldTitleHighlightStyle = css({
  display: 'block',
  fontSize: 16,
  fontWeight: 'normal',
  lineHeight: '1.35rem',
});

export const mobileMostSoldProductsContainerStyle = css({
  display: 'flex',
  alignSelf: 'flex-start',
  flexDirection: 'column',
  overflowX: 'scroll',
  paddingInlineStart: 4,
  inlineSize: '100vw',
  _scrollbar: {
    display: 'none',
  },
});

export const mobileMostSoldProductsGroupStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  marginBlock: 1,
  inlineSize: '105%',

  '@media (max-width: 385px)': {
    inlineSize: '130%',
  },

  '@media (max-width: 400px)': {
    inlineSize: '113%',
  },

  '@media (max-width: 415px)': {
    inlineSize: '108%',
  },
});
