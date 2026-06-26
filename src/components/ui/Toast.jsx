import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { useEcoCycle } from "../../context/EcoCycleContext.jsx";

export default function Toast() {
  const { toast, clearToast } = useEcoCycle();

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(clearToast, 2600);
    return () => window.clearTimeout(timer);
  }, [toast, clearToast]);

  if (!toast) return null;

  return (
    <div className="absolute left-4 right-4 top-4 z-50 animate-rise rounded-lg bg-white p-4 shadow-lift ring-1 ring-eco-100">
      <div className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-eco-100 text-eco-700">
          <CheckCircle2 className="size-5" />
        </span>
        <div>
          <p className="text-sm font-bold text-slate-950">{toast.title}</p>
          <p className="text-xs text-slate-500">{toast.message}</p>
        </div>
      </div>
    </div>
  );
}
