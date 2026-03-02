import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-brand-gray-bg w-full">
      {/* Sidebar Placeholder */}
      <aside className="w-64 bg-brand-black text-white p-6 hidden md:flex flex-col">
        <h2 className="text-xl font-bold mb-6 text-brand-red">Portal Jabalí</h2>
        <nav className="flex flex-col gap-2">
          <span className="opacity-50 text-sm">Dashboard Drivers</span>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
