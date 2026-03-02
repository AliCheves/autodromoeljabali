import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-white w-full">
      {/* Admin Sidebar Placeholder */}
      <aside className="w-64 bg-brand-gray-bg p-6 hidden md:flex flex-col border-r border-brand-gray-border">
        <h2 className="text-xl font-bold mb-6 text-brand-black">Admin Panel</h2>
        <nav className="flex flex-col gap-2 text-brand-gray-mid">
          <span className="text-sm">Configuración</span>
        </nav>
      </aside>

      {/* Admin Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
