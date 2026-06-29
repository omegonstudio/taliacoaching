import { c as jsxDevRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { B as Button, W as WHATSAPP_URL, C as CALENDLY_URL, c as cn, I as INSTAGRAM_URL, T as TIKTOK_URL, a as createSsrRpc } from "./site-config-CbQL0lWx.mjs";
import { a as createServerFn } from "./server-dPCb_qXc.mjs";
import { D as Dialog$1, a as DialogTrigger$1, b as DialogPortal$1, c as DialogContent$1, d as DialogClose, e as DialogTitle$1, f as DialogDescription$1, g as DialogOverlay$1 } from "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/seroval.mjs";
import { C as Compass, M as Mountain, S as Sprout, a as Sparkles, A as Apple, H as HeartPulse, b as ShieldCheck, L as Lightbulb, F as Flame, c as Scale, d as Check, e as FileText, f as CalendarDays, g as MessageCircle, I as Instagram, X } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const startCheckout = createServerFn({
  method: "POST"
}).handler(createSsrRpc("76222c6845b6553cfdb09d8428a299bdd6cf1c7ddb323835c4ed1c1747765e2e"));
function BuyEbookButton({ children, className }) {
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const { initPoint } = await startCheckout();
      window.location.href = initPoint;
    } catch (err) {
      const message = err instanceof Error ? err.message : "No pudimos iniciar el pago. Intentá de nuevo.";
      setError(message);
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex flex-col items-stretch", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Button,
      {
        type: "button",
        variant: "hero",
        size: "xl",
        className: cn(className),
        disabled: loading,
        onClick: handleClick,
        children: loading ? "Procesando..." : children
      },
      void 0,
      false,
      {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/BuyEbookButton.tsx",
        lineNumber: 35,
        columnNumber: 7
      },
      this
    ),
    error ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-center text-xs text-destructive", children: error }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/BuyEbookButton.tsx",
      lineNumber: 45,
      columnNumber: 16
    }, this) : null
  ] }, void 0, true, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/BuyEbookButton.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
const links = [
  { href: "#coaching", label: "Health Coaching" },
  { href: "#sobre-mi", label: "Quién soy" },
  { href: "#ebook", label: "El eBook" },
  { href: "#contacto", label: "Contacto" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"}`,
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("nav", { className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "#inicio", className: "text-base font-semibold tracking-wide text-foreground", children: [
          "Talia Alles",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "ml-2 hidden text-xs font-normal uppercase tracking-[0.2em] text-muted-foreground sm:inline", children: "Health Coach" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Navbar.tsx",
            lineNumber: 32,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Navbar.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "hidden items-center gap-8 md:flex", children: links.map((l) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "a",
          {
            href: l.href,
            className: "text-sm text-foreground/75 transition-colors hover:text-secondary",
            children: l.label
          },
          l.href,
          false,
          {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Navbar.tsx",
            lineNumber: 38,
            columnNumber: 13
          },
          this
        )) }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Navbar.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(BuyEbookButton, { className: "h-9 px-5", children: "Conseguí el eBook" }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Navbar.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Navbar.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Navbar.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}
const heroImage = "/assets/hero-Cr0F8Dre.jpeg";
function Hero() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "section",
    {
      id: "inicio",
      className: "relative overflow-hidden",
      style: { background: "var(--gradient-warm)" },
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-40", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "animate-rise text-center lg:text-left", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground", children: "Bienestar integral · Health Coach" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
            lineNumber: 15,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "mt-6 text-balance text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl", children: "Construí hábitos que acompañen a la vida que querés crear" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
            lineNumber: 18,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mx-auto mt-6 max-w-xl text-balance text-sm italic leading-relaxed text-foreground/70 lg:mx-0", children: "Soy Talia Alles, Health Coach. Te acompaño a transformar tus hábitos y tu bienestar desde la conciencia. En este eBook comparto las herramientas que me ayudaron a lograrlo." }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-foreground/75 lg:mx-0", children: "Esta guía te ayudará a entender por qué te cuesta sostener hábitos y te brindará herramientas prácticas para construir cambios reales y duraderos en tu vida." }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(BuyEbookButton, { className: "w-full sm:w-auto", children: "Quiero mi guía" }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
              lineNumber: 30,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "softline", size: "xl", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", children: "Comenzar mi proceso" }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
              lineNumber: 32,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
              lineNumber: 31,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "animate-rise relative mx-auto w-full max-w-md", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              className: "absolute -inset-6 -z-10 rounded-[2.5rem] opacity-70 blur-2xl",
              style: { background: "color-mix(in oklab, var(--sage) 45%, transparent)" },
              "aria-hidden": "true"
            },
            void 0,
            false,
            {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
              lineNumber: 40,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "img",
            {
              src: heroImage,
              alt: "eBook de hábitos saludables sobre un escritorio sereno con plantas y té",
              width: 1024,
              height: 1024,
              className: "w-full rounded-[2rem] object-cover shadow-[var(--shadow-card)]"
            },
            void 0,
            false,
            {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
              lineNumber: 45,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Hero.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}
function OrganicArrow({ className = "", flip = false }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "svg",
    {
      viewBox: "0 0 120 60",
      className,
      fill: "none",
      "aria-hidden": "true",
      style: flip ? { transform: "scaleX(-1)" } : void 0,
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "path",
          {
            d: "M6 14C30 4 64 4 86 22C98 32 102 42 104 50",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeDasharray: "1 9"
          },
          void 0,
          false,
          {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
            lineNumber: 26,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "path",
          {
            d: "M104 50L94 44M104 50L98 38",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          void 0,
          false,
          {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
            lineNumber: 33,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}
const steps = [
  {
    icon: Compass,
    title: "Descubrir qué querés",
    text: "Damos claridad a eso que querés cambiar y a la vida que realmente deseás construir."
  },
  {
    icon: Mountain,
    title: "Identificar qué te frena",
    text: "Encontramos los obstáculos, las creencias y los hábitos que hoy te están deteniendo."
  },
  {
    icon: Sprout,
    title: "Construir hábitos que duran",
    text: "Creamos herramientas y hábitos sostenibles para transformar el cambio en una forma de vivir."
  }
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
  { icon: Sprout, label: "Desarrollo y crecimiento personal" }
];
function Coaching() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { id: "coaching", className: "relative overflow-hidden bg-card py-24 sm:py-28", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-medium uppercase tracking-[0.2em] text-secondary", children: "Health Coaching" }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-4 text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl", children: "¿Qué es el Health Coaching y cómo puede ayudarte?" }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-6 text-balance text-lg leading-relaxed text-foreground/75", children: "¿Sentís que hay algo en tu vida que querés cambiar, pero no sabés por dónde empezar?" }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-balance text-base leading-relaxed text-foreground/70", children: "Tal vez querés incorporar hábitos más saludables, dejar de procrastinar, gestionar mejor tus emociones, ganar confianza, encontrar un propósito que te motive o simplemente sentirte mejor en tu día a día." }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto mt-12 max-w-3xl rounded-[2rem] bg-background/70 p-8 text-center shadow-[var(--shadow-soft)] sm:p-10", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-lg leading-relaxed text-foreground/80", children: [
        "Muchas veces creemos que nos falta información. Pero la mayoría ya sabe qué debería hacer para sentirse mejor.",
        " ",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-semibold text-secondary", children: "Lo difícil no es saberlo, sino llevarlo a la práctica y sostenerlo en el tiempo." }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-5 text-base leading-relaxed text-foreground/70", children: "El Health Coaching es un proceso de acompañamiento y transformación personal que te ayuda a generar cambios reales y duraderos, trabajando sobre todos los pilares del bienestar, tu energía, tus emociones, tus pensamientos, tus relaciones, tus hábitos y tu propósito." }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-5 text-base leading-relaxed text-foreground/70", children: "Trabajamos sobre los distintos pilares del bienestar porque la salud va mucho más allá de la alimentación o el ejercicio." }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-16", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-center text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground", children: "Mi rol no es decirte qué hacer, es acompañarte" }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative mt-10 grid gap-10 md:grid-cols-3 md:gap-6", children: steps.map((step, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("article", { className: "animate-rise h-full rounded-[1.75rem] border border-border/60 bg-background p-7 text-center shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15 text-secondary", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(step.icon, { className: "h-6 w-6" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
            lineNumber: 127,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
            lineNumber: 126,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "mt-4 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary/70", children: [
            "Paso ",
            i + 1
          ] }, void 0, true, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
            lineNumber: 129,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-2 text-xl font-bold text-foreground", children: step.title }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
            lineNumber: 132,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-sm leading-relaxed text-foreground/70", children: step.text }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
            lineNumber: 133,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
          lineNumber: 125,
          columnNumber: 17
        }, this),
        i < steps.length - 1 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          OrganicArrow,
          {
            className: "absolute left-1/2 top-full z-10 mt-2 h-10 w-24 -translate-x-1/2 rotate-90 text-secondary/50 md:left-full md:top-1/2 md:mt-0 md:-translate-x-1/3 md:-translate-y-1/2 md:rotate-0"
          },
          void 0,
          false,
          {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
            lineNumber: 136,
            columnNumber: 19
          },
          this
        )
      ] }, step.title, true, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 124,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-20", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-center text-2xl font-bold text-foreground sm:text-3xl", children: "¿Qué podemos trabajar juntos?" }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 grid gap-3 sm:grid-cols-2", children: pillars.map((p) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "div",
        {
          className: "flex items-center gap-3 rounded-2xl border border-border/50 bg-background/70 px-5 py-4 transition-colors hover:border-secondary/40",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage-deep", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(p.icon, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
              lineNumber: 157,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
              lineNumber: 156,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-sm leading-snug text-foreground/80", children: p.label }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
              lineNumber: 159,
              columnNumber: 17
            }, this)
          ]
        },
        p.label,
        true,
        {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
          lineNumber: 152,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
      lineNumber: 146,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto mt-16 max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-base leading-relaxed text-foreground/75", children: "Cada proceso es único porque cada persona tiene una historia, necesidades y objetivos diferentes. Por eso el acompañamiento se adapta a vos, a tu realidad y al momento que estás atravesando." }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-5 text-lg font-medium leading-relaxed text-foreground", children: "Cuando trabajamos sobre la raíz de lo que nos frena, el cambio deja de ser una lucha y empieza a convertirse en una forma de vivir." }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "sage", size: "lg", className: "h-12 px-7", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", children: "Quiero empezar mi proceso" }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 178,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 177,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
        lineNumber: 176,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
      lineNumber: 166,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Coaching.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
function TikTokIcon({ className }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("svg", { viewBox: "0 0 24 24", className, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { d: "M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.5-1v6.1c0 3.4-2.7 5.8-5.9 5.4-2.6-.3-4.6-2.5-4.6-5.2 0-3.2 2.8-5.6 6-5v2.8c-.4-.1-.8-.2-1.2-.1-1.2.1-2.1 1.1-2 2.4 0 1.2 1.1 2.2 2.4 2.1 1.3-.1 2.1-1.1 2.1-2.4V3h3.2z" }, void 0, false, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/SocialIcons.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/SocialIcons.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function SocialIcons({ className = "" }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `flex items-center gap-3 ${className}`, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "a",
      {
        href: INSTAGRAM_URL,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Instagram de Talia Alles",
        className: "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:text-secondary",
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Instagram, { className: "h-5 w-5" }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/SocialIcons.tsx",
          lineNumber: 22,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/SocialIcons.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "a",
      {
        href: TIKTOK_URL,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "TikTok de Talia Alles",
        className: "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:text-secondary",
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TikTokIcon, { className: "h-5 w-5" }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/SocialIcons.tsx",
          lineNumber: 31,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/SocialIcons.tsx",
        lineNumber: 24,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/SocialIcons.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
const aboutImage = "/assets/talia-apple-C7FbBRAl.png";
function WavyLine({ className = "" }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("svg", { viewBox: "0 0 160 24", className, fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "path",
    {
      d: "M2 12C14 2 26 22 40 12C54 2 66 22 80 12C94 2 106 22 120 12C134 2 146 22 158 12",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round"
    },
    void 0,
    false,
    {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
      lineNumber: 9,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function About() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "section",
    {
      id: "sobre-mi",
      className: "relative overflow-hidden py-24 sm:py-28",
      style: { background: "#faf7f5" },
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative order-last mx-auto w-full max-w-[70%] lg:order-first lg:max-w-none", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("blockquote", { className: "mb-7 border-l-4 border-secondary/60 pl-5 text-xl font-bold italic leading-snug text-foreground sm:text-2xl", children: "El bienestar no depende de una única acción, sino de la suma de pequeñas decisiones que tomamos cada día." }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "img",
            {
              src: aboutImage,
              alt: "Talia Alles, Health Coach, señalando hacia arriba",
              width: 960,
              height: 1280,
              loading: "lazy",
              className: "w-full object-contain"
            },
            void 0,
            false,
            {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
              lineNumber: 32,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
          lineNumber: 27,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-medium uppercase tracking-[0.2em] text-secondary", children: "Quién soy" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl", children: "Hola, soy Talia Alles" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(WavyLine, { className: "mt-4 h-5 w-32 text-secondary" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 space-y-5 text-lg leading-relaxed text-foreground/75", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-medium text-foreground", children: "Health Coach especializada en hábitos y gestión emocional, profesora y mamá." }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
              lineNumber: 50,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "Mi camino hacia el bienestar comenzó a partir de una búsqueda personal." }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
              lineNumber: 53,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "Durante años conviví con inflamación, dolores de panza y problemas de descanso. Probé distintos tratamientos y enfoques, pero sentía que nadie estaba buscando el origen de lo que me pasaba. Me frustraba porque hacía muchas de las cosas que se supone que debía hacer para sentirme bien y, aun así, seguía sin encontrar respuestas." }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
              lineNumber: 54,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "Hasta que decidí empezar a buscarlas por mi cuenta. Fue entonces cuando descubrí que la salud no depende únicamente de lo que comemos o del ejercicio que hacemos, sino también de nuestros hábitos, emociones, nivel de estrés y forma de vivir. Ese descubrimiento transformó por completo mi manera de entender el bienestar." }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
              lineNumber: 60,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "Hoy soy Health Coach certificada y profesora. La docencia me enseñó a transmitir conocimientos de una manera simple y cercana, transformando conceptos complejos en herramientas prácticas para la vida real." }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
              lineNumber: 66,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "Hoy acompaño a personas que desean sentirse mejor, construir hábitos sostenibles, gestionar sus emociones, ganar confianza en sí mismas, descubrir su propósito y crear una vida más alineada con lo que realmente quieren." }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
              lineNumber: 71,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
            lineNumber: 49,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "sage", size: "lg", className: "h-12 px-7", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", children: "Comenzar mi proceso" }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
              lineNumber: 78,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SocialIcons, {}, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
              lineNumber: 83,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/About.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}
const ebookCover = "/assets/ebook-cover-C64p2uBI.jpg";
const benefits = [
  "Entender por qué te cuesta sostener los cambios que querés lograr.",
  "Identificar los hábitos y patrones que hoy están condicionando tu bienestar.",
  "Crear hábitos que se adapten a tu vida y no al revés.",
  'Romper con la mentalidad de "el lunes empiezo".',
  "Salir del ciclo de empezar, abandonar y volver a empezar.",
  "Construir cambios reales desde la conciencia y no desde la exigencia."
];
const pdfIncludes = [
  "Ejercicios prácticos de reflexión.",
  "Herramientas para diseñar hábitos sostenibles.",
  "Actividades de autoconocimiento.",
  "Ejemplos simples para aplicar en tu día a día."
];
function Ebook() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "section",
    {
      id: "ebook",
      className: "py-24 sm:py-28",
      style: { background: "#faf7f5" },
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative mx-auto w-full max-w-sm", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "img",
          {
            src: ebookCover,
            alt: "Portada del eBook Hábitos que se sostienen, por Talia Alles",
            width: 1024,
            height: 1536,
            loading: "lazy",
            className: "mx-auto w-full object-contain"
          },
          void 0,
          false,
          {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
            lineNumber: 30,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-medium uppercase tracking-[0.2em] text-secondary", children: "Conseguí mi eBook" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl", children: "El primer paso para transformar tus hábitos" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-5 text-lg leading-relaxed text-foreground/75", children: "En este eBook vas a encontrar herramientas simples y prácticas para:" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
            lineNumber: 47,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "mt-6 space-y-3.5", children: benefits.map((b) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex items-start gap-3 text-foreground/85", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--sage)_45%,transparent)] text-foreground", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
              lineNumber: 54,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
              lineNumber: 53,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-base leading-relaxed", children: b }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
              lineNumber: 56,
              columnNumber: 17
            }, this)
          ] }, b, true, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this)) }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
            lineNumber: 50,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              className: "mt-8 rounded-2xl border px-5 py-5",
              style: { background: "#f1e7e1", borderColor: "#e3d4cc" },
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-sm font-semibold text-foreground/80", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileText, { className: "h-4 w-4 text-secondary" }, void 0, false, {
                    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
                    lineNumber: 66,
                    columnNumber: 15
                  }, this),
                  "El PDF incluye:"
                ] }, void 0, true, {
                  fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
                  lineNumber: 65,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "mt-3 space-y-2", children: pdfIncludes.map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex items-start gap-2 text-sm leading-relaxed text-foreground/75", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" }, void 0, false, {
                    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
                    lineNumber: 72,
                    columnNumber: 19
                  }, this),
                  item
                ] }, item, true, {
                  fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
                  lineNumber: 71,
                  columnNumber: 17
                }, this)) }, void 0, false, {
                  fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
                  lineNumber: 69,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
              lineNumber: 61,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(BuyEbookButton, { className: "w-full sm:w-auto", children: "Compralo ahora" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
            lineNumber: 79,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
          lineNumber: 40,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Ebook.tsx",
      lineNumber: 23,
      columnNumber: 5
    },
    this
  );
}
const Dialog = Dialog$1;
const DialogTrigger = DialogTrigger$1;
const DialogPortal = DialogPortal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  DialogOverlay$1,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/ui/dialog.tsx",
    lineNumber: 21,
    columnNumber: 3
  },
  void 0
));
DialogOverlay.displayName = DialogOverlay$1.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogPortal, { children: [
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogOverlay, {}, void 0, false, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/ui/dialog.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    DialogContent$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/ui/dialog.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "sr-only", children: "Close" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/ui/dialog.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/ui/dialog.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/ui/dialog.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/ui/dialog.tsx",
  lineNumber: 36,
  columnNumber: 3
}, void 0));
DialogContent.displayName = DialogContent$1.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/ui/dialog.tsx",
  lineNumber: 57,
  columnNumber: 3
}, void 0);
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  DialogTitle$1,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/ui/dialog.tsx",
    lineNumber: 73,
    columnNumber: 3
  },
  void 0
));
DialogTitle.displayName = DialogTitle$1.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  DialogDescription$1,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/ui/dialog.tsx",
    lineNumber: 85,
    columnNumber: 3
  },
  void 0
));
DialogDescription.displayName = DialogDescription$1.displayName;
const contactImage = "/assets/acompanamento-C-WCFE9N.png";
function Contact() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { id: "contacto", className: "bg-background py-24 sm:py-28", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-5xl px-5 sm:px-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid items-stretch gap-0 overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)] lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative hidden bg-[#faf7f5] lg:block", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "img",
      {
        src: contactImage,
        alt: "Talia Alles sonriendo y sosteniendo una manzana roja",
        width: 960,
        height: 1280,
        loading: "lazy",
        className: "absolute inset-0 h-full w-full object-cover object-top"
      },
      void 0,
      false,
      {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-9 sm:p-12", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-medium uppercase tracking-[0.2em] text-secondary", children: "Acompañamiento" }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl", children: "¿Querés acompañamiento personalizado?" }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-6 text-lg leading-relaxed text-foreground/75", children: "Si sentís que necesitás una guía más cercana para construir hábitos sostenibles y mejorar tu bienestar, podemos conversar." }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-lg leading-relaxed text-foreground/75", children: "Agendá una reunión y exploremos juntos cuál es el mejor camino para vos." }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "sage", size: "xl", className: "mt-8 w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CalendarDays, { className: "h-5 w-5" }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
            lineNumber: 51,
            columnNumber: 19
          }, this),
          "Agendar reunión"
        ] }, void 0, true, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-2xl overflow-hidden p-0", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { className: "px-6 pt-6", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { children: "Agendá tu reunión" }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
              lineNumber: 57,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { children: "Elegí el día y horario que mejor te quede." }, void 0, false, {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
              lineNumber: 58,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-[70vh] w-full px-2 pb-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "iframe",
            {
              src: CALENDLY_URL,
              title: "Calendario de reuniones de Talia Alles",
              className: "h-full w-full rounded-xl border-0"
            },
            void 0,
            false,
            {
              fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
              lineNumber: 63,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Contact.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function Footer() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("footer", { className: "border-t border-border bg-card", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-14 text-center sm:px-8 md:flex-row md:justify-between md:text-left", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-lg font-semibold text-foreground", children: "Talia Alles" }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Footer.tsx",
          lineNumber: 10,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground", children: "Health Coach" }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Footer.tsx",
          lineNumber: 11,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Footer.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center gap-5 md:items-end", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SocialIcons, {}, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Footer.tsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "a",
          {
            href: WHATSAPP_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 text-sm font-medium text-foreground/75 transition-colors hover:text-secondary",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MessageCircle, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Footer.tsx",
                lineNumber: 24,
                columnNumber: 13
              }, this),
              "Escribime por WhatsApp"
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Footer.tsx",
            lineNumber: 18,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Footer.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Footer.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-t border-border/60 py-5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Talia Alles · Hábitos saludables y sostenibles"
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Footer.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Footer.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/components/landing/Footer.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function Index() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Navbar, {}, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/index.tsx?tsr-split=component",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("main", { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Hero, {}, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/index.tsx?tsr-split=component",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Coaching, {}, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/index.tsx?tsr-split=component",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(About, {}, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/index.tsx?tsr-split=component",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Ebook, {}, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/index.tsx?tsr-split=component",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Contact, {}, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/index.tsx?tsr-split=component",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/index.tsx?tsr-split=component",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Footer, {}, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/index.tsx?tsr-split=component",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/index.tsx?tsr-split=component",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
export {
  Index as component
};
