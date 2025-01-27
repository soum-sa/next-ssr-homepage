import { ParsedUrlQuery } from "querystring";

export const getCurrentPage = (page: ParsedUrlQuery["Params"]) => {
  return parseInt(String(page)) || 1;
};
