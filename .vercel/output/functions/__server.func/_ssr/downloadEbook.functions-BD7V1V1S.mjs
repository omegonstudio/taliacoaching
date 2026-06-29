import { c as createServerRpc } from "./createServerRpc-XZhpJ-Iz.mjs";
import { a as createServerFn } from "./server-dPCb_qXc.mjs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { v as verifyPayment } from "./verifyPayment.server-XVaWYr4R.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
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
import "./product-al1R68gy.mjs";
import "node:process";
const EBOOK_FILENAME = "ebook.pdf";
async function readEbookPdf() {
  try {
    const { useStorage } = await import("../_chunks/storage.mjs");
    const storage = useStorage("assets:ebook");
    const data = await storage.getItemRaw(EBOOK_FILENAME);
    if (data) {
      if (data instanceof Uint8Array) {
        return data;
      }
      if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
      }
      if (Buffer.isBuffer(data)) {
        return new Uint8Array(data);
      }
    }
  } catch {
  }
  const buffer = await readFile(join(process.cwd(), "private", EBOOK_FILENAME));
  return new Uint8Array(buffer);
}
const DOWNLOAD_FORBIDDEN_MESSAGE = "No tenés permiso para descargar este eBook.";
const DOWNLOAD_ERROR_MESSAGE = "No pudimos preparar la descarga. Intentá de nuevo.";
const downloadEbook_createServerFn_handler = createServerRpc({
  id: "41f8edebbc59da9530c744bbfc82939c1125255bb923b4ad1e1ec8c10561faf0",
  name: "downloadEbook",
  filename: "src/lib/api/downloadEbook.functions.ts"
}, (opts) => downloadEbook.__executeServer(opts));
const downloadEbook = createServerFn({
  method: "POST"
}).validator(objectType({
  payment_id: stringType().min(1)
})).handler(downloadEbook_createServerFn_handler, async ({
  data
}) => {
  const verified = await verifyPayment(data.payment_id);
  if (verified.status !== "approved") {
    return new Response(DOWNLOAD_FORBIDDEN_MESSAGE, {
      status: 403
    });
  }
  try {
    const pdf = await readEbookPdf();
    return new Response(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="ebook.pdf"'
      }
    });
  } catch {
    return new Response(DOWNLOAD_ERROR_MESSAGE, {
      status: 500
    });
  }
});
export {
  downloadEbook_createServerFn_handler
};
