import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { InView } from 'react-intersection-observer';

import { MobileModelCard } from '@src/components/Product/ModelCard/Mobile/MobileModelCard';
import { HomepageDataResponse } from '@data-interface/contracts';

import {
  mobileMostSoldContainerStyle,
  mobileMostSoldProductsContainerStyle,
  mobileMostSoldProductsGroupStyle,
  mobileMostSoldTitleHighlightStyle,
  mobileMostSoldTitleStyle,
} from './MobileMostSoldDevicesCollection.styled';

type MobileMostDevicesSoldCollectionProps = {
  products: HomepageDataResponse['mostSoldModels'];
};

export const MobileMostSoldDevicesCollection = ({ products }: MobileMostDevicesSoldCollectionProps) => {
  const t = useTranslations('mostSoldDevicesCollection');

  const title = useMemo(
    () =>
      t.rich('mobile.MostSoldDevicesCollectionTitle', {
        highlight: (chunks) => <span className={mobileMostSoldTitleHighlightStyle}>{chunks}</span>,
      }),
    [t]
  );

  const chunkedProducts = useMemo(() => {
    const chunkSize = 3;
    const chunks = [];
    for (let i = 0; i < products.length; i += chunkSize) {
      chunks.push(products.slice(i, i + chunkSize));
    }
    return chunks;
  }, [products]);

  return (
    <div className={mobileMostSoldContainerStyle}>
      <h2 className={mobileMostSoldTitleStyle}>{title}</h2>
      <div className={mobileMostSoldProductsContainerStyle}>
        {chunkedProducts.map((groupProducts, index) => (
          <InView key={`group-${index}`} triggerOnce>
            <div className={mobileMostSoldProductsGroupStyle}>
              {groupProducts.map(({ id, arName, enName, modelIcon }) => (
                <MobileModelCard key={id} id={id} arName={arName} enName={enName} modelIcon={modelIcon} />
              ))}
            </div>
          </InView>
        ))}
      </div>
    </div>
  );
};
