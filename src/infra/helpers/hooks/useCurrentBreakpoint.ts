import { useWindowSize } from "usehooks-ts";

export const Breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1200,
} as const;

export type Breakpoint = keyof typeof Breakpoints;

export const DeviceTypes = {
  SMALL_MOBILE: "SMALL_MOBILE",
  WIDE_MOBILE: "WIDE_MOBILE",
  TABLET: "TABLET",
  DESKTOP: "DESKTOP",
} as const;

export type DeviceType = keyof typeof DeviceTypes;

export function useCurrentBreakpoint(): DeviceType {
  const { width } = useWindowSize();

  if (width < Breakpoints.mobile) return DeviceTypes.SMALL_MOBILE;
  if (width < Breakpoints.tablet) return DeviceTypes.WIDE_MOBILE;
  if (width < Breakpoints.desktop) return DeviceTypes.TABLET;

  return DeviceTypes.DESKTOP;
}
