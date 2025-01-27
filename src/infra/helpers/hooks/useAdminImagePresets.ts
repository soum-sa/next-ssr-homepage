import { DeviceTypes, useCurrentBreakpoint } from "./useCurrentBreakpoint";

const AdminImagePresets = {
  [DeviceTypes.SMALL_MOBILE]: "admin_resources_web_small",
  [DeviceTypes.WIDE_MOBILE]: "admin_resources_web_medium",
  [DeviceTypes.TABLET]: "admin_resources_web_large",
  [DeviceTypes.DESKTOP]: "admin_resources_web_desktop",
} as const;

type AdminImagePresets = keyof typeof AdminImagePresets;
export type AdminImagePresetValues =
  (typeof AdminImagePresets)[AdminImagePresets];

export function useAdminImagePresets() {
  const currentBreakPoint = useCurrentBreakpoint();
  return AdminImagePresets[currentBreakPoint];
}
