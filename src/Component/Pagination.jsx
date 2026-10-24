// 1 … 4 5 6 … 20 style page list.
const pageList = (page, pages) => {
  if (pages <= 7) return Array.from({ length: pages }, (_, i) => i + 1);
  const set = new Set([1, 2, pages - 1, pages, page - 1, page, page + 1]);
  const nums = [...set].filter((n) => n >= 1 && n <= pages).sort((a, b) => a - b);
  const out = [];
  nums.forEach((n, i) => {
    if (i > 0 && n - nums[i - 1] > 1) out.push("…");
    out.push(n);
  });
  return out;
};

const Pagination = ({ page, pages, total, limit, onChange }) => {
  if (pages <= 1) return null;
  const from = (page - 1) * limit + 1;
  const to = Math.min(page * limit, total);
  const btn =
    "min-w-[40px] h-10 px-3 rounded-lg text-sm font-medium border transition disabled:opacity-40 disabled:cursor-not-allowed";
  return (
    <nav aria-label="Pagination" className="mt-10 flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button className={`${btn} border-slate-300 hover:bg-slate-100`} disabled={page === 1} onClick={() => onChange(page - 1)}>
          Prev
        </button>
        {pageList(page, pages).map((n, i) =>
          n === "…" ? (
            <span key={`gap-${i}`} className="px-1 text-slate-400">…</span>
          ) : (
            <button
              key={n}
              aria-current={n === page ? "page" : undefined}
              onClick={() => onChange(n)}
              className={`${btn} ${n === page ? "bg-[#7cc933] border-[#7cc933] text-white" : "border-slate-300 hover:bg-slate-100"}`}
            >
              {n}
            </button>
          ),
        )}
        <button className={`${btn} border-slate-300 hover:bg-slate-100`} disabled={page === pages} onClick={() => onChange(page + 1)}>
          Next
        </button>
      </div>
      <p className="text-xs text-slate-500">
        Showing {from}–{to} of {total}
      </p>
    </nav>
  );
};

export default Pagination;
