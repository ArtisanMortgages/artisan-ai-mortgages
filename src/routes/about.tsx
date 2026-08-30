import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import moses from "@/assets/moses-portrait.jpg";
import aiNetwork from "@/assets/ai-network.jpg";
import agentMoses from "@/assets/agent-moses.jpg";
import agentLukas from "@/assets/agent-lukas.jpg";
import agentAsh from "@/assets/agent-ash.jpg";
import agentAshley from "@/assets/agent-ashley.jpg";
import agentBea from "@/assets/agent-bea.png";
import agentElissa from "@/assets/agent-elissa.png";
import agentJadia from "@/assets/agent-jadia.jpg";
import agentJc from "@/assets/agent-jc.png";
import agentJennifer from "@/assets/agent-jennifer.jpg";

import { seo, jsonLdScript, personJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const agentImages = {
  "agent-moses.jpg": agentMoses,
  "agent-lukas.jpg": agentLukas,
  "agent-ash.jpg": agentAsh,
  "agent-ashley.jpg": agentAshley,
  "agent-bea.png": agentBea,
  "agent-elissa.png": agentElissa,
  "agent-jadia.jpg": agentJadia,
  "agent-jc.png": agentJc,
  "agent-jennifer.jpg": agentJennifer,
};

const agents = [
  { name: "Moses Lam", role: "Brokerage Owner & Mortgage Broker", badge: "21+ years · Speaks Cantonese", img: "agent-moses.jpg", desc: "With over 19 years of experience and great relationships with top lenders, Moses leads Artisan with integrity, transparency, and a client-first mentality on every file." },
  { name: "Lukas Zapata", role: "Senior Mortgage Agent — Residential, Commercial & Private", badge: "$80M+ funded · Speaks Spanish", img: "agent-lukas.jpg", desc: "A former skilled carpenter who now applies the same craftsmanship to mortgages. Four years in, with over $80M funded." },
  { name: "Ash Dumlao", role: "Mortgage Agent", badge: "Speaks Tagalog", img: "agent-ash.jpg", desc: "Originally from the Philippines and fluent in Tagalog. A background in life insurance brings a deep sense of trust, protection, and clear communication to every client." },
  { name: "Ashley Hoover", role: "Mortgage Agent", badge: "Precision & transparency", img: "agent-ashley.jpg", desc: "A craftsman's precision with an approachable touch. Ashley handcrafts personalized mortgage solutions where transparency is the foundation of every relationship." },
  { name: "Ngoc Bich (Bea) Nguyen, CPA, CMA", role: "Mortgage Agent", badge: "17+ years finance leadership", img: "agent-bea.png", desc: "With 17+ years as a CFO and senior finance leader, Bea brings a strategic, numbers-driven perspective to mortgage financing." },
  { name: "Elissa McQueen", role: "Mortgage Agent", badge: "Donald School of Business grad", img: "agent-elissa.png", desc: "A Donald School of Business graduate with over a decade scaling an international brand and boutique. Elissa delivers a refined, white-glove mortgage process." },
  { name: "Jadia Wilson", role: "Mortgage Agent", badge: "20 years of experience", img: "agent-jadia.jpg", desc: "Two decades of refining her craft. Jadia transforms complex mortgage processes into clear, confident journeys — with patience, precision, and authentic care." },
  { name: "JC Jacobs", role: "Mortgage Agent", badge: "Data-driven strategist", img: "agent-jc.png", desc: "A Filipino-Canadian analyst by profession and mortgage strategist by passion. Drawing on a background in business analytics, JC takes a data-driven, customer-centric approach." },
  { name: "Jennifer Abbas", role: "Mortgage Agent", badge: "Years of client guidance", img: "agent-jennifer.jpg", desc: "Years of experience guiding clients through purchases, renewals, and refinances. Jennifer blends strategic advice with transparent communication on every file." },
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => {
    const s = seo({
      title: "About Moses Lam — Artisan Mortgages AI Edmonton",
      description:
        "Meet Moses Lam, founder of Artisan Mortgages AI. 17+ years of experience and over $100M in funded mortgages — Canada's first AI-powered mortgage brokerage.",
      path: "/about",
      image: "/og-about.jpg",
      type: "profile",
      keywords: ["Moses Lam mortgage broker", "Artisan Mortgages AI", "Edmonton mortgage broker", "AI mortgage brokerage Canada"],
    });
    return {
      ...s,
      scripts: [
        jsonLdScript(personJsonLd),
        jsonLdScript(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])),
      ],
    };
  },
});

function AboutPage() {
  return (
    <main className="relative">
      <Nav />
      <section className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-gradient mb-5">About</div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">
              A craftsman's <span className="italic text-gold-gradient">approach</span> to mortgages.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Founded in Edmonton. Built on relationships. Powered by intelligence. Artisan
              Mortgages AI is the first brokerage in Canada to combine boutique service with
              true artificial intelligence — and we built it on purpose.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong"
          >
            <img src={moses} alt="Moses Lam, founder of Artisan Mortgages AI" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-background to-transparent">
              <div className="text-xs uppercase tracking-[0.25em] text-gold-gradient">Founder & Principal Broker</div>
              <h3 className="font-display text-3xl mt-1">Moses Lam</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="text-xs uppercase tracking-[0.25em] text-gold-gradient mb-4">Meet Moses</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              17 years. <span className="italic text-gold-gradient">$100M+</span> funded.<br /> One belief.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Moses Lam founded Artisan Mortgages on a single principle: every client deserves
                the attention of a private banker — and the speed of a Silicon Valley startup.
              </p>
              <p>
                With over 17 years in the industry and deep relationships with the country's top
                lenders, Moses leads a brokerage that treats each file as bespoke work. No call
                centers. No phone trees. Just precision.
              </p>
              <p>
                In 2023, Artisan became the first brokerage in Canada powered by AI — a system
                that scans 150+ lenders in milliseconds. The technology never sleeps. Moses still
                picks up the phone.
              </p>
            </div>
            <div className="mt-10 flex gap-3">
              <Link to="/contact" className="px-6 py-3 rounded-full text-sm font-medium text-primary-foreground glow-gold hover:scale-105 transition" style={{ background: "var(--gradient-gold)" }}>
                Reach Moses directly
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---- TEAM SECTION ---- */}
      <section className="px-6 py-32 bg-black/20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-gold-gradient mb-5">Our Team</div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Meet the <span className="italic text-gold-gradient">artisans</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A team of seasoned brokers — multilingual, deeply experienced, and personally invested in every file we touch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden glass-strong"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={agentImages[agent.img]}
                    alt={agent.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs uppercase tracking-[0.15em] text-gold-gradient mb-1">{agent.role}</div>
                  <h3 className="font-display text-xl mb-1">{agent.name}</h3>
                  <div className="text-xs text-muted-foreground mb-2">{agent.badge}</div>
                  <p className="text-sm text-muted-foreground/80 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {agent.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl relative rounded-[2.5rem] overflow-hidden glass-strong p-12 md:p-16">
          <div className="absolute inset-0 -z-0 opacity-30">
            <img src={aiNetwork} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60" />
          <div className="relative z-10 grid md:grid-cols-3 gap-10">
            {[
              { t: "Boutique", d: "Limited clients. Dedicated attention. Every file handled by a senior broker." },
              { t: "Intelligent", d: "AI-driven rate scanning, scenario modeling, and instant pre-qualification." },
              { t: "Trusted", d: "Relationships with TD, Scotia, RBC, BMO, CIBC, and 150+ alternative lenders." },
            ].map((v) => (
              <div key={v.t}>
                <div className="text-xs uppercase tracking-[0.25em] text-gold-gradient mb-3">{v.t}</div>
                <p className="text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}