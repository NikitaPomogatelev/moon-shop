import styles from "./ShopCard.module.css";
import StepperImage from "./StepperImage";
import Rate from "../Rate/Rate";
import ButtonFavorite from "@/ui/ButtonFavorite/ButtonFavorite";
import type { ShopItem as IShopItem } from "@/interfaces/shopItem.interface";
import { AddressLabel } from "../AddressLabel/AddressLabel";
import { VipLabel } from "../../../ui/Label";

const ShopCardMd = ({ item }: { item: IShopItem }) => {
  return (
    <>
      <article className={styles["card-md"]}>
        <div className={styles["card-md__top"]}>
         {item.imageBigUrl && <StepperImage imageBigUrl={item.imageBigUrl} />} 

          <div className={styles["card-md__shop-image"]}>
            <img src="/premium/logo-2@2x.png" alt="Изображение магазина" />
          </div>

        {item?.vip && <VipLabel label={item.vip} className={styles["card-md__label-vip"]} />}  
        </div>
        <div className={styles["card-md__content"]}>
          <div className={styles["card-md__row"]}>
            <h3 className={styles["card-md__title"]}>{item.title}</h3>
            <ButtonFavorite aria-label="Добавить в избранное" />
          </div>

          <AddressLabel address={item.address} />
        </div>

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

export default ShopCardMd;
