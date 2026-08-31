import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Artisan Mortgages" className="h-7 w-7 rounded-full object-cover" />
            <span className="font-display text-xl">Artisan <span className="text-gold-gradient">Mortgages</span> AI</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Canada's first AI-powered mortgage brokerage. A boutique experience for clients
            who expect more — speed, intelligence, and a craftsman's touch.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold-gradient mb-4">Visit</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            2207 90B Street SW<br />Edmonton, AB
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold-gradient mb-4">Contact</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <a href="tel:+17804524566" className="hover:text-foreground transition">+1 780 952 4566</a><br />
            <a href="mailto:moses@artisanmortgages.ca" className="hover:text-foreground transition">moses@artisanmortgages.ca</a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Artisan Mortgages AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}