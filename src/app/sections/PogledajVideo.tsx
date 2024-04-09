'use client';

import Image from 'next/image';
import React from 'react';
import pogledajVideo from '../img/pogledaj-video-demo.png';
import styles from '../styles/pogledajVideo.module.scss';

import localFont from 'next/font/local';
import videoKontrole from '../img/video-kontrole-custom.svg';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';

import PaperDividTop from '../components/PaperDividTop';
import PaperDividBotAlt from '../components/PaperDivitBotAlt';
import { useAppContext } from '../contexts/store';

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

const PogledajVideo = () => {
  const {
    state: { userLang },
  } = useAppContext();

  const background: BannerLayer = {
    image: `${pogledajVideo.src}`,
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
  };

  const foreground: BannerLayer = {
    translateY: [0, 30],
    scale: [1.25, 0.95],
    opacity: [1, 0.1],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.pogledajKontroleTextBacksideWrapper}>
        <span className={`${RecoletaBold.className} ${styles.pogledajKontroleTekstBackside}`}>
          {userLang === 'hr' ? 'Pogledaj video' : 'Watch video'}
        </span>
      </div>
    ),
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.pogledajControls}>
        <Image src={videoKontrole} alt='controls' width={131} height={131} />
        <h1 className={`${styles.pogledajKontroleTekstMaster} ${RecoletaBold.className}`}>
          {userLang === 'hr' ? 'Pogledaj video' : 'Watch video'}
        </h1>
      </div>
    ),
  };

  return (
    <section className={styles.pogledajVideoSection}>
      <PaperDividTop />
      <ParallaxBanner
        className={styles.pogledajVideoParalax}
        layers={[background, headline, foreground]}
      ></ParallaxBanner>
      <PaperDividBotAlt />
    </section>
  );
};

export default PogledajVideo;
