import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, Download, Loader2, XCircle } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { downloadEbook } from "@/lib/api/downloadEbook.functions";
import { checkPaymentStatus } from "@/lib/api/verifyPayment.functions";
import { WHATSAPP_URL } from "@/lib/site-config";
import type { VerifyResult } from "@/lib/verifyPayment.server";
import { verifyPayment } from "@/lib/verifyPayment.server";

/**
 * TanStack Router coerces numeric query params (e.g. payment_id=1690…) to number.
 * z.coerce.string() accepts both string and number so Mercado Pago redirects don't crash.
 */
const resultadoSearchSchema = z.object({
  collection_status: z.coerce.string().optional(),
  payment_id: z.coerce.string().optional(),
  collection_id: z.coerce.string().optional(),
  external_reference: z.coerce.string().optional(),
});

type ResultadoSearch = z.infer<typeof resultadoSearchSchema>;

type LoaderData = {
  verified: VerifyResult;
  payment_id?: string;
  external_reference?: string;
};

const statusContent: Record<
  VerifyResult["status"],
  {
    icon: typeof CheckCircle2;
    title: string;
    description: string;
    iconClassName: string;
  }
> = {
  approved: {
    icon: CheckCircle2,
    title: "¡Gracias por tu compra!",
    description: "Tu pago fue verificado correctamente. Ya podés descargar el eBook.",
    iconClassName: "text-[var(--sage)]",
  },
  pending: {
    icon: Clock,
    title: "Pago pendiente",
    description:
      "Tu pago está en proceso de confirmación. Estamos verificando con Mercado Pago; esta página se actualizará sola cuando se acredite.",
    iconClassName: "text-[var(--terracotta)]",
  },
  rejected: {
    icon: XCircle,
    title: "Pago no completado",
    description:
      "El pago no se concretó o fue rechazado. Podés intentar nuevamente o escribirme si necesitás ayuda.",
    iconClassName: "text-destructive",
  },
  error: {
    icon: XCircle,
    title: "No pudimos verificar el pago",
    description:
      "Ocurrió un problema al confirmar tu compra. Si el pago fue exitoso, escribime por WhatsApp indicando el ID del pago.",
    iconClassName: "text-destructive",
  },
};

function ResultShell({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-5 py-16"
      style={{ background: "var(--gradient-warm)" }}
    >
      <div className="w-full max-w-lg rounded-[2rem] border border-border bg-card/90 p-8 text-center shadow-[var(--shadow-card)] sm:p-10">
        {children}
      </div>
    </div>
  );
}

function PendingVerification() {
  return (
    <ResultShell>
      <Loader2
        className="mx-auto h-14 w-14 animate-spin text-[var(--terracotta)]"
        aria-hidden="true"
      />
      <h1 className="mt-6 text-2xl font-bold text-foreground sm:text-3xl">
        Estamos verificando tu compra...
      </h1>
      <p className="mt-4 text-base leading-relaxed text-foreground/75">
        Confirmando el pago con Mercado Pago. En unos segundos vas a poder
        descargar tu eBook.
      </p>
    </ResultShell>
  );
}

export const Route = createFileRoute("/pago/resultado")({
  validateSearch: (search: Record<string, unknown>): ResultadoSearch => {
    const parsed = resultadoSearchSchema.safeParse(search);

    if (!parsed.success) {
      console.error("Error validando parámetros de Mercado Pago:", parsed.error);
      return {};
    }

    return parsed.data;
  },

  loaderDeps: ({ search }) => ({
    payment_id: search.payment_id ?? search.collection_id,
    external_reference: search.external_reference,
  }),

  loader: async ({ deps }): Promise<LoaderData> => {
    const paymentId = deps.payment_id?.trim();

    if (!paymentId) {
      return {
        verified: { status: "error", reason: "missing_payment_id" },
        external_reference: deps.external_reference,
      };
    }

    try {
      const verified = await verifyPayment(paymentId);

      return {
        verified,
        payment_id: paymentId,
        external_reference: deps.external_reference,
      };
    } catch (error) {
      console.error("Error verificando pago:", error);

      return {
        verified: { status: "error", reason: "verification_failed" },
        payment_id: paymentId,
        external_reference: deps.external_reference,
      };
    }
  },

  pendingComponent: PendingVerification,

  head: () => ({
    meta: [
      { title: "Resultado del pago · Talia Alles" },
      { name: "robots", content: "noindex" },
    ],
  }),

  errorComponent: ({ error }) => (
    <ResultShell>
      <XCircle className="mx-auto h-14 w-14 text-destructive" aria-hidden="true" />
      <h1 className="mt-6 text-2xl font-bold text-foreground sm:text-3xl">
        Ocurrió un problema al procesar el pago
      </h1>
      <p className="mt-4 text-base leading-relaxed text-foreground/75">
        Si el problema continúa escribime por WhatsApp indicando el ID del pago.
      </p>
      {import.meta.env.DEV ? (
        <pre className="mt-6 overflow-auto rounded-xl bg-muted/50 p-4 text-left text-xs">
          {String(error)}
        </pre>
      ) : null}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button asChild variant="hero" size="lg">
          <Link to="/">Volver al inicio</Link>
        </Button>
        <Button asChild variant="softline" size="lg">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </Button>
      </div>
    </ResultShell>
  ),

  component: PagoResultadoPage,
});

const PENDING_POLL_MS = 2500;
const PENDING_POLL_MAX = 24; // ~60s

function PagoResultadoPage() {
  const loaderData = Route.useLoaderData();
  const [verified, setVerified] = useState(loaderData.verified);
  const [payment_id] = useState(loaderData.payment_id);
  const [external_reference] = useState(loaderData.external_reference);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const [polling, setPolling] = useState(loaderData.verified.status === "pending");

  useEffect(() => {
    setVerified(loaderData.verified);
    setPolling(loaderData.verified.status === "pending");
  }, [loaderData.verified]);

  useEffect(() => {
    if (!payment_id || verified.status !== "pending") return;

    let cancelled = false;
    let attempts = 0;

    const tick = async () => {
      if (cancelled || attempts >= PENDING_POLL_MAX) {
        setPolling(false);
        return;
      }

      attempts += 1;

      try {
        const next = await checkPaymentStatus({ data: { payment_id } });
        if (cancelled) return;

        setVerified(next);

        if (next.status === "pending") {
          window.setTimeout(tick, PENDING_POLL_MS);
        } else {
          setPolling(false);
        }
      } catch (error) {
        console.error("Error re-verificando pago pendiente:", error);
        if (!cancelled) {
          window.setTimeout(tick, PENDING_POLL_MS);
        }
      }
    };

    const timer = window.setTimeout(tick, PENDING_POLL_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [payment_id, verified.status]);

  if (polling && verified.status === "pending") {
    return <PendingVerification />;
  }

  const content = statusContent[verified.status];
  const Icon = content.icon;

  async function handleDownload() {
    if (!payment_id) return;

    setDownloading(true);
    setDownloadError(null);

    try {
      const response = await downloadEbook({ data: { payment_id } });

      if (!response.ok) {
        setDownloadError("No pudimos descargar el eBook. Intentá nuevamente.");
        return;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Habitos - Talia Alles.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      setDownloadError("No pudimos descargar el eBook. Intentá nuevamente.");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <ResultShell>
      <Icon className={`mx-auto h-14 w-14 ${content.iconClassName}`} aria-hidden="true" />
      <h1 className="mt-6 text-2xl font-bold text-foreground sm:text-3xl">{content.title}</h1>
      <p className="mt-4 text-base leading-relaxed text-foreground/75">{content.description}</p>

      {(payment_id || external_reference) && (
        <dl className="mt-6 space-y-2 rounded-xl bg-muted/50 px-4 py-3 text-left text-sm text-muted-foreground">
          {payment_id ? (
            <div className="flex justify-between gap-4">
              <dt>ID de pago</dt>
              <dd className="font-mono text-foreground/80">{payment_id}</dd>
            </div>
          ) : null}
          {external_reference ? (
            <div className="flex justify-between gap-4">
              <dt>Referencia</dt>
              <dd className="text-foreground/80">{external_reference}</dd>
            </div>
          ) : null}
        </dl>
      )}

      {verified.status === "approved" && payment_id ? (
        <div className="mt-8">
          <Button
            type="button"
            variant="hero"
            size="lg"
            className="w-full sm:w-auto"
            disabled={downloading}
            onClick={handleDownload}
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            {downloading ? "Preparando descarga..." : "Descargar eBook"}
          </Button>
          {downloadError ? (
            <p className="mt-3 text-sm text-destructive">{downloadError}</p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        {verified.status === "rejected" || verified.status === "error" ? (
          <Button asChild variant="hero" size="lg">
            <Link to="/">Intentar de nuevo</Link>
          </Button>
        ) : (
          <Button asChild variant={verified.status === "approved" ? "softline" : "hero"} size="lg">
            <Link to="/">Volver al inicio</Link>
          </Button>
        )}
        <Button asChild variant="softline" size="lg">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Escribir por WhatsApp
          </a>
        </Button>
      </div>
    </ResultShell>
  );
}
