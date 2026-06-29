import { g as getMercadoPagoConfig, E as EBOOK_PRODUCT } from "./product-al1R68gy.mjs";
const MERCADO_PAGO_PAYMENTS_URL = "https://api.mercadopago.com/v1/payments";
function mapPaymentStatus(status) {
  if (status === "approved") return "approved";
  if (status === "pending" || status === "in_process") return "pending";
  if (status === "rejected" || status === "cancelled" || status === "refunded") {
    return "rejected";
  }
  return "error";
}
function validateApprovedPayment(payment) {
  if (payment.transaction_amount !== EBOOK_PRODUCT.price) {
    return {
      status: "rejected",
      reason: "transaction_amount_mismatch"
    };
  }
  if (payment.currency_id !== EBOOK_PRODUCT.currency) {
    return {
      status: "rejected",
      reason: "currency_mismatch"
    };
  }
  if (payment.external_reference !== EBOOK_PRODUCT.externalReference) {
    return {
      status: "rejected",
      reason: "external_reference_mismatch"
    };
  }
  return { status: "approved" };
}
async function verifyPayment(paymentId) {
  const { accessToken } = getMercadoPagoConfig();
  if (!accessToken) {
    return { status: "error", reason: "missing_access_token" };
  }
  if (!paymentId.trim()) {
    return { status: "error", reason: "missing_payment_id" };
  }
  let response;
  try {
    response = await fetch(`${MERCADO_PAGO_PAYMENTS_URL}/${encodeURIComponent(paymentId)}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  } catch {
    return { status: "error", reason: "network_error" };
  }
  if (!response.ok) {
    return { status: "error", reason: "payment_lookup_failed" };
  }
  let payment;
  try {
    payment = await response.json();
  } catch {
    return { status: "error", reason: "invalid_payment_response" };
  }
  const mappedStatus = mapPaymentStatus(payment.status);
  if (mappedStatus !== "approved") {
    return {
      status: mappedStatus,
      reason: payment.status_detail ?? payment.status
    };
  }
  return validateApprovedPayment(payment);
}
export {
  verifyPayment as v
};
