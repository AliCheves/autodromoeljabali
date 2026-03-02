/**
 * AUTH LAYOUT — Phase 2
 * 
 * This layout wraps all authentication pages:
 * - /login
 * - /registro
 * - /recuperar-contrasena
 * 
 * It intentionally removes the main Navbar and Footer
 * to provide a focused authentication experience.
 * 
 * Phase 2 integration:
 * - Supabase Auth (supabase.auth.signIn / signUp)
 * - NextAuth or custom JWT sessions
 * - Middleware route protection (see src/middleware.ts)
 */

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brand-gray-bg flex items-center justify-center">
      {children}
    </div>
  );
}
