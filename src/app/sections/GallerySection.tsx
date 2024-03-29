'use client';

import React from 'react';
import slika1 from '../img/karuzel1.png';
import slika2 from '../img/karuzel2.png';
import slika3 from '../img/karuzel3.png';
import slika4 from '../img/karuzel4.png';
import slika5 from '../img/imag3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from '../styles/gallerySection.module.scss';
import Image from 'next/image';
import paralOne from '../img/PARAL-UP.png';
import paralTwo from '../img/PARAL-DOWN.png';
import { Parallax } from 'react-scroll-parallax';
import { useWindowSize } from '../hooks/useWindowSize';
const GallerySection = () => {
  const settings = {
    dots: false,
    speed: 1500,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.2,
          // slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          // slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.2,
          // slidesToScroll: 1,
        },
      },
    ],
  };

  const clientWindowSize = useWindowSize();

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

        {/* <Image src={paral} fill alt='alt' /> */}
        <Parallax speed={-195} className={styles.paralOne}>
          <Image src={paralOne} fill alt='alt' />
        </Parallax>
        <Parallax speed={-445} className={styles.paralTwo}>
          <Image src={paralTwo} fill alt='alt' />
        </Parallax>
      </div>
      <Slider className={styles.swiper} {...settings}>
        <div className={styles.swiperSlide}>
          <Image fill src={slika1} alt='slika' />
        </div>
        <div className={styles.swiperSlide}>
          <Image fill src={slika2} alt='slika' />
        </div>
        <div className={styles.swiperSlide}>
          <Image fill src={slika3} alt='slika' />
        </div>
        <div className={styles.swiperSlide}>
          <Image fill src={slika4} alt='slika' />
        </div>
        <div className={styles.swiperSlide}>
          <Image fill src={slika5} alt='slika' />
        </div>
      </Slider>
    </section>
  );
};

export default GallerySection;
