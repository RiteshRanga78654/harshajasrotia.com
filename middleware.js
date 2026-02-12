import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken"; // Remove this, it doesn't work in Edge!

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Instead of jwt.verify (which fails in Edge), 
    // for now, just check if the token exists.
    // To properly verify, use the 'jose' library.
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};