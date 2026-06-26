import { cn } from "../../lib/cn.js";

export default function InputField({ label, id, icon: Icon, className, ...props }) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</span>
      <span className="relative block">
        {Icon ? <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" /> : null}
        <input
          id={id}
          className={cn(
            "min-h-12 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-eco-500 focus:ring-4 focus:ring-eco-100",
            Icon && "pl-10",
            className
          )}
          {...props}
        />
      </span>
    </label>
  );
}
