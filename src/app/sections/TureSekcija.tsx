'use client';

import React from 'react';
import styles from '../styles/tureSekcija.module.scss';
import ReactPlayer from 'react-player/lazy';
import ferlaufTop from '../img/FERLAUFPINGPONG.svg';
import PaperDividTop from '../components/PaperDividTop';
import Image from 'next/image';
const TureSekcija = () => {
  return (
    <section className={styles.tureSekcija}>
      <PaperDividTop />
      <div className={styles.ferlaufImageBlock}>
        <div className={styles.ferlaufImageCont}>
          <Image fill src={ferlaufTop} alt='ferlauf' />
        </div>
      </div>
      <ReactPlayer
        url={'/novi-ping-pong.mp4'}
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
