// import { jwtVerify } from "jose";

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false;
  try {
    // String_de_seguranca
    // await jwtVerify(token, new TextEncoder().encode(process.env.JWL_SALT), {
    //   algorithms: ['HS256']
    // });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
