'use client';

import React from 'react';
import styles from '../styles/tureSekcija.module.scss';
import ferlaufTop from '../img/FERLAUFPINGPONG.svg';
import PaperDividTop from '../components/PaperDividTop';
import Image from 'next/image';
import pingPongPoster from '../img/ping-pong-poster.jpg';
import localFont from 'next/font/local';

import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer
import { checkUrl } from '../utils/checkUrl';

const RecoletaSemiBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-SemiBold.ttf', weight: '600' }],
});

interface TureSekcija {
  videoUrl: string;
}

const ReactPlayerDy = dynamic(() => import('react-player/lazy'), {
  ssr: false,
  loading: () => (
    <Image
      src={pingPongPoster.src}
      width={1920}
      height={1080}
      alt='poster for video'
      className='object-cover object-center block aspect-video w-full h-full mx-auto my-0'
      priority
    />
  ),
});

const TureSekcija = ({ videoUrl }: TureSekcija) => {
  const [videoSource, setVideoSource] = React.useState<any>(null);
  const [isVideoReady, setIsVideoReady] = React.useState<boolean>(false);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [isVideoLoading, setIsVideoLoading] = React.useState<boolean>(false);
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  React.useEffect(() => {
    if (inView) {
      setIsVideoLoading(true);
      const validateVideo = async () => {
        const videoRes = await checkUrl(videoUrl);

        if (videoRes) {
          setVideoSource({
            source: videoUrl,
            placeholder: pingPongPoster.src,
          });
          setIsVideoLoading(false);
          setIsVideoReady(true);
        }
      };

      validateVideo();
    }
  }, [inView, videoUrl]);

  React.useEffect(() => {
    if (isVideoReady) {
      const timer = setTimeout(() => {
        setIsPlaying(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isVideoReady]);

  const headline_hr = 'Netaknuta Priroda';
  const content_hr =
    'Istražite neograničene avanture, od uzbudljivih rafting izleta na rijeci Zrmanji do otkrivanja divljine Velebita. Doživite nezaboravne trenutke usred netaknute prirode.';
  const headline_eng = 'Untouched Nature';
  const content_eng =
    'Explore unlimited adventures, from exciting rafting trips on the Zrmanja River to discovering the wilderness of Velebit. Experience unforgettable moments amidst untouched nature.';

  const foreground: BannerLayer = {
    translateY: [0, 45],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.gallerySectionTextOverlay}>
        <div className={styles.gallerySectionTextOverlayContent}>
          <h2 className={RecoletaSemiBold.className}>{parseByLang(headline_hr, headline_eng)}</h2>
          <h4>{parseByLang(content_hr, content_eng)}</h4>
        </div>
      </div>
    ),
  };

  const background: BannerLayer = {
    translateY: [0, 40],
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
          src={pingPongPoster.src}
          width={1600}
          height={1200}
          alt='poster for video'
          className='object-cover object-center block aspect-video w-full h-full mx-auto my-0'
          priority
        />
      ),
  };

  return (
    <section ref={ref} className={styles.tureSekcija}>
      {/* Add ref to the section */}
      <PaperDividTop />
      <div className={styles.ferlaufImageBlock}>
        <div className={styles.ferlaufImageCont}>
          <Image fill src={ferlaufTop} alt='ferlauf' />
        </div>
      </div>
      <ParallaxBanner className={styles.playerContainer} layers={[background, foreground]} />
    </section>
  );
};

export default TureSekcija;
