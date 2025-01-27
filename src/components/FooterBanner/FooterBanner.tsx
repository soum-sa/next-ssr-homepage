"use client";
import { useTranslations } from "next-intl";
import { useI18nStore } from "@src/i18n/useI18nStore";
import { Icon } from "@ui/assets/icons";
import { Box } from "@ui/components/Box";
import {
  BackgroundContainer,
  TopRings,
  BottomRings,
  CallToActionWrapper,
  Title,
} from "@src/components/shared";

import {
  Root,
  TopRingPosition,
  BottomRingPosition,
  ContentContainer,
  ContentWrapper,
  Caption,
  DownloadBox,
} from "./FooterBanner.styled";
import { InView } from "react-intersection-observer";
import { usePathname } from "next/navigation";

export function FooterBanner() {
  const { isRTL } = useI18nStore();
  const t = useTranslations("footerBanner");
  const seoTranslations = useTranslations("seo");
  const pathname = usePathname();
  const isNotificationPage =
    pathname === "/notifications" || pathname === "/en/notifications";
  if (isNotificationPage) {
    return null;
  }
  return (
    <InView>
      <Root>
        <ContentContainer>
          <ContentWrapper as="h2">
            <Title data-test-id="FooterBanner__Title">{t("title")}</Title>
            <Box cssProps={{ pt: [2, 2, 4, 4] }}>
              <Caption data-test-id="FooterBanner__Caption">
                {t("caption")}
              </Caption>
            </Box>
            <DownloadBox direction="horizontal" gap={[1, 1, 2, 2]}>
              <a
                href={`${process.env.NEXT_PUBLIC_APP_STORE_LINK}`}
                target="_blank"
                aria-label={seoTranslations("downloadAppIOS.linkText")}
              >
                <CallToActionWrapper data-test-id="FooterBanner__AppStore">
                  <Icon
                    name="AppStore"
                    role="img"
                    aria-label={seoTranslations("downloadAppIOS.imgText")}
                  />
                </CallToActionWrapper>
              </a>
              <a
                href={`${process.env.NEXT_PUBLIC_PLAY_STORE_LINK}`}
                target="_blank"
                aria-label={seoTranslations("downloadAppAndroid.linkText")}
              >
                <CallToActionWrapper data-test-id="FooterBanner__PlayStore">
                  <Icon
                    name="PlayStore"
                    width="110%"
                    role="img"
                    aria-label={seoTranslations("downloadAppAndroid.imgText")}
                  />
                </CallToActionWrapper>
              </a>
            </DownloadBox>
          </ContentWrapper>
        </ContentContainer>
        <BackgroundContainer>
          <TopRingPosition isRTL={isRTL}>
            <TopRings />
          </TopRingPosition>
          <BottomRingPosition isRTL={isRTL}>
            <BottomRings />
          </BottomRingPosition>
        </BackgroundContainer>
      </Root>
    </InView>
  );
}
