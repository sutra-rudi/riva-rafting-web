'use client';

import React from 'react';
import styles from '../styles/tureSekcija.module.scss';
import ReactPlayer from 'react-player/lazy';
import ferlaufTop from '../img/FERLAUFPINGPONG.svg';
import PaperDividTop from '../components/PaperDividTop';
import Image from 'next/image';
import pingPongPoster from '../img/ping-pong-poster.jpg';
import Loading from '../loading';
import AppButton from '../components/AppButton';
const TureSekcija = () => {
  const [isReady, setIsReady] = React.useState(false);
  const playerRef = React.useRef<ReactPlayer>(null);

  const onReady = React.useCallback(() => {
    if (!isReady) {
      // const timeToStart = 7 * 60 + 12.6;
      playerRef.current && playerRef.current.seekTo(0, 'seconds');
      setIsReady(true);
    }
  }, [isReady]);
  return (
    <section className={styles.tureSekcija}>
      <PaperDividTop />
      <div className={styles.ferlaufImageBlock}>
        <div className={styles.ferlaufImageCont}>
          <Image fill src={ferlaufTop} alt='ferlauf' />
        </div>
      </div>
      <div className={styles.playerContainer}>
        <div className={styles.buttonOnVideo}>
          <AppButton content='REZERVIRAJTE SVOJ TERMIN' />
        </div>
        <ReactPlayer
          url={'/novi-ping-pong.mp4'}
          loop
          muted
          volume={0}
          width={'100%'}
          height={'100%'}
          playsinline
          playing={isReady}
          onReady={onReady}
          fallback={<Loading />}
          config={{
            file: {
              attributes: {
                poster: pingPongPoster.src,
              },
            },
          }}
        />
      </div>
    </section>
  );
};

export default TureSekcija;
