import Image from "next/image";
import { Link } from "@src/i18n/routing";
import { Banner } from "@src/contracts";

import {
  createSafeUrl,
  joinArabicAndEnglistStringsSafely,
  getCloudImgSrc,
} from "@src/infra/helpers/utils";
import { useCloudImage } from "@src/infra/helpers/hooks";

export const MobileUpperBannerImage = ({
  banner,
}: {
  banner: Banner;
  index: number;
  type: "single" | "multiple";
}) => {
  const link = banner?.bannerValue
    ? `/collection/${createSafeUrl(joinArabicAndEnglistStringsSafely([banner?.bannerName, banner?.bannerValue]))}`
    : "";

  const cloudImgSrc = getCloudImgSrc(
    banner?.bannerImage ?? "",
    "homepage_upper_banner_mobile"
  );
  const { src, onError } = useCloudImage({
    src: cloudImgSrc,
    altSrc: banner?.bannerImage,
  });

  return (
    <Link href={link}>
      <Image
        style={{ inlineSize: "100%", borderRadius: 5, marginBlockStart: 10 }}
        src={src}
        onError={onError}
        alt={banner.bannerName}
        width={325}
        height={195}
        unoptimized
        objectFit="cover"
        priority={true}
        quality={85}
      />
    </Link>
  );
};
