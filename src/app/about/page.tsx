import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Avatar } from "@/components/Avatar";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mirov Labs is an AI agent infrastructure startup based in Kathmandu, Nepal, building the control plane for agents running in production.",
  alternates: {
    canonical: "/about",
  },
};

const stats = [
  { value: "2026", label: "Founded" },
  { value: "6", label: "People on the team" },
  { value: "Kathmandu", label: "Where we build" },
];

const roles = [
  {
    title: "Founder & CEO",
    initials: "FC",
    body: "Spent four years building internal automation before starting Mirov, and still writes the first version of every new integration.",
  },
  {
    title: "Head of Engineering",
    initials: "HE",
    body: "Owns the runtime and tracing infrastructure — the part of the platform that has to be right every single time.",
  },
  {
    title: "Applied AI Engineer",
    initials: "AE",
    body: "Works directly with early-access teams to design their first agent, then folds what breaks back into the product.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Eyebrow>About Mirov Labs</Eyebrow>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-[var(--ink)] md:text-5xl">
              We kept shipping agents nobody could debug, so we built the
              thing we needed ourselves.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Mirov Labs started in 2026 as a small team in Kathmandu
              who&apos;d each separately hit the same wall: an AI agent demo
              that worked beautifully in front of a customer, and then
              became unmaintainable the moment it touched real production
              traffic. As a startup ourselves, we didn&apos;t have a
              platform team to fall back on — so the tracing and guardrails
              we needed to trust our own agents became the product.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-alt)] p-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="break-words font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)] sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <blockquote className="border-l-2 border-[var(--primary)] pl-6 font-[family-name:var(--font-display)] text-2xl italic leading-snug text-[var(--ink)]">
              &ldquo;We wanted the kind of visibility into an agent that we
              already expected from a normal backend service — and we
              couldn&apos;t find it anywhere, so we built it.&rdquo;
            </blockquote>
            <p className="mt-8 text-sm leading-7 text-[var(--fg-muted)]">
              Most of the tooling we tried early on treated an agent like a
              black box: you sent it a task, and it either worked or it
              didn&apos;t, with very little in between to inspect. For a
              team of our size, that wasn&apos;t sustainable — every broken
              run meant someone reading through raw logs trying to
              reconstruct what the model had actually decided to do.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              Mirov is the platform we wished existed at that point: a
              runtime that treats agent behavior as something you can see,
              test, and constrain, the same way you&apos;d treat any other
              piece of production infrastructure. We&apos;re still a small
              startup, a few months into building it in the open with
              early-access teams, and most of the roadmap is shaped directly
              by what they run into.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Who you&apos;d work with</Eyebrow>
            <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
              A small team, directly involved in your rollout
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 40}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6">
                  <Avatar initials={r.initials} className="h-10 w-10 text-sm" />
                  <h3 className="mt-4 text-base font-semibold text-[var(--ink)]">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 text-center md:py-24">
        <Container>
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
              Want to build your first agent with us?
            </h2>
            <Button href="/contact" className="mt-7">
              Book a demo
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
