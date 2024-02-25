import { SignJWT, jwtVerify } from "jose";

export async function encrypt(payload: any) {
  const secretKey = "secret";
  const key = new TextEncoder().encode(secretKey);

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}
