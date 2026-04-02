"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { apiFetch, inputCls } from "../lib";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import Field from "../components/Field";

export default function TeamSection() {
  const [data, setData] = useState<any[]>([]);
  const [modal, setModal] = useState<"create" | "edit" | null>(null);
  const [form, setForm] = useState({
    id: 0,
    name: "",
    role: "",
    bio: "",
    photo_url: "",
    linkedin_url: "",
    is_active: true,
    order: 0,
  });

  const load = () => apiFetch("/api/team").then((res) => setData(Array.isArray(res) ? res : []));
  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setForm({ id: 0, name: "", role: "", bio: "", photo_url: "", linkedin_url: "", is_active: true, order: 0 });
    setModal("create");
  };

  // ← FIX: null values ko empty string se replace karo
  const openEdit = (row: any) => {
    setForm({
      id:           row.id          ?? 0,
      name:         row.name        ?? "",
      role:         row.role        ?? "",
      bio:          row.bio         ?? "",
      photo_url:    row.photo_url   ?? "",
      linkedin_url: row.linkedin_url ?? "",
      is_active:    row.is_active   ?? true,
      order:        row.order       ?? 0,
    });
    setModal("edit");
  };

  const save = async () => {
    const payload = {
      name:         form.name,
      role:         form.role,
      bio:          form.bio         || null,
      photo_url:    form.photo_url   || null,
      linkedin_url: form.linkedin_url || null,
      is_active:    form.is_active,
      order:        form.order,
    };

    if (modal === "create") {
      await apiFetch("/api/team", { method: "POST", body: JSON.stringify(payload) });
    } else {
      await apiFetch(`/api/team/${form.id}`, { method: "PUT", body: JSON.stringify(payload) });
    }
    setModal(null);
    load();
  };

  const del = async (id: number) => {
    if (!confirm("Delete this member?")) return;
    await apiFetch(`/api/team/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-white font-semibold text-lg">Team Members</h2>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-medium transition"
        >
          <Plus size={16} /> Add Member
        </motion.button>
      </div>

      <DataTable
        data={data}
        columns={[
          { key: "name",      label: "Name" },
          { key: "role",      label: "Role" },
          { key: "order",     label: "Order" },
          { key: "is_active", label: "Status" },
        ]}
        onEdit={openEdit}
        onDelete={del}
      />

      <AnimatePresence>
        {modal && (
          <Modal
            title={modal === "create" ? "Add Member" : "Edit Member"}
            onClose={() => setModal(null)}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Name">
                  <input
                    className={inputCls}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Arjun Desai"
                  />
                </Field>
                <Field label="Role">
                  <input
                    className={inputCls}
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    placeholder="CEO"
                  />
                </Field>
              </div>

              <Field label="Bio">
                <textarea
                  className={inputCls}
                  rows={2}
                  value={form.bio}
                  onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  placeholder="Short bio..."
                />
              </Field>

              <Field label="Photo URL">
                <input
                  className={inputCls}
                  value={form.photo_url}
                  onChange={(e) => setForm({ ...form, photo_url: e.target.value })}
                  placeholder="https://..."
                />
              </Field>

              <Field label="LinkedIn URL">
                <input
                  className={inputCls}
                  value={form.linkedin_url}
                  onChange={(e) => setForm({ ...form, linkedin_url: e.target.value })}
                  placeholder="https://linkedin.com/in/..."
                />
              </Field>

              <Field label="Display Order">
                <input
                  className={inputCls}
                  type="number"
                  value={form.order}
                  onChange={(e) => setForm({ ...form, order: +e.target.value })}
                />
              </Field>

              {/* Active toggle */}
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