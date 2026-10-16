import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WorkflowBuilderMock } from "@/components/mocks/WorkflowBuilderMock";
import { TraceTimelineMock } from "@/components/mocks/TraceTimelineMock";
import { PolicyMock } from "@/components/mocks/PolicyMock";
import { IntegrationsGrid } from "@/components/mocks/IntegrationsGrid";
import { IconArrowRight, IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "How Mirov Labs' platform lets startup and enterprise teams build, trace, and govern AI agents on one runtime, from prototype to production.",
  alternates: {
    canonical: "/platform",
  },
};

const capabilities = [
  {
    eyebrow: "Build",
    title: "One runtime, two ways to build on it",
    body: [
      "Mirov's canvas lets anyone on the team — not just the engineers who wrote the original prototype — sketch an agent as a sequence of triggers, tools, and decision points. Drag a node in, connect it to the next step, and the canvas compiles it into a real, typed agent definition behind the scenes.",
      "If you'd rather write the agent directly, the same runtime is available as a code-first SDK in Python and TypeScript. Agents built either way are interchangeable: open a code-first agent on the canvas and it renders correctly, and a canvas-first agent exports as code you can read, review, and put in version control like anything else your team ships.",
    ],
    bullets: [
      "Drag-and-drop canvas that exports to real, readable code",
      "Code-first SDK for Python and TypeScript with the same runtime underneath",
      "Native tool-calling for your APIs, databases, and internal services",
      "Versioned agents — roll back a bad prompt or tool change in one click",
    ],
    mock: <WorkflowBuilderMock />,
  },
  {
    eyebrow: "Observe",
    title: "A trace for every decision an agent makes",
    body: [
      "Agents fail in ways that don't show up in a normal application log. A tool call three steps back returns something slightly malformed, the model quietly compensates for it, and five steps later the final output is wrong in a way that's nearly impossible to reconstruct after the fact — unless every step was captured as it happened.",
      "Mirov traces every plan, tool call, memory read, and model response an agent produces, and lays it out as a timeline you can step through. Cost and latency are attached to each span, so a slow or expensive agent is as easy to diagnose as a broken one.",
    ],
    bullets: [
      "Full trace of every LLM call, tool call, and memory read",
      "Cost and latency per span, rolled up per agent and per customer",
      "Replay any historical run against a new prompt or model before you ship it",
      "Export traces as evaluation datasets for regression testing",
    ],
    mock: <TraceTimelineMock />,
  },
  {
    eyebrow: "Govern",
    title: "Guardrails that live at the runtime, not in a prompt",
    body: [
      "A system prompt that says \"never refund more than $200 without approval\" is a suggestion, not a guarantee — the model can be talked out of it, and often is. Mirov enforces limits at the runtime level instead: spend caps, approval thresholds, and tool allow-lists are checked before an action executes, regardless of what the model decided to do.",
      "Platform and security teams set policy once, centrally, and it applies to every agent built on top of it — so the person building a new agent doesn't have to re-implement the same safety checks that already exist for every other agent in the organization.",
    ],
    bullets: [
      "Spend limits and human-approval thresholds enforced at the runtime level",
      "Per-agent tool allow-lists, so a support agent can't reach your billing system",
      "A full, exportable audit log of every decision for compliance review",
      "Policy changes apply instantly across every agent built on the platform",
    ],
    mock: <PolicyMock />,
  },
];

const faqs = [
  {
    q: "Do I need to rebuild my existing agents to use Mirov?",
    a: "No. Mirov's SDK wraps around your existing agent code — most teams get traces and guardrails on an existing LangChain, LlamaIndex, or custom agent within an afternoon, without rewriting the agent logic itself.",
  },
  {
    q: "Which models does the platform support?",
    a: "Any OpenAI-compatible endpoint, including self-hosted and fine-tuned models. You can mix models within a single agent — a cheaper model for routine steps and a stronger one for the step that actually needs it.",
  },
  {
    q: "Is this only for large engineering teams?",
    a: "No — we built it as a small startup ourselves, and the free beta tier is specifically sized for a team shipping their first one or two agents, not just enterprise platform teams.",
  },
  {
    q: "Can the canvas and code-first SDK be used on the same agent?",
    a: "Yes. They compile to the same underlying agent definition, so you can prototype a flow on the canvas, then hand it to an engineer to harden in code, without losing the original design.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Platform</Eyebrow>
            <h1 className="mx-auto mt-5 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-[var(--ink)] md:text-5xl">
              Everything a startup engineering team needs to run agents in
              production
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Build, Observe, and Govern aren&apos;t three separate products
              bolted together — they&apos;re one runtime, so an agent you
              trace today is the same agent whose guardrails you set
              tomorrow, with nothing to keep in sync between tools.
            </p>
          </Reveal>
        </Container>
      </section>

      {capabilities.map((c, i) => (
        <section key={c.eyebrow} className={i % 2 === 1 ? "bg-[var(--bg-alt)]" : ""}>
          <Container className="py-20 md:py-24">
            <div
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <Eyebrow>{c.eyebrow}</Eyebrow>
                <h2 className="mt-4 max-w-md font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
                  {c.title}
                </h2>
                {c.body.map((p) => (
                  <p
                    key={p.slice(0, 20)}
                    className="mt-4 max-w-md text-sm leading-7 text-[var(--fg-muted)]"
                  >
                    {p}
                  </p>
                ))}
                <ul className="mt-6 flex flex-col gap-3">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-[var(--ink)]"
                    >
                      <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={60}>{c.mock}</Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="py-20 md:py-24">
        <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Connects to what you already run</Eyebrow>
            <h2 className="mt-4 max-w-md font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
              Agents need to reach real systems, not a sandbox
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--fg-muted)]">
              An agent that can only talk to a demo API isn&apos;t useful in
              production. Mirov ships connectors for the databases, clouds,
              and internal services most startup and mid-size teams already
              run, plus an open tool-definition format for anything custom.
            </p>
            <Button href="/contact" className="mt-7">
              Talk to us about your stack
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <Reveal delay={60}>
            <IntegrationsGrid />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
              Platform FAQ
            </h2>
          </Reveal>
          <Reveal delay={60} className="mt-10">
            <FaqAccordion items={faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
