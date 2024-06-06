import { AppSessionType } from "@/redux/reduxTypes";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { sessionName } from "./consts";
import { decrypt, encrypt, setExpirationTime } from "./functions";

export async function setSessionCookies(session: AppSessionType) {
  const expires = setExpirationTime(1);
  const encriptedSession = await encrypt({ session, expires });

  cookies().set(sessionName, encriptedSession, { expires, httpOnly: true });
}

export async function removeSessionCookies() {
  cookies().set(sessionName, "", { expires: new Date(0) });
}

export async function getSession(): Promise<{session: AppSessionType} | null> {
  const session = cookies().get(sessionName)?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get(sessionName)?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  parsed.expires = setExpirationTime(1);
  const res = NextResponse.next();
  res.cookies.set({
    name: sessionName,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}