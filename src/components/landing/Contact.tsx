import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CALENDLY_URL } from "@/lib/site-config";
import contactImage from "@/assets/acompanamento.png";


export function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section id="contacto" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)] lg:grid-cols-2">
          <div className="relative hidden bg-[#faf7f5] lg:block">
            <img
              src={contactImage}
              alt="Talia Alles sonriendo y sosteniendo una manzana roja"
              width={960}
              height={1280}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
          <div className="p-9 sm:p-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
              Acompañamiento
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              ¿Querés acompañamiento personalizado?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/75">
              Si sentís que necesitás una guía más cercana para construir hábitos sostenibles y
              mejorar tu bienestar, podemos conversar.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75">
              Agendá una reunión y exploremos juntos cuál es el mejor camino para vos.
            </p>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="sage" size="xl" className="mt-8 w-full sm:w-auto">
                  <CalendarDays className="h-5 w-5" />
                  Agendar reunión
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl overflow-hidden p-0">
                <DialogHeader className="px-6 pt-6">
                  <DialogTitle>Agendá tu reunión</DialogTitle>
                  <DialogDescription>
                    Elegí el día y horario que mejor te quede.
                  </DialogDescription>
                </DialogHeader>
                <div className="h-[70vh] w-full px-2 pb-2">
                  <iframe
                    src={CALENDLY_URL}
                    title="Calendario de reuniones de Talia Alles"
                    className="h-full w-full rounded-xl border-0"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}