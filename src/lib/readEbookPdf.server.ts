import { readFile } from "node:fs/promises";
import { join } from "node:path";

const EBOOK_FILENAME = "ebook.pdf";

export async function readEbookPdf(): Promise<Uint8Array> {
  try {
    const { useStorage } = await import("nitro/storage");

    const storage = useStorage("assets:ebook");

    console.log("Leyendo desde Nitro:", EBOOK_FILENAME);

    const data = await storage.getItemRaw(EBOOK_FILENAME);

    if (data instanceof Uint8Array) return data;

    if (data instanceof ArrayBuffer)
      return new Uint8Array(data);

    if (Buffer.isBuffer(data))
      return new Uint8Array(data);

    console.warn("No encontrado en Nitro, probando filesystem...");
  } catch (error) {
    console.error("Nitro falló:", error);
  }

  try {
    const file = join(process.cwd(), "private", EBOOK_FILENAME);

    console.log("Leyendo:", file);

    const buffer = await readFile(file);

    return new Uint8Array(buffer);
  } catch (error) {
    console.error("Filesystem falló:", error);

    throw error;
  }
}