import TechCard from "./TechCard";

export default function TechGrid({ technologies, stack, onAdd, loading }) {
  if (loading) {
    return (
      <div className="col-span-full flex items-center justify-center py-20 text-slate-400">
        Loading technologies...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stack.some((item) => item.id === tech.id)}
          onAdd={() => onAdd(tech)}
        />
      ))}
    </div>
  )
}
