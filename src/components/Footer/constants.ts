import {
  FaceBookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
} from "@src/styles/icons";

export const TOP_CATEGORIES = [
  { title: "Laptops", baseUrl: "laptops", arName: "لابتوبات" },
  { title: "Mobiles", baseUrl: "mobiles", arName: "جوالات" },
  { title: "Headphones", baseUrl: "headphones", arName: "سماعات" },
  { title: "Accessories", baseUrl: "accessories", arName: "اكسسوارات" },
  { title: "Camera", baseUrl: "cameras", arName: "كاميرات" },
  { title: "iPads", baseUrl: "tablets/brand/apple", arName: "أجهزة لوحية" },
  { title: "Cars", baseUrl: "cars", arName: "سيارات" },
];

export const QUICK_ACTIONS = [
  {
    title: "Sell",
    baseUrl: "sell",
    arName: "البيع في سوم",
    ariaLabelEn: "Navigate to selling",
    ariaLabelAr: "انتقل للبيع",
  },
  {
    title: "Shipping",
    baseUrl: "sell/shipping",
    arName: "طريقة الشحن",
    ariaLabelEn: "Navigate to shipping",
    ariaLabelAr: "انتقل لطريقة الشحن",
  },
  {
    title: "Process Sales",
    baseUrl: "sell/sale",
    arName: "خطوات البيع",
    ariaLabelEn: "Navigate to sales process",
    ariaLabelAr: "انتقل لخطوات البيع",
  },
  {
    title: "Blog",
    baseUrl: "blog",
    arName: "المدونة",
    ariaLabelEn: "Navigate to blog",
    ariaLabelAr: "انتقل للمدونة",
  },
  {
    title: "Contact Us",
    baseUrl: "https://api.whatsapp.com/send?phone=966920035039",
    arName: "تواصل معنا",
    isExternal: true,
    ariaLabelEn: "Contact us on WhatsApp",
    ariaLabelAr: "تواصل معنا على واتساب",
  },
  {
    title: "Privacy Policy",
    baseUrl: "privacy-policy",
    arName: "السياسة والخصوصية",
    ariaLabelEn: "Privacy Policy",
    ariaLabelAr: "سياسة الخصوصية",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    id: "facebookIcon",
    name: "Facebook",
    icon: FaceBookIcon,
    link: "https://www.facebook.com/share/Fyx7stVSnvDNCkto/?mibextid=qi2Omg",
  },
  {
    id: "xIcon",
    name: "X",
    icon: XIcon,
    link: "https://x.com/Soum_online",
  },
  {
    id: "instagramIcon",
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/soum_online?igsh=NXU1a241OHBiN3M4",
  },
  {
    id: "tiktokIcon",
    name: "TikTok",
    icon: TikTokIcon,
    link: "https://www.tiktok.com/@soum_online",
  },
  {
    id: "linkedInIcon",
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/company/soum-sa",
  },
];
