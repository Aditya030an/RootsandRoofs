// Thin client for the Express API (server/). In dev, Vite proxies /api to
// localhost:5000; in production the API is served from the same origin.
const BASE = import.meta.env.VITE_API_URL || "";
const TOKEN_KEY = "rr_admin_token";

export const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
};
export const setToken = (token) => {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* storage unavailable */
  }
};

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const request = async (path, { method = "GET", body, auth = false, signal } = {}) => {
  const headers = {};
  if (body !== undefined) headers["Content-Type"] = "application/json";
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(`${BASE}/api${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    signal,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError(data.message || `Request failed (${res.status})`, res.status);
  return data;
};

export const api = {
  // One page of listing cards: { items, total, page, pages, limit, facets }.
  listProperties: (params = {}, signal) => {
    const qs = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "" && !(Array.isArray(v) && v.length === 0)) {
        qs.set(k, Array.isArray(v) ? v.join(",") : v);
      }
    });
    return request(`/properties?${qs}`, { signal });
  },
  getProperty: (id) => request(`/properties/${id}`),
  getSimilar: (id) => request(`/properties/${id}/similar`),
  login: (email, password) => request("/auth/login", { method: "POST", body: { email, password } }),
  me: () => request("/auth/me", { auth: true }),
  adminList: (params = {}) => request(`/admin/properties?${new URLSearchParams(params)}`, { auth: true }),
  adminGet: (id) => request(`/admin/properties/${id}`, { auth: true }),
  create: (data) => request("/admin/properties", { method: "POST", body: data, auth: true }),
  update: (id, data) => request(`/admin/properties/${id}`, { method: "PUT", body: data, auth: true }),
  remove: (id) => request(`/admin/properties/${id}`, { method: "DELETE", auth: true }),
  deleteImage: (url) => request("/admin/delete-image", { method: "POST", body: { url }, auth: true }),
  uploadSignature: (folder) =>
    request("/admin/upload-signature", { method: "POST", body: { folder }, auth: true }),
};

// Browser → Cloudinary direct upload using a server-signed request.
export const uploadFile = async (file, folder) => {
  if (file.size > 10 * 1024 * 1024) {
    throw new Error(`${file.name} is over 10 MB (Cloudinary free limit). Please compress it first.`);
  }
  const sig = await api.uploadSignature(folder);
  const form = new FormData();
  form.append("file", file);
  form.append("api_key", sig.apiKey);
  form.append("timestamp", sig.timestamp);
  form.append("signature", sig.signature);
  form.append("folder", sig.folder);
  const res = await fetch(sig.uploadUrl, { method: "POST", body: form });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.message || "Upload failed");
  return data.secure_url;
};
