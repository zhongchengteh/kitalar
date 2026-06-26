import { cn } from "../../lib/cn.js";

const variants = {
  primary: "bg-eco-700 text-white shadow-soft hover:bg-eco-800",
  secondary: "bg-white text-eco-800 ring-1 ring-eco-100 hover:bg-eco-50",
  outline: "bg-transparent text-eco-800 ring-1 ring-eco-200 hover:bg-eco-50",
  ghost: "bg-transparent text-slate-600 hover:bg-eco-50 hover:text-eco-800",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizes = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eco-500 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
