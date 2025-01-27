import { sva } from '@panda-styled-system/css';

export const mediaQueryWrapper = sva({
  className: 'MediaQueryWrapper',
  slots: ['mobile', 'tablet', 'desktop'],
  base: {
    mobile: {
      md: {
        display: 'none',
      },
    },
    tablet: {
      display: 'none',
      md: {
        display: 'initial',
      },
    },
    desktop: {
      display: 'none',
      lg: {
        display: 'initial',
      },
    },
  },
});
