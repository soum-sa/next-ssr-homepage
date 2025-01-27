"use client";

import { LoginButton } from "@src/components/LoginButton";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

import { MediaQueryWrapper } from "@src/styles/components";
import { appBoundary } from "@src/styles/primitives";
import CategoryCarousal from "../CategoryCarousel";

export function Header() {
  return (
    <>
      <div className={appBoundary}>
        <MediaQueryWrapper
          mobile={<MobileHeader />}
          tablet={<DesktopHeader nonAuthComponent={<LoginButton />} />}
        />
      </div>

      <div id="categories-section">
        <CategoryCarousal />
      </div>
    </>
  );
}
