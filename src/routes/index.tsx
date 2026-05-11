import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Home, RefreshCw, TrendingUp, Building2 } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import heroMansion from "@/assets/hero-mansion.jpg";
import luxuryKitchen from "@/assets/luxury-kitchen.jpg";
import aiNetwork from "@/assets/ai-network.jpg";
import luxuryLiving from "@/assets/luxury-living.jpg";

import { seo, jsonLdScript, localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => {
    const s = seo({
      title: "Artisan Mortgages AI — Edmonton's AI-Powered Mortgage Brokerage",
      description:
        "Canada's first AI-powered mortgage brokerage. Boutique service in Edmonton, AB led by Moses Lam. Better rates, faster approvals across 150+ lenders.",
      path: "/",
      image: "/og-image.jpg",
      keywords: [
        "Edmonton mortgage broker",
        "AI mortgage brokerage",
        "Moses Lam",
        "Artisan Mortgages",
        "Alberta mortgage rates",
        "first time home buyer Edmonton",
        "mortgage refinance Edmonton",
      ],
    });
    return {
      ...s,
      scripts: [jsonLdScript(localBusinessJsonLd), jsonLdScript(websiteJsonLd)],
    };
  },
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[780px] overflow-hidden">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroMansion}
          alt="Luxury black and gold mansion at twilight"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs tracking-[0.2em] uppercase text-foreground/80">
            Canada's First AI-Powered Brokerage
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] max-w-5xl"
        >
          The future of <br />
          <span className="text-gold-gradient italic">mortgages</span> has arrived.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          A boutique brokerage in Edmonton, engineered with intelligence. 
          Better rates. Faster approvals. The craftsman's touch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground glow-gold transition-transform hover:scale-105"
            style={{ background: "var(--gradient-gold)" }}
          >
            Start your application
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium glass hover:bg-white/10 transition"
          >
            Explore services
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="h-10 w-6 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--gradient-gold)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "17+", label: "Years Experience" },
    { value: "1000+", label: "Happy Clients" },
    { value: "$100M+", label: "Funded Mortgages" },
    { value: "150+", label: "Lender Partners" },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden glass-strong">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-10 text-center bg-card/30"
            >
              <div className="font-display text-5xl md:text-6xl text-gold-gradient">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  eyebrow, title, body, image, reverse,
}: { eyebrow: string; title: React.ReactNode; body: string; image: string; reverse?: boolean }) {
  return (
    <section className="relative py-24 px-6">
      <div className={`mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-gold-gradient mb-5">{eyebrow}</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">{title}</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg">{body}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-strong"
        >
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Home, title: "First-Time Buyers", desc: "Step-by-step guidance, plus AI-matched programs built for first-time homeowners." },
    { icon: RefreshCw, title: "Renewals", desc: "Don't auto-renew. Our intelligence engine scans the entire market in seconds." },
    { icon: TrendingUp, title: "Refinance", desc: "Unlock equity. Consolidate debt. Refinance up to 80% of your home's value." },
    { icon: Building2, title: "Investment & Rental", desc: "Sophisticated structures for portfolios, rentals, and second properties." },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gold-gradient mb-5">Our Craft</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.0]">
            Every mortgage, <span className="italic text-gold-gradient">tailored</span>.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative p-8 rounded-3xl glass-strong hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "var(--gradient-gold)" }}>
                <it.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mb-3">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LendersMarquee() {
  const lenders = ["TD Canada Trust", "Scotiabank", "RBC", "BMO", "CIBC", "NEO Financial", "Strive", "Equitable Bank", "First National", "MCAP", "Manulife", "Home Trust"];
  return (
    <section className="relative py-24 overflow-hidden border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 mb-10 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-gold-gradient mb-3">150+ Lender Partners</div>
        <h3 className="font-display text-3xl md:text-4xl">Working with Canada's most trusted institutions</h3>
      </div>
      <div className="relative">
        <div className="flex marquee gap-16 whitespace-nowrap">
          {[...lenders, ...lenders].map((l, i) => (
            <span key={i} className="font-display text-2xl md:text-3xl text-muted-foreground/60">{l}</span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl relative rounded-[2.5rem] overflow-hidden glass-strong p-12 md:p-20 text-center grain">
        <div className="absolute inset-0 -z-0 opacity-40">
          <img src={aiNetwork} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/90" />
        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Your dream home, <br />
            <span className="text-gold-gradient italic">approved by intelligence.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
            Speak with Moses directly. No call centers. No bots between you and answers.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="px-7 py-3.5 rounded-full text-sm font-medium text-primary-foreground glow-gold hover:scale-105 transition" style={{ background: "var(--gradient-gold)" }}>
              Book a consultation
            </Link>
            <a href="tel:+17809524566" className="px-7 py-3.5 rounded-full text-sm font-medium glass hover:bg-white/10 transition">
              +1 780 952 4566
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Stats />
      <FeatureRow
        eyebrow="Powered by AI"
        title={<>Intelligence that <span className="italic text-gold-gradient">never sleeps</span>.</>}
        body="We were the first mortgage brokerage in Canada powered by AI. While others wait for office hours, our systems scan over 150 lenders in milliseconds — finding the rate, term, and structure built for you."
        image={aiNetwork}
      />
      <FeatureRow
        eyebrow="Boutique Service"
        title={<>Crafted like the homes <span className="italic text-gold-gradient">you live in</span>.</>}
        body="Marble counters, brushed gold, floor-to-ceiling glass. The homes our clients buy demand attention to detail. So does the financing behind them."
        image={luxuryKitchen}
        reverse
      />
      <Services />
      <FeatureRow
        eyebrow="Edmonton Born"
        title={<>A view from the <span className="italic text-gold-gradient">top floor</span>.</>}
        body="Headquartered in Edmonton, AB. With over 17 years of experience and $100M+ in funded mortgages, Artisan brings a private-bank feel to every client — no matter the deal size."
        image={luxuryLiving}
      />
      <LendersMarquee />
      <CTA />
      <Footer />
    </main>
  );
}
