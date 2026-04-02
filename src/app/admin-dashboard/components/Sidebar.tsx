"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, Layers, Star, Users, Mail, Briefcase, LogOut,
} from "lucide-react";
import type { Tab } from "../lib";

const TABS: { id: Tab; label: string; icon: any }[] = [
  { id: "overview",     label: "Overview",     icon: LayoutDashboard },
  { id: "services",     label: "Services",     icon: Layers },
  { id: "testimonials", label: "Testimonials", icon: Star },
  { id: "team",         label: "Team",         icon: Users },
  { id: "contacts",     label: "Contacts",     icon: Mail },
  { id: "careers",      label: "Careers",      icon: Briefcase },
];

interface Props {
  tab: Tab;
  setTab: (t: Tab) => void;
  open: boolean;
  onLogout: () => void;
}

export default function Sidebar({ tab, setTab, open, onLogout }: Props) {
  return (
    // Always full width on mobile (parent controls show/hide via translate)
    <aside className="w-64 h-full bg-gray-900 border-r border-white/10 flex flex-col">

      {/* Logo */}
      <div className="flex items-center gap-3 p-5 border-b border-white/10">
        <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-sm">V</span>
        </div>
        <span className="text-white font-semibold whitespace-nowrap">
          Ventar Admin
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {TABS.map((t) => (
          <motion.button
            key={t.id}
            onClick={() => setTab(t.id)}
            whileTap={{ scale: 0.97 }}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition text-sm ${
              tab === t.id
                ? "bg-orange-500/20 text-orange-400"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <t.icon size={18} className="shrink-0" />
            <span className="whitespace-nowrap">{t.label}</span>
          </motion.button>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-white/10">
        <motion.button
          onClick={onLogout}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition text-sm"
        >
          <LogOut size={18} className="shrink-0" />
          <span>Logout</span>
        </motion.button>
      </div>
    </aside>
  );
}