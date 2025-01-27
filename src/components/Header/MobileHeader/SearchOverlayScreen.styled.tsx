import { css } from '@panda-styled-system/css';

export const drawerOverlayStyles = css({
  position: 'fixed',
  inset: 0,
  background: '#2E32378C',
});

export const drawerContentStyles = css({
  blockSize: '100%',
  position: 'fixed',
  borderTopRadius: 10,
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  insetInlineStart: 0,
  insetInlineEnd: 0,
  insetBlockEnd: 0,
  zIndex: 10,
});

export const drawerHandleStyles = css({
  bgColor: '#D2D7D9',
  marginBlockStart: 3,
});

export const overlayBodyStyles = css({
  inlineSize: '100%',
  paddingBlock: '1rem',
  blockSize: '100%',
});
