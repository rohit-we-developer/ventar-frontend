"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { apiFetch, inputCls } from "../lib";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import Field from "../components/Field";

export default function ServicesSection() {
  const [data, setData] = useState<any[]>([]);
  const [modal, setModal] = useState<"create" | "edit" | null>(null);
  const [form, setForm] = useState({
    id: 0,
    title: "",
    description: "",
    icon: "",
    is_active: true,
  });

  const load = () => apiFetch("/api/services").then(setData);
  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setForm({ id: 0, title: "", description: "", icon: "", is_active: true });
    setModal("create");
  };

  const openEdit = (row: any) => {
    setForm(row);
    setModal("edit");
  };

  const save = async () => {
    if (modal === "create") {
      await apiFetch("/api/services", { method: "POST", body: JSON.stringify(form) });
    } else {
      await apiFetch(`/api/services/${form.id}`, { method: "PUT", body: JSON.stringify(form) });
    }
    setModal(null);
    load();
  };

  const del = async (id: number) => {
    if (!confirm("Delete this service?")) return;
    await apiFetch(`/api/services/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-white font-semibold text-lg">Services</h2>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-medium transition"
        >
          <Plus size={16} /> Add Service
        </motion.button>
      </div>

      <DataTable
        data={data}
        columns={[
          { key: "icon",        label: "Icon" },
          { key: "title",       label: "Title" },
          { key: "description", label: "Description" },
          { key: "is_active",   label: "Status" },
        ]}
        onEdit={openEdit}
        onDelete={del}
      />

      <AnimatePresence>
        {modal && (
          <Modal
            title={modal === "create" ? "Add Service" : "Edit Service"}
            onClose={() => setModal(null)}
          >
            <div className="space-y-4">
              <Field label="Title">
                <input
                  className={inputCls}
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Web Development"
                />
              </Field>

              <Field label="Icon (emoji)">
                <input
                  className={inputCls}
                  value={form.icon}
                  onChange={(e) => setForm({ ...form, icon: e.target.value })}
                  placeholder="🌐"
                />
              </Field>

              <Field label="Description">
                <textarea
                  className={inputCls}
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Service description..."
                />
              </Field>

              {/* Toggle */}
              <label className="flex items-center gap-3 cursor-pointer">
                <div
                  onClick={() => setForm({ ...form, is_active: !form.is_active })}
                  className={`w-10 h-5 rounded-full transition relative ${form.is_active ? "bg-orange-500" : "bg-gray-600"}`}
                >
                  <div
                    className={`absolute top-0 w-5 h-5 rounded-full bg-white shadow transition-transform ${form.is_active ? "translate-x-5" : "translate-x-0"}`}
                  />
                </div>
                <span className="text-gray-300 text-sm">Active</span>
              </label>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setModal(null)}
                  className="flex-1 py-2.5 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition text-sm"
                >
                  Cancel
                </button>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={save}
                  className="flex-1 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium transition text-sm"
                >
                  Save
                </motion.button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}