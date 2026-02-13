"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Chart from "chart.js/auto";
import {
  LayoutDashboard,
  User,
  Calendar,
  LogOut,
  Menu,
  X
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();
  const canvasRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  /* ================= Chart Setup ================= */
  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(59,130,246,0.4)");
    gradient.addColorStop(1, "rgba(59,130,246,0)");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Users Growth",
          data: [400, 800, 650, 1200, 900, 1500],
          borderColor: "#3b82f6",
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: "#94a3b8" } },
          y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#94a3b8" } }
        }
      }
    });

    return () => chart.destroy();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/v1/auth/logout", { method: "POST", credentials: "include" });
    router.replace("/login");
  };

  return (
    <div className="min-h-screen bg-[#b3b3b3] text-white flex overflow-hidden">
      
      {/* 📱 Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ================= Sidebar ================= */}
      <aside className={`fixed md:relative z-50 h-[900px] bg-[#cc0000] backdrop-blur-xl border-r border-white/10 p-6 transition-all duration-300 ${
        sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0 md:w-20"
      }`}>
        <div className="flex justify-between items-center mb-10">
          {sidebarOpen && (
            <h1 className="text-[18px] font-bold tracking-tighter">
              HARSHA JASROTIA
            </h1>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-white/5 rounded-lg">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="space-y-2">
          <SidebarItem href="/dashboard" icon={<LayoutDashboard size={20}/>} label="Overview" open={sidebarOpen} />
          <SidebarItem href="/dashboard/events" icon={<Calendar size={20}/>} label="Events" open={sidebarOpen} />
          <SidebarItem href="/dashboard/blog" icon={<User size={20}/>} label="Blog" open={sidebarOpen} />
        </nav>

        <button
          onClick={handleLogout}
          className="absolute bottom-8 left-6 right-6 flex items-center justify-center gap-3 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-3 rounded-xl transition-all duration-300"
        >
          <LogOut size={18} />
          {sidebarOpen && <span className="font-semibold">Logout</span>}
        </button>
      </aside>

      {/* ================= Main Content ================= */}
      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-8">
        {/* Mobile Header Toggle */}
        <div className="md:hidden mb-6 flex justify-between items-center">
           <h1 className="text-lg font-bold">Admin</h1>
           <button onClick={() => setSidebarOpen(true)} className="p-2 bg-white/5 rounded-lg"><Menu /></button>
        </div>

        <div className="max-w-7xl mx-auto">
          <header className="mb-10">
            <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
            <p className="text-slate-400 mt-1">Key metrics and user growth</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <StatCard title="Total Users" value="1,284" trend="+12%" />
            <StatCard title="Active Events" value="24" trend="Live" />
            <StatCard title="Total Revenue" value="₹3.2L" trend="+8%" />
          </div>

          <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-lg font-semibold mb-6">User Growth Analytics</h3>
            <div className="h-[300px] w-full">
              <canvas ref={canvasRef}></canvas>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ================= Helper Components (Defined here to fix your error) ================= */

function SidebarItem({ icon, label, open, href }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
        isActive 
          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
          : "hover:bg-white/5 text-slate-400 hover:text-white"
      }`}
    >
      <span className={isActive ? "text-white" : "text-blue-500"}>{icon}</span>
      {open && <span className="font-medium">{label}</span>}
    </Link>
  );
}

function StatCard({ title, value, trend }) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-blue-500/50 transition-colors group">
      <div className="flex justify-between items-start">
        <h4 className="text-slate-400 text-sm font-medium uppercase tracking-wider">{title}</h4>
        <span className="text-xs font-bold px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg">{trend}</span>
      </div>
      <p className="text-3xl font-bold mt-3 group-hover:text-blue-400 transition-colors">{value}</p>
    </div>
  );
}