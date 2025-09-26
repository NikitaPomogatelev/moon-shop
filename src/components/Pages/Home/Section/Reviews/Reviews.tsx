import { reviewsData } from "@/constants/reviewsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Heading from "../../../../Heading/Heading";
import styles from "./Reviews.module.css";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  return (
    <section className={styles["reviews"]}>
      <div className="container">
        <Heading tag="h2" className={styles["reviews__title"]}>
          Отзывы наших клиентов
        </Heading>
        <div className={styles["reviews__slider"]}>
          <Swiper
            className={styles["reviews-swiper"]}
            spaceBetween={20}
            slidesPerView={"auto"}
            onSlideChange={() => console.log("slide change")}
            modules={[Navigation]}
          >
            {reviewsData?.length &&
              reviewsData.map((rev) => (
                <SwiperSlide key={rev.id}>
                  <ReviewsCard item={rev} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <span className={styles["reviews__info"]}>
          Посмотреть отзывы на&nbsp;
          <a href="#" target="_blank" rel="noopener noreferrer">
            Google Play
          </a>{" "}
          и&nbsp;
          <a href="#" target="_blank" rel="noopener noreferrer">
            AppStore
          </a>
        </span>
      </div>
    </section>
  );
};

export default Reviews;
