import React from "react";

import * as icons from "./Icons";
import { IconProps } from "./Icons.types";

export type { IconNames } from "./Icons.types";

export function Icon(props: IconProps): React.ReactElement {
  const { name, width, height, role, "aria-label": ariaLabel } = props;
  const SVG = icons[name];

  return (
    <SVG width={width} height={height} role={role} aria-label={ariaLabel} />
  );
}
