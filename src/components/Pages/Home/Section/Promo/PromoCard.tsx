import styles from "./PromoCard.module.css";
import ShopItem from "@/components/Base/ShopItem/ShopItem";
import type { PromoCard as IPromoCard } from "@/interfaces/promoCard.interface";
import { DiscountLabel, ExpireLabel, ViewsLabel } from "@/ui/Label";

interface PromoCardProps {
  item: IPromoCard;
}

const PromoCard = ({ item }: PromoCardProps) => {
  return (
    <article className={styles["promo-card"]}>
      <div className={styles["promo-card__top"]}>
        <img
          src={item.image}
          width={360}
          height={250}
          alt={`Акция: ${item.title}`}
        />

        {item?.discount && (
          <DiscountLabel
            discount={item.discount}
            className={styles["promo-card__discount-label"]}
          />
        )}
        {item?.expireDate && (
          <ExpireLabel
            expireDate={item.expireDate}
            className={styles["promo-card__expire-label"]}
          />
        )}
        {item?.views && (
          <ViewsLabel
            views={item.views}
            className={styles["promo-card__views-label"]}
          />
        )}
      </div>
      <h3 className={styles["promo-card__title"]}>{item.title}</h3>
      <ShopItem
        imageUrl={item.company.logo}
        title={item.company.name}
        address={item.company.address}
      />
    </article>
  );
};

export default PromoCard;
