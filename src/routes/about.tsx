import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import moses from "@/assets/moses-portrait.jpg";
import aiNetwork from "@/assets/ai-network.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Moses Lam — Artisan Mortgages AI" },
      { name: "description", content: "Meet Moses Lam, founder of Artisan Mortgages AI — Canada's first AI-powered mortgage brokerage in Edmonton, AB." },
    ],
  }),
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
