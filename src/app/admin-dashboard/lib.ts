// export const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// export const apiFetch = async (path: string, opts: RequestInit = {}) => {
//   const token = localStorage.getItem("ventar_token");

//   // ← FIX: trailing slash ensure karo — 307 redirect band
//   const normalizedPath = path.endsWith("/") ? path : `${path}/`;

//   const res = await fetch(`${API}${normalizedPath}`, {
//     ...opts,
//     headers: {
//       "Content-Type": "application/json",
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//       ...(opts.headers || {}),
//     },
//   });

//   if (res.status === 401) {
//     localStorage.removeItem("ventar_token");
//     window.location.reload();
//   }

//   return res.json();
// };

// export type Tab =
//   | "overview"
//   | "services"
//   | "testimonials"
//   | "team"
//   | "contacts"
//   | "careers";

// export const inputCls =
//   "w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition text-sm";

export const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const apiFetch = async (path: string, opts: RequestInit = {}) => {
  const token = localStorage.getItem("ventar_token");

  const res = await fetch(`${API}${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(opts.headers || {}),
    },
  });

  if (res.status === 401) {
    localStorage.removeItem("ventar_token");
    window.location.reload();
  }

  return res.json();
};

export type Tab =
  | "overview"
  | "services"
  | "testimonials"
  | "team"
  | "contacts"
  | "careers";

export const inputCls =
  "w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition text-sm";