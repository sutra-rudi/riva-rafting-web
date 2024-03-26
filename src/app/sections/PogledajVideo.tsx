import Image from 'next/image';
import React from 'react';
import pogledajVideo from '../img/pogledaj-video-demo.png';
import styles from '../styles/pogledajVideo.module.scss';

import videoKontrole from '../img/video-kontrole-custom.svg';

import PaperDividTop from '../components/PaperDividTop';
import PaperDividBotAlt from '../components/PaperDivitBotAlt';

const PogledajVideo = () => {
  return (
    <section className={styles.pogledajVideoSection}>
      <PaperDividTop />
      <Image src={pogledajVideo} fill alt='video poster' />
      <div className={styles.pogledajControls}>
        <Image src={videoKontrole} alt='controls' width={131} height={131} />
        <h1 className={styles.pogledajKontroleTekst}>Pogledaj video</h1>
      </div>
      <PaperDividBotAlt />
    </section>
  );
};

export default PogledajVideo;
