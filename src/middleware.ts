import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname, search, origin, basePath } = req.nextUrl;
  const redirectUrl = new URL(`${basePath}/subscribe/my`, origin);
  if (pathname === "/") {
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
