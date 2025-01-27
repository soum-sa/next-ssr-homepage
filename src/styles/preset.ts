import { definePreset } from "@pandacss/dev";

import {
  blue,
  violet,
  sky,
  teal,
  red,
  green,
  orange,
  gray,
  textColorOne,
} from "./tokens/colors";
import { fontSizes } from "./tokens/fontSizes";

export const soumPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        fontSizes,
        colors: {
          ...blue,
          ...violet,
          ...sky,
          ...teal,
          ...red,
          ...green,
          ...orange,
          ...gray,
          ...textColorOne,
        },
      },
      semanticTokens: {
        colors: {
          textColorOne: {
            value: textColorOne["text-one-base"].value,
          },
          primary: {
            value: blue["blue-base"].value,
          },
          secondary: {
            value: violet["violet-base"].value,
          },
          secondaryTwo: {
            value: sky["sky-base"].value,
          },
          accent: {
            value: teal["teal-base"].value,
          },
          error: {
            value: red["red-base"].value,
          },
          confirm: {
            value: green["green-base"].value,
          },
          warning: {
            value: orange["orange-base"].value,
          },
          natural: {
            value: gray["gray-base"].value,
          },
        },
      },
    },
  },
  name: "soum",
});

export default soumPreset;
