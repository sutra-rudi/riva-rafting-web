'use client';
import localFont from 'next/font/local';
import React from 'react';
import styles from '../styles/heroSekcija.module.scss';
import ReactPlayer from 'react-player/lazy';
import PaperDividTop from '../components/PaperDividTop';
import heroPoster from '../img/hero-poster.jpg';
import Loading from '../loading';
import { useAppContext } from '../contexts/store';

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import Link from 'next/link';
import { UserLanguage } from '../types/appState';
import { useSearchParams } from 'next/navigation';

const HeroSekcija = () => {
  const [isReady, setIsReady] = React.useState(false);
  const playerRef = React.useRef<ReactPlayer>(null);

  const onReady = React.useCallback(() => {
    if (!isReady) {
      // const timeToStart = 7 * 60 + 12.6;
      playerRef.current && playerRef.current.seekTo(0, 'seconds');
      setIsReady(true);
    }
  }, [isReady]);

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const headline_en = `Experience the beauty \n of Zrmanja with us!`;
  const headline_hr = `Doživite ljepote \n Zrmanje s nama!`;

  const btn_main_hr = 'Kontaktiraj nas';
  const btn_main_en = 'Contact us';

  const parseLink =
    checkParams === UserLanguage.hr ? `/kontakt?lang=${UserLanguage.hr}` : `/kontakt?lang=${UserLanguage.en}`;

  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <ReactPlayer
        ref={playerRef}
        url={'/novi-hero.mp4'}
        config={{
          file: {
            attributes: {
              poster: heroPoster.src,
            },
          },
        }}
        loop
        playing={isReady}
        onReady={onReady}
        muted
        volume={0}
        width={'100%'}
        height={'100%'}
        playsinline
        fallback={<Loading />}
      />
    ),
  };

  const foreground: BannerLayer = {
    translateY: [0, 30],

    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroCtaKontejner}>
        <h1 className={`${styles.heroCtaHeader} ${RecoletaBold.className}`}>{parseByLang(headline_hr, headline_en)}</h1>
        <div className={styles.heroCtaButtonKontejter}>
          <Link href={parseLink}>
            <span>{parseByLang(btn_main_hr, btn_main_en)}</span>
          </Link>
        </div>
      </div>
    ),
  };

  const headline: BannerLayer = {
    translateY: [0, 15],
    scale: [1.1, 0.7],
    opacity: [0.15, 0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroCtaHeaderBacksideWrapper}>
        <h1 className={`${RecoletaBold.className} ${styles.heroCtaHeaderBackside}`}>
          {parseByLang(headline_hr, headline_en)}
        </h1>
      </div>
    ),
  };

  return (
    <section className={styles.heroSekcija}>
      <PaperDividTop />
      <ParallaxBanner className={styles.playerContainer} layers={[background, headline, foreground]} />
    </section>
  );
};

export default HeroSekcija;
