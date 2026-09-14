export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
      <h2 className="text-2xl font-bold text-[#0f172a]">Your Stack</h2>
      <p className="mt-1 text-sm text-slate-400">
        {stack.length} Technology Selected
      </p>

      <div className="mt-5 max-h-96 space-y-3 overflow-y-auto pr-1">
        
        {stack.length === 0 ? (
          <p className="text-sm text-slate-400 text-center py-6">
            No technologies added yet. Click "Add to Stack" on any card to
            get started.
          </p>
        ) : (
          stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="h-7 w-7" />
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">{item.name}</h3>
                  <p className="text-xs text-slate-400">{item.category}</p>
                </div>
              </div>

              <button
                type="button"
                aria-label={`Remove ${item.name}`}
                onClick={() => onRemove(item.id)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500 cursor-pointer"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>
          ))
        )}
      </div>

      <button
        type="button"
        onClick={onRemoveAll}
        disabled={stack.length === 0}
        className="mt-6 w-full rounded-xl border border-red-300 py-3 font-semibold text-red-500 transition hover:bg-red-500 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-red-500 cursor-pointer disabled:cursor-not-allowed"
      >
        Remove All
      </button>
    </aside>
  )
}
