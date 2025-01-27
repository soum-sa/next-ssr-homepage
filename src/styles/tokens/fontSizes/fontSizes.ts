import { defineTokens } from "@pandacss/dev";

/**
 * Figma Tokens
 * 11px
 * 12px
 * 14px --font-sizes-sm: 0.875rem;
 * 16px --font-sizes-md: 1rem;
 * 18px --font-sizes-lg: 1.125rem;
 * 20px --font-sizes-xl: 1.25rem;
 * 23px
 * 26px
 * 32px
 * 46px
 */

/**
 * Panda CSS Tokens
 * --font-sizes-2xs: 0.5rem;
 * --font-sizes-xs: 0.75rem;
 * --font-sizes-sm: 0.875rem;
 * --font-sizes-md: 1rem;
 * --font-sizes-lg: 1.125rem;
 * --font-sizes-xl: 1.25rem;
 * --font-sizes-2xl: 1.5rem;
 * --font-sizes-3xl: 1.875rem;
 * --font-sizes-4xl: 2.25rem;
 * --font-sizes-5xl: 3rem;
 * --font-sizes-6xl: 3.75rem;
 * --font-sizes-7xl: 4.5rem;
 * --font-sizes-8xl: 6rem;
 * --font-sizes-9xl: 8rem;
 */
export const fontSizes = defineTokens.fontSizes({
  10: {
    value: "0.625rem",
  },
  11: {
    value: "0.6875rem",
  },
  12: {
    value: "0.75rem",
  },
  13: {
    value: "0.8125rem",
  },
  23: {
    value: "1.4375rem",
  },
  26: {
    value: "1.625rem",
  },
  29: {
    value: "1.8125rem",
  },
  32: {
    value: "2rem",
  },
  46: {
    value: "2.875rem",
  },
  52: {
    value: "3.25rem",
  },
});
