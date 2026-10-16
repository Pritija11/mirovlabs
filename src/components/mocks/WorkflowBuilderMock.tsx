const nodes = [
  { label: "Trigger: New lead", x: 6, y: 18 },
  { label: "Tool: Enrich company", x: 6, y: 56 },
  { label: "LLM: Score & plan", x: 36, y: 37 },
  { label: "Tool: CRM.update()", x: 66, y: 14 },
  { label: "Action: Notify sales", x: 66, y: 60 },
];

export function WorkflowBuilderMock() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-alt)] p-4">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M20 22 L40 41 M20 60 L40 43 M50 39 L66 20 M50 39 L66 64"
          stroke="var(--border-strong)"
          strokeWidth="0.6"
          fill="none"
        />
      </svg>
      <div className="relative" style={{ aspectRatio: "100 / 80" }}>
        {nodes.map((n) => (
          <div
            key={n.label}
            className="absolute w-[30%] rounded-lg border border-[var(--border-strong)] bg-white px-3 py-2 text-[11px] font-medium text-[var(--ink)] shadow-sm"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            {n.label}
          </div>
        ))}
      </div>
    </div>
  );
}
