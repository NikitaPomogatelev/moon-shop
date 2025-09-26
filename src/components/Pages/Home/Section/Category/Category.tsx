import Heading from "../../../../Heading/Heading";
import styles from "./Category.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import CategoryCard from "./CategoryCard";
import SliderArrow from '@/ui/SliderArrow/SliderArrow';
import { useEffect, useRef, useState } from 'react';

const categoriesCards = [
  { id: 1, title: "Парикмахерские услуги", imageUrl: "/category/1.jpg" },
  { id: 2, title: "Ногтевой сервис", imageUrl: "/category/2.jpg" },
  { id: 3, title: "Стоматология", imageUrl: "/category/3.jpg" },
  { id: 4, title: "Парикмахерские услуги", imageUrl: "/category/1.jpg" },
  { id: 5, title: "Ногтевой сервис", imageUrl: "/category/2.jpg" },
  { id: 6, title: "Стоматология", imageUrl: "/category/3.jpg" },
];

const Category = () => {
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
    <section className={styles["category"]}>
      <div className="container">
        <div className={styles["category-top"]}>
          <Heading tag="h2">Категории</Heading>

          <div className={styles["category__arrow-group"]}>
						<SliderArrow ref={prevRef} aria-label="Предыдущий слайд" />
						<SliderArrow ref={nextRef} direction="next" aria-label="Следующий слайд" />
					</div>
        </div>

        <Swiper
          className={styles["category-swiper"]}
          spaceBetween={20}
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
					modules={[Navigation]}
					onSwiper={setSwiperInstance}
        >
          {categoriesCards?.length && categoriesCards.map(({ id, title, imageUrl }) => (
            <SwiperSlide key={id}>
              <CategoryCard title={title} imageUrl={imageUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
