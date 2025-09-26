import ShopCardSm from "./ShopCardSm";
import ShopCardMd from './ShopCardMd';
import type { ShopItem as IShopItem } from '@/interfaces/shopItem.interface';



const ShopCardItem = ({ item }: { item: IShopItem }) => {
  return (
    <>
      {item.size === "sm" && <ShopCardSm item={item} />}
      {item.size === "md" && <ShopCardMd item={item} />}
    </>
  );
};

export default ShopCardItem;
