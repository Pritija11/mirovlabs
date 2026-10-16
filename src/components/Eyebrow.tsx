export function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`dot-tag text-xs font-semibold uppercase tracking-[0.14em] ${
        tone === "dark" ? "text-[var(--on-dark-muted)]" : "text-[var(--fg-muted)]"
      }`}
    >
      {children}
    </span>
  );
}
