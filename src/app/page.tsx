import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Avatar } from "@/components/Avatar";
import { AgentConsoleMock } from "@/components/mocks/AgentConsoleMock";
import { WorkflowBuilderMock } from "@/components/mocks/WorkflowBuilderMock";
import { TraceTimelineMock } from "@/components/mocks/TraceTimelineMock";
import { PolicyMock } from "@/components/mocks/PolicyMock";
import { LifecycleLoop } from "@/components/mocks/LifecycleLoop";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
} from "@/components/icons";

const stats = [
  { value: "Beta", label: "Current stage" },
  { value: "14 days", label: "Avg. prototype to governed agent" },
  { value: "100%", label: "Tool calls traced by default" },
  { value: "Kathmandu", label: "Where we build" },
];

const sections = [
  {
    eyebrow: "Build",
    title: "A visual canvas when you want it, raw code when you don't",
    body: "Most agent frameworks make you pick a side. Mirov doesn't: sketch a workflow on the canvas and export it as typed Python or TypeScript, or write the agent by hand and watch it render on the canvas automatically. Either way you get the same runtime underneath — no rewrite when the prototype becomes a real workflow.",
    bullets: [
      "Drag-and-drop canvas that exports to real, readable code",
      "Native tool-calling for your APIs, databases, and internal services",
      "Versioned agents — roll back a bad prompt change in one click",
    ],
    mock: <WorkflowBuilderMock />,
  },
  {
    eyebrow: "Observe",
    title: "See exactly what an agent did, and what it cost",
    body: "When an agent takes a wrong action, \"the model hallucinated\" is rarely the full story — usually a tool call returned something unexpected three steps earlier. Mirov traces every plan, tool call, and token your agents produce, laid out as a timeline you can replay step by step, with cost and latency attached to each span.",
    bullets: [
      "Full trace of every LLM call, tool call, and memory read",
      "Cost and latency per span, rolled up per agent and per customer",
      "Replay any run against a new prompt or model before shipping it",
    ],
    mock: <TraceTimelineMock />,
  },
  {
    eyebrow: "Govern",
    title: "Guardrails before an agent ever touches production data",
    body: "Autonomy is the whole point of an agent, but unlimited autonomy is how a support bot ends up issuing a $4,000 refund. Mirov lets platform teams set policy centrally — spend limits, approval thresholds, tool allow-lists — while the builders of each agent stay focused on what it does, not on re-implementing the same safety checks every time.",
    bullets: [
      "Spend limits and human-approval thresholds, enforced at the runtime level",
      "Per-agent tool allow-lists, so a support agent can't touch your billing system",
      "A full audit log of every decision, exportable for compliance review",
    ],
    mock: <PolicyMock />,
  },
];

const testimonials = [
  {
    quote:
      "We had three different agent prototypes from three different hackathons, none of which anyone trusted enough to ship. Mirov gave us one place to actually govern them.",
    highlight: "one place to actually govern them",
    name: "Priya Sharma",
    initials: "PS",
    role: "Engineering lead, early-access team",
  },
  {
    quote:
      "The trace view is the first time I've been able to show a non-technical stakeholder exactly why an agent made a decision, step by step, without reading logs.",
    highlight: "exactly why an agent made a decision",
    name: "Daniel Ortiz",
    initials: "DO",
    role: "Platform engineer, early-access team",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — gradient mesh background, serif display headline */}
      <section
        className="relative overflow-hidden border-b border-[var(--border)] py-20 md:py-28"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, var(--primary-soft), transparent 55%), radial-gradient(circle at 85% 0%, var(--primary-soft), transparent 45%), var(--bg)",
        }}
      >
        <Container className="relative">
          <Reveal>
            <h1 className="mx-auto max-w-3xl text-center font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.1] tracking-tight text-[var(--ink)] md:text-6xl">
              Ship AI agents your team can
              <span className="italic"> actually trust</span> in production.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-center text-base leading-7 text-[var(--fg-muted)]">
              Mirov Labs is the control plane for AI agents — build them
              visually or in code, trace every decision they make, and set
              guardrails before they ever touch production data. As a
              startup ourselves, we built this because our own team kept
              shipping agents nobody could debug six months later.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact">
                Book a demo
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/platform" variant="outline">
                See the platform
              </Button>
            </div>
          </Reveal>

          <Reveal delay={80} className="mx-auto mt-16 max-w-3xl">
            <AgentConsoleMock />
          </Reveal>
        </Container>
      </section>

      {/* Honest startup stat strip */}
      <section className="border-b border-[var(--border)] py-10">
        <Container className="grid grid-cols-2 divide-x divide-[var(--border)] sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-4 text-center first:pl-0 last:pr-0">
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
                {s.value}
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">
                {s.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* Three feature sections, alternating */}
      {sections.map((s, i) => (
        <section
          key={s.eyebrow}
          className={`py-24 ${i % 2 === 1 ? "bg-[var(--bg-alt)]" : ""}`}
        >
          <Container
            className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <Eyebrow>{s.eyebrow}</Eyebrow>
              <h2 className="mt-4 max-w-md font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
                {s.title}
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[var(--fg-muted)]">
                {s.body}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--ink)]">
                    <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={60}>{s.mock}</Reveal>
          </Container>
        </section>
      ))}

      {/* Lifecycle loop */}
      <section className="border-y border-[var(--border)] py-24">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>The loop</Eyebrow>
            <h2 className="mt-4 max-w-md font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
              Every agent gets better the longer it runs
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--fg-muted)]">
              Mirov turns every production run into a reusable test case. A
              failed trace becomes an eval, a near-miss becomes a new
              guardrail, and the next version of the agent ships against the
              exact scenario that broke the last one — deploy, observe, and
              improve, on a loop that doesn&apos;t need a human to drive it
              every time.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <LifecycleLoop />
          </Reveal>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <Container>
          <Reveal>
            <Eyebrow>Early access</Eyebrow>
            <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
              What early-access teams are saying
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 50}>
                <div className="h-full rounded-2xl bg-[var(--primary-soft)] p-8">
                  <span className="quote-mark text-5xl">&ldquo;</span>
                  <p className="mt-2 text-lg leading-[1.6] text-[var(--ink)]">
                    {t.quote.split(t.highlight)[0]}
                    <span className="font-semibold text-[var(--primary-deep)]">
                      {t.highlight}
                    </span>
                    {t.quote.split(t.highlight)[1]}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Avatar initials={t.initials} className="h-9 w-9 text-xs bg-white" />
                    <div>
                      <p className="text-sm font-medium text-[var(--ink)]">
                        {t.name}
                      </p>
                      <p className="text-xs text-[var(--ink)]/60">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <Link
              href="/platform"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-deep)] hover:underline"
            >
              See the full platform
              <IconArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--ink)] py-24">
        <Container className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-lg font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight text-white md:text-5xl">
              Tell us what you&apos;re automating.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-7 text-white/70">
              Book a 20-minute call and we&apos;ll walk through your use
              case live on the platform — no slide deck. Free for teams
              running under 5 agents during our beta.
            </p>
            <Button href="/contact" variant="light" className="mt-8">
              Book a demo
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
