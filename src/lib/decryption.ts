import { SignJWT, jwtVerify } from "jose";

export async function decrypt(input: string): Promise<any> {
  const secretKey = "secret";
  const key = new TextEncoder().encode(secretKey);

  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
