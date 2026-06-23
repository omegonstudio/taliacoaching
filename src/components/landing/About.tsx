import { Button } from "@/components/ui/button";
import { SocialIcons } from "./SocialIcons";
import { WHATSAPP_URL } from "@/lib/site-config";
import aboutImage from "@/assets/talia-apple.png";

function WavyLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 12C14 2 26 22 40 12C54 2 66 22 80 12C94 2 106 22 120 12C134 2 146 22 158 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden py-24 sm:py-28"
      style={{ background: "#faf7f5" }}
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div className="relative order-last mx-auto w-full max-w-[70%] lg:order-first lg:max-w-none">
          <blockquote className="mb-7 border-l-4 border-secondary/60 pl-5 text-xl font-bold italic leading-snug text-foreground sm:text-2xl">
            El bienestar no depende de una única acción, sino de la suma de pequeñas decisiones que
            tomamos cada día.
          </blockquote>
          <img
            src={aboutImage}
            alt="Talia Alles, Health Coach, señalando hacia arriba"
            width={960}
            height={1280}
            loading="lazy"
            className="w-full object-contain"
          />
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            Quién soy
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Hola, soy Talia Alles
          </h2>
          <WavyLine className="mt-4 h-5 w-32 text-secondary" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/75">
            <p className="font-medium text-foreground">
              Health Coach especializada en hábitos y gestión emocional, profesora y mamá.
            </p>
            <p>Mi camino hacia el bienestar comenzó a partir de una búsqueda personal.</p>
            <p>
              Durante años conviví con inflamación, dolores de panza y problemas de descanso. Probé
              distintos tratamientos y enfoques, pero sentía que nadie estaba buscando el origen de
              lo que me pasaba. Me frustraba porque hacía muchas de las cosas que se supone que debía
              hacer para sentirme bien y, aun así, seguía sin encontrar respuestas.
            </p>
            <p>
              Hasta que decidí empezar a buscarlas por mi cuenta. Fue entonces cuando descubrí que la
              salud no depende únicamente de lo que comemos o del ejercicio que hacemos, sino también
              de nuestros hábitos, emociones, nivel de estrés y forma de vivir. Ese descubrimiento
              transformó por completo mi manera de entender el bienestar.
            </p>
            <p>
              Hoy soy Health Coach certificada y profesora. La docencia me enseñó a transmitir
              conocimientos de una manera simple y cercana, transformando conceptos complejos en
              herramientas prácticas para la vida real.
            </p>
            <p>
              Hoy acompaño a personas que desean sentirse mejor, construir hábitos sostenibles,
              gestionar sus emociones, ganar confianza en sí mismas, descubrir su propósito y crear
              una vida más alineada con lo que realmente quieren.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Button asChild variant="sage" size="lg" className="h-12 px-7">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Comenzar mi proceso
              </a>
            </Button>
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
}