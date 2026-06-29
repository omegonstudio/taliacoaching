import { r as reactExports, c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button, W as WHATSAPP_URL, a as createSsrRpc } from "./site-config-CbQL0lWx.mjs";
import { a as createServerFn } from "./server-dPCb_qXc.mjs";
import { R as Route } from "./router-BSlrudRl.mjs";
import "../_libs/seroval.mjs";
import { h as CircleX, i as Clock, j as CircleCheck, D as Download } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
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
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./verifyPayment.server-XVaWYr4R.mjs";
import "./product-al1R68gy.mjs";
import "node:process";
const downloadEbook = createServerFn({
  method: "POST"
}).validator(objectType({
  payment_id: stringType().min(1)
})).handler(createSsrRpc("41f8edebbc59da9530c744bbfc82939c1125255bb923b4ad1e1ec8c10561faf0"));
objectType({
  collection_status: stringType().optional(),
  payment_id: stringType().optional(),
  external_reference: stringType().optional()
});
const statusContent = {
  approved: {
    icon: CircleCheck,
    title: "¡Pago aprobado!",
    description: "Tu compra fue verificada correctamente. Ya podés descargar el eBook.",
    iconClassName: "text-[var(--sage)]"
  },
  pending: {
    icon: Clock,
    title: "Pago pendiente",
    description: "Tu pago está en proceso de confirmación. Cuando se acredite, volvé a esta página con el mismo enlace o contactame por WhatsApp.",
    iconClassName: "text-[var(--terracotta)]"
  },
  rejected: {
    icon: CircleX,
    title: "Pago no completado",
    description: "El pago no se concretó o fue rechazado. Podés intentar de nuevo desde la página principal o escribirme si necesitás ayuda.",
    iconClassName: "text-destructive"
  },
  error: {
    icon: CircleX,
    title: "No pudimos verificar el pago",
    description: "Ocurrió un problema al confirmar tu compra. Si creés que el pago fue exitoso, escribime por WhatsApp con el ID de pago.",
    iconClassName: "text-destructive"
  }
};
function PagoResultadoPage() {
  const {
    verified,
    payment_id,
    external_reference
  } = Route.useLoaderData();
  const content = statusContent[verified.status];
  const Icon = content.icon;
  const [downloading, setDownloading] = reactExports.useState(false);
  const [downloadError, setDownloadError] = reactExports.useState(null);
  async function handleDownload() {
    if (!payment_id) return;
    setDownloading(true);
    setDownloadError(null);
    try {
      const response = await downloadEbook({
        data: {
          payment_id
        }
      });
      if (!response.ok) {
        setDownloadError("No pudimos descargar el eBook. Intentá de nuevo.");
        return;
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "ebook.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      setDownloadError("No pudimos descargar el eBook. Intentá de nuevo.");
    } finally {
      setDownloading(false);
    }
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-screen items-center justify-center px-5 py-16", style: {
    background: "var(--gradient-warm)"
  }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-full max-w-lg rounded-[2rem] border border-border bg-card/90 p-8 text-center shadow-[var(--shadow-card)] sm:p-10", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { className: `mx-auto h-14 w-14 ${content.iconClassName}`, "aria-hidden": "true" }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "mt-6 text-2xl font-bold text-foreground sm:text-3xl", children: content.title }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-base leading-relaxed text-foreground/75", children: content.description }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    (payment_id || external_reference) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("dl", { className: "mt-6 space-y-2 rounded-xl bg-muted/50 px-4 py-3 text-left text-sm text-muted-foreground", children: [
      payment_id ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between gap-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("dt", { children: "ID de pago" }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
          lineNumber: 100,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("dd", { className: "font-mono text-foreground/80", children: payment_id }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
          lineNumber: 101,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
        lineNumber: 99,
        columnNumber: 27
      }, this) : null,
      external_reference ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-between gap-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("dt", { children: "Referencia" }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
          lineNumber: 104,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("dd", { className: "text-foreground/80", children: external_reference }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
          lineNumber: 105,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
        lineNumber: 103,
        columnNumber: 35
      }, this) : null
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
      lineNumber: 98,
      columnNumber: 48
    }, this),
    verified.status === "approved" && payment_id ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "hero", size: "lg", className: "w-full sm:w-auto", disabled: downloading, onClick: handleDownload, children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Download, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
          lineNumber: 111,
          columnNumber: 15
        }, this),
        downloading ? "Preparando descarga..." : "Descargar eBook"
      ] }, void 0, true, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
        lineNumber: 110,
        columnNumber: 13
      }, this),
      downloadError ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-sm text-destructive", children: downloadError }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
        lineNumber: 114,
        columnNumber: 30
      }, this) : null
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
      lineNumber: 109,
      columnNumber: 57
    }, this) : null,
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center", children: [
      verified.status === "rejected" || verified.status === "error" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/", children: "Intentar de nuevo" }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
        lineNumber: 119,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
        lineNumber: 118,
        columnNumber: 76
      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: verified.status === "approved" ? "softline" : "hero", size: "lg", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/", children: "Volver al inicio" }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
        lineNumber: 121,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
        lineNumber: 120,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "softline", size: "lg", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", children: "Escribir por WhatsApp" }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
        lineNumber: 124,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
        lineNumber: 123,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
      lineNumber: 117,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/pago/resultado.tsx?tsr-split=component",
    lineNumber: 90,
    columnNumber: 10
  }, this);
}
export {
  PagoResultadoPage as component
};
