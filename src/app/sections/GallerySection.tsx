'use client';

import React from 'react';
import slika1 from '../img/karuzel1.png';
import slika2 from '../img/karuzel2.png';
import slika3 from '../img/karuzel3.png';
import slika4 from '../img/karuzel4.png';
import slika5 from '../img/imag3.png';
import paral from '../img/gallery-main-bg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from '../styles/gallerySection.module.scss';
import Image from 'next/image';

const GallerySection = () => {
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
      <Swiper
        spaceBetween={10}
        slidesPerView={4.2}
        // centeredSlides
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
        className={styles.swiper}
        modules={[Autoplay]}
        autoplay={{ delay: 1500 }}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image fill src={slika1} alt='slika' />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image fill src={slika2} alt='slika' />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image fill src={slika3} alt='slika' />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image fill src={slika4} alt='slika' />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image fill src={slika5} alt='slika' />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default GallerySection;
