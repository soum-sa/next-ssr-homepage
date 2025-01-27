import { GetServerSidePropsContext } from "next";
import isEmpty from "lodash.isempty";
import { getCurrentEnvironment } from "@src/infra/helpers/utils";

export function getCurrentOrigin(
  host?: GetServerSidePropsContext["req"]["headers"]["host"]
) {
  const environment = getCurrentEnvironment();

  const isServer = environment === "SERVER";
  const isBrowser = environment === "BROWSER";

  if (isEmpty(host) && isServer) {
    throw new Error("Request cannot be empty on server");
  }

  if (isServer) {
    const protocol = host?.includes("localhost") ? "http" : "https";
    const origin = protocol + "://" + host;
    return origin;
  }

  if (isBrowser) {
    return window.location.origin;
  }

  throw new Error("Unkown environment");
}
