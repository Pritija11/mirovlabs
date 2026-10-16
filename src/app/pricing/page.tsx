import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Mirov Labs pricing — a free beta tier for startup teams running their first AI agents, a Team tier for production workloads, and custom Enterprise plans.",
  alternates: {
    canonical: "/pricing",
  },
};

const tiers = [
  {
    name: "Beta",
    price: "$0",
    period: "while in beta",
    description: "For a startup team shipping its first one or two agents.",
    cta: "Start building",
    href: "/contact",
    variant: "outline" as const,
    features: [
      "Up to 5 agents",
      "Full build, trace, and govern toolkit",
      "7-day trace retention",
      "Community support",
    ],
  },
  {
    name: "Team",
    price: "$390",
    period: "per month",
    description: "For teams running agents against real production traffic.",
    cta: "Book a demo",
    href: "/contact",
    variant: "solid" as const,
    highlighted: true,
    features: [
      "Unlimited agents",
      "90-day trace retention",
      "Custom spend limits and approval workflows",
      "Priority email and chat support",
      "Role-based access for your whole team",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual contract",
    description: "For organizations with dedicated infrastructure needs.",
    cta: "Talk to us",
    href: "/contact",
    variant: "outline" as const,
    features: [
      "Everything in Team",
      "Dedicated infrastructure and SSO",
      "Custom data retention and residency",
      "A named engineer for onboarding",
    ],
  },
];

const comparisonRows = [
  { label: "Agents", beta: "Up to 5", team: "Unlimited", enterprise: "Unlimited" },
  { label: "Trace retention", beta: "7 days", team: "90 days", enterprise: "Custom" },
  { label: "Guardrail policies", beta: "Basic", team: "Advanced", enterprise: "Advanced" },
  { label: "SSO & RBAC", beta: "—", team: "Team roles", enterprise: "Full SSO" },
  { label: "Support", beta: "Community", team: "Priority", enterprise: "Dedicated" },
];

const faqs = [
  {
    q: "Is the Beta tier really free, or is it a trial?",
    a: "It's free for as long as you stay under 5 agents, not a time-limited trial. We're a startup ourselves and want teams to actually build on the platform before deciding to pay for it.",
  },
  {
    q: "What happens if we go over 5 agents on the Beta tier?",
    a: "We'll reach out before anything breaks. You can upgrade to Team at that point, or talk to us if the limit doesn't fit how you're using the platform.",
  },
  {
    q: "Do you charge per API call or per token?",
    a: "No — pricing is per workspace, not metered per call. Your own model provider costs (OpenAI, Anthropic, or your self-hosted model) are separate and billed directly by them.",
  },
  {
    q: "Can we switch tiers later?",
    a: "Yes, at any time. Downgrading takes effect at the start of your next billing cycle; upgrading takes effect immediately.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="mx-auto mt-5 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-[var(--ink)] md:text-5xl">
              Priced for a startup team, not just an enterprise budget
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              No per-token metering and no sales call required to see
              numbers. Start free, upgrade when agents move from a
              prototype to something your business actually depends on.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 40}>
                <div
                  className={`flex h-full flex-col rounded-2xl p-7 ${
                    t.highlighted
                      ? "border-2 border-[var(--ink)] bg-white"
                      : "border border-[var(--border)] bg-white"
                  }`}
                >
                  {t.highlighted && (
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[var(--primary)] px-3 py-1 text-[11px] font-semibold text-white">
                      Most teams start here
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-[var(--ink)]">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">
                    {t.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="font-[family-name:var(--font-display)] text-4xl font-semibold text-[var(--ink)]">
                      {t.price}
                    </span>
                    <span className="text-xs text-[var(--fg-muted)]">
                      {t.period}
                    </span>
                  </div>
                  <Button href={t.href} variant={t.variant} className="mt-6 justify-center">
                    {t.cta}
                  </Button>
                  <ul className="mt-7 flex flex-col gap-3">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-[var(--ink)]"
                      >
                        <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow>Compare</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
              Full comparison
            </h2>
          </Reveal>
          <Reveal delay={60} className="mt-10 overflow-x-auto rounded-2xl border border-[var(--border)] bg-white">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] text-left">
                  <th className="px-5 py-4 font-semibold text-[var(--ink)]">Feature</th>
                  <th className="px-5 py-4 font-semibold text-[var(--ink)]">Beta</th>
                  <th className="px-5 py-4 font-semibold text-[var(--ink)]">Team</th>
                  <th className="px-5 py-4 font-semibold text-[var(--ink)]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-5 py-4 font-medium text-[var(--ink)]">{row.label}</td>
                    <td className="px-5 py-4 text-[var(--fg-muted)]">{row.beta}</td>
                    <td className="px-5 py-4 text-[var(--fg-muted)]">{row.team}</td>
                    <td className="px-5 py-4 text-[var(--fg-muted)]">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
              Pricing FAQ
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
