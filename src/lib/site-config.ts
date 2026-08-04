// Enlaces externos de la marca. Reemplazá los placeholders cuando tengas los links finales.

// Número de WhatsApp en formato internacional sin "+" ni espacios. Ej: 5491112345678
export const WHATSAPP_NUMBER = "5492914254659";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, Tali! Quiero empezar un proceso de Health Coaching.",
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Número de WhatsApp en formato internacional sin "+" ni espacios. Ej: 5491112345678
const WHATSAPP_MESSAGE_DATE = encodeURIComponent(
  "Hola, Tali! Quiero agendar una reunión.");
export const WHATSAPP_URL_DATE = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE_DATE}`;


/**
 * @deprecated Usar `BuyEbookButton` y Checkout Pro (`startCheckout`). Se mantiene por compatibilidad.
 */
export const MERCADO_PAGO_URL = "{LINK_MERCADO_PAGO}";

// Enlace de Calendly para agendar reuniones.
export const CALENDLY_URL = "https://calendly.com/taliaalles";

// Redes sociales.
export const INSTAGRAM_URL = "https://instagram.com/taliaalles";
export const TIKTOK_URL = "https://tiktok.com/@taliaalles";

export const SITE = {
  name: "Talia Alles",
  role: "Health Coach",
};