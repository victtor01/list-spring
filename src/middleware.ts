import { NextRequest, NextResponse } from "next/server";
import { CookiesKeys } from "./utils/cookies-keys";

const publicPaths = ["/auth"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicRoute: boolean = publicPaths.includes(path);

  if (isPublicRoute) {
    return NextResponse.next();
  }

  const refreshToken = request.cookies.get(CookiesKeys.refreshToken);

  if (!refreshToken) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
