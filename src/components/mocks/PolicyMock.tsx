const policies = [
  { label: "Require human approval above $200", on: true },
  { label: "Block agents from external email domains", on: true },
  { label: "Restrict refund tool to support agents only", on: true },
  { label: "Log every tool call for 90 days", on: true },
  { label: "Allow autonomous CRM writes", on: false },
];

export function PolicyMock() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--fg-muted)]">
        Guardrails · refund-agent
      </p>
      <div className="mt-4 flex flex-col divide-y divide-[var(--border)]">
        {policies.map((p) => (
          <div
            key={p.label}
            className="flex items-center justify-between py-3 text-sm"
          >
            <span className="text-[var(--ink)]">{p.label}</span>
            <span
              className={`flex h-5 w-9 flex-none items-center rounded-full px-0.5 transition-colors ${
                p.on ? "justify-end bg-[var(--primary)]" : "justify-start bg-[var(--border-strong)]"
              }`}
            >
              <span className="h-4 w-4 rounded-full bg-white" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
