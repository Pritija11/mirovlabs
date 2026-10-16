const stages = [
  { label: "Deploy", sub: "canary + full rollout", angle: -90 },
  { label: "Observe", sub: "every call traced", angle: 30 },
  { label: "Improve", sub: "replay failures as evals", angle: 150 },
];

export function LifecycleLoop() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
          strokeDasharray="2 7"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="font-[family-name:var(--font-display)] text-xl italic text-[var(--ink)]">
          improves
        </p>
        <p className="font-[family-name:var(--font-display)] text-xl italic text-[var(--ink)]">
          every cycle
        </p>
      </div>
      {stages.map((s) => {
        const rad = (s.angle * Math.PI) / 180;
        const x = 50 + 39 * Math.cos(rad);
        const y = 50 + 39 * Math.sin(rad);
        return (
          <div
            key={s.label}
            className="absolute flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              {s.label}
            </span>
            <span className="mt-2 text-xs text-[var(--fg-muted)]">
              {s.sub}
            </span>
          </div>
        );
      })}
    </div>
  );
}
