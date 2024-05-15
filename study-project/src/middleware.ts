import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // nova rota
  if (request.nextUrl.pathname.startsWith('/entrar')) {
    response.cookies.set('redirectUser', 'true', {
      sameSite: 'lax',
      // httpOnly: true,
      // secure: true
    })
    return NextResponse.redirect(new URL('/', request.url));
  }

  // verifica se tem o token e se está tentando entrar em /conta
  const token = request.cookies.get('token')?.value;
  if (!token && request.nextUrl.pathname.startsWith('/conta')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
