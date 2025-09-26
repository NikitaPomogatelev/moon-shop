import styles from "./PromoCard.module.css";
import PromoCard from "./PromoCard";
import type { PromoCard as IPromoCard } from "../../../../../interfaces/promoCard.interface";

interface PromoListProps {
  promo: IPromoCard[];
}

const PromoList = ({ promo }: PromoListProps) => {
  return (
    <ul className={styles["promo__list"]}>
      {promo.map((item: IPromoCard) => (
        <li key={item.id}>
          <PromoCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default PromoList;
