import { useEffect, useLayoutEffect } from "react";

import { isBrowser } from "@ui/lego/utils/isBrowser";

export const useIsomorphicLayoutEffect = isBrowser
  ? useLayoutEffect
  : useEffect;
