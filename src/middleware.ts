import { NextRequest, NextResponse } from "next/server";
import { getSession, updateSession } from "@/utils/sessionManager";
import { redirect } from "next/navigation";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const currSession = await getSession();
  
  if (!pathname.startsWith('/login')) { 
    if (!currSession || !(currSession.session.logged)) return NextResponse.redirect(new URL('/login', request.url));

    if (pathname.startsWith('/supplier')) {
      if (!(currSession.session.user!.addSupplier)) return NextResponse.redirect(new URL('/', request.url));
    }
  } else {
    if (currSession && currSession.session.logged) return NextResponse.redirect(new URL('/', request.url));
  }
  return await updateSession(request);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
}