import BuyEbookButton from "@/components/landing/BuyEbookButton";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site-config";
import heroImage from "@/assets/hero.jpeg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-warm)" }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-40">
        <div className="animate-rise text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Bienestar integral · Health Coach
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Construí hábitos que acompañen a la vida que querés crear
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-sm italic leading-relaxed text-foreground/70 lg:mx-0">
            Soy Talia Alles, Health Coach. Te acompaño a transformar tus hábitos y tu bienestar desde
            la conciencia. En este eBook comparto las herramientas que me ayudaron a lograrlo.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-foreground/75 lg:mx-0">
            Esta guía te ayudará a entender por qué te cuesta sostener hábitos y te brindará
            herramientas prácticas para construir cambios reales y duraderos en tu vida.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <BuyEbookButton className="w-full sm:w-auto">Quiero mi guía</BuyEbookButton>
            <Button asChild variant="softline" size="xl" className="w-full sm:w-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Comenzar mi proceso
              </a>
            </Button>
          </div>
        </div>

        <div className="animate-rise relative mx-auto w-full max-w-md">
          <div
            className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-70 blur-2xl"
            style={{ background: "color-mix(in oklab, var(--sage) 45%, transparent)" }}
            aria-hidden="true"
          />
          <img
            src={heroImage}
            alt="eBook de hábitos saludables sobre un escritorio sereno con plantas y té"
            width={1024}
            height={1024}
            className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-card)]"
          />
        </div>
      </div>
    </section>
  );
}