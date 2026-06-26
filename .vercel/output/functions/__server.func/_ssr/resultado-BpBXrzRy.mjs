import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button, W as WHATSAPP_URL } from "./site-config-DHJAUAPi.mjs";
import { R as Route } from "./router-C2xl1c0d.mjs";
import { h as CircleX, i as Clock, j as CircleCheck } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
objectType({
  collection_status: stringType().optional(),
  payment_id: stringType().optional(),
  external_reference: stringType().optional()
});
function resolvePaymentStatus(collectionStatus) {
  if (collectionStatus === "approved") return "approved";
  if (collectionStatus === "pending") return "pending";
  return "failed";
}
const statusContent = {
  approved: {
    icon: CircleCheck,
    title: "¡Pago aprobado!",
    description: "Recibimos tu compra correctamente. En breve vas a recibir el eBook por email. Si no lo ves en unos minutos, revisá la carpeta de spam o escribime por WhatsApp.",
    iconClassName: "text-[var(--sage)]"
  },
  pending: {
    icon: Clock,
    title: "Pago pendiente",
    description: "Tu pago está en proceso de confirmación. Cuando se acredite, te enviaremos el eBook por email. Si tenés dudas, contactame por WhatsApp.",
    iconClassName: "text-[var(--terracotta)]"
  },
  failed: {
    icon: CircleX,
    title: "Pago no completado",
    description: "El pago no se concretó o fue rechazado. Podés intentar de nuevo desde la página principal o escribirme si necesitás ayuda.",
    iconClassName: "text-destructive"
  }
};
function PagoResultadoPage() {
  const {
    collection_status,
    payment_id,
    external_reference
  } = Route.useSearch();
  const status = resolvePaymentStatus(collection_status);
  const content = statusContent[status];
  const Icon = content.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-5 py-16", style: {
    background: "var(--gradient-warm)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg rounded-[2rem] border border-border bg-card/90 p-8 text-center shadow-[var(--shadow-card)] sm:p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `mx-auto h-14 w-14 ${content.iconClassName}`, "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-2xl font-bold text-foreground sm:text-3xl", children: content.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-foreground/75", children: content.description }),
    (payment_id || external_reference) && /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-6 space-y-2 rounded-xl bg-muted/50 px-4 py-3 text-left text-sm text-muted-foreground", children: [
      payment_id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "ID de pago" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-mono text-foreground/80", children: payment_id })
      ] }) : null,
      external_reference ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "Referencia" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-foreground/80", children: external_reference })
      ] }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Volver al inicio" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "softline", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", children: "Escribir por WhatsApp" }) })
    ] })
  ] }) });
}
export {
  PagoResultadoPage as component
};
