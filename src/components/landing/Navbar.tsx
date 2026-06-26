import { useEffect, useState } from "react";
import BuyEbookButton from "@/components/landing/BuyEbookButton";

const links = [
  { href: "#coaching", label: "Health Coaching" },
  { href: "#sobre-mi", label: "Quién soy" },
  { href: "#ebook", label: "El eBook" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="text-base font-semibold tracking-wide text-foreground">
          Talia Alles
          <span className="ml-2 hidden text-xs font-normal uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            Health Coach
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/75 transition-colors hover:text-secondary"
            >
              {l.label}
            </a>
          ))}
        </div>
        <BuyEbookButton className="h-9 px-5">Conseguí el eBook</BuyEbookButton>
      </nav>
    </header>
  );
}