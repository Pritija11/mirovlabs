import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const SITE_URL = "https://mirovlabs.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mirov Labs — The Control Plane for Production AI Agents",
    template: "%s · Mirov Labs",
  },
  description:
    "Mirov Labs is an AI agent infrastructure startup based in Kathmandu, Nepal, giving engineering teams one platform to build, run, and govern AI agents in production.",
  keywords: [
    "Mirov Labs",
    "AI agent infrastructure startup",
    "AI agent platform",
    "multi-agent orchestration",
    "LLM agent runtime",
    "agent observability",
    "AI infrastructure Nepal",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mirov Labs — The Control Plane for Production AI Agents",
    description:
      "One platform to build, run, and govern AI agents in production — from first prototype to fleet-scale deployment.",
    siteName: "Mirov Labs",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirov Labs — The Control Plane for Production AI Agents",
    description:
      "One platform to build, run, and govern AI agents in production — from first prototype to fleet-scale deployment.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mirov Labs",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Mirov Labs is an AI agent infrastructure startup based in Kathmandu, Nepal, giving engineering teams one platform to build, run, and govern AI agents in production.",
  email: "hello@mirovlabs.ltd",
  telephone: "+977-981-5566778",
  address: {
    "@type": "PostalAddress",
    streetAddress: "New Baneshwor",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
