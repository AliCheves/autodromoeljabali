/**
 * MIDDLEWARE — Phase 2 Auth Route Protection
 *
 * Uncomment and configure when integrating Supabase Auth.
 * This middleware intercepts requests to protected routes
 * and redirects unauthenticated users to /login.
 *
 * Protected route groups:
 * - /dashboard/* — pilot private area
 * - /admin/* — admin panel
 *
 * Phase 2 steps:
 * 1. npm install @supabase/ssr
 * 2. Create src/lib/supabase/middleware.ts
 * 3. Uncomment the logic below
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // TODO Phase 2: Check Supabase session cookie
  // const { data: { session } } = await supabase.auth.getSession()
  // if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};
