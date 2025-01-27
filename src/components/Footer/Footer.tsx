'use client';

import { useTranslations } from 'next-intl';

import {
  footerContainer,
  footerCopyrightSection,
  footerDivider,
  footerInformationContainer,
  footerInformationSection,
  footerPaymentSection,
} from './Footer.styled';
import { FooterCategories } from './Categories';
import { QuickActions } from './QuickActions';
import { FollowUs } from './FollowUs/FollowUs';
import { FooterLogoSection } from './FooterLogoSection';
import { DownloadApp } from './DownloadApp';
import { PaymentSection } from './PaymentSection';
import { InView } from 'react-intersection-observer';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <InView as="section" className={footerContainer}>
      <div className={footerDivider}>
        <div className={footerInformationContainer}>
          <FooterLogoSection />

          <FooterCategories />

          <QuickActions />

          <div className={footerInformationSection}>
            <DownloadApp />
            <div className={footerPaymentSection}>
              <PaymentSection />
              <FollowUs />
            </div>
          </div>
        </div>
      </div>
      <div className={footerCopyrightSection}>© {t('copyRight')}</div>
    </InView>
  );
}
