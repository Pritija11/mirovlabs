import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ComplianceRoadmap } from "@/components/mocks/ComplianceRoadmap";
import { IconLock, IconShield, IconDatabase, IconActivity } from "@/components/icons";

export const metadata: Metadata = {
  title: "Security & Governance",
  description:
    "How Mirov Labs, an AI agent infrastructure startup, handles data isolation, access control, and audit logging for agents running in production.",
  alternates: {
    canonical: "/security",
  },
};

const pillars = [
  {
    icon: IconLock,
    title: "Encryption everywhere",
    body: "Every request to the platform is encrypted in transit, and all stored data — prompts, traces, and tool responses — is encrypted at rest using per-tenant keys.",
  },
  {
    icon: IconDatabase,
    title: "Per-tenant isolation",
    body: "Your agents, traces, and connected tool credentials live in isolated storage scoped to your workspace. Nothing is pooled or shared across customers, including on the free beta tier.",
  },
  {
    icon: IconShield,
    title: "Least-privilege by default",
    body: "A new agent starts with zero tool access. Every connection — a database, an API, an email account — is granted explicitly, and can be scoped to read-only or specific actions.",
  },
  {
    icon: IconActivity,
    title: "Full audit trail",
    body: "Every tool call, policy decision, and human approval is logged with a timestamp and actor, exportable for your own compliance review or incident response.",
  },
];

const faqs = [
  {
    q: "Are you SOC 2 certified?",
    a: "Not yet — we're an early-stage startup and our SOC 2 Type I audit is in progress. We publish our compliance roadmap openly rather than implying certifications we don't have yet, and we're happy to share our current security posture in detail on a call.",
  },
  {
    q: "Where is data stored, and who can access it?",
    a: "Data is stored in isolated, per-tenant infrastructure. Access is limited to the small Mirov team members who need it for support or debugging, and every access is logged.",
  },
  {
    q: "Can we self-host the runtime?",
    a: "A self-hosted deployment is on our roadmap for teams with strict data residency requirements, but isn't available yet. If this is a blocker for you, tell us on a call — it directly shapes what we prioritize next.",
  },
  {
    q: "Do you train models on customer data?",
    a: "No. Your prompts, traces, and tool responses are never used to train or fine-tune any model, ours or a third party's, under any plan.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Security & governance</Eyebrow>
            <h1 className="mx-auto mt-5 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-[var(--ink)] md:text-5xl">
              Built to be trusted with production data, honestly described
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              We&apos;re a startup, not an enterprise incumbent, and
              we&apos;d rather tell you exactly where our security program
              stands today than oversell it. Here&apos;s what&apos;s
              already in place, and what&apos;s still on the roadmap.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 30}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <p.icon className="h-5 w-5 text-[var(--primary-deep)]" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-[var(--ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Where we are today</Eyebrow>
            <h2 className="mt-4 max-w-md font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
              A roadmap, not a certifications page
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--fg-muted)]">
              A lot of startup security pages list badges that are
              technically true but practically meaningless at an early
              stage. We&apos;d rather show you exactly what&apos;s shipped,
              what&apos;s in progress, and what&apos;s still planned — and
              update this page as it changes.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <ComplianceRoadmap />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
              Security FAQ
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
