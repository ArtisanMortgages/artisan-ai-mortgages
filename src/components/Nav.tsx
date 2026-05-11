import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled ? "glass-strong px-6 py-3" : "px-2 py-2"
        }`}
        style={scrolled ? { maxWidth: "1100px" } : {}}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-7 w-7 rounded-full bg-[var(--gradient-gold)] glow-gold" style={{ background: "var(--gradient-gold)" }} />
          <span className="font-display text-lg tracking-wide">
            Artisan <span className="text-gold-gradient font-semibold">Mortgages</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
              activeProps={{ className: "px-4 py-2 text-sm text-foreground rounded-full bg-white/5" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="px-5 py-2 text-sm font-medium rounded-full text-primary-foreground glow-gold transition-transform hover:scale-105"
          style={{ background: "var(--gradient-gold)" }}
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
}
