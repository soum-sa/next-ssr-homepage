export interface BaseShareProps {
  /** URL of webpage shared. */
  url: string;
  description?: string;
}

export enum SocialPlatforms {
  Facebook,
  Twitter,
  WhatsApp,
}
