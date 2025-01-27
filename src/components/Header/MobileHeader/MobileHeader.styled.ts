import { sva } from '@panda-styled-system/css';

export const mobileHeader = sva({
  slots: [
    'container',
    'logo',
    'formContainer',
    'form',
    'input',
    'submitBtn',
    'searchMenu',
    'searchPanel',
    'searchSection',
    'searchList',
    'searchListItem',
    'highlightedItem',
  ],
  base: {
    form: {
      display: 'flex',
      flex: 1,
      marginInlineStart: 2,
      backgroundColor: 'gray-95',
      border: 'none',
      outline: 'none',
      borderRadius: 5,
    },
    input: {
      border: 'none',
      outline: 'none',
      paddingInline: 2,
      inlineSize: '100%',
    },
    submitBtn: {
      cursor: 'pointer',
      marginInlineStart: 4,
      color: 'text-one-84',
    },

    searchList: {
      paddingBlock: 4,
      listStyle: 'none',
      position: 'relative',
      '& > *:not(:last-child)': {
        borderBottom: '0.5px solid',
        borderColor: 'natural',
      },
    },
    searchListItem: {
      '& > a': {
        paddingBlock: '1.125rem',
        display: 'inline-block',
        width: '100%',
      },
    },
    highlightedItem: {
      fontWeight: 'bold',
    },
  },
});

// viewbox for zooming
const TEXT_LOGO_VIEWBOX = '75 75 50 50';
// height and width from figma
const TEXT_LOGO_HEIGHT = '0.84763rem';
const TEXT_LOGO_WIDTH = '3.29119rem';

export const TEXT_LOGO_PROPS = {
  viewBox: TEXT_LOGO_VIEWBOX,
  height: TEXT_LOGO_HEIGHT,
  width: TEXT_LOGO_WIDTH,
};
