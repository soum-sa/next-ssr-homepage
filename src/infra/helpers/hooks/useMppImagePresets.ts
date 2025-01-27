import { DeviceTypes, useCurrentBreakpoint } from "./useCurrentBreakpoint";

const MppImagePresets = {
  [DeviceTypes.SMALL_MOBILE]: "mpp_large_image_mobile",
  [DeviceTypes.WIDE_MOBILE]: "mpp_web_medium",
  [DeviceTypes.TABLET]: "mpp_web_large",
  [DeviceTypes.DESKTOP]: "mpp_large_image_desktop",
} as const;

type MppImagePresets = keyof typeof MppImagePresets;
export type MppImagePresetValues = (typeof MppImagePresets)[MppImagePresets];

export function useMppImagePresets() {
  const currentBreakPoint = useCurrentBreakpoint();

  return MppImagePresets[currentBreakPoint];
}
