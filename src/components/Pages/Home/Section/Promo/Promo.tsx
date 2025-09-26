import Button from '@/ui/Button/Button';
import Heading from "@/components/Heading/Heading";
import styles from "./Promo.module.css";
import PromoList from "./PromoList";
import { promoData } from "@/constants/promoData";

const Promo = () => {
  return (
    <section className={styles["promo"]}>
      <div className="container">
        <Heading tag="h2" className={styles["promo__title"]}>
          Акции
        </Heading>
        {promoData.length && <PromoList promo={promoData} />}

				<Button variant='stroked' className={styles["promo__btn"]} >Посмотреть ещё 63</Button>
      </div>
    </section>
  );
};

export default Promo;
