import styles from "./ShopCard.module.css";
import ShopItem from "../ShopItem/ShopItem";
import StepperImage from './StepperImage';
import Rate from '../Rate/Rate';
import ButtonFavorite from '@/ui/ButtonFavorite/ButtonFavorite';
import type { ShopItem as IShopItem } from '@/interfaces/shopItem.interface';


const ShopCardSm = ({ item }: { item: IShopItem }) => {
  return (
    <>
        <article className={styles["card"]}>
          <ButtonFavorite className={styles["card__favorite"]} aria-label="Добавить в избранное" />
         
          <ShopItem
            title={item.title}
            address={item.address}
            imageUrl={item.imageUrl}
          />

          <div className={styles["card__bottom"]}>
            <Rate item={item.rate} />

            <button className={styles["card__btn"]} type="button">
              Записаться
            </button>
          </div>
        </article>
    </>
  );
};

export default ShopCardSm;
