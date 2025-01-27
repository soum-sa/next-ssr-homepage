import { css } from '@panda-styled-system/css';

export const subCategoriesNav = css({
  flex: 1,
  overflowY: 'auto',
  position: 'relative',
  paddingBlockEnd: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const nav__categories_list = css({
  paddingInlineStart: 12,
  paddingInlineEnd: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  paddingBlockEnd: 4,
  '& > li': {
    fontSize: 'sm',
    fontWeight: 'normal',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'gray-40',
  },
});

export const navHeadingWrapper = (isAuthenticated: boolean) =>
  css({
    display: 'inline-flex',
    marginInlineStart: 2,
    marginTop: !isAuthenticated ? 6 : 20,
  });

export const nav__heading_subcategory = css({
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: 'sm',
  fontWeight: 'bold',
  color: 'secondary',
  gap: 1,
});

export const nav__heading_subcategory_icon = css({
  blockSize: '1.5rem',
  inlineSize: '2.4rem',
});

export const nav__categories_list_button_subcategory = css({
  inlineSize: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  _hover: {
    color: 'primary',
  },
  _active: {
    color: 'primary',
  },
  _focus: {
    color: 'primary',
  },
  '& > svg': {
    _rtl: {
      transform: 'rotate(180deg)',
    },
  },
});

export const subCatLinkStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  inlineSize: '100%',
  paddingBlock: 2,
});
