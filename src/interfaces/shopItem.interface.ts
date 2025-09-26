export interface ShopItem {
  id: number;
  title: string;
  address: string;
  rate: { value: number; count: number };
  imageUrl: string;
  imageBigUrl?: string;
  vip?: boolean;
  size: "sm" | "md";
}
