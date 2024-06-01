import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret";
const sessionName = "suppliers-insghtlab-session";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 min from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData: FormData) {
  const user = { email: formData.get("email"), name: "John" };

  const expires = new Date(Date.now() + 60 * 1000);
  const session = await encrypt({ user, expires });

  cookies().set(sessionName, session, { expires, httpOnly: true });
}

export async function logout() {
  cookies().set(sessionName, "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get(sessionName)?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get(sessionName)?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 60 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: sessionName,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}