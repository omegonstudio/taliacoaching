import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { v as verifyPayment } from "./verifyPayment.server-XVaWYr4R.mjs";
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
import "./product-al1R68gy.mjs";
import "node:process";
const appCss = "/assets/styles-DBTVTU7E.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-7xl font-bold text-foreground", children: "404" }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      },
      void 0,
      false,
      {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
        lineNumber: 25,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        },
        void 0,
        false,
        {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
          lineNumber: 54,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        },
        void 0,
        false,
        {
          fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
          lineNumber: 63,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Bienestar Sostenible is a landing page for purchasing an eBook on healthy and sustainable habits." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Bienestar Sostenible is a landing page for purchasing an eBook on healthy and sustainable habits." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "Bienestar Sostenible is a landing page for purchasing an eBook on healthy and sustainable habits." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3ed455e9-b9bf-40c8-953d-74993c6070e6/id-preview-7ccf18f1--0ed02951-cefa-4b4b-aa49-9cdaf81fe3aa.lovable.app-1781789524479.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3ed455e9-b9bf-40c8-953d-74993c6070e6/id-preview-7ccf18f1--0ed02951-cefa-4b4b-aa49-9cdaf81fe3aa.lovable.app-1781789524479.png" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,400&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("head", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(HeadContent, {}, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("body", { children: [
      children,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Scripts, {}, void 0, false, {
        fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
    lineNumber: 118,
    columnNumber: 5
  }, this);
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Outlet, {}, void 0, false, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
    lineNumber: 136,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/titin/Documentos/omegon/00-OMEGON/00-proyectos/project-files/src/routes/__root.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
const BASE_URL = "";
const Route$2 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$1 = () => import("./index-C4Bqq0xs.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Talia Alles · Hábitos saludables que podés sostener"
    }, {
      name: "description",
      content: "eBook de Talia Alles, Health Coach. Aprendé a comprender tus hábitos y construir cambios sostenibles desde la conciencia, no desde la exigencia."
    }, {
      property: "og:title",
      content: "Talia Alles · Hábitos que se sostienen"
    }, {
      property: "og:description",
      content: "Una guía práctica para transformar tu bienestar con hábitos sostenibles y conscientes."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Book",
        name: "Hábitos que se sostienen",
        author: {
          "@type": "Person",
          name: "Talia Alles",
          jobTitle: "Health Coach"
        },
        bookFormat: "https://schema.org/EBook",
        inLanguage: "es",
        about: "Hábitos saludables y sostenibles, bienestar y cambio de comportamiento"
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./resultado-XQ_8PolS.mjs");
const resultadoSearchSchema = objectType({
  collection_status: stringType().optional(),
  payment_id: stringType().optional(),
  external_reference: stringType().optional()
});
const Route = createFileRoute("/pago/resultado")({
  validateSearch: (search) => resultadoSearchSchema.parse(search),
  loaderDeps: ({
    search
  }) => ({
    payment_id: search.payment_id,
    external_reference: search.external_reference
  }),
  loader: async ({
    deps
  }) => {
    if (!deps.payment_id) {
      return {
        verified: {
          status: "error",
          reason: "missing_payment_id"
        },
        external_reference: deps.external_reference
      };
    }
    const verified = await verifyPayment(deps.payment_id);
    return {
      verified,
      payment_id: deps.payment_id,
      external_reference: deps.external_reference
    };
  },
  head: () => ({
    meta: [{
      title: "Resultado del pago · Talia Alles"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$2.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$3
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const PagoResultadoRoute = Route.update({
  id: "/pago/resultado",
  path: "/pago/resultado",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  SitemapDotxmlRoute,
  PagoResultadoRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
