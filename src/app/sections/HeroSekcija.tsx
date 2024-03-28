'use client';

import React from 'react';
import styles from '../styles/heroSekcija.module.scss';
import ReactPlayer from 'react-player/lazy';
import AppButton from '../components/AppButton';
import PaperDividTop from '../components/PaperDividTop';
import { Parallax } from 'react-scroll-parallax';

const HeroSekcija = () => {
  return window ? (
    <section className={styles.heroSekcija}>
      {/* <Parallax speed={-50}> */}
      <div className={styles.playerContainer}>
        <PaperDividTop />
        <ReactPlayer url={'/novi-hero.mp4'} loop playing muted volume={0} width={'100%'} height={'100%'} />
        <div className={styles.heroCtaKontejner}>
          <h1 className={styles.heroCtaHeader}>Doživite ljepote Zrmanje s nama!</h1>
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
