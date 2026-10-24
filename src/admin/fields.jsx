import { useRef, useState } from "react";
import { FaPlus, FaTrash, FaArrowUp, FaArrowDown, FaUpload } from "react-icons/fa";
import { uploadFile } from "../utils/api";

export const inputCls =
  "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7cc933] bg-white";

export const Card = ({ title, hint, children }) => (
  <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 md:p-6">
    <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
    {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
    <div className="mt-4 space-y-4">{children}</div>
  </section>
);

export const Field = ({ label, hint, children, className = "" }) => (
  <label className={`block ${className}`}>
    <span className="block text-sm font-medium text-slate-700 mb-1">{label}</span>
    {children}
    {hint && <span className="block text-xs text-slate-500 mt-1">{hint}</span>}
  </label>
);

export const Toggle = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer select-none">
    <input
      type="checkbox"
      checked={!!checked}
      onChange={(e) => onChange(e.target.checked)}
      className="h-4 w-4 accent-[#7cc933]"
    />
    {label}
  </label>
);

export const SmallButton = ({ children, danger, ...props }) => (
  <button
    type="button"
    {...props}
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition disabled:opacity-50 ${
      danger
        ? "border-red-200 text-red-600 hover:bg-red-50"
        : "border-slate-300 text-slate-700 hover:bg-slate-100"
    }`}
  >
    {children}
  </button>
);

// One-item-per-line text editor for string lists (specs, connectivity, vision, points).
export const LinesField = ({ value, onChange, rows = 5, placeholder }) => (
  <textarea
    rows={rows}
    className={inputCls}
    placeholder={placeholder || "One item per line"}
    value={(value || []).join("\n")}
    onChange={(e) => onChange(e.target.value.split("\n"))}
  />
);

// Generic editor for a list of objects; `render(item, update)` draws one row.
export const RowsEditor = ({ items = [], onChange, blank, render, addLabel = "Add row" }) => {
  const update = (i, patch) => onChange(items.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-slate-200 rounded-xl p-3 bg-slate-50/60">
          <div className="flex justify-end gap-1 mb-2">
            <SmallButton onClick={() => move(i, -1)} aria-label="Move up"><FaArrowUp /></SmallButton>
            <SmallButton onClick={() => move(i, 1)} aria-label="Move down"><FaArrowDown /></SmallButton>
            <SmallButton danger onClick={() => onChange(items.filter((_, idx) => idx !== i))}>
              <FaTrash /> Remove
            </SmallButton>
          </div>
          {render(item, (patch) => update(i, patch), i)}
        </div>
      ))}
      <SmallButton onClick={() => onChange([...items, typeof blank === "function" ? blank() : { ...blank }])}>
        <FaPlus /> {addLabel}
      </SmallButton>
    </div>
  );
};

// Upload button → pushes uploaded URLs through onUploaded(urls).
export const UploadButton = ({ folder, multiple, accept = "image/*", label = "Upload", onUploaded, onError }) => {
  const ref = useRef(null);
  const [busy, setBusy] = useState(false);

  const handle = async (e) => {
    const files = [...e.target.files];
    e.target.value = "";
    if (!files.length) return;
    setBusy(true);
    const urls = [];
    for (const file of files) {
      try {
        urls.push(await uploadFile(file, folder));
      } catch (err) {
        onError?.(err.message);
      }
    }
    setBusy(false);
    if (urls.length) onUploaded(urls);
  };

  return (
    <>
      <input ref={ref} type="file" hidden multiple={multiple} accept={accept} onChange={handle} />
      <SmallButton onClick={() => ref.current?.click()} disabled={busy}>
        <FaUpload /> {busy ? "Uploading…" : label}
      </SmallButton>
    </>
  );
};

// Ordered list of image URLs with upload, reorder and remove.
export const ImageList = ({ urls = [], onChange, folder, onError, firstLabel }) => {
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= urls.length) return;
    const next = [...urls];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };
  return (
    <div className="space-y-3">
      <UploadButton
        folder={folder}
        multiple
        label="Upload images"
        onError={onError}
        onUploaded={(added) => onChange([...urls, ...added])}
      />
      {urls.length === 0 && <p className="text-xs text-slate-500">No images yet.</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {urls.map((url, i) => (
          <div key={url + i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
            <div className="h-28 bg-slate-100 flex items-center justify-center">
              <img src={url} alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
            </div>
            <div className="flex items-center justify-between px-2 py-1.5 text-xs">
              <span className="text-slate-500">{i === 0 && firstLabel ? firstLabel : `#${i + 1}`}</span>
              <span className="flex gap-1">
                <button type="button" onClick={() => move(i, -1)} className="p-1 hover:text-slate-900" aria-label="Move left"><FaArrowUp className="-rotate-90" /></button>
                <button type="button" onClick={() => move(i, 1)} className="p-1 hover:text-slate-900" aria-label="Move right"><FaArrowDown className="-rotate-90" /></button>
                <button type="button" onClick={() => onChange(urls.filter((_, idx) => idx !== i))} className="p-1 text-red-500 hover:text-red-700" aria-label="Remove"><FaTrash /></button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Single image/file URL with upload and (optional) pick-from-gallery.
export const UrlField = ({ value, onChange, folder, accept, options = [], onError, placeholder }) => (
  <div className="space-y-2">
    <div className="flex gap-2">
      <input className={inputCls} value={value || ""} onChange={(e) => onChange(e.target.value)} placeholder={placeholder || "https://…"} />
      <UploadButton folder={folder} accept={accept} onError={onError} onUploaded={([u]) => onChange(u)} />
    </div>
    {options.length > 0 && (
      <select className={inputCls} value="" onChange={(e) => e.target.value && onChange(e.target.value)}>
        <option value="">Pick from this property's gallery…</option>
        {options.map((u, i) => (
          <option key={u + i} value={u}>{`Image ${i + 1}`}</option>
        ))}
      </select>
    )}
    {value && /\.(jpe?g|png|webp|gif|svg)(\?|$)/i.test(value) && (
      <img src={value} alt="" className="h-20 rounded-lg border border-slate-200 object-contain bg-slate-50" />
    )}
  </div>
);
