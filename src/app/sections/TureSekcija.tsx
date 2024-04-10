'use client';

import React from 'react';
import styles from '../styles/tureSekcija.module.scss';
import ReactPlayer from 'react-player/lazy';
import ferlaufTop from '../img/FERLAUFPINGPONG.svg';
import PaperDividTop from '../components/PaperDividTop';
import Image from 'next/image';
import pingPongPoster from '../img/ping-pong-poster.jpg';
import Loading from '../loading';
import localFont from 'next/font/local';
import { useAppContext } from '../contexts/store';
// import AppButton from '../components/AppButton';

const RecoletaSemiBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-SemiBold.ttf', weight: '600' }],
});
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

  const {
    state: { userLang },
  } = useAppContext();

  const headline_hr = 'Netaknuta Priroda';
  const content_hr =
    'Istražite neograničene avanture, od uzbudljivih rafting izleta na rijeci Zrmanji do otkrivanja divljine Velebita. Doživite nezaboravne trenutke usred netaknute prirode.';
  const headline_eng = 'Untouched Nature';
  const content_eng =
    'Explore unlimited adventures, from exciting rafting trips on the Zrmanja River to discovering the wilderness of Velebit. Experience unforgettable moments amidst untouched nature.';

  return (
    <section className={styles.tureSekcija}>
      <PaperDividTop />
      <div className={styles.ferlaufImageBlock}>
        <div className={styles.ferlaufImageCont}>
          <Image fill src={ferlaufTop} alt='ferlauf' />
        </div>
      </div>
      <div className={styles.playerContainer}>
        <div className={styles.gallerySectionTextOverlay}>
          <div className={styles.gallerySectionTextOverlayContent}>
            <h2 className={RecoletaSemiBold.className}>{userLang === 'hr' ? headline_hr : headline_eng}</h2>
            <h4>{userLang === 'hr' ? content_hr : content_eng}</h4>
          </div>
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
