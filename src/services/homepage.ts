import { HomepageDataResponse } from "@src/contracts";
import { unwrapResponse } from "@src/infra/http";

export const getHomepageData = async () => {
  const data = await fetch(
    "https://api-staging.development.soum.sa/homepage/data",
    { next: { revalidate: 60 * 10 } }
  );
  const resp = await data.json();
  const unwrapped = unwrapResponse(resp);

  return unwrapped as HomepageDataResponse;
};
