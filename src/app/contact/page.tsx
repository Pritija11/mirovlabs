import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "./ContactForm";
import { IconMail, IconPhone, IconMapPin } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Mirov Labs about building your first AI agent — a startup team based in Kathmandu, Nepal, building the control plane for agents in production.",
  alternates: {
    canonical: "/contact",
  },
};

const contactPoints = [
  { icon: IconMail, label: "hello@mirovlabs.ltd" },
  { icon: IconPhone, label: "+977 981-5566778" },
  { icon: IconMapPin, label: "New Baneshwor, Kathmandu 44600, Nepal" },
];

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-[var(--ink)] md:text-5xl">
            Tell us what you&apos;re trying to automate.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[var(--fg-muted)]">
            As a startup, someone on the founding team reads and replies to
            every message personally — there&apos;s no queue, no ticket
            number, and no automated sequence in between. Expect a response
            within a business day.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {contactPoints.map((c) => (
              <div key={c.label} className="flex items-center gap-3 text-sm text-[var(--ink)]">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
                  <c.icon className="h-4 w-4 text-[var(--primary-deep)]" />
                </span>
                {c.label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-alt)] p-7 sm:p-9">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
