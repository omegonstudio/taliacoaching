import { Check, FileText } from "lucide-react";
import BuyEbookButton from "@/components/landing/BuyEbookButton";
import ebookCover from "@/assets/ebook-cover.jpg";

const benefits = [
  "Entender por qué te cuesta sostener los cambios que querés lograr.",
  "Identificar los hábitos y patrones que hoy están condicionando tu bienestar.",
  "Crear hábitos que se adapten a tu vida y no al revés.",
  'Romper con la mentalidad de "el lunes empiezo".',
  "Salir del ciclo de empezar, abandonar y volver a empezar.",
  "Construir cambios reales desde la conciencia y no desde la exigencia.",
];

const pdfIncludes = [
  "Ejercicios prácticos de reflexión.",
  "Herramientas para diseñar hábitos sostenibles.",
  "Actividades de autoconocimiento.",
  "Ejemplos simples para aplicar en tu día a día.",
];

export function Ebook() {
  return (
    <section
      id="ebook"
      className="py-24 sm:py-28"
      style={{ background: "#faf7f5" }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm">
          <img
            src={ebookCover}
            alt="Portada del eBook Hábitos que se sostienen, por Talia Alles"
            width={1024}
            height={1536}
            loading="lazy"
            className="mx-auto w-full object-contain"
          />
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            Conseguí mi eBook
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            El primer paso para transformar tus hábitos
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            En este eBook vas a encontrar herramientas simples y prácticas para:
          </p>
          <ul className="mt-6 space-y-3.5">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-foreground/85">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--sage)_45%,transparent)] text-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-base leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <div
            className="mt-8 rounded-2xl border px-5 py-5"
            style={{ background: "#f1e7e1", borderColor: "#e3d4cc" }}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
              <FileText className="h-4 w-4 text-secondary" />
              El PDF incluye:
            </div>
            <ul className="mt-3 space-y-2">
              {pdfIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <BuyEbookButton className="w-full sm:w-auto">Compralo ahora</BuyEbookButton>
          </div>
        </div>
      </div>
    </section>
  );
}