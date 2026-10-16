const spans = [
  { label: "plan_task", start: 0, width: 10, lane: 0 },
  { label: "tool:search_web", start: 11, width: 22, lane: 1 },
  { label: "tool:crm_lookup", start: 35, width: 18, lane: 1 },
  { label: "llm:gpt-4.1 generate", start: 55, width: 28, lane: 0 },
  { label: "tool:send_email", start: 55, width: 15, lane: 2 },
];

export function TraceTimelineMock() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6">
      <div className="flex items-center justify-between text-xs text-[var(--fg-muted)]">
        <span className="font-mono">trace_8f21c0</span>
        <span>412ms · $0.018</span>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        {[0, 1, 2].map((lane) => (
          <div key={lane} className="relative h-7 rounded-md bg-[var(--bg-alt)]">
            {spans
              .filter((s) => s.lane === lane)
              .map((s) => (
                <div
                  key={s.label}
                  className="absolute top-0 flex h-full items-center overflow-hidden rounded-md bg-[var(--primary)] px-2 text-[10px] font-medium whitespace-nowrap text-white"
                  style={{ left: `${s.start}%`, width: `${s.width}%` }}
                >
                  {s.label}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
