import { css } from "@panda-styled-system/css";

// import { Footer } from "@src/components/Footer";
import { Header } from "@src/components/Header";
// import { HeaderBanner } from "@src/components/HeaderBanner";

type PublicRootLayoutProps = {
  children: React.ReactNode;
};

export default async function HomepageLayout({
  children,
}: PublicRootLayoutProps) {
  return (
    <>
      <Header />
      {/* <HeaderBanner /> */}
      <section className={sectionStyles}>
        <main className={css({ flex: 1 })}>{children}</main>
      </section>
      {/* <FooterBanner />
      <Footer /> */}
    </>
  );
}

const mainContainer = "1066px";
const pageWidth = "1200px";

const sectionStyles = css({
  width: "100%",
  paddingInline: [2, 2, 2, 0],
  maxWidth: [mainContainer, mainContainer, mainContainer, pageWidth],
  flex: 1,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
});
