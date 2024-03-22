'use client';

import React from 'react';
import styles from '../styles/tureSekcija.module.scss';
import ReactPlayer from 'react-player/lazy';
import Image from 'next/image';
import papirDivider from '../img/PAPIR-RAZMAK.svg';
const TureSekcija = () => {
  return (
    <section className={styles.tureSekcija}>
      <div className={styles.dividerContPaper}>
        <Image src={papirDivider} fill alt='deco' />
      </div>
      <ReactPlayer
        url={'/promo-video-demo.mov'}
        loop
        playing
        muted
        volume={0}
        width={'100%'}
        height={'100%'}
        playsinline
      />
    </section>
  );
};

export default TureSekcija;
