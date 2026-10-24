import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { api, getToken, setToken } from "../utils/api";
import Login from "./Login";
import PropertyListPage from "./PropertyListPage";
import PropertyForm from "./PropertyForm";

const AdminApp = () => {
  const navigate = useNavigate();
  // "checking" → verifying a stored token; then an email string or null.
  const [session, setSession] = useState(getToken() ? "checking" : null);

  useEffect(() => {
    if (session !== "checking") return;
    api
      .me()
      .then((me) => setSession(me.email))
      .catch(() => {
        setToken(null);
        setSession(null);
      });
  }, [session]);

  const logout = () => {
    setToken(null);
    setSession(null);
    navigate("/admin/login");
  };

  if (session === "checking") {
    return <div className="min-h-screen flex items-center justify-center text-slate-500">Loading…</div>;
  }

  if (!session) {
    return (
      <Routes>
        <Route
          path="login"
          element={
            <Login
              onLoggedIn={(email) => {
                setSession(email);
                navigate("/admin");
              }}
            />
          }
        />
        <Route path="*" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-[#1a2a3a] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
          <Link to="/admin" className="font-semibold tracking-wide">
            Admin <span className="text-[#7cc933]">Dashboard</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <a href="/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
              View site
            </a>
            <span className="hidden sm:inline text-white/60">{session}</span>
            <button onClick={logout} className="px-3 py-1 rounded-lg border border-white/30 hover:bg-white/10">
              Log out
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <Routes>
          <Route index element={<PropertyListPage />} />
          <Route path="property/new" element={<PropertyForm />} />
          <Route path="property/:id" element={<PropertyForm />} />
          <Route path="login" element={<Navigate to="/admin" replace />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminApp;
