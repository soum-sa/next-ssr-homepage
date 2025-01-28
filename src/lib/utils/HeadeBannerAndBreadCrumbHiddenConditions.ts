export const HeaderBannerAndBreadCrumbHiddenConditions = (pathname: string) => {
  return (
    pathname?.startsWith("/seller") ||
    pathname?.startsWith("/en/seller") ||
    pathname?.startsWith("/collection") ||
    pathname?.startsWith("/en/collection") ||
    pathname === "/" ||
    pathname === "/en"
  );
};
