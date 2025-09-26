import Search from "../../../../../ui/Search/Search";
import Heading from "../../../../Heading/Heading";
import CategoryTabs from "../../CategoryTabs/CategoryTabs";
import SubCategoryNav from '../../CategoryTabs/SubCategoryNav';
import SubCategoryTab from '../../CategoryTabs/SubCategoryTab';
import styles from "./Hero.module.css";



const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <div className="container">
        <div className={styles["hero-top"]}>
          <Heading className={styles["hero__heading"]}>
            Онлайн запись в&nbsp;городе{" "}
            <span className={styles["city"]}>Санкт-Петербург</span>{" "}
          </Heading>

          <Search
            className={styles["hero__search"]}
            placeholder="Услуга, компания или специалист"
          />
        </div>
        <CategoryTabs />
				<SubCategoryNav />
      </div>
    </section>
  );
};

export default Hero;
