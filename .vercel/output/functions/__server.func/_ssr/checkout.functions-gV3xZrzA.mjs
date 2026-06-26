import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-CG81b1Gu.mjs";
import process from "node:process";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
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
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
function normalizeSiteUrl(url) {
  return url.replace(/\/$/, "");
}
function getSiteUrl() {
  const siteUrl = process.env.SITE_URL?.trim();
  if (siteUrl) {
    return normalizeSiteUrl(siteUrl);
  }
  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return normalizeSiteUrl(`https://${vercelUrl}`);
  }
  return void 0;
}
function getMercadoPagoConfig() {
  return {
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN?.trim(),
    siteUrl: getSiteUrl()
  };
}
const EBOOK_PRODUCT = {
  title: "Hábitos que se sostienen",
  description: "eBook de Talia Alles · Guía práctica para construir hábitos sostenibles",
  price: 15e3,
  currency: "ARS",
  quantity: 1,
  externalReference: "ebook-habitos-que-se-sostienen"
};
class MercadoPagoConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = "MercadoPagoConfigError";
  }
}
class MercadoPagoApiError extends Error {
  status;
  body;
  constructor(message, status, body) {
    super(message);
    this.name = "MercadoPagoApiError";
    this.status = status;
    this.body = body;
  }
}
const MERCADO_PAGO_PREFERENCES_URL = "https://api.mercadopago.com/checkout/preferences";
const CHECKOUT_RESULT_PATH = "/pago/resultado";
function buildPreferencePayload(siteUrl) {
  const backUrl = `${siteUrl}${CHECKOUT_RESULT_PATH}`;
  return {
    items: [
      {
        title: EBOOK_PRODUCT.title,
        description: EBOOK_PRODUCT.description,
        quantity: EBOOK_PRODUCT.quantity,
        unit_price: EBOOK_PRODUCT.price,
        currency_id: EBOOK_PRODUCT.currency
      }
    ],
    back_urls: {
      success: backUrl,
      pending: backUrl,
      failure: backUrl
    },
    auto_return: "approved",
    external_reference: EBOOK_PRODUCT.externalReference
  };
}
function resolveInitPoint(preference, accessToken) {
  const isTestToken = accessToken.startsWith("TEST-");
  const initPoint = isTestToken ? preference.sandbox_init_point ?? preference.init_point : preference.init_point;
  if (!initPoint) {
    throw new MercadoPagoApiError(
      "Mercado Pago no devolvió un enlace de checkout.",
      502,
      JSON.stringify(preference)
    );
  }
  return initPoint;
}
async function createCheckoutPreference() {
  const { accessToken, siteUrl } = getMercadoPagoConfig();
  if (!accessToken) {
    throw new MercadoPagoConfigError(
      "MERCADOPAGO_ACCESS_TOKEN no está configurado."
    );
  }
  if (!siteUrl) {
    throw new MercadoPagoConfigError("SITE_URL no está configurado.");
  }
  const response = await fetch(MERCADO_PAGO_PREFERENCES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(buildPreferencePayload(siteUrl))
  });
  const responseBody = await response.text();
  if (!response.ok) {
    throw new MercadoPagoApiError(
      "No se pudo crear la preferencia de Mercado Pago.",
      response.status,
      responseBody
    );
  }
  const preference = JSON.parse(responseBody);
  return {
    preferenceId: preference.id,
    initPoint: resolveInitPoint(preference, accessToken)
  };
}
const CHECKOUT_ERROR_MESSAGE = "No pudimos iniciar el pago. Intentá de nuevo.";
const startCheckout_createServerFn_handler = createServerRpc({
  id: "76222c6845b6553cfdb09d8428a299bdd6cf1c7ddb323835c4ed1c1747765e2e",
  name: "startCheckout",
  filename: "src/lib/api/checkout.functions.ts"
}, (opts) => startCheckout.__executeServer(opts));
const startCheckout = createServerFn({
  method: "POST"
}).handler(startCheckout_createServerFn_handler, async () => {
  try {
    const {
      initPoint
    } = await createCheckoutPreference();
    return {
      initPoint
    };
  } catch {
    throw new Error(CHECKOUT_ERROR_MESSAGE);
  }
});
export {
  startCheckout_createServerFn_handler
};
