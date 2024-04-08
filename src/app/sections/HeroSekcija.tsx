'use client';
import localFont from 'next/font/local';
import React from 'react';
import styles from '../styles/heroSekcija.module.scss';
import ReactPlayer from 'react-player/lazy';
import AppButton from '../components/AppButton';
import PaperDividTop from '../components/PaperDividTop';
import heroPoster from '../img/hero-poster.jpg';
import Loading from '../loading';
import { useAppContext } from '../contexts/store';

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

const HeroSekcija = () => {
  const [scrollPos, setScrollPos] = React.useState<number>(0);

  React.useEffect(() => {
    const updateClientScrollPostion = () => window.scrollY < 772 && setScrollPos(window.scrollY);

    window && window.addEventListener('scroll', updateClientScrollPostion);

    return () => window.removeEventListener('scroll', updateClientScrollPostion);
  }, []);

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

  const headline_en = 'Experience the beauty of Zrmanja with us!';
  const headline_hr = 'Doživite ljepote Zrmanje s nama!';

  const btn_main_hr = 'Aktivnosti koje nudimo';
  const btn_main_en = 'The activities we offer';

  const btn_second_hr = 'Rezervirajte svoj termin';
  const btn_second_en = 'Book your appointment';

  const langCheck = React.useCallback(
    (hrString: string, enString: string) => (userLang === 'hr' ? hrString : enString),
    [userLang]
  );

  return (
    <section className={styles.heroSekcija}>
      <div className={styles.playerContainer}>
        <PaperDividTop />
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
        <div className={styles.heroCtaKontejner}>
          <h1 className={`${styles.heroCtaHeader} ${RecoletaBold.className}`}>{langCheck(headline_hr, headline_en)}</h1>

          <h1
            style={{
              letterSpacing: scrollPos > 0 ? `${scrollPos / 120}px` : '0',
              transform: `translateY(${scrollPos / 20}px)`,
              opacity: scrollPos < 250 ? `0.25` : `${1 - scrollPos / 500}`,
            }}
            className={`${RecoletaBold.className} ${styles.heroCtaHeaderBackside}`}
          >
            {userLang === 'hr' ? headline_hr : headline_en}
          </h1>

          <div className={styles.heroCtaButtonKontejter}>
            <AppButton isHero content={langCheck(btn_main_hr, btn_main_en)} />
            <AppButton isHero content={langCheck(btn_second_hr, btn_second_en)} isSecondary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSekcija;
