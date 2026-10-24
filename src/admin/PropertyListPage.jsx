import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash, FaExternalLinkAlt, FaStar, FaRegStar } from "react-icons/fa";
import { api } from "../utils/api";
import { inputCls, SmallButton } from "./fields";
import Pagination from "../Component/Pagination";

const PropertyListPage = () => {
  const [data, setData] = useState(null); // { items, total, page, pages, limit }
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [page, setPage] = useState(1);
  const [onlyPromoted, setOnlyPromoted] = useState(false);
  const [busyId, setBusyId] = useState(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebounced(query.trim());
      setPage(1);
    }, 300);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    let cancelled = false;
    api
      .adminList({ page, limit: 20, q: debounced, ...(onlyPromoted && { promoted: "true" }) })
      .then((res) => !cancelled && setData(res))
      .catch((err) => !cancelled && setError(err.message));
    return () => {
      cancelled = true;
    };
  }, [page, debounced, onlyPromoted, reload]);

  const items = data?.items;
  const shown = items || [];

  const togglePublished = async (p) => {
    setBusyId(p.id);
    try {
      await api.update(p.id, { published: p.published === false });
      setReload((n) => n + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  };

  const setPromotion = async (p, patch) => {
    setBusyId(p.id);
    try {
      await api.update(p.id, patch);
      setReload((n) => n + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  };

  const remove = async (p) => {
    if (!window.confirm(`Delete "${p.title}"? This cannot be undone.`)) return;
    setBusyId(p.id);
    try {
      await api.remove(p.id);
      setReload((n) => n + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Properties</h1>
          <p className="text-sm text-slate-500">{data ? `${data.total} total` : "Loading…"}</p>
        </div>
        <div className="flex gap-3">
          <label className="flex items-center gap-2 text-sm text-slate-600 shrink-0">
            <input type="checkbox" checked={onlyPromoted} onChange={(e) => { setOnlyPromoted(e.target.checked); setPage(1); }} />
            Promoted only
          </label>
          <input className={`${inputCls} sm:w-72`} placeholder="Search title, builder, location…" value={query} onChange={(e) => setQuery(e.target.value)} />
          <Link to="/admin/property/new" className="shrink-0 inline-flex items-center gap-2 bg-[#7cc933] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#6bb028] transition text-sm">
            <FaPlus /> Add property
          </Link>
        </div>
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}

      <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-600">
            <tr>
              <th className="px-4 py-3 w-16">Photo</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3 hidden md:table-cell">Builder</th>
              <th className="px-4 py-3 hidden md:table-cell">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Promote</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((p) => (
              <tr key={p.id} className="border-t border-slate-100 hover:bg-slate-50/60">
                <td className="px-4 py-2">
                  <div className="h-10 w-14 rounded bg-slate-100 overflow-hidden flex items-center justify-center">
                    {p.images?.[0] && <img src={p.images[0]} alt="" loading="lazy" className="max-h-full max-w-full object-contain" />}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="font-medium text-slate-800">{p.title}</div>
                  <div className="text-xs text-slate-500">#{p.id} · {p.location || p.city || "—"}</div>
                </td>
                <td className="px-4 py-2 hidden md:table-cell">{p.developer?.name || "—"}</td>
                <td className="px-4 py-2 hidden md:table-cell">{p.propertyType || "—"}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => togglePublished(p)}
                    disabled={busyId === p.id}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${p.published === false ? "bg-slate-200 text-slate-600" : "bg-green-100 text-green-700"}`}
                    title="Click to toggle"
                  >
                    {p.published === false ? "Hidden" : "Published"}
                  </button>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPromotion(p, { promoted: !p.promoted })}
                      disabled={busyId === p.id}
                      className={`text-lg ${p.promoted ? "text-amber-500" : "text-slate-300 hover:text-amber-400"}`}
                      title={p.promoted ? "Promoted - click to remove" : "Click to promote"}
                    >
                      {p.promoted ? <FaStar /> : <FaRegStar />}
                    </button>
                    {p.promoted && (
                      <input
                        type="number"
                        min="0"
                        defaultValue={p.promotedOrder || 0}
                        title="Order (1 shows first)"
                        className="w-14 border border-slate-300 rounded px-1.5 py-1 text-xs"
                        onBlur={(e) => {
                          const v = Number(e.target.value) || 0;
                          if (v !== (p.promotedOrder || 0)) setPromotion(p, { promotedOrder: v });
                        }}
                      />
                    )}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-end gap-2">
                    <a href={`/property/${p.slug || p.id}`} target="_blank" rel="noreferrer">
                      <SmallButton><FaExternalLinkAlt /> View</SmallButton>
                    </a>
                    <Link to={`/admin/property/${p.id}`}>
                      <SmallButton><FaEdit /> Edit</SmallButton>
                    </Link>
                    <SmallButton danger disabled={busyId === p.id} onClick={() => remove(p)}>
                      <FaTrash />
                    </SmallButton>
                  </div>
                </td>
              </tr>
            ))}
            {items && shown.length === 0 && (
              <tr><td colSpan={7} className="px-4 py-10 text-center text-slate-500">No properties found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {data && (
        <Pagination page={data.page} pages={data.pages} total={data.total} limit={data.limit} onChange={setPage} />
      )}
    </div>
  );
};

export default PropertyListPage;
