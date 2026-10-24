import { useState } from "react";
import { api, setToken } from "../utils/api";
import { inputCls } from "./fields";

const Login = ({ onLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const res = await api.login(email, password);
      setToken(res.token);
      onLoggedIn(res.email);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a2a3a] flex items-center justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Admin login</h1>
          <p className="text-sm text-slate-500 mt-1">Only the owner can manage properties.</p>
        </div>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-1">Email</span>
          <input type="email" required autoFocus className={inputCls} value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-1">Password</span>
          <input type="password" required className={inputCls} value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          disabled={busy}
          className="w-full bg-[#7cc933] text-white font-medium py-2.5 rounded-lg hover:bg-[#6bb028] transition disabled:opacity-60"
        >
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default Login;
