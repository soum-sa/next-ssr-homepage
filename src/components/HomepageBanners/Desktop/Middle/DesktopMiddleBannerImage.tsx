import { useMemo } from "react";
import Image from "next/image";

import { Banner } from "@src/contracts";
import {
  createSafeUrl,
  getCloudImgSrc,
  joinArabicAndEnglistStringsSafely,
} from "@src/infra/helpers/utils";

import { Link } from "@src/i18n/routing";

import { desktopMiddleBannerImageStyle } from "./DesktopMiddleBannerImage.styled";
import { BLUR_DATA_URL } from "@src/constants";
import {
  useHomepageMiddleBannerPresets,
  useCloudImage,
} from "@src/infra/helpers/hooks";

export const DesktopMiddleBannerImage = ({ banner }: { banner: Banner }) => {
  const bannerPresets = useHomepageMiddleBannerPresets();
  const cloudImgSrc = useMemo(
    () => getCloudImgSrc(banner.bannerImage ?? "", bannerPresets),
    [banner.bannerImage, bannerPresets]
  );
  const { src, onError } = useCloudImage({
    src: cloudImgSrc,
    altSrc: banner.bannerImage,
  });

  const link = banner?.bannerValue
    ? `/collection/${createSafeUrl(joinArabicAndEnglistStringsSafely([banner.bannerName, banner.bannerValue]))}`
    : "";

  return (
    <Link href={link ?? ""}>
      <Image
        style={{
          borderRadius: 5,
          cursor: banner?.bannerName ? "pointer" : "default",
        }}
        src={src}
        onError={onError}
        className={desktopMiddleBannerImageStyle}
        alt={banner?.bannerName ?? ""}
        width={1200}
        height={339}
        unoptimized
        blurDataURL={BLUR_DATA_URL}
        placeholder="blur"
      />
    </Link>
  );
};
