// Import Swiper styles
import "swiper/css";

import Category from "../components/Pages/Home/Section/Category/Category";
import Reviews from "../components/Pages/Home/Section/Reviews/Reviews";
import Banner from "../components/Pages/Home/Section/Banner/Banner";
import Popular from "../components/Pages/Home/Section/Popular/Popular";
import Hero from "../components/Pages/Home/Section/Hero/Hero";
import Premium from '../components/Pages/Home/Section/Premium/Premium';
import Catalog from '../components/Pages/Home/Section/Catalog/Catalog';
import Promo from '../components/Pages/Home/Section/Promo/Promo';

function Home() {
  return (
    <>
      <Hero />
      <Premium />
      <Category />
      <Promo />
      <Popular />
      <Catalog />
      <Banner />
      <Reviews />
    </>
  );
}

export default Home;
