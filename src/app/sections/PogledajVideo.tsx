'use client';

import Image from 'next/image';
import React from 'react';
import pogledajVideo from '../img/pogledaj-video-demo.png';
import styles from '../styles/pogledajVideo.module.scss';

import localFont from 'next/font/local';
import videoKontrole from '../img/video-kontrole-custom.svg';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';

import Lottie from 'lottie-react';

import PaperDividTop from '../components/PaperDividTop';
import PaperDividBotAlt from '../components/PaperDivitBotAlt';
import { useAppContext } from '../contexts/store';

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

import lottieAnima from '../img/videoPulse.json';

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
    translateY: [0, 15],
    scale: [2, 0.8],
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
        <Lottie animationData={lottieAnima} className={styles.lottieCustom} />
        <Image
          src={videoKontrole}
          alt='controls'
          width={150}
          height={150}
          className={styles.pogledajVideoControlsImg}
        />
        <h1 className={`${styles.pogledajKontroleTekstMaster} ${RecoletaBold.className}`}>
          {userLang === 'hr' ? 'Pogledaj video' : 'Watch video'}
        </h1>
      </div>
    ),
  };

  return (
    <section className={styles.pogledajVideoSection}>
      <PaperDividTop />
      <ParallaxBanner className={styles.pogledajVideoParalax} layers={[background, headline, foreground]} />
      <PaperDividBotAlt />
    </section>
  );
};

export default PogledajVideo;
