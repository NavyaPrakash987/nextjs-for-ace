import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secureCookie: process.env.NEXTAUTH_URL?.startsWith("https://") || false,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname, origin } = req.nextUrl;

  if (session) {
    if (pathname === "/") {
      return NextResponse.redirect(`${origin}/protected`);
    }
    if (pathname === "/auth/signin") {
      return NextResponse.redirect(`${origin}/protected`);
    }
  }

  if (!session && pathname !== "/auth/signin") {
    return NextResponse.redirect(`${origin}/auth/signin`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/*", "/protected", "/auth/signin"],
};
