export default function Hero() {
  return (
    <section className="container mx-auto my-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a]">
            Build Your Ideal <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="text-[#475569] text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="brand-gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover: bg-[#475569] cursor-pointer">
              Explore Technologies
            </button>
            <button className="border border-[#E2E8F0] text-[#475569] font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img src="/assets/banner-stack.png" alt="Dev stack illustration" className="w-full" />
        </div>
      </div>
    </section>
  )
}
