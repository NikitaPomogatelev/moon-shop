import Heading from "../../../../Heading/Heading";
import styles from "./Catalog.module.css";
import Button from "../../../../../ui/Button/Button";
import { catalogData } from "../../../../../constants/catalogData";
import ShopCardList from '@/components/Base/ShopCard/ShopCardList';

const Catalog = () => {
  return (
    <section className={styles["catalog"]}>
      <div className="container">
        <div className={styles["catalog-inner"]}>
          <Heading className={styles["catalog__title"]} tag="h2">
            Каталог
          </Heading>

          {catalogData?.length && <ShopCardList shops={catalogData} />}

          <Button variant="stroked" className={styles["catalog__btn"]}>
            Посмотреть ещё 63
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
