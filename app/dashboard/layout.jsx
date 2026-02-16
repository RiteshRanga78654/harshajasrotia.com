
"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  User,
  Calendar,
  LogOut,
  Menu,
  X,
  MessageSquare
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch("/api/v1/auth/logout", { method: "POST", credentials: "include" });
    router.replace("/login");
  };

  return (
    <div className="flex h-screen w-full bg-[#b3b3b3] overflow-hidden">
      
      {/* 📱 Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ================= Sidebar ================= */}
      <aside className={`fixed md:relative z-50 h-full bg-[#f4f4f4] border-r border-white/10 p-6 transition-all duration-300 flex flex-col ${
        sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0 md:w-20"
      }`}>
        <div className="flex justify-between items-center mb-10">
          {sidebarOpen && (
            <h1 className="text-[18px] font-bold text-[#cc0000] tracking-tight">
              HARSHA JASROTIA
            </h1>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-black/5 rounded-lg text-gray-500">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarItem href="/dashboard" icon={<LayoutDashboard size={20}/>} label="Overview" open={sidebarOpen} active={pathname === "/dashboard"} />
          {/* <SidebarItem href="/dashboard/events" icon={<Calendar size={20}/>} label="Events" open={sidebarOpen} active={pathname === "/dashboard/events"} /> */}
          <SidebarItem href="/dashboard/blog" icon={<User size={20}/>} label="Blog" open={sidebarOpen} active={pathname === "/dashboard/blog"} />
          <SidebarItem href="/dashboard/testimonial" icon={<MessageSquare size={20}/>} label="Testimonials" open={sidebarOpen} active={pathname === "/dashboard/testimonial"} />
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto flex items-center justify-center gap-3 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-3 rounded-xl transition-all duration-300"
        >
          <LogOut size={18} />
          {sidebarOpen && <span className="font-semibold">Logout</span>}
        </button>
      </aside>

      {/* ================= Main Content ================= */}
      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-8">
        {/* Mobile Header */}
        <div className="md:hidden mb-4 flex justify-between items-center bg-[#f4f4f4] p-3 rounded-xl">
           <h1 className="text-sm font-bold text-[#cc0000]">HARSHA JASROTIA</h1>
           <button onClick={() => setSidebarOpen(true)} className="p-2 text-gray-800"><Menu size={20} /></button>
        </div>

        <div className="max-w-7xl mx-auto text-white">
          {children}
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, open, href, active }) {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
        active 
          ? "bg-[#cc0000] text-white shadow-lg" 
          : "hover:bg-gray-200 text-gray-500 hover:text-[#cc0000] "
      }`}
    >
      <span className={active ? "text-white" : "text-[#cc0000]"}>{icon}</span>
      {open && <span className="font-medium">{label}</span>}
    </Link>
  );
}

