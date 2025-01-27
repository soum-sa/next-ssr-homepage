import { DeviceTypes, useCurrentBreakpoint } from "./useCurrentBreakpoint";

const HomepageUpperBannerPresets = {
  [DeviceTypes.SMALL_MOBILE]: "homepage_upper_banner_mobile",
  [DeviceTypes.WIDE_MOBILE]: "homepage_upper_banner_mobile",
  [DeviceTypes.TABLET]: "homepage_upper_banner_desktop",
  [DeviceTypes.DESKTOP]: "homepage_upper_banner_desktop",
} as const;

type HomepageUpperBannerPresets = keyof typeof HomepageUpperBannerPresets;
export type HomepageUpperBannerPresetValues =
  (typeof HomepageUpperBannerPresets)[HomepageUpperBannerPresets];

export function useHomepageUpperBannerPresets() {
  const currentBreakPoint = useCurrentBreakpoint();
  return HomepageUpperBannerPresets[currentBreakPoint];
}
