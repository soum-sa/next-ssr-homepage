import { HomepageDataResponse } from '@data-interface/contracts';
import { MobileBanners } from './MobileBanners';

const MobileHomepageUpperBanners = ({ banners }: { banners: HomepageDataResponse['banners'] }) => {
  return <MobileBanners banners={banners} />;
};

export default MobileHomepageUpperBanners;
