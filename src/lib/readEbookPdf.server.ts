import { readFile } from "node:fs/promises";
import { join } from "node:path";

const EBOOK_FILENAME = "Hábitos - Talia Alles.pdf";

/**
 * Lee el PDF del eBook desde almacenamiento privado del servidor.
 * En producción usa los server assets de Nitro; en desarrollo lee desde private/.
 */
export async function readEbookPdf(): Promise<Uint8Array> {
  try {
    const { useStorage } = await import("nitro/storage");
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
    // Nitro storage no disponible — usar lectura directa del filesystem.
  }

  const buffer = await readFile(join(process.cwd(), "private", EBOOK_FILENAME));
  return new Uint8Array(buffer);
}
