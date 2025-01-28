import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@src/i18n/routing";

export const i18nMiddleware = (request: NextRequest): NextResponse =>
  createMiddleware(routing)(request);

export default async function middleware(
  request: NextRequest
): Promise<NextResponse> {
  const response = i18nMiddleware(request);

  return response;
}

export const config = {
  matcher:
    "/((?!api|_next/.*|favicon.*|robots.txt|images/.*|svgs/.*|browserconfig.xml|logo.png|service-worker.js).*)",
};
