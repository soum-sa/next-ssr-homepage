import Image from "next/image";
import { css } from "@panda-styled-system/css";
import { Link } from "@src/i18n/routing";

import { Banner } from "@src/contracts";
import {
  createSafeUrl,
  getCloudImgSrc,
  joinArabicAndEnglistStringsSafely,
} from "@src/infra/helpers/utils";
import { useCloudImage } from "@src/infra/helpers/hooks";

export const MobileMiddleBannerImage = ({ banner }: { banner: Banner }) => {
  const cloudImgSrc = getCloudImgSrc(
    banner?.bannerImage ?? "",
    "homepage_middle_banner_mobile"
  );
  const { src, onError } = useCloudImage({
    src: cloudImgSrc,
    altSrc: banner?.bannerImage,
  });

  const link = banner?.bannerValue
    ? `/collection/${createSafeUrl(joinArabicAndEnglistStringsSafely([banner?.bannerName, banner?.bannerValue]))}`
    : "";

  return (
    <Link href={link}>
      <Image
        style={{ borderRadius: 5 }}
        src={src}
        onError={onError}
        className={bannerImageStyle}
        alt={banner?.bannerName ?? ""}
        width={300}
        height={233}
        unoptimized
      />
    </Link>
  );
};

const bannerImageStyle = css({
  cursor: "pointer",
  blockSize: "100%",
  inlineSize: "100%",
  objectFit: "fill",
});
