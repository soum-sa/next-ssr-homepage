export interface Category {
  title: string;
  baseUrl: string;
  arName: string;
}

export interface QuickAction extends Category {
  isExternal?: boolean;
  ariaLabelEn?: string;
  ariaLabelAr?: string;
}

export interface SocialMediaLink {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
}
