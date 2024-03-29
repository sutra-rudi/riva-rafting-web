'use client';
import localFont from 'next/font/local';
import React from 'react';
import styles from '../styles/heroSekcija.module.scss';
import ReactPlayer from 'react-player/lazy';
import AppButton from '../components/AppButton';
import PaperDividTop from '../components/PaperDividTop';
import { Parallax } from 'react-scroll-parallax';
// const RecoletaFont = localFont({
//   src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Regular.ttf', weight: '400' }],
// });

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

const HeroSekcija = () => {
  return window ? (
    <section className={styles.heroSekcija}>
      {/* <Parallax speed={-50}> */}
      <div className={styles.playerContainer}>
        <PaperDividTop />
        <ReactPlayer url={'/novi-hero.mp4'} loop playing muted volume={0} width={'100%'} height={'100%'} />
        <div className={styles.heroCtaKontejner}>
          <h1 className={`${styles.heroCtaHeader} ${RecoletaBold.className}`}>
            <Parallax speed={-3.5}>Doživite ljepote Zrmanje s nama!</Parallax>
          </h1>

          <h1 className={`${styles.heroCtaHeader} ${RecoletaBold.className} ${styles.heroCtaHeaderBackside}`}>
            <Parallax speed={5}> Doživite ljepote Zrmanje s nama!</Parallax>
          </h1>

          <div className={styles.heroCtaButtonKontejter}>
            <AppButton isHero content='Aktivnosti koje nudimo' />
            <AppButton isHero content='Rezervirajte svoj termin' />
          </div>
        </div>
      </div>
      {/* </Parallax> */}
    </section>
  ) : null;
};

export default HeroSekcija;
