// import { jwtVerify } from "jose";

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false;
  try {
    // await jwtVerify(token, new TextEncoder().encode('string_de_seguranca'), {
    //   algorithms: ['HS256']
    // });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}