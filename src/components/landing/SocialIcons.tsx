import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, TIKTOK_URL } from "@/lib/site-config";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.5-1v6.1c0 3.4-2.7 5.8-5.9 5.4-2.6-.3-4.6-2.5-4.6-5.2 0-3.2 2.8-5.6 6-5v2.8c-.4-.1-.8-.2-1.2-.1-1.2.1-2.1 1.1-2 2.4 0 1.2 1.1 2.2 2.4 2.1 1.3-.1 2.1-1.1 2.1-2.4V3h3.2z" />
    </svg>
  );
}

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram de Talia Alles"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:text-secondary"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href={TIKTOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok de Talia Alles"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:text-secondary"
      >
        <TikTokIcon className="h-5 w-5" />
      </a>
    </div>
  );
}