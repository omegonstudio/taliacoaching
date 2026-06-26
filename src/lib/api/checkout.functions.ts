import { createServerFn } from "@tanstack/react-start";

import { createCheckoutPreference } from "@/lib/mercadopago/create-preference.server";

const CHECKOUT_ERROR_MESSAGE = "No pudimos iniciar el pago. Intentá de nuevo.";

export const startCheckout = createServerFn({ method: "POST" }).handler(async () => {
  try {
    const { initPoint } = await createCheckoutPreference();
    return { initPoint };
  } catch {
    throw new Error(CHECKOUT_ERROR_MESSAGE);
  }
});
