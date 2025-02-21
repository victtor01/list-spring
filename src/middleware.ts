import { NextRequest, NextResponse } from "next/server";

const publicPaths = ["/auth"]

export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const isPublicRoute: boolean = publicPaths.includes(path);

	const cookies = request.cookies;
	console.log(cookies);
	
	if(isPublicRoute) {
		return NextResponse.next();
	}

}

export const config = {
	matcher: [
			'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
}