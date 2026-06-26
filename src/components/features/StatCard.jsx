import Card from "../ui/Card.jsx";

export default function StatCard({ icon: Icon, label, value, tone = "eco", helper }) {
  const tones = {
    eco: "bg-eco-100 text-eco-800",
    sky: "bg-sky-100 text-sky-800",
    amber: "bg-amber-100 text-amber-800",
    rose: "bg-rose-100 text-rose-800",
  };

  return (
    <Card variant="elevated" className="min-h-28">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-black text-slate-950">{value}</p>
          {helper ? <p className="mt-1 text-xs text-slate-500">{helper}</p> : null}
        </div>
        <span className={`grid size-10 shrink-0 place-items-center rounded-lg ${tones[tone]}`}>
          <Icon className="size-5" />
        </span>
      </div>
    </Card>
  );
}
