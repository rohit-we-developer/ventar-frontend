"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { apiFetch, inputCls } from "../lib";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import Field from "../components/Field";

export default function CareersSection() {
  const [data, setData]   = useState<any[]>([]);
  const [apps, setApps]   = useState<any[]>([]);
  const [modal, setModal] = useState<"create" | "edit" | null>(null);
  const [tab, setTab]     = useState<"jobs" | "apps">("jobs");
  const [form, setForm]   = useState({
    id: 0,
    title: "",
    department: "",
    location: "Remote",
    type: "Full-time",
    description: "",
    requirements: "",
    is_active: true,
  });

  const load = () => {
    apiFetch("/api/careers/all").then(setData);
    apiFetch("/api/careers/applications").then(setApps);
  };
  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setForm({ id: 0, title: "", department: "", location: "Remote", type: "Full-time", description: "", requirements: "", is_active: true });
    setModal("create");
  };

  const save = async () => {
    if (modal === "create") {
      await apiFetch("/api/careers", { method: "POST", body: JSON.stringify(form) });
    } else {
      await apiFetch(`/api/careers/${form.id}`, { method: "PUT", body: JSON.stringify(form) });
    }
    setModal(null);
    load();
  };

  const del = async (id: number) => {
    if (!confirm("Delete?")) return;
    await apiFetch(`/api/careers/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="space-y-4">
      {/* Tab switcher */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {(["jobs", "apps"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-xl text-sm font-medium transition ${
                tab === t ? "bg-orange-500 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {t === "jobs" ? "Job Posts" : "Applications"}
            </button>
          ))}
        </div>

        {tab === "jobs" && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={openCreate}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-medium transition"
          >
            <Plus size={16} /> Add Job
          </motion.button>
        )}
      </div>

      {/* Tables */}
      {tab === "jobs" ? (
        <DataTable
          data={data}
          columns={[
            { key: "title",      label: "Title" },
            { key: "department", label: "Dept" },
            { key: "location",   label: "Location" },
            { key: "type",       label: "Type" },
            { key: "is_active",  label: "Status" },
          ]}
          onEdit={(row) => { setForm(row); setModal("edit"); }}
          onDelete={del}
        />
      ) : (
        <DataTable
          data={apps}
          columns={[
            { key: "name",   label: "Applicant" },
            { key: "email",  label: "Email" },
            { key: "status", label: "Status" },
          ]}
          onDelete={(id) => apiFetch(`/careers/applications/${id}`, { method: "DELETE" }).then(load)}
        />
      )}

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <Modal
            title={modal === "create" ? "Post a Job" : "Edit Job"}
            onClose={() => setModal(null)}
          >
            <div className="space-y-4">
              <Field label="Job Title">
                <input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Frontend Developer" />
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Department">
                  <input className={inputCls} value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} placeholder="Engineering" />
                </Field>
                <Field label="Location">
                  <input className={inputCls} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Remote" />
                </Field>
              </div>

              <Field label="Type">
                <select className={inputCls} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  {["Full-time", "Part-time", "Contract", "Internship"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>

              <Field label="Description">
                <textarea className={inputCls} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              </Field>

              <Field label="Requirements">
                <textarea className={inputCls} rows={2} value={form.requirements} onChange={(e) => setForm({ ...form, requirements: e.target.value })} />
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