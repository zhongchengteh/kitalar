export default function ProgressBar({ value, max, label }) {
  const percent = Math.min(100, Math.round((value / max) * 100));

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-white">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-eco-100">
        <div className="h-full rounded-full bg-eco-600 transition-all duration-500" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
