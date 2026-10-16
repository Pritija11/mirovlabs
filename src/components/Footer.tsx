import Link from "next/link";
import { Container } from "./Container";
import { IconLogo } from "./icons";

const columns = [
  {
    heading: "Product",
    links: [
      { href: "/platform", label: "Platform" },
      { href: "/agents", label: "Agent templates" },
      { href: "/security", label: "Security & governance" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--ink)] text-white/70">
      <Container className="flex flex-col gap-12 py-16 lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)]">
              <IconLogo className="h-4.5 w-4.5 text-white" />
            </span>
            <span className="text-base font-bold tracking-tight text-white">
              MIROV
            </span>
          </div>
          <p className="mt-4 text-sm leading-6">
            The control plane for production AI agents — build, run, and
            govern them from one platform, from Kathmandu, Nepal.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            All systems operational
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-semibold text-white">
                {col.heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {col.links.map((l, i) => (
                  <li key={`${l.href}-${i}`}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} Mirov Labs. All rights reserved.</p>
          <p>AI agent infrastructure, built from Kathmandu, Nepal.</p>
        </Container>
      </div>
    </footer>
  );
}
