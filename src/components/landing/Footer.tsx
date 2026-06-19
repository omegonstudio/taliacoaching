import { MessageCircle } from "lucide-react";
import { SocialIcons } from "./SocialIcons";
import { WHATSAPP_URL } from "@/lib/site-config";

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
      <div className="border-t border-border/60 py-5">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Talia Alles · Hábitos saludables y sostenibles
        </p>
      </div>
    </footer>
  );
}