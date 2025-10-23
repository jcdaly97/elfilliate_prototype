import manifest from "../data/assets-manifest.json";

const BASE = process.env.PUBLIC_URL + "/elfilliate-assets/images/";

const productImages = manifest.productImages ?? [];
const socialPostImages = manifest.socialPostImages ?? [];

const pickById = (arr: string[], id: number, fallback: string) => {
  if (!arr || arr.length === 0) return fallback;
  const idx = Math.abs(id) % arr.length;
  return arr[idx];
};

export const getProductImageUrlById = (id: number) => {
  const rel = pickById(productImages, id, productImages[0] || "");
  return rel ? BASE + rel : "";
};

export const getSocialImageUrlById = (id: number) => {
  const rel = pickById(socialPostImages, id, socialPostImages[0] || "");
  return rel ? BASE + rel : "";
};

export const getRandomProductImageUrl = () => {
  if (!productImages || productImages.length === 0) return "";
  const rel = productImages[Math.floor(Math.random() * productImages.length)];
  return BASE + rel;
};

export const getRandomSocialImageUrl = () => {
  if (!socialPostImages || socialPostImages.length === 0) return "";
  const rel = socialPostImages[Math.floor(Math.random() * socialPostImages.length)];
  return BASE + rel;
};

