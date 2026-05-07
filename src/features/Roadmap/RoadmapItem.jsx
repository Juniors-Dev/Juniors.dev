function RoadmapItem({ year, title, body, defaultOpen = true }) {
  return (
    <article className="grid grid-cols-[60px_64px_1fr] md:grid-cols-[120px_64px_1fr] px-2 gap-x-10 md:gap-x-20 items-start">
      <p className="text-subheading-1 font-semibold text-slate-900 text-end">{year}</p>

      {/* vertical connector + dot */}
      <div className="relative flex h-full justify-center ">
        <span className="absolute -top-8 bottom-0 w-0.5 bg-lime-700" aria-hidden="true" />
        <span
          className="relative z-10 mt-1 block h-9 w-9 rounded-full border-2 border-lime-700 bg-lime-200 shadow-[0_0_0_8px_rgba(190,242,100,0.22)]"
          aria-hidden="true"
        />
      </div>

      <details className="group" open={defaultOpen}>
        <summary className="cursor-pointer list-none text-subheading-1 font-semibold text-slate-900 marker:content-['']">
          {title}
        </summary>
        <p className="my-4 pb-20 max-w-2xl text-paragraph text-slate-700">{body}</p>
      </details>
    </article>
  );
}

export default RoadmapItem;
