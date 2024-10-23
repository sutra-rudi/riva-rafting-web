'use client';
import localFont from 'next/font/local';
import React from 'react';
import styles from '../styles/heroSekcija.module.scss';
import ReactPlayer from 'react-player/lazy';
import PaperDividTop from '../components/PaperDividTop';
import heroPoster from '../img/hero-poster.jpg';
import Loading from '../loading';

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

const ReactPlayerDy = dynamic(() => import('react-player/lazy'), {
  ssr: false,
  loading: () => (
    <Image
      src={heroPoster.src}
      width={1600}
      height={1200}
      alt='poster for video'
      className='object-cover object-center block aspect-video w-full h-full mx-auto my-0'
      priority
    />
  ),
});

import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import Link from 'next/link';
import { UserLanguage } from '../types/appState';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const checkUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      next: { revalidate: 3600 },
    });
    return response.ok;
  } catch (error) {
    console.error('Error checking image URL:', error);
    return false;
  }
};

const HeroSekcija = () => {
  const [videoSource, setVideoSource] = React.useState<any>(null);
  const [isVideoReady, setIsVideoReady] = React.useState<boolean>(false);
  const [isVideoLoading, setIsVideoLoading] = React.useState<boolean>(false);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsVideoLoading(true);
    const validateVideo = async () => {
      const videoRes = await checkUrl('https://cms.zrmanja-camping.hr/wp-content/uploads/2024/06/novi-hero.mp4');

      console.log('VIDEO RES', videoRes);
      if (videoRes) {
        setVideoSource({
          source: 'https://cms.zrmanja-camping.hr/wp-content/uploads/2024/06/novi-hero.mp4',
          placeholder: heroPoster.src,
        });
        setIsVideoLoading(false);
        setIsVideoReady(true);
      }
    };

    validateVideo();
  }, []);

  React.useEffect(() => {
    if (isVideoReady) {
      const timer = setTimeout(() => {
        setIsPlaying(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVideoReady]);

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
    children:
      isVideoReady && videoSource && !isVideoLoading ? (
        <ReactPlayerDy
          url={videoSource.source}
          playsinline
          pip
          muted
          loop
          volume={0}
          width='100%'
          height='100%'
          playing={isPlaying}
          fallback={
            <Image
              src={videoSource.placeholder}
              alt='hero image'
              width={1600}
              height={1200}
              className='object-cover object-center block aspect-video'
              priority
            />
          }
          config={{
            file: {
              attributes: {
                preload: 'none', // Ensure video doesn't load until play
                poster: videoSource.placeholder, // Proper use of poster attribute
              },
            },
          }}
        />
      ) : (
        <Image
          src={heroPoster.src}
          width={1600}
          height={1200}
          alt='poster for video'
          className='object-cover object-center block aspect-video w-full h-full mx-auto my-0'
          priority
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
