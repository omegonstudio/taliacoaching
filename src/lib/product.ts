/**
 * Configuración del único producto vendido en el sitio.
 * Importar desde aquí siempre que se necesite título, precio o moneda.
 */

export const EBOOK_PRODUCT = {
  title: "Hábitos que se sostienen",
  description:
    "eBook de Talia Alles · Guía práctica para construir hábitos sostenibles",
  price: 2,
  currency: "ARS",
  quantity: 1,
  externalReference: "ebook-habitos-que-se-sostienen",
} as const;

export type EbookProduct = typeof EBOOK_PRODUCT;
