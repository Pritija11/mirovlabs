import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import {
  IconAgent,
  IconMail,
  IconDatabase,
  IconUsers,
  IconShield,
  IconActivity,
  IconArrowRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Agent Templates",
  description:
    "Pre-built AI agent templates from Mirov Labs — support, sales, data entry, and compliance agents a startup team can deploy and customize in an afternoon.",
  alternates: {
    canonical: "/agents",
  },
};

const templates = [
  {
    icon: IconMail,
    name: "Support & refund agent",
    summary:
      "Reads incoming tickets, looks up order and billing history, drafts a response, and routes anything over your spend threshold to a human for approval.",
    tools: ["Help desk", "Billing API", "Knowledge base"],
  },
  {
    icon: IconUsers,
    name: "Sales research agent",
    summary:
      "Enriches a new lead with firmographic data, scores it against your ideal customer profile, and drops a summary into your CRM before the first call.",
    tools: ["CRM", "Web search", "Enrichment API"],
  },
  {
    icon: IconDatabase,
    name: "Data entry & cleanup agent",
    summary:
      "Watches a shared inbox or upload folder, extracts structured fields from documents, and writes them into your database with a confidence score per field.",
    tools: ["Document parsing", "Internal database", "Email"],
  },
  {
    icon: IconActivity,
    name: "Meeting prep agent",
    summary:
      "An hour before each external call, pulls the account's history, recent support tickets, and open deals into a single one-page brief.",
    tools: ["Calendar", "CRM", "Support history"],
  },
  {
    icon: IconShield,
    name: "Compliance monitoring agent",
    summary:
      "Reviews outbound communications and flags anything that references pricing, guarantees, or claims outside pre-approved language for review.",
    tools: ["Email", "Chat logs", "Policy ruleset"],
  },
  {
    icon: IconAgent,
    name: "Internal IT helpdesk agent",
    summary:
      "Handles password resets, access requests, and common software questions directly, and escalates anything it isn't explicitly allowed to do.",
    tools: ["Identity provider", "Ticketing system"],
  },
];

export default function AgentsPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Agent templates</Eyebrow>
            <h1 className="mx-auto mt-5 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-[var(--ink)] md:text-5xl">
              Don&apos;t start from a blank canvas
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Every template below ships with its guardrails already
              configured — spend limits, approval thresholds, and tool
              allow-lists set to sane defaults for a startup team. Clone one,
              connect it to your own systems, and adjust from there instead
              of designing an agent from zero.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t, i) => (
              <Reveal key={t.name} delay={i * 30}>
                <div className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <t.icon className="h-5 w-5 text-[var(--primary-deep)]" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-[var(--ink)]">
                    {t.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {t.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {t.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] text-[var(--fg-muted)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--ink)] py-20 md:py-24">
        <Container className="max-w-xl text-center">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-white md:text-4xl">
              Don&apos;t see the agent you need?
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Every template is a starting point built on the same open
              canvas and SDK — describe what you&apos;re automating and
              we&apos;ll help you design the first version on a call.
            </p>
            <Button href="/contact" variant="light" className="mt-7">
              Describe your use case
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
