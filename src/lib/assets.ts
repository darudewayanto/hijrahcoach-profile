import type { ImageMetadata } from "astro";

type Glob = Record<string, { default: ImageMetadata }>;

const toMap = (glob: Glob) =>
  Object.fromEntries(
    Object.entries(glob).map(([path, mod]) => [path.split("/").pop()!.replace(/\.\w+$/, ""), mod.default]),
  ) as Record<string, ImageMetadata>;

export const photo = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/photos/*.{jpg,png}", { eager: true }));
export const brand = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/brand/*.png", { eager: true }));
export const clientImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/clients/*.png", { eager: true }));
export const accredImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/accred/*.png", { eager: true }));
export const certImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/certs/*.png", { eager: true }));
export const ahcEventImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/ahc-event/*.jpg", { eager: true }));
export const chapterImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/chapters/*.png", { eager: true }));
