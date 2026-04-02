"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { apiFetch } from "../lib";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";

export default function ContactsSection() {
  const [data, setData] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  const load = () => apiFetch("/contacts").then(setData);
  useEffect(() => { load(); }, []);

  const markRead = async (row: any) => {
    await apiFetch(`/contacts/${row.id}/read`, { method: "PATCH" });
    load();
  };

  const del = async (id: number) => {
    if (!confirm("Delete?")) return;
    await apiFetch(`/contacts/${id}`, { method: "DELETE" });
    load();
  };

  const handleView = (row: any) => {
    setSelected(row);
    if (!row.is_read) markRead(row);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-white font-semibold text-lg">Contact Submissions</h2>
        <span className="text-sm text-gray-400">
          {data.filter((d) => !d.is_read).length} unread
        </span>
      </div>

      <DataTable
        data={data}
        columns={[
          { key: "name",    label: "Name" },
          { key: "email",   label: "Email" },
          { key: "subject", label: "Subject" },
          { key: "is_read", label: "Status" },
        ]}
        onDelete={del}
        onAction={handleView}
        actionLabel="View"
      />

      <AnimatePresence>
        {selected && (
          <Modal title="Contact Message" onClose={() => setSelected(null)}>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-gray-400">Name: </span>
                  <span className="text-white">{selected.name}</span>
                </div>
                <div>
                  <span className="text-gray-400">Email: </span>
                  <span className="text-white">{selected.email}</span>
                </div>
                {selected.phone && (
                  <div>
                    <span className="text-gray-400">Phone: </span>
                    <span className="text-white">{selected.phone}</span>
                  </div>
                )}
                {selected.subject && (
                  <div>
                    <span className="text-gray-400">Subject: </span>
                    <span className="text-white">{selected.subject}</span>
                  </div>
                )}
              </div>
              <div className="bg-gray-800 rounded-xl p-4 text-gray-200 leading-relaxed">
                {selected.message}
              </div>
              <p className="text-gray-500 text-xs">
                {new Date(selected.created_at).toLocaleString()}
              </p>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}