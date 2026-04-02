"use client";

import { motion } from "framer-motion";
import { Layers, Star, Users, Mail, Briefcase } from "lucide-react";

interface Props {
  counts: Record<string, number>;
}

const cards = [
  { label: "Services",     key: "services",     icon: Layers,    color: "from-orange-500/20 to-orange-600/10 border-orange-500/20" },
  { label: "Testimonials", key: "testimonials", icon: Star,      color: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/20" },
  { label: "Team Members", key: "team",         icon: Users,     color: "from-blue-500/20 to-blue-600/10 border-blue-500/20" },
  { label: "Contacts",     key: "contacts",     icon: Mail,      color: "from-green-500/20 to-green-600/10 border-green-500/20" },
  { label: "Job Posts",    key: "careers",      icon: Briefcase, color: "from-purple-500/20 to-purple-600/10 border-purple-500/20" },
];

export default function Overview({ counts }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-white font-semibold text-lg">Dashboard Overview</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`bg-gradient-to-br ${c.color} border rounded-2xl p-5 hover:scale-[1.02] transition cursor-default`}
          >
            <c.icon className="text-gray-300 mb-3" size={22} />
            <div className="text-3xl font-bold text-white">
              {counts[c.key] ?? "—"}
            </div>
            <div className="text-gray-400 text-sm mt-1">{c.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
        <h3 className="text-white font-medium mb-2">Welcome back, Admin 👋</h3>
        <p className="text-gray-400 text-sm">
          Manage your Ventar website content from this dashboard. Use the
          sidebar to navigate between sections.
        </p>
      </div>
    </div>
  );
}