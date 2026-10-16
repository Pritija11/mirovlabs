import {
  IconDatabase,
  IconCloud,
  IconTerminal,
  IconServer,
  IconMail,
  IconCpu,
} from "@/components/icons";

const tools = [
  { icon: IconDatabase, label: "Postgres & MySQL" },
  { icon: IconCloud, label: "AWS, GCP, Azure" },
  { icon: IconTerminal, label: "REST & GraphQL APIs" },
  { icon: IconServer, label: "Internal microservices" },
  { icon: IconMail, label: "Email & calendar" },
  { icon: IconCpu, label: "Any OpenAI-compatible model" },
];

export function IntegrationsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {tools.map((t) => (
        <div
          key={t.label}
          className="flex flex-col items-start gap-3 rounded-xl border border-[var(--border)] bg-white p-4"
        >
          <t.icon className="h-5 w-5 text-[var(--primary)]" />
          <span className="text-xs font-medium text-[var(--ink)]">
            {t.label}
          </span>
        </div>
      ))}
    </div>
  );
}
