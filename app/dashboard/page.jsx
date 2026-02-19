"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function DashboardPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Users Growth",
          data: [400, 800, 650, 1200, 900, 1500],
          borderColor: "#cc0000",
          tension: 0.4,
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
    return () => chart.destroy();
  }, []);

  return (
    <>
      <header className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#cc0000]">Welcome to Dashboard</h2>
      </header>
      <div className="bg-black/10 rounded-3xl p-6 h-[400px]">
        <canvas ref={canvasRef}></canvas>
      </div>
    </>
  );
}