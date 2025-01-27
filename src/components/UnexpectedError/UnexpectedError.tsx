import { css } from "@panda-styled-system/css";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { useRouter } from "@src/i18n/routing";
import Error500Icon from "@public/Error500Icon.svg";

import {
  errorContainerStyles,
  errorIconBoxStyles,
  errorBodyStyles,
  errorCaptionStyles,
  errorTitleStyles,
  errorMessageStyles,
  refreshButtonStyles,
  homeButtonStyles,
} from "./UnexpectedError.styled";
type GlobalErrorProps = {
  error: Error;
  reset: () => void;
};

export function UnexpectedError({ reset }: GlobalErrorProps) {
  const router = useRouter();
  const t = useTranslations("error");

  function goToHome() {
    router.push("/");
  }

  return (
    <div className={errorContainerStyles}>
      <div className={errorIconBoxStyles}>
        <Image src={Error500Icon} alt="Unexpected error" />
      </div>
      <div className={css({ textAlign: "center", marginBlockEnd: 1 })}>
        <div
          className={css({ display: "flex", flexDirection: "column", gap: 2 })}
        >
          <p className={errorTitleStyles}>{t("oops")}</p>
          <p className={errorCaptionStyles}>{t("wentWrong")}</p>
          <p className={errorMessageStyles}>{t("findWhatNeed")}</p>
          <div className={errorBodyStyles}>
            <div className={css({ display: "flex" })}>
              <button className={homeButtonStyles} onClick={goToHome}>
                {t("home")}
              </button>
            </div>
            <div className={css({ display: "flex" })}>
              <button className={refreshButtonStyles} onClick={() => reset()}>
                {t("refreshThePage")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
