import Heading from "../../../../Heading/Heading";
import styles from "./Popular.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import PopularCard from "./PopularCard";
import SliderArrow from "@/ui/SliderArrow/SliderArrow";
import { useEffect, useRef, useState } from "react";

import { popularCards } from '@/constants/popularData.ts'



const Popular = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className={styles["popular"]}>
      <div className="container">
        <div className={styles["popular-top"]}>
          <Heading tag="h2">Популярные</Heading>

          <div className={styles["popular__arrow-group"]}>
            <SliderArrow ref={prevRef} aria-label="Предыдущий слайд" />
            <SliderArrow
              ref={nextRef}
              direction="next"
              aria-label="Следующий слайд"
            />
          </div>
        </div>

        <Swiper
          className={styles["popular-swiper"]}
          spaceBetween={20}
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
        >
          {popularCards?.length &&
            popularCards.map(({ id, title, address, timeOpen, imageUrl }) => (
              <SwiperSlide key={id}>
                <PopularCard
                  title={title}
                  address={address}
                  timeOpen={timeOpen}
                  imageUrl={imageUrl}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Popular;
