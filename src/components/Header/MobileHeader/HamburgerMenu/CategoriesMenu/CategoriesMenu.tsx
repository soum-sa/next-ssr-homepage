import { useLocale, useTranslations } from "next-intl";
import { cx } from "@panda-styled-system/css";

import { Link, usePathname } from "@src/i18n/routing";

import { LoginButton } from "@src/components/LoginButton";

import {
  FourSquaresIcon,
  RightChevronIcon,
  CoinsIcon,
  MessageEditIcon,
  LangChangeIcon,
} from "@src/styles/icons";

import {
  nav,
  nav__heading,
  nav__categories_list,
  nav__categories_list_button,
  nav__extra_list,
  lang__change,
  border_bottom,
  auth,
  auth__login,
  auth__heading,
} from "./Categories.styled";
import { GetCategoryListModel } from "@src/types";
import { useCategoryUtils } from "@src/hooks/useCategoryUtils";

type CategoriesMenuProps = {
  categories: GetCategoryListModel[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const CategoriesMenu = ({
  categories,
  setSelectedCategory,
}: CategoriesMenuProps) => {
  const t = useTranslations("mobileHeader");

  const seoTranslations = useTranslations("seo");

  const locale = useLocale();

  const pathname = usePathname();

  const { displayName } = useCategoryUtils();

  return (
    <>
      <div className={auth}>
        <h3 className={auth__heading}>{t("welcomeToSoum")}</h3>
        <LoginButton className={auth__login} />
      </div>

      <nav className={nav}>
        <h2 className={nav__heading(false)}>
          <span>
            <FourSquaresIcon />
          </span>
          {t("categories")}
        </h2>

        <ul className={cx(border_bottom, nav__categories_list)} role="list">
          <>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  aria-label={seoTranslations("categoryIcon.linkText", {
                    arName: category.arName,
                    enName: category.name,
                  })}
                  type="button"
                  className={nav__categories_list_button}
                  onClick={() => {
                    setSelectedCategory(category.id);
                  }}
                  role="listitem"
                >
                  <span>{displayName(category)}</span>
                  <RightChevronIcon />
                </button>
              </li>
            ))}
          </>
        </ul>

        <ul className={nav__extra_list}>
          <li className={border_bottom}>
            <span>
              <CoinsIcon />
            </span>
            <Link href="/sell">{t("sell")}</Link>
          </li>

          <li className={border_bottom}>
            <span>
              <MessageEditIcon />
            </span>
            <Link href="/blog">{t("blog")}</Link>
          </li>

          <li className={border_bottom}>
            <LangChangeIcon />
            <Link
              role="button"
              className={lang__change}
              locale={locale.includes("ar") ? "en" : "ar"}
              href={pathname}
            >
              <span>{t("lang")}</span>
              <span>{t("language")}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default CategoriesMenu;
