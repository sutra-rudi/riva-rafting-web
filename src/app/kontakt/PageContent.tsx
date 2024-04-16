'use client';

import React from 'react';
import PaperDividTop from '../components/PaperDividTop';
import Image, { StaticImageData } from 'next/image';

import styles from '../styles/contact.module.scss';
import localFont from 'next/font/local';
const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import PaperDividBot from '../components/PaperDividBot';
import ContactForm from '../components/ContactForm';

interface AboutUsPageContent {
  title: string;
  imgSrc: StaticImageData;
}

const PageContent = (content: AboutUsPageContent) => {
  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: <Image fill src={content.imgSrc ?? ''} alt='hero' placeholder='blur' />,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 0.85],
    //     opacity: [0.15, 0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroHeader}>
        <h1 className={RecoletaBold.className}>{content.title}</h1>
      </div>
    ),
  };

  return (
    <>
      <PaperDividTop />
      <ParallaxBanner className={styles.sectionHero} layers={[background, headline]} />

      <div className={styles.masterContainer}>
        <PaperDividBot />
        <div className={styles.contentContainer}>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default PageContent;
