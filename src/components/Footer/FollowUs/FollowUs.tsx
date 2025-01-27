"use client";

import { useTranslations } from "next-intl";

import { SOCIAL_MEDIA_LINKS } from "../constants";
import { SocialMediaLink } from "../Footer.types";
import { FooterLegalInformation } from "../FooterLegalInformation";
import {
  followUsTitle,
  socialMediaIcon,
  socialMediaIcons,
} from "./FollowUs.styled";
import { MediaQueryWrapper } from "@src/styles/components";

export function FollowUs() {
  const t = useTranslations("footer");
  const seoTranslations = useTranslations("seo");

  return (
    <div>
      <p className={followUsTitle}>{t("followUs")}</p>
      <div className={socialMediaIcons}>
        {SOCIAL_MEDIA_LINKS.map(
          ({ id, name, icon: Icon, link }: SocialMediaLink) => (
            <a
              key={name}
              href={link}
              className={socialMediaIcon}
              target="_blank"
              rel="noreferrer"
              aria-label={seoTranslations(`${id}.linkText`)}
            >
              <Icon aria-label={seoTranslations(`${id}.linkText`)} />
            </a>
          )
        )}
      </div>
      <MediaQueryWrapper mobile={<FooterLegalInformation />} />
    </div>
  );
}
