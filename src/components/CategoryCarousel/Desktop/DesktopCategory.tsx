import { InView } from 'react-intersection-observer';
import { cx } from '@panda-styled-system/css';
import { useTranslations } from 'next-intl';

import { Link as NextLink } from '@src/i18n/routing';
import { categoryItemStyle, emblaSlideStyle, iconStyle, labelStyle, selectedItemStyle } from './DesktopCategory.styled';

interface Category {
  id: string;
  name: string;
  arName: string;
  icon: string;
  position: number;
  miniIcon: string;
}

type DesktopCategoryProps = {
  category: Category;
  href: string;
  isSelected: boolean;
  isRTL: boolean;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const DesktopCategory = ({ category, href, isSelected, isRTL, Icon }: DesktopCategoryProps) => {
  const seoTranslations = useTranslations('seo');

  function handleClick() {
    window?.dataLayer?.push({
      event: 'select_category',
      category: category.name,
    });
    window?.webengage.track('Select Category Listing', {
      'category ID': category.id,
      'category name': category.name,
    });
  }

  return (
    <InView as="div" key={category.id} className={emblaSlideStyle}>
      <NextLink
        href={href}
        aria-label={seoTranslations('categoryIcon.linkText', {
          arName: category.arName,
          enName: category.name,
        })}
        title={isRTL ? `${category.arName} مستعملة` : `Used ${category.name}`}
      >
        <div
          className={isSelected ? cx(categoryItemStyle, selectedItemStyle) : categoryItemStyle}
          onClick={handleClick}
        >
          <div className={iconStyle}>
            <Icon
              role="img"
              aria-label={seoTranslations('categoryIcon.imgText', {
                arName: category.arName,
                enName: category.name,
              })}
              width={24}
            />

            <span className={labelStyle}>{isRTL ? category.arName : category.name}</span>
          </div>
        </div>
      </NextLink>
    </InView>
  );
};

export default DesktopCategory;
