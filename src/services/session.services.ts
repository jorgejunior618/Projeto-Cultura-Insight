"use server"

import { UserSessionType } from "@/redux/reduxTypes";
import { sleep } from "@/utils/functions";
import { removeSessionCookies, setSessionCookies } from '@/utils/sessionManager';

export async function login(username: string, password: string): Promise<UserSessionType | null> {
  await sleep(1500);
  const user: UserSessionType = { username, addSupplier: true };
  if (username === 'user' && password === 'user') user.addSupplier = false;
  else if (username !== 'admin' || password !== 'admin') return null;
  await setSessionCookies({user, logged: true});
  return user;
}
export async function logout(): Promise<boolean> {
  await sleep(1500);
  await removeSessionCookies();
  return true;
}
