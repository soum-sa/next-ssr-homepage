import { HomepageDataResponse } from "@src/contracts";
import { unwrapResponse } from "@src/infra/http";

export const getHomepageData = async () => {
  const data = await fetch(
    "https://api-staging.development.soum.sa/homepage/data"
  );
  const resp = await data.json();
  const unwrapped = unwrapResponse(resp);

  return unwrapped as HomepageDataResponse;
};
