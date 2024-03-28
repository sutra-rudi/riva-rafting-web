'use client';

import React from 'react';
import styles from '../styles/tureSekcija.module.scss';
import ReactPlayer from 'react-player/lazy';

import PaperDividTop from '../components/PaperDividTop';
const TureSekcija = () => {
  return (
    <section className={styles.tureSekcija}>
      <PaperDividTop />
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
