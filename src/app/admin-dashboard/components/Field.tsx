"use client";

export default function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs text-gray-400 mb-1.5 block uppercase tracking-wider">
        {label}
      </label>
      {children}
    </div>
  );
}