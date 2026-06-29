import process from "node:process";
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
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN?.trim() ?? process.env.MP_ACCESS_TOKEN?.trim(),
    siteUrl: getSiteUrl()
  };
}
const EBOOK_PRODUCT = {
  title: "Hábitos que se sostienen",
  description: "eBook de Talia Alles · Guía práctica para construir hábitos sostenibles",
  price: 2e3,
  currency: "ARS",
  quantity: 1,
  externalReference: "ebook-habitos-que-se-sostienen"
};
export {
  EBOOK_PRODUCT as E,
  getMercadoPagoConfig as g
};
