import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, Download, XCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site-config";
import type { VerifyResult } from "@/lib/verifyPayment.server";
import { verifyPayment } from "@/lib/verifyPayment.server";
import { downloadEbook } from "@/lib/api/downloadEbook.functions";

const resultadoSearchSchema = z.object({
  collection_status: z.string().optional(),
  payment_id: z.string().optional(),
  external_reference: z.string().optional(),
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
    title: "¡Pago aprobado!",
    description:
      "Tu compra fue verificada correctamente. Ya podés descargar el eBook.",
    iconClassName: "text-[var(--sage)]",
  },
  pending: {
    icon: Clock,
    title: "Pago pendiente",
    description:
      "Tu pago está en proceso de confirmación. Cuando se acredite, volvé a esta página con el mismo enlace o contactame por WhatsApp.",
    iconClassName: "text-[var(--terracotta)]",
  },
  rejected: {
    icon: XCircle,
    title: "Pago no completado",
    description:
      "El pago no se concretó o fue rechazado. Podés intentar de nuevo desde la página principal o escribirme si necesitás ayuda.",
    iconClassName: "text-destructive",
  },
  error: {
    icon: XCircle,
    title: "No pudimos verificar el pago",
    description:
      "Ocurrió un problema al confirmar tu compra. Si creés que el pago fue exitoso, escribime por WhatsApp con el ID de pago.",
    iconClassName: "text-destructive",
  },
};

export const Route = createFileRoute("/pago/resultado")({
  validateSearch: (search: Record<string, unknown>): ResultadoSearch =>
    resultadoSearchSchema.parse(search),
  loaderDeps: ({ search }) => ({
    payment_id: search.payment_id,
    external_reference: search.external_reference,
  }),
  loader: async ({ deps }): Promise<LoaderData> => {
    if (!deps.payment_id) {
      return {
        verified: { status: "error", reason: "missing_payment_id" },
        external_reference: deps.external_reference,
      };
    }

    const verified = await verifyPayment(deps.payment_id);

    return {
      verified,
      payment_id: deps.payment_id,
      external_reference: deps.external_reference,
    };
  },
  head: () => ({
    meta: [
      { title: "Resultado del pago · Talia Alles" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PagoResultadoPage,
});

function PagoResultadoPage() {
  const { verified, payment_id, external_reference } = Route.useLoaderData();
  const content = statusContent[verified.status];
  const Icon = content.icon;
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  async function handleDownload() {
    if (!payment_id) return;

    setDownloading(true);
    setDownloadError(null);

    try {
      const response = await downloadEbook({ data: { payment_id } });

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

  return (
    <div
      className="flex min-h-screen items-center justify-center px-5 py-16"
      style={{ background: "var(--gradient-warm)" }}
    >
      <div className="w-full max-w-lg rounded-[2rem] border border-border bg-card/90 p-8 text-center shadow-[var(--shadow-card)] sm:p-10">
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
      </div>
    </div>
  );
}
