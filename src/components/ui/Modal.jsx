import { X } from "lucide-react";
import Button from "./Button.jsx";

export default function Modal({ open, title, children, actionLabel = "Done", onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/40 px-5 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="w-full max-w-sm animate-rise rounded-lg bg-white p-5 shadow-lift">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="text-lg font-bold text-slate-950">{title}</h2>
          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-eco-500"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="text-sm leading-6 text-slate-600">{children}</div>
        <Button className="mt-5 w-full" onClick={onClose}>
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}
