const items = [
  { label: "Encryption in transit and at rest", status: "done" },
  { label: "Role-based access control", status: "done" },
  { label: "Per-tenant data isolation", status: "done" },
  { label: "SOC 2 Type I audit", status: "in-progress" },
  { label: "SOC 2 Type II audit", status: "planned" },
  { label: "EU data residency option", status: "planned" },
];

const styles: Record<string, string> = {
  done: "bg-[var(--primary-soft)] text-[var(--primary-deep)]",
  "in-progress": "bg-amber-100 text-amber-700",
  planned: "bg-[var(--bg-alt)] text-[var(--fg-muted)]",
};

const labels: Record<string, string> = {
  done: "Done",
  "in-progress": "In progress",
  planned: "Planned",
};

export function ComplianceRoadmap() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--fg-muted)]">
        Compliance roadmap
      </p>
      <div className="mt-4 flex flex-col divide-y divide-[var(--border)]">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between py-3 text-sm"
          >
            <span className="text-[var(--ink)]">{item.label}</span>
            <span
              className={`flex-none rounded-full px-2.5 py-1 text-[11px] font-medium ${styles[item.status]}`}
            >
              {labels[item.status]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
