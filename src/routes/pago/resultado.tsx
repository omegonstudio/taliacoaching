import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site-config";

const resultadoSearchSchema = z.object({
  collection_status: z.string().optional(),
  payment_id: z.string().optional(),
  external_reference: z.string().optional(),
});

type ResultadoSearch = z.infer<typeof resultadoSearchSchema>;

type PaymentStatus = "approved" | "pending" | "failed";

function resolvePaymentStatus(collectionStatus: string | undefined): PaymentStatus {
  if (collectionStatus === "approved") return "approved";
  if (collectionStatus === "pending") return "pending";
  return "failed";
}

const statusContent: Record<
  PaymentStatus,
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
      "Recibimos tu compra correctamente. En breve vas a recibir el eBook por email. Si no lo ves en unos minutos, revisá la carpeta de spam o escribime por WhatsApp.",
    iconClassName: "text-[var(--sage)]",
  },
  pending: {
    icon: Clock,
    title: "Pago pendiente",
    description:
      "Tu pago está en proceso de confirmación. Cuando se acredite, te enviaremos el eBook por email. Si tenés dudas, contactame por WhatsApp.",
    iconClassName: "text-[var(--terracotta)]",
  },
  failed: {
    icon: XCircle,
    title: "Pago no completado",
    description:
      "El pago no se concretó o fue rechazado. Podés intentar de nuevo desde la página principal o escribirme si necesitás ayuda.",
    iconClassName: "text-destructive",
  },
};

export const Route = createFileRoute("/pago/resultado")({
  validateSearch: (search: Record<string, unknown>): ResultadoSearch =>
    resultadoSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Resultado del pago · Talia Alles" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PagoResultadoPage,
});

function PagoResultadoPage() {
  const { collection_status, payment_id, external_reference } = Route.useSearch();
  const status = resolvePaymentStatus(collection_status);
  const content = statusContent[status];
  const Icon = content.icon;

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

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/">Volver al inicio</Link>
          </Button>
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
