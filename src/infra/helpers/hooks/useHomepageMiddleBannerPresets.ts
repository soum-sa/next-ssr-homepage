import { DeviceTypes, useCurrentBreakpoint } from "./useCurrentBreakpoint";

const HomepageMiddleBannerPresets = {
  [DeviceTypes.SMALL_MOBILE]: "homepage_middle_banner_mobile",
  [DeviceTypes.WIDE_MOBILE]: "homepage_middle_banner_mobile",
  [DeviceTypes.TABLET]: "homepage_middle_banner_desktop",
  [DeviceTypes.DESKTOP]: "homepage_middle_banner_desktop",
} as const;

type HomepageMiddleBannerPresets = keyof typeof HomepageMiddleBannerPresets;
export type HomepageMiddleBannerPresetValues =
  (typeof HomepageMiddleBannerPresets)[HomepageMiddleBannerPresets];

export function useHomepageMiddleBannerPresets() {
  const currentBreakPoint = useCurrentBreakpoint();
  return HomepageMiddleBannerPresets[currentBreakPoint];
}
