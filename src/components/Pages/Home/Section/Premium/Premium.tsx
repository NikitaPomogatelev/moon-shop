
import styles from "./Premium.module.css";
import { premiumData } from "@/constants/premiumData.ts";
import Button from '@/ui/Button/Button';
import ShopCardList from '@/components/Base/ShopCard/ShopCardList';
import Heading from '../../../../Heading/Heading';

const Premium = () => {
  return (
    <section className={styles["premium"]}>
      <div className="container">
        <div className={styles["premium-inner"]}>
          <Heading className={styles["premium__title"]} tag="h2">
            Премиум
          </Heading>

					{premiumData?.length && <ShopCardList shops={premiumData} />}

					<Button variant='stroked' className={styles["premium__btn"]} >Посмотреть ещё 63</Button>
        </div>
      </div>
    </section>
  );
};

export default Premium;
