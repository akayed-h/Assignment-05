export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech

  return (
    <div
      className={`rounded-3xl border bg-white p-6 shadow-sm flex flex-col ${isAdded ? "border-pink-600" : "border-slate-200"
        }`}
    >
      <div className="flex items-start justify-between">
        <img src={icon} alt={name} className="h-10 w-10" />
        <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">
          {badge}
        </span>
      </div>

      <h2 className="mt-4 text-xl font-bold text-slate-950">{name}</h2>

      <p className="mt-2 text-sm text-[#64748B] flex-1">{description}</p>

      <div className="mt-4 flex items-center justify-between border-y border-slate-100 py-2 text-sm">
        <span className="bg-slate-50 px-3 py-1 font-medium text-[#64748B] rounded-full">
          {category}
        </span>
        <span className="text-[#64748B]">{difficulty}</span>
        <span className="flex items-center gap-1 font-medium text-[#334155]">
          <span className="text-amber-400">★</span>
          {rating}
        </span>
      </div>

      
      <button
        onClick={onAdd}
        disabled={isAdded}
        className={`mt-4 w-full rounded-xl py-3 font-semibold transition ${isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-slate-950 text-white hover:bg-slate-800 cursor-pointer"
          }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
