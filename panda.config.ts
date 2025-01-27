import { soumPreset } from "@src/styles/preset";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  presets: ["@pandacss/dev/presets", soumPreset],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        xxs: "360px",
        xs: "375px",
        s: "480px",
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // The JSX framework to use
  jsxFramework: "react",

  // The CSS Syntax to use to use
  syntax: "object-literal",
});
