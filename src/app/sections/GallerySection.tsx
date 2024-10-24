'use client';

import React from 'react';
import kar1 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin01.png';
import kar2 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin02.png';
import kar3 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin03.png';
import kar4 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin04.png';
import kar5 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin05.png';
import kar6 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin06.png';
import kar7 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin07.png';
import kar8 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin08.png';
import kar9 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin09.png';
import kar10 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin10.png';
import kar11 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin11.png';
import kar12 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin12.png';
import kar13 from '../img/sections/karuzel-riva-fin/karuzel-riva-fin13.png';

import styles from '../styles/gallerySection.module.scss';
import Image from 'next/image';
import paralOne from '../img/PARAL-UP.webp';
import paralTwo from '../img/PARAL-DOWN.webp';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import localFont from 'next/font/local';

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

const RecoletaSemiBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-SemiBold.ttf', weight: '600' }],
});

const GallerySection = () => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );
  const imgArr = [kar1, kar2, kar3, kar4, kar5, kar6, kar7, kar8, kar9, kar10, kar11, kar12, kar13];

  const title_hr = 'NAŠ DOM - RIJEKA ZRMANJA';
  const content_hr =
    'Sa svojim dubokim kanjonom koji se proteže kroz spektakularne vapnenačke stijene, nudi nezaboravne prizore čiste, smaragdno zelene vode koja se vijuga kroz divljinu Sjeverne Dalmacije.';
  const title_eng = 'OUR HOME - ZRMANJA RIVER';
  const content_eng =
    'With its deep canyon cutting through spectacular limestone cliffs, it offers unforgettable views of pure, emerald-green water winding through the wilderness of Northern Dalmatia.';

  const background: BannerLayer = {
    children: (
      <Image
        src={paralOne.src}
        alt='parallax layer image'
        placeholder='blur'
        blurDataURL={paralOne.blurDataURL}
        loading='lazy'
        fill
      />
    ),
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
  };

  const splideOptions: any = {
    perPage: 3,
    type: 'slide',
    drag: 'free',
    snap: true,
    gap: '0.5rem',
    focus: 'center',
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 2000,
    rewind: true,

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
          <h2 className={RecoletaSemiBold.className}>{parseByLang(title_hr, title_eng)}</h2>
          <h4>{parseByLang(content_hr, content_eng)}</h4>
        </div>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    // image: paralTwo.src,
    children: (
      <Image
        src={paralTwo.src}
        alt='parallax layer image'
        fill
        placeholder='blur'
        blurDataURL={paralTwo.blurDataURL}
        loading='lazy'
      />
    ),
    translateY: [0, 15],
    // scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  return (
    <section className={styles.gallerySection}>
      <ParallaxBanner className={styles.gallerySectionParallax} layers={[background, foreground, headline]} />

      <Splide className={styles.swiper} options={splideOptions}>
        {imgArr.map((img) => (
          <SplideSlide key={img.src} className={styles.swiperSlide}>
            <Image
              draggable={false}
              fill
              src={img.src}
              alt='image of camping villiage'
              placeholder='blur'
              blurDataURL={img.blurDataURL}
              loading='lazy'
            />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default GallerySection;
