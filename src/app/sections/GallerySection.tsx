'use client';

import React from 'react';
import slika1 from '../img/karuzel1.png';
import slika2 from '../img/karuzel2.png';
import slika3 from '../img/karuzel3.png';
import slika4 from '../img/karuzel4.png';
import slika5 from '../img/imag3.png';
import styles from '../styles/gallerySection.module.scss';
import Image from 'next/image';
import paralOne from '../img/PARAL-UP.png';
import paralTwo from '../img/PARAL-DOWN.png';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import localFont from 'next/font/local';

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const RecoletaSemiBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-SemiBold.ttf', weight: '600' }],
});

const GallerySection = () => {
  const background: BannerLayer = {
    image: `${paralOne.src}`,
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
  };

  const splideOptions: any = {
    perPage: 3,
    type: 'loop',
    // drag: 'free',
    // snap: true,
    // gap: '1rem',
    // focus: 'center',
    pagination: false,
    arrows: false,
    breakpoints: {
      640: { perPage: 1.2 },
      960: { perPage: 2.2 },
      1200: { perPage: 3 },
    },
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.gallerySectionTextOverlay}>
        <div className={styles.gallerySectionTextOverlayContent}>
          <h2 className={RecoletaSemiBold.className}>RIJEKA ZRMANJA</h2>
          <h4>
            Sa svojim dubokim kanjonom koji se proteže kroz spektakularne vapnenačke stijene, nudi nezaboravne prizore
            čiste, smaragdno zelene vode koja se vijuga kroz divljinu Sjeverne Dalmacije.
          </h4>
        </div>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image: paralTwo.src,
    translateY: [0, 15],
    // scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  return (
    <section className={styles.gallerySection}>
      <ParallaxBanner className={styles.gallerySectionParallax} layers={[background, foreground, headline]} />

      <Splide className={styles.swiper} options={splideOptions}>
        <SplideSlide className={styles.swiperSlide}>
          <Image draggable={false} fill src={slika1} alt='slika' />
        </SplideSlide>
        <SplideSlide className={styles.swiperSlide}>
          <Image draggable={false} fill src={slika2} alt='slika' />
        </SplideSlide>
        <SplideSlide className={styles.swiperSlide}>
          <Image draggable={false} fill src={slika3} alt='slika' />
        </SplideSlide>

        <SplideSlide className={styles.swiperSlide}>
          <Image draggable={false} fill src={slika4} alt='slika' />
        </SplideSlide>

        <SplideSlide className={styles.swiperSlide}>
          <Image draggable={false} fill src={slika5} alt='slika' />
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default GallerySection;
