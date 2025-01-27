import { DeviceTypes, useCurrentBreakpoint } from "./useCurrentBreakpoint";

const StaticImagePresets = {
  [DeviceTypes.SMALL_MOBILE]: "static_resources_web_small",
  [DeviceTypes.WIDE_MOBILE]: "static_resources_web_medium",
  [DeviceTypes.TABLET]: "static_resources_web_large",
  [DeviceTypes.DESKTOP]: "static_resources_web_desktop",
} as const;

type StaticImagePresets = keyof typeof StaticImagePresets;
export type StaticImagePresetValues =
  (typeof StaticImagePresets)[StaticImagePresets];

export function useStaticImagePresets() {
  const currentBreakPoint = useCurrentBreakpoint();
  return StaticImagePresets[currentBreakPoint];
}
