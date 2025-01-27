import * as icons from "./Icons";

export interface IconProps extends IIconSizeProps {
  name: IconNames;
  role?: string;
  "aria-label"?: string;
}

export type IconNames = keyof typeof icons;

export interface IIconSizeProps {
  height?: string;
  width?: string;
}
