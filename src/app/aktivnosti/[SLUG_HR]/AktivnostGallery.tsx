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
    perPage: 5.5,
    type: 'loop',
    drag: 'free',
    snap: true,
    gap: '0.5rem',
    focus: 'center',
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 2500,
    breakpoints: {
      640: { perPage: 1.2 },
      960: { perPage: 2.2 },
      1200: { perPage: 3 },
    },
  };

  return (
    <StickyBox offsetTop={20} offsetBottom={20} className={styles.swiperSticky}>
      <Splide
        className={styles.swiper}
        options={splideOptions}
        onActive={(slider) => {
          console.log('SLIDER', slider);
          const elem = document.querySelector('.is-active');
          /*@ts-ignore*/
          // console.log('ELE', elem.children[0].children[0].children[0].children[0].attributes.src);
        }}
      >
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
