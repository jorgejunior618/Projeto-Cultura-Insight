import { SignJWT, jwtVerify } from "jose";
import { key } from "./consts";

export const onlyNumbers = (str: string) => str.replace(/\D/g, "");

export const numbersToCNPJ = (str: string) => {
  const cnpj1 = str.substring(0, 2);
  const cnpj2 = str.substring(2, 5);
  const cnpj3 = str.substring(5, 8);
  const cnpj4 = str.substring(8, 12);
  const cnpj5 = str.substring(12);
  
  const cnpj = `${cnpj1}.${cnpj2}.${cnpj3}/${cnpj4}-${cnpj5}`;
  return cnpj;
};

export async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const expirationTimeMins = 60;
export const setExpirationTime = () => new Date(Date.now() + expirationTimeMins * 60 * 1000);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${expirationTimeMins} min from now`)
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
