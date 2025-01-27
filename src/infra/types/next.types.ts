import type { GetServerSidePropsContext, NextPage } from "next";
import { AppProps as NextAppProps } from "next/app";

type AppProps = NextAppProps<{ direction: "ltr" | "rtl" }>;

export type NextPageWithLayoutProps = React.ReactNode;

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: NextPageWithLayoutProps) => React.ReactNode;
};

export interface GetServerSidePropsContextWithDirection
  extends GetServerSidePropsContext {
  direction: "ltr" | "rtl";
}
