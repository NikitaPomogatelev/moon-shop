import styles from "./ShopItem.module.css";

interface ShopItemProps {
  imageUrl: string;
  title: string;
  address: string;
}

const ShopItem = ({ title = "", address = "", imageUrl }: ShopItemProps) => {
  return (
    <div className={styles["shop-item"]}>
      <div className={styles["shop-item__image"]}>
        <img src={imageUrl} alt={title} />
      </div>

      <div className={styles["shop-item__right"]}>
        <h3 className={styles["shop-item__title"]}>{title}</h3>
        <div className={styles["shop-item__address-group"]}>
          <span className={styles["shop-item__address-icon"]}>
            <img
              src="/locate.svg"
              width={20}
              height={20}
              alt="Иконка локации"
            />
          </span>
          <address>{address}</address>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
