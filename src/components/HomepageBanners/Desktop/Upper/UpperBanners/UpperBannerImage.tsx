import Image from "next/image";

import { Link } from "@src/i18n/routing";
import {
  useCloudImage,
  useHomepageUpperBannerPresets,
} from "@src/infra/helpers/hooks";

import { Banner } from "@src/contracts";
import {
  createSafeUrl,
  getCloudImgSrc,
  joinArabicAndEnglistStringsSafely,
} from "@src/infra/helpers/utils";
import { BLUR_DATA_URL } from "@src/constants";

export const UpperBannerImage = ({
  banner,
  priority,
}: {
  banner: Banner;
  priority: boolean;
}) => {
  const link = banner?.bannerValue
    ? `/collection/${createSafeUrl(joinArabicAndEnglistStringsSafely([banner?.bannerName, banner?.bannerValue]))}`
    : "";

  const cloudImgSrc = getCloudImgSrc(
    banner?.bannerImage,
    useHomepageUpperBannerPresets()
  );

  const { src, onError } = useCloudImage({
    src: cloudImgSrc,
    altSrc: banner?.bannerImage,
  });

  return (
    <Link href={link}>
      <Image
        style={{
          borderRadius: 5,
          cursor: banner?.bannerName ? "pointer" : "default",
        }}
        onError={onError}
        src={src}
        alt={banner.bannerName}
        width={1200}
        height={520}
        blurDataURL={BLUR_DATA_URL}
        placeholder="blur"
        priority={priority}
        unoptimized
      />
    </Link>
  );
};
