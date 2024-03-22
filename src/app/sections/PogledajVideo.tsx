import Image from 'next/image';
import React from 'react';
import pogledajVideo from '../img/pogledaj-video-demo.png';
import styles from '../styles/pogledajVideo.module.scss';
import paperDividTop from '../img/PAPIR-RAZMAK.svg';
import videoKontrole from '../img/video-kontrole-custom.svg';
import paperDividBot from '../img/PAPIR-RAZMAK-ALT.svg';
const PogledajVideo = () => {
  return (
    <section className={styles.pogledajVideoSection}>
      <div className={styles.dividerContPaper}>
        <Image src={paperDividTop} fill alt='deco' />
      </div>
      <Image src={pogledajVideo} fill alt='video poster' />
      <div className={styles.pogledajControls}>
        <Image src={videoKontrole} alt='controls' width={131} height={131} />
        <h1 className={styles.pogledajKontroleTekst}>Pogledaj video</h1>
      </div>
      <div className={styles.dividerContPaperAlt}>
        <Image src={paperDividBot} fill alt='deco' />
      </div>
    </section>
  );
};

export default PogledajVideo;
