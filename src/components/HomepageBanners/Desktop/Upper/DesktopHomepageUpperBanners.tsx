import { InView } from "react-intersection-observer";

import { UpperBanners } from "./UpperBanners";
import { containerStyle } from "./DesktopHomepageUpperBanners.styled";
import { Banner } from "@src/contracts";

const DesktopHomepageUpperBanners = ({
  banners,
}: {
  banners: { en: Banner[]; ar: Banner[] };
}) => {
  return (
    <InView as="div" className={containerStyle}>
      <UpperBanners banners={banners} />
    </InView>
  );
};

export default DesktopHomepageUpperBanners;
