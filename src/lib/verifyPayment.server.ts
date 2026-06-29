import { getMercadoPagoConfig } from "@/lib/config.server";
import { EBOOK_PRODUCT } from "@/lib/product";

const MERCADO_PAGO_PAYMENTS_URL = "https://api.mercadopago.com/v1/payments";

export interface MercadoPagoPayment {
  id: number;
  status: string;
  status_detail?: string;
  transaction_amount: number;
  currency_id: string;
  external_reference?: string | null;
}

export type VerifyResult = {
  status: "approved" | "pending" | "rejected" | "error";
  reason?: string;
};

function mapPaymentStatus(status: string): VerifyResult["status"] {
  if (status === "approved") return "approved";
  if (status === "pending" || status === "in_process") return "pending";
  if (status === "rejected" || status === "cancelled" || status === "refunded") {
    return "rejected";
  }
  return "error";
}

function validateApprovedPayment(payment: MercadoPagoPayment): VerifyResult {
  if (payment.transaction_amount !== EBOOK_PRODUCT.price) {
    return {
      status: "rejected",
      reason: "transaction_amount_mismatch",
    };
  }

  if (payment.currency_id !== EBOOK_PRODUCT.currency) {
    return {
      status: "rejected",
      reason: "currency_mismatch",
    };
  }

  if (payment.external_reference !== EBOOK_PRODUCT.externalReference) {
    return {
      status: "rejected",
      reason: "external_reference_mismatch",
    };
  }

  return { status: "approved" };
}

/**
 * Verifica un pago de Mercado Pago contra el producto configurado.
 * Solo debe invocarse desde código server-side.
 */
export async function verifyPayment(paymentId: string): Promise<VerifyResult> {
  const { accessToken } = getMercadoPagoConfig();

  if (!accessToken) {
    return { status: "error", reason: "missing_access_token" };
  }

  if (!paymentId.trim()) {
    return { status: "error", reason: "missing_payment_id" };
  }

  let response: Response;

  try {
    response = await fetch(`${MERCADO_PAGO_PAYMENTS_URL}/${encodeURIComponent(paymentId)}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch {
    return { status: "error", reason: "network_error" };
  }

  if (!response.ok) {
    return { status: "error", reason: "payment_lookup_failed" };
  }

  let payment: MercadoPagoPayment;

  try {
    payment = (await response.json()) as MercadoPagoPayment;
  } catch {
    return { status: "error", reason: "invalid_payment_response" };
  }

  const mappedStatus = mapPaymentStatus(payment.status);

  if (mappedStatus !== "approved") {
    return {
      status: mappedStatus,
      reason: payment.status_detail ?? payment.status,
    };
  }

  return validateApprovedPayment(payment);
}
