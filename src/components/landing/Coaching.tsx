import {
  Sprout,
  Apple,
  HeartPulse,
  ShieldCheck,
  Lightbulb,
  Flame,
  Compass,
  Mountain,
  Scale,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site-config";

/** Flecha orgánica dibujada a mano que une dos pasos del proceso. */
function OrganicArrow({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      fill="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M6 14C30 4 64 4 86 22C98 32 102 42 104 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 9"
      />
      <path
        d="M104 50L94 44M104 50L98 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const steps = [
  {
    icon: Compass,
    title: "Descubrir qué querés",
    text: "Damos claridad a eso que querés cambiar y a la vida que realmente deseás construir.",
  },
  {
    icon: Mountain,
    title: "Identificar qué te frena",
    text: "Encontramos los obstáculos, las creencias y los hábitos que hoy te están deteniendo.",
  },
  {
    icon: Sprout,
    title: "Construir hábitos que duran",
    text: "Creamos herramientas y hábitos sostenibles para transformar el cambio en una forma de vivir.",
  },
];

const pillars = [
  { icon: Sparkles, label: "Hábitos saludables y bienestar integral" },
  { icon: Apple, label: "Alimentación y relación con la comida" },
  { icon: HeartPulse, label: "Gestión emocional y manejo del estrés" },
  { icon: ShieldCheck, label: "Confianza y seguridad personal" },
  { icon: Lightbulb, label: "Creencias limitantes" },
  { icon: Flame, label: "Motivación y constancia" },
  { icon: Compass, label: "Propósito de vida y valores" },
  { icon: Mountain, label: "Salir de la zona de confort" },
  { icon: Scale, label: "Equilibrio entre las áreas de tu vida" },
  { icon: Sprout, label: "Desarrollo y crecimiento personal" },
];

export function Coaching() {
  return (
    <section id="coaching" className="relative overflow-hidden bg-card py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            Health Coaching
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            ¿Qué es el Health Coaching y cómo puede ayudarte?
          </h2>
          <p className="mt-6 text-balance text-lg leading-relaxed text-foreground/75">
            ¿Sentís que hay algo en tu vida que querés cambiar, pero no sabés por dónde empezar?
          </p>
          <p className="mt-4 text-balance text-base leading-relaxed text-foreground/70">
            Tal vez querés incorporar hábitos más saludables, dejar de procrastinar, gestionar mejor
            tus emociones, ganar confianza, encontrar un propósito que te motive o simplemente
            sentirte mejor en tu día a día.
          </p>
        </div>

        {/* Idea central destacada */}
        <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] bg-background/70 p-8 text-center shadow-[var(--shadow-soft)] sm:p-10">
          <p className="text-lg leading-relaxed text-foreground/80">
            Muchas veces creemos que nos falta información. Pero la mayoría ya sabe qué debería hacer
            para sentirse mejor.{" "}
            <span className="font-semibold text-secondary">
              Lo difícil no es saberlo, sino llevarlo a la práctica y sostenerlo en el tiempo.
            </span>
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/70">
            El Health Coaching es un proceso de acompañamiento y transformación personal que te ayuda
            a generar cambios reales y duraderos, trabajando sobre todos los pilares del bienestar,
            tu energía, tus emociones, tus pensamientos, tus relaciones, tus hábitos y tu propósito.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/70">
            Trabajamos sobre los distintos pilares del bienestar porque la salud va mucho más allá de
            la alimentación o el ejercicio. Tu energía, tus emociones, tus pensamientos, tus
            relaciones, tus hábitos, tus valores y tu propósito están profundamente conectados.
          </p>
        </div>

        {/* Proceso con cards y flechas orgánicas */}
        <div className="mt-16">
          <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Mi rol no es decirte qué hacer, es acompañarte
          </p>
          <div className="relative mt-10 grid gap-10 md:grid-cols-3 md:gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <article className="animate-rise h-full rounded-[1.75rem] border border-border/60 bg-background p-7 text-center shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary/70">
                    Paso {i + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{step.text}</p>
                </article>
                {i < steps.length - 1 && (
                  <OrganicArrow
                    className="absolute left-1/2 top-full z-10 mt-2 h-10 w-24 -translate-x-1/2 rotate-90 text-secondary/50 md:left-full md:top-1/2 md:mt-0 md:-translate-x-1/3 md:-translate-y-1/2 md:rotate-0"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Qué podemos trabajar juntos */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            ¿Qué podemos trabajar juntos?
          </h3>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-3 rounded-2xl border border-border/50 bg-background/70 px-5 py-4 transition-colors hover:border-secondary/40"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage-deep">
                  <p.icon className="h-4 w-4" />
                </span>
                <span className="text-sm leading-snug text-foreground/80">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cierre */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-foreground/75">
            Cada proceso es único porque cada persona tiene una historia, necesidades y objetivos
            diferentes. Por eso el acompañamiento se adapta a vos, a tu realidad y al momento que
            estás atravesando.
          </p>
          <p className="mt-5 text-lg font-medium leading-relaxed text-foreground">
            Cuando trabajamos sobre la raíz de lo que nos frena, el cambio deja de ser una lucha y
            empieza a convertirse en una forma de vivir.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="sage" size="lg" className="h-12 px-7">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Quiero empezar mi proceso
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}