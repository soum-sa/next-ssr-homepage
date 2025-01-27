import React from "react";

import { MediaQueryWrapperProps } from "./MediaQueryWrapper.types";
import { mediaQueryWrapper } from "./MediaQueryWrapper.styles";

export function MediaQueryWrapper(props: MediaQueryWrapperProps) {
  const { mobile, desktop, tablet } = props;
  const classes = mediaQueryWrapper({});

  return (
    <React.Fragment>
      {mobile && <div className={classes.mobile}>{mobile}</div>}
      {tablet && <div className={classes.tablet}>{tablet}</div>}
      {desktop && <div className={classes.desktop}>{desktop}</div>}
    </React.Fragment>
  );
}
