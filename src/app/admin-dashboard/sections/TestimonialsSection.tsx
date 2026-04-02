"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { apiFetch, inputCls } from "../lib";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import Field from "../components/Field";

export default function TestimonialsSection() {
  const [data, setData] = useState<any[]>([]);
  const [modal, setModal] = useState<"create" | "edit" | null>(null);
  const [form, setForm] = useState({
    id: 0,
    name: "",
    role: "",
    company: "",
    message: "",
    rating: 5,
    is_active: true,
  });

  const load = () => apiFetch("/api/testimonials").then(setData);
  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setForm({ id: 0, name: "", role: "", company: "", message: "", rating: 5, is_active: true });
    setModal("create");
  };

  const save = async () => {
    if (modal === "create") {
      await apiFetch("/api/testimonials", { method: "POST", body: JSON.stringify(form) });
    } else {
      await apiFetch(`/api/testimonials/${form.id}`, { method: "PUT", body: JSON.stringify(form) });
    }
    setModal(null);
    load();
  };

  const del = async (id: number) => {
    if (!confirm("Delete?")) return;
    await apiFetch(`/api/testimonials/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-white font-semibold text-lg">Testimonials</h2>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-medium transition"
        >
          <Plus size={16} /> Add Testimonial
        </motion.button>
      </div>

      <DataTable
        data={data}
        columns={[
          { key: "name",      label: "Name" },
          { key: "role",      label: "Role" },
          { key: "company",   label: "Company" },
          { key: "rating",    label: "Rating" },
          { key: "is_active", label: "Status" },
        ]}
        onEdit={(row) => { setForm(row); setModal("edit"); }}
        onDelete={del}
      />

      <AnimatePresence>
        {modal && (
          <Modal
            title={modal === "create" ? "Add Testimonial" : "Edit Testimonial"}
            onClose={() => setModal(null)}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Name">
                  <input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" />
                </Field>
                <Field label="Rating (1–5)">
                  <input className={inputCls} type="number" min={1} max={5} value={form.rating} onChange={(e) => setForm({ ...form, rating: +e.target.value })} />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Role">
                  <input className={inputCls} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="CTO" />
                </Field>
                <Field label="Company">
                  <input className={inputCls} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="TechCorp" />
                </Field>
              </div>

              <Field label="Message">
                <textarea className={inputCls} rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Their feedback..." />
              </Field>

              <div className="flex gap-3 pt-2">
                <button onClick={() => setModal(null)} className="flex-1 py-2.5 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition text-sm">Cancel</button>
                <motion.button whileTap={{ scale: 0.97 }} onClick={save} className="flex-1 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium transition text-sm">Save</motion.button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}