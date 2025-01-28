const excludedCategories = ["Cars", "Car Plates"];
const eligibleCategories = ["Mobiles", "Tablets"];

export const isEligibleForTenDaysGuarantee = ({
  isMerchant,
  categoryName,
  isHomePage = false,
}: {
  categoryName?: string;
  isMerchant?: boolean;
  isHomePage?: boolean;
}) => {
  if (isHomePage) {
    return !excludedCategories.includes(categoryName ?? "");
  }

  if (excludedCategories.includes(categoryName ?? "")) {
    return false;
  }

  return (
    isMerchant ||
    (!isMerchant && eligibleCategories.includes(categoryName ?? ""))
  );
};
