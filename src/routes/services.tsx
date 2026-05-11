import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Home, RefreshCw, TrendingUp, Building2, Briefcase, Shield, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

import { seo, jsonLdScript, breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => {
    const s = seo({
      title: "Mortgage Services in Edmonton — Artisan Mortgages AI",
      description:
        "First-time buyers, renewals, refinance, investment properties, self-employed and private lending. AI-powered mortgage solutions across 150+ Canadian lenders.",
      path: "/services",
      image: "/og-services.jpg",
      keywords: [
        "mortgage services Edmonton",
        "first time home buyer mortgage",
        "mortgage renewal Alberta",
        "mortgage refinance Edmonton",
        "investment property mortgage",
        "self employed mortgage Canada",
        "private mortgage lender",
      ],
    });
    const itemListJsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Mortgage Services",
      itemListElement: [
        "First-Time Buyers",
        "Mortgage Renewals",
        "Refinance & Equity",
        "Investment Properties",
        "Self-Employed & BFS",
        "Private & Alternative Lending",
      ].map((name, i) => ({
        "@type": "Service",
        position: i + 1,
        name,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "AdministrativeArea", name: "Alberta, Canada" },
      })),
    };
    return {
      ...s,
      scripts: [
        jsonLdScript(itemListJsonLd),
        jsonLdScript(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])),
      ],
    };
  },
});

const services = [
  { icon: Home, title: "First-Time Buyers", body: "We make the first one feel effortless. From pre-approval to keys in hand, our AI matches you to programs (FHSA, RRSP HBP, incentive plans) you didn't know you qualified for." },
  { icon: RefreshCw, title: "Mortgage Renewals", body: "Your bank wants the easy renewal. We want the right one. We scan 150+ lenders the moment your renewal opens — and negotiate aggressively." },
  { icon: TrendingUp, title: "Refinance & Equity", body: "Refinance up to 80% of your home's value. Pay off high-interest debt, fund renovations, or invest. One payment. One plan. Total clarity." },
  { icon: Building2, title: "Investment Properties", body: "Rentals, flips, multi-units, second homes. Sophisticated structures from a brokerage that understands portfolios." },
  { icon: Briefcase, title: "Self-Employed & BFS", body: "Business-for-self files require nuance. We have lender relationships built for entrepreneurs, contractors, and commission earners." },
  { icon: Shield, title: "Private & Alternative", body: "When the banks say no, we have other doors. Bridge financing, private equity, and alternative A & B lending solutions." },
];

function ServicesPage() {
  return (
    <main className="relative">
      <Nav />
      <section className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-gradient mb-5">Services</div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">
              Every mortgage, <br /><span className="italic text-gold-gradient">tailored</span>.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
              Six specialties. One brokerage. Powered by Canada's first AI mortgage engine.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative p-10 rounded-3xl glass-strong hover:bg-white/[0.06] transition-all hover:-translate-y-1 duration-500"
            >
              <div className="h-12 w-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "var(--gradient-gold)" }}>
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl mb-4">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">Not sure which one fits?</h2>
          <p className="mt-4 text-muted-foreground">A 15-minute conversation with Moses will give you clarity.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground glow-gold hover:scale-105 transition" style={{ background: "var(--gradient-gold)" }}>
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
