import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Moses Lam — Artisan Mortgages AI" },
      { name: "description", content: "Speak with Moses Lam directly. Edmonton, AB. Call 780 952 4566 or email moses@artisanmortgages.ca." },
    ],
  }),
});

const items = [
  { icon: Phone, label: "Call", value: "+1 780 952 4566", href: "tel:+17809524566" },
  { icon: Mail, label: "Email", value: "moses@artisanmortgages.ca", href: "mailto:moses@artisanmortgages.ca" },
  { icon: MapPin, label: "Office", value: "2207 90B Street SW, Edmonton, AB", href: "https://maps.google.com/?q=2207+90B+Street+SW+Edmonton+AB" },
  { icon: Clock, label: "Hours", value: "Mon — Sat · By Appointment" },
];

function ContactPage() {
  return (
    <main className="relative">
      <Nav />
      <section className="pt-40 pb-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-gradient mb-5">Contact</div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">
              Let's <span className="italic text-gold-gradient">talk</span>.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
              Whether you're buying your first home or refinancing your fifth investment property —
              Moses answers his own phone.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-2 gap-5">
          {items.map((it, i) => {
            const Comp: React.ElementType = it.href ? "a" : "div";
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Comp
                  {...(it.href ? { href: it.href, target: it.label === "Office" ? "_blank" : undefined, rel: "noreferrer" } : {})}
                  className="block p-8 rounded-3xl glass-strong hover:bg-white/[0.06] transition-all hover:-translate-y-1 duration-500 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="h-12 w-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "var(--gradient-gold)" }}>
                      <it.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em] text-gold-gradient mb-2">{it.label}</div>
                      <div className="font-display text-2xl group-hover:text-foreground transition">{it.value}</div>
                    </div>
                  </div>
                </Comp>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl overflow-hidden glass-strong aspect-[16/9]">
            <iframe
              title="Artisan Mortgages AI office location"
              src="https://www.google.com/maps?q=2207+90B+Street+SW+Edmonton+AB&output=embed"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
