"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { IconClose, IconMenu, IconLogo } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/agents", label: "Agents" },
  { href: "/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-[var(--ink)] py-2 text-center text-xs font-medium text-white">
        Now in open beta — the Mirov Agent Runtime is free for teams under 5 agents.
      </div>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-[var(--border)] bg-white/95 backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)]">
              <IconLogo className="h-4.5 w-4.5 text-white" />
            </span>
            <span className="text-lg font-bold tracking-tight text-[var(--ink)]">
              MIROV
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-[var(--ink)]"
                      : "text-[var(--fg-muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary)] lg:inline-flex"
          >
            Book a demo
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-[var(--ink)] lg:hidden"
          >
            {open ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </Container>

        {open && (
          <div className="border-t border-[var(--border)] lg:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-2 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[var(--bg-alt)] text-[var(--ink)]"
                        : "text-[var(--fg-muted)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-[var(--ink)] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Book a demo
              </Link>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
