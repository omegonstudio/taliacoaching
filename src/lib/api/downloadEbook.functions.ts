import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { readEbookPdf } from "@/lib/readEbookPdf.server";
import { verifyPayment } from "@/lib/verifyPayment.server";

const DOWNLOAD_FORBIDDEN_MESSAGE = "No tenés permiso para descargar este eBook.";
const DOWNLOAD_ERROR_MESSAGE = "No pudimos preparar la descarga. Intentá de nuevo.";

export const downloadEbook = createServerFn({ method: "POST" })
  .validator(z.object({ payment_id: z.string().min(1) }))
  .handler(async ({ data }) => {
    try {
      const verified = await verifyPayment(data.payment_id);

      if (verified.status !== "approved") {
        return new Response(DOWNLOAD_FORBIDDEN_MESSAGE, { status: 403 });
      }

      const pdf = await readEbookPdf();

      return new Response(pdf, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": 'attachment; filename="ebook.pdf"',
        },
      });
    } catch (error) {
      console.error("downloadEbook error", {
        paymentId: data.payment_id,
        error,
      });

      return new Response(
        DOWNLOAD_ERROR_MESSAGE,
        { status: 500 }
      );
    }
  });