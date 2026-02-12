"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔐 If already logged in → redirect
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       router.push("/dashboard");
//     }
//   }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/v1/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.replace("/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("System error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#05070a] relative overflow-hidden font-sans">
      {/* Dynamic Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative z-10 w-full max-w-[480px] px-6 py-12">
        {/* Brand */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-white tracking-tighter mb-2">
            HARSHA<span className="text-blue-500">JASROTIA</span>
          </h1>
          <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl shadow-blue-500/10">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
            <p className="text-slate-400 font-medium">
              Access your personal dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-slate-300 ml-1">
                Email Address
              </label>
              <div className="relative mt-2">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  required
                  placeholder="name@harshajasrotia.com"
                  className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-slate-300 ml-1">
                Password
              </label>
              <div className="relative mt-2">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-12 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-xl">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50 text-lg"
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  Enter Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-slate-400 text-sm mb-2">
              Don't have an account yet?
            </p>
            <a
              href="mailto:contact@harshajasrotia.com"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-bold"
            >
              <MessageCircle size={16} className="mr-2" />
              Contact Us
            </a>
          </div>
        </div>

        <p className="text-center text-slate-600 text-xs mt-10 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Harsha Jasrotia • Secured Access
        </p>
      </div>
    </div>
  );
}
