'use client';

import React from 'react';
import styles from '../../styles/aktivnost.module.scss';
import StickyBox from 'react-sticky-box';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image, { StaticImageData } from 'next/image';

const AktivnostGallery = ({ listaSlika }: { listaSlika: StaticImageData[] }) => {
  const splideOptions: any = {
    perPage: 5.2,
    type: 'loop',
    drag: 'free',
    snap: true,
    gap: '0.5rem',
    focus: 'center',
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 5000,
    isNavigation: true,
    breakpoints: {
      768: { perPage: 2.2 },
      1024: { perPage: 3.2 },
      1300: { perPage: 4.2 },
    },
  };

  const topSlideOptions = {
    type: 'fade',
    drag: 'false',
    snap: false,
    pagination: false,
    arrows: false,
    autoplay: false,
    // interval: 2500,
    // breakpoints: {
    //   640: { perPage: 1.2 },
    //   960: { perPage: 2.2 },
    //   1200: { perPage: 3 },
    // },
  };

  const topSliderRef = React.useRef();
  const botSliderRef = React.useRef();

  React.useEffect(() => {
    //@ts-ignore
    if (topSliderRef.current && botSliderRef.current && botSliderRef.current.splide) {
      //@ts-ignore
      topSliderRef.current.sync(botSliderRef.current.splide);
    }
  }, []);

  return (
    <StickyBox offsetTop={20} offsetBottom={20} className={styles.swiperSticky}>
      <Splide ref={topSliderRef} className={styles.swiperTop} options={topSlideOptions}>
        {listaSlika.map((slika, index) => {
          return (
            <SplideSlide key={index} className={styles.swiperSlide}>
              <Image draggable={false} fill src={slika} alt='slika aktivnosti' placeholder='blur' />
            </SplideSlide>
          );
        })}
      </Splide>

      <Splide ref={botSliderRef} className={styles.swiper} options={splideOptions}>
        {listaSlika.map((slika, index) => {
          return (
            <SplideSlide key={index} className={styles.swiperSlide}>
              <Image draggable={false} fill src={slika} alt='slika aktivnosti' placeholder='blur' />
            </SplideSlide>
          );
        })}
      </Splide>
    </StickyBox>
  );
};

export default AktivnostGallery;
