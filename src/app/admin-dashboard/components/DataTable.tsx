"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Trash2 } from "lucide-react";

interface Column {
  key: string;
  label: string;
}

interface Props {
  data: any[];
  columns: Column[];
  onEdit?: (row: any) => void;
  onDelete: (id: number) => void;
  onAction?: (row: any) => void;
  actionLabel?: string;
}

export default function DataTable({
  data,
  columns,
  onEdit,
  onDelete,
  onAction,
  actionLabel,
}: Props) {
  // ← FIX: agar data array nahi toh empty array use karo
  const safeData = Array.isArray(data) ? data : [];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-white/5 border-b border-white/10">
            {columns.map((c) => (
              <th
                key={c.key}
                className="text-left px-4 py-3 text-gray-400 font-medium"
              >
                {c.label}
              </th>
            ))}
            <th className="text-right px-4 py-3 text-gray-400 font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {safeData.map((row, i) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ delay: i * 0.04 }}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                {columns.map((c) => (
                  <td key={c.key} className="px-4 py-3 text-gray-200">
                    {c.key === "is_active" ? (
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          row[c.key]
                            ? "bg-green-500/20 text-green-400"
                            : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {row[c.key] ? "Active" : "Inactive"}
                      </span>
                    ) : c.key === "is_read" ? (
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          row[c.key]
                            ? "bg-gray-500/20 text-gray-400"
                            : "bg-orange-500/20 text-orange-400"
                        }`}
                      >
                        {row[c.key] ? "Read" : "New"}
                      </span>
                    ) : (
                      <span className="line-clamp-1 max-w-[200px] block">
                        {String(row[c.key] ?? "—")}
                      </span>
                    )}
                  </td>
                ))}
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    {onAction && (
                      <button
                        onClick={() => onAction(row)}
                        className="text-xs px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition"
                      >
                        {actionLabel}
                      </button>
                    )}
                    {onEdit && (
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onEdit(row)}
                        className="p-1.5 rounded-lg hover:bg-orange-500/20 text-gray-400 hover:text-orange-400 transition"
                      >
                        <Pencil size={15} />
                      </motion.button>
                    )}
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onDelete(row.id)}
                      className="p-1.5 rounded-lg hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition"
                    >
                      <Trash2 size={15} />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
          {safeData.length === 0 && (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="text-center py-12 text-gray-500"
              >
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}