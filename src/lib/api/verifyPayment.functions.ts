import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { verifyPayment } from "@/lib/verifyPayment.server";

/**
 * Thin client-callable wrapper around verifyPayment.
 * Reuses the existing server verifier — no parallel logic.
 * Used by /pago/resultado to re-check pending payments without a page reload.
 */
export const checkPaymentStatus = createServerFn({ method: "POST" })
  .validator(z.object({ payment_id: z.string().min(1) }))
  .handler(async ({ data }) => verifyPayment(data.payment_id));
