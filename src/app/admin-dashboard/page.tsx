"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronRight, LayoutDashboard, AlertCircle, Eye, EyeOff } from "lucide-react";
import { apiFetch, type Tab } from "./lib";
import Sidebar from "./components/Sidebar";
import Overview from "./sections/Overview";
import ServicesSection from "./sections/ServicesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import TeamSection from "./sections/TeamSection";
import ContactsSection from "./sections/ContactsSection";
import CareersSection from "./sections/CareersSection";

// ── Login ─────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: (t: string) => void }) {
  const [u, setU]             = useState("");
  const [p, setP]             = useState("");
  const [err, setErr]         = useState("");
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const submit = async () => {
    setLoading(true);
    setErr("");
    try {
      const data = await apiFetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: u, password: p }),
      });
      if (data.access_token) {
        onLogin(data.access_token);
      } else {
        setErr("Invalid credentials");
      }
    } catch {
      setErr("Server error. Is the backend running?");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="w-full max-w-md bg-gray-900 border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/30 mb-4">
            <LayoutDashboard className="text-orange-400" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-white">Ventar Admin</h1>
          <p className="text-gray-400 text-sm mt-1">Sign in to your dashboard</p>
        </div>

        <div className="space-y-4">
          <input
            className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
            placeholder="Username"
            value={u}
            onChange={(e) => setU(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
          />

          <div className="relative">
            <input
              className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition pr-12"
              placeholder="Password"
              type={showPwd ? "text" : "password"}
              value={p}
              onChange={(e) => setP(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
            />
            <button
              onClick={() => setShowPwd(!showPwd)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {err && (
            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 rounded-xl px-4 py-3">
              <AlertCircle size={16} /> {err}
            </div>
          )}

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={submit}
            disabled={loading}
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In →"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

// ── Dashboard Shell ───────────────────────────────────────────────
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab]               = useState<Tab>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [counts, setCounts]         = useState<Record<string, number>>({});

  useEffect(() => {
    Promise.all([
      apiFetch("/api/services"),
      apiFetch("/api/testimonials"),
      apiFetch("/api/team"),
      apiFetch("/api/contacts"),
      apiFetch("/api/careers/all"),
    ]).then(([s, t, tm, c, ca]) => {
      setCounts({
        services:     s.length,
        testimonials: t.length,
        team:         tm.length,
        contacts:     c.length,
        careers:      ca.length,
      });
    });
  }, [tab]);

  const sections: Record<Tab, React.ReactNode> = {
    overview:     <Overview counts={counts} />,
    services:     <ServicesSection />,
    testimonials: <TestimonialsSection />,
    team:         <TeamSection />,
    contacts:     <ContactsSection />,
    careers:      <CareersSection />,
  };

  return (
    <div className="min-h-screen bg-gray-950 flex">
      <Sidebar
        tab={tab}
        setTab={setTab}
        open={sidebarOpen}
        onLogout={onLogout}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-14 border-b border-white/10 flex items-center gap-4 px-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white transition"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Dashboard</span>
            {tab !== "overview" && (
              <>
                <ChevronRight size={14} />
                <span className="text-white capitalize">{tab}</span>
              </>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
            >
              {sections[tab]}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────
export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("ventar_token");
    if (t) setToken(t);
  }, []);

  const handleLogin = (t: string) => {
    localStorage.setItem("ventar_token", t);
    setToken(t);
  };

  const handleLogout = () => {
    localStorage.removeItem("ventar_token");
    setToken(null);
  };

  if (!token) return <LoginScreen onLogin={handleLogin} />;
  return <Dashboard onLogout={handleLogout} />;
}