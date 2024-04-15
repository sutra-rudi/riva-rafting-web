'use client';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import React from 'react';
import styles from '../styles/obrovackiKraj.module.scss';
import bgImage from '../img/pravila/podatci-o-tvrtki-hero.png';
import Image from 'next/image';
import localFont from 'next/font/local';
import PaperDividTop from '../components/PaperDividTop';

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

const PageContent = () => {
  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: <Image fill src={bgImage ?? ''} alt='hero' placeholder='blur' />,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 0.85],
    //     opacity: [0.15, 0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroHeader}>
        <h1 className={RecoletaBold.className}>{`ŠTO POSJETITI U \n NAŠEM KRAJU?`}</h1>
        <h4>
          U srcu Obrovačkog kraja, očekuje vas bogatstvo prirodnih čuda i kulturnih bisera. Ovo izuzetno područje pruža
          nevjerojatne mogućnosti za istraživanje vrhova planina, divljih rijeka i impresivnih slapova, te uživanje u
          posjetama nacionalnim parkovima. Krenite od prekrasnih vrhova Velebita, otkrijte skrivene ljepote rijeke Krupe
          i Zrmanje te istražite dubine planine u Cerovačkim pećinama. Nakon toga, osvježite se kupanjem u Novigradskom
          ili Karinskom moru. Ne propustite priliku posjetiti Kudin most i Manastir Krupa kako biste još dublje zaronili
          u bogatstvo ovog fascinantnog kraja.
        </h4>
      </div>
    ),
  };

  return (
    <div className={styles.sectionMaster}>
      <PaperDividTop />
      <ParallaxBanner className={styles.sectionHero} layers={[background, headline]} />
    </div>
  );
};

export default PageContent;
