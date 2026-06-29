import { c as createStorage, p as prefixStorage } from "../_libs/unstorage.mjs";
const _assets = {
  ["ebook:ebook.pdf"]: {
    import: () => import("../_virtual/ebook.mjs").then((r) => r.default || r),
    meta: { "type": "application/pdf", "etag": '"419d2a-vrKmX9lBoiO0O31XlpqA7e7b1G4"', "mtime": "2026-06-26T14:55:19.537Z" }
  }
};
const normalizeKey = function normalizeKey2(key) {
  if (!key) return "";
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};
const assets = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets));
  },
  hasItem(id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets);
  },
  getItem(id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null);
  },
  getMeta(id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {});
  }
};
function initStorage() {
  const storage = createStorage({});
  storage.mount("/assets", assets);
  return storage;
}
function useStorage(base = "") {
  const storage = useStorage._storage ??= initStorage();
  return base ? prefixStorage(storage, base) : storage;
}
export {
  useStorage
};
