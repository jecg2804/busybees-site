import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';
import { routing } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Refrescar sesión de Supabase en cada request
  const supabaseResponse = await updateSession(request);

  // Copiar cookies de Supabase al response de next-intl
  const intlResponse = intlMiddleware(request);

  // Transferir cookies de sesión de Supabase al response final
  supabaseResponse.cookies.getAll().forEach((cookie) => {
    intlResponse.cookies.set(cookie.name, cookie.value);
  });

  // Proteger rutas de admin: redirigir a login si no autenticado
  const isAdminRoute = pathname.includes('/admin') && !pathname.includes('/admin/login');
  if (isAdminRoute) {
    // Verificar si hay sesión activa via cookie
    const hasSession = request.cookies.getAll().some(
      (c) => c.name.startsWith('sb-') && c.name.endsWith('-auth-token')
    );
    if (!hasSession) {
      const locale = pathname.startsWith('/en') ? 'en' : 'es';
      const loginUrl = new URL(`/${locale}/admin/login`, request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return intlResponse;
}

export const config = {
  matcher: ['/', '/(es|en)/:path*'],
};
