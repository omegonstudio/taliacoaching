import { MessageCircle } from "lucide-react";
import { SocialIcons } from "./SocialIcons";
import { WHATSAPP_URL } from "@/lib/site-config";
import logo from "@/assets/logo.webp";


export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-14 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-semibold text-foreground">Talia Alles</p>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Health Coach
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 md:items-end">
          <SocialIcons />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/75 transition-colors hover:text-secondary"
          >
            <MessageCircle className="h-4 w-4" />
            Escribime por WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-border/60 py-6">
        <a
          href="https://omegon.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex w-fit items-center gap-3 opacity-70 transition-opacity hover:opacity-100"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Powered by
          </span>

          <img src={logo} alt="Omegon" width={1024} height={1024} className="h-8 w-auto" />
        </a>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Talia Alles · Hábitos saludables y sostenibles
        </p>
      </div>
    </footer>
  );
}