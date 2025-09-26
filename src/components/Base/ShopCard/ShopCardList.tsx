// ShopCardList.tsx
import React from "react";
import cn from "classnames";
import styles from "./ShopCard.module.css";
import type { ShopItem as IShopItem } from '@/interfaces/shopItem.interface';
import ShopCardItem from './ShopCardItem';



interface ShopCardListProps {
  shops: IShopItem[];
}

const ShopCardList = ({ shops }: ShopCardListProps) => {
  return (
    <ul className={styles['shop-card__list']}>
      {shops.map((shop) => (
        <li
          className={cn(styles['shop-card__item'], shop.size && styles[shop.size])}
          key={shop.id}
        >
          <ShopCardItem item={shop} />
        </li>
      ))}
    </ul>
  );
};

export default ShopCardList;
