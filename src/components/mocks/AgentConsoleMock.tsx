const steps = [
  { label: "Reading new support ticket #4821", status: "done", time: "0.4s" },
  { label: "Searching knowledge base for refund policy", status: "done", time: "0.9s" },
  { label: "Calling billing.lookup(customer_id)", status: "done", time: "1.2s" },
  { label: "Drafting response and refund amount", status: "active", time: "…" },
  { label: "Waiting for human approval over $200", status: "pending", time: "" },
];

const statusDot: Record<string, string> = {
  done: "bg-[var(--primary)]",
  active: "bg-amber-400",
  pending: "bg-white/25",
};

export function AgentConsoleMock() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-3 text-xs text-white/40">
          refund-agent · run #4821
        </span>
      </div>
      <div className="flex flex-col gap-3 p-5 sm:p-6">
        {steps.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <span
              className={`h-2 w-2 flex-none rounded-full ${statusDot[s.status]}`}
            />
            <span
              className={`flex-1 text-sm ${
                s.status === "pending" ? "text-white/35" : "text-white/85"
              }`}
            >
              {s.label}
            </span>
            <span className="text-xs text-white/35">{s.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
