import { getMercadoPagoConfig } from "@/lib/config.server";
import { EBOOK_PRODUCT } from "@/lib/product";

import { MercadoPagoApiError, MercadoPagoConfigError } from "./errors";
import type {
  CreatePreferencePayload,
  CreatePreferenceResult,
  MercadoPagoPreferenceResponse,
} from "./types";

const MERCADO_PAGO_PREFERENCES_URL =
  "https://api.mercadopago.com/checkout/preferences";

/** Ruta de retorno tras el pago (Checkout Pro back_urls). */
const CHECKOUT_RESULT_PATH = "/pago/resultado";

function buildPreferencePayload(siteUrl: string): CreatePreferencePayload {
  const backUrl = `${siteUrl}${CHECKOUT_RESULT_PATH}`;

  return {
    items: [
      {
        title: EBOOK_PRODUCT.title,
        description: EBOOK_PRODUCT.description,
        quantity: EBOOK_PRODUCT.quantity,
        unit_price: EBOOK_PRODUCT.price,
        currency_id: EBOOK_PRODUCT.currency,
      },
    ],
    back_urls: {
      success: backUrl,
      pending: backUrl,
      failure: backUrl,
    },
    auto_return: "approved",
    external_reference: EBOOK_PRODUCT.externalReference,
  };
}

function resolveInitPoint(
  preference: MercadoPagoPreferenceResponse,
  accessToken: string,
): string {
  const isTestToken = accessToken.startsWith("TEST-");
  const initPoint = isTestToken
    ? (preference.sandbox_init_point ?? preference.init_point)
    : preference.init_point;

  if (!initPoint) {
    throw new MercadoPagoApiError(
      "Mercado Pago no devolvió un enlace de checkout.",
      502,
      JSON.stringify(preference),
    );
  }

  return initPoint;
}

/**
 * Crea una preferencia de Checkout Pro en Mercado Pago para el eBook.
 * Solo debe invocarse desde código server-side (server functions o handlers).
 */
export async function createCheckoutPreference(): Promise<CreatePreferenceResult> {
  const { accessToken, siteUrl } = getMercadoPagoConfig();

  if (!accessToken) {
    throw new MercadoPagoConfigError(
      "MERCADOPAGO_ACCESS_TOKEN no está configurado.",
    );
  }

  if (!siteUrl) {
    throw new MercadoPagoConfigError("SITE_URL no está configurado.");
  }

  if (EBOOK_PRODUCT.price <= 0) {
    throw new MercadoPagoConfigError(
      "El precio del producto debe ser mayor a cero.",
    );
  }

  const response = await fetch(MERCADO_PAGO_PREFERENCES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildPreferencePayload(siteUrl)),
  });

  const responseBody = await response.text();

  if (!response.ok) {
    throw new MercadoPagoApiError(
      "No se pudo crear la preferencia de Mercado Pago.",
      response.status,
      responseBody,
    );
  }

  const preference = JSON.parse(responseBody) as MercadoPagoPreferenceResponse;

  return {
    preferenceId: preference.id,
    initPoint: resolveInitPoint(preference, accessToken),
  };
}
