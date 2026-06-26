export default function PageHeader({ eyebrow, title, description, action }) {
  return (
    <header className="mb-5 flex items-start justify-between gap-4">
      <div>
        {eyebrow ? <p className="mb-1 text-xs font-bold uppercase tracking-wide text-eco-700">{eyebrow}</p> : null}
        <h1 className="text-2xl font-black text-slate-950">{title}</h1>
        {description ? <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}
