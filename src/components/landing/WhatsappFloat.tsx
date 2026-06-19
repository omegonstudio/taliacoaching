import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-config";

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}