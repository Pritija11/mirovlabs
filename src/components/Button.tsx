import Link from "next/link";

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const variants = {
    solid: "bg-[var(--ink)] text-white hover:bg-[var(--primary)]",
    outline:
      "border border-[var(--border-strong)] text-[var(--ink)] hover:border-[var(--ink)]",
    light: "bg-white text-[var(--ink)] hover:bg-[var(--primary-soft)]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
