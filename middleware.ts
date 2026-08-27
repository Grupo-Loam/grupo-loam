import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname =
    request.headers.get("host")?.split(":")[0].toLowerCase() || "";

  const isMenuDomain =
    hostname === "menu-espresso.grupoloam.com" ||
    hostname === "menu-sarita.grupoloam.com";

  if (isMenuDomain) {
    const url = request.nextUrl.clone();

    if (url.pathname === "/") {
      url.pathname = "/menu";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};