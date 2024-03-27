'use client';

import React from 'react';
import slika1 from '../img/karuzel1.png';
import slika2 from '../img/karuzel2.png';
import slika3 from '../img/karuzel3.png';
import slika4 from '../img/karuzel4.png';
import slika5 from '../img/imag3.png';
import paral from '../img/gallery-main-bg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { }from "swiper"
// import { SwiperContainer, register } from 'swiper/element/bundle';
import styles from '../styles/gallerySection.module.scss';
import 'swiper/css';
import Image from 'next/image';
import { SwiperContainer, register } from 'swiper/element';

const GallerySection = () => {
  // const swiperRef = React.useRef<SwiperContainer | null>(null);

  // React.useEffect(() => {
  //   // Register Swiper web component
  //   register();

  //   // Object with parameters
  //   const params = {
  //     slidesPerView: 3,
  //     breakpoints: {
  //       768: {
  //         slidesPerView: 4,
  //       },
  //     },
  //   };

  //   if (swiperRef.current) {
  //     // Assign it to swiper element

  //     Object.assign(swiperRef.current, params);
  //     swiperRef.current.initialize();
  //     // initialize swiper
  //   }
  // }, []);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.gallerySectionParallax}>
        <div className={styles.gallerySectionTextOverlay}>
          <h2>RIJEKA ZRMANJA</h2>
          <h4>
            Sa svojim dubokim kanjonom koji se proteže kroz spektakularne vapnenačke stijene, nudi nezaboravne prizore
            čiste, smaragdno zelene vode koja se vijuga kroz divljinu Sjeverne Dalmacije.{' '}
          </h4>
        </div>
        <Image src={paral} fill alt='alt' />
      </div>
      {/* <Swiper
        spaceBetween={10}
        // init={false}
        slidesPerView={4.2}
        // ref={swiperRef}
        breakpoints={{
          // when window width is >= 320px
          768: {
            slidesPerView: 1.2,
          },
          // when window width is >= 480px
          1024: {
            slidesPerView: 2.2,
          },
          // when window width is >= 640px
          1300: {
            slidesPerView: 4.2,
          },
        }}
        // centeredSlides
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        className={styles.swiper}
        // modules={[Autoplay]}
        // autoplay={{ delay: 1500 }}
      >
        <SwiperSlide lazy className={styles.swiperSlide}>
          <Image fill src={slika1} alt='slika' />
        </SwiperSlide>
        <SwiperSlide lazy className={styles.swiperSlide}>
          <Image fill src={slika2} alt='slika' />
        </SwiperSlide>
        <SwiperSlide lazy className={styles.swiperSlide}>
          <Image fill src={slika3} alt='slika' />
        </SwiperSlide>
        <SwiperSlide lazy className={styles.swiperSlide}>
          <Image fill src={slika4} alt='slika' />
        </SwiperSlide>
        <SwiperSlide lazy className={styles.swiperSlide}>
          <Image fill src={slika5} alt='slika' />
        </SwiperSlide>
      </Swiper> */}
    </section>
  );
};

export default GallerySection;
