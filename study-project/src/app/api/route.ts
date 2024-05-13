import { NextRequest } from "next/server";

export async function GET() {
  const response = await fetch('https://api.origamid.online/vendas', {
    headers: {
      apikey: 'ORIGAMID123456',
    },
  });
  const vendas = await response.json();

  return Response.json(vendas);
}

export async function POST(request: NextRequest) {
  const param = request.nextUrl.searchParams.get('busca');
  const body = await request.json();

  return Response.json({ body });
}