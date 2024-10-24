'use client';

import Image from 'next/image';
import React from 'react';
import pogledajPoster from '../img/pogledaj-video-demo.jpg';
import styles from '../styles/pogledajVideo.module.scss';

import localFont from 'next/font/local';
import videoKontrole from '../img/icons/video-kontrole-custom.svg';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';

import Lottie from 'lottie-react';

import PaperDividTop from '../components/PaperDividTop';
import PaperDividBotAlt from '../components/PaperDivitBotAlt';

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

import lottieAnima from '../img/videoPulse.json';
import ReactPlayer from 'react-player';
import Loading from '../loading';
import Lightbox from 'yet-another-react-lightbox';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
import { useInView } from 'react-intersection-observer';
import { checkUrl } from '../utils/checkUrl';
import dynamic from 'next/dynamic';

interface PogledajVideo {
  videoUrl: string;
}

const ReactPlayerDy = dynamic(() => import('react-player/lazy'), {
  ssr: false,
  loading: () => (
    <Image
      src={pogledajPoster.src}
      width={1920}
      height={1080}
      alt='poster for video'
      className='object-cover object-center block aspect-video w-full h-full mx-auto my-0'
      loading='lazy'
      placeholder='blur'
      blurDataURL={pogledajPoster.blurDataURL}
    />
  ),
});

const PogledajVideo = ({ videoUrl }: PogledajVideo) => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const [videoSource, setVideoSource] = React.useState<any>(null);
  const [isVideoReady, setIsVideoReady] = React.useState<boolean>(false);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [isVideoLoading, setIsVideoLoading] = React.useState<boolean>(false);
  const [isVideoLightbox, setIsVideoLightbox] = React.useState<boolean>(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  React.useEffect(() => {
    if (inView) {
      setIsVideoLoading(true);
      const validateVideo = async () => {
        const videoRes = await checkUrl(videoUrl);

        if (videoRes) {
          setVideoSource({
            source: videoUrl,
            placeholder: pogledajPoster.src,
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
              loading='lazy'
              placeholder='blur'
            />
          }
          config={{
            file: {
              attributes: {
                preload: 'none',
                poster: videoSource.placeholder,
              },
            },
          }}
        />
      ) : (
        <Image
          src={pogledajPoster.src}
          width={1920}
          height={1080}
          alt='poster for video'
          className='object-cover object-center block aspect-video w-full h-full mx-auto my-0'
          loading='lazy'
          placeholder='blur'
          blurDataURL={pogledajPoster.blurDataURL}
        />
      ),
  };

  const foreground: BannerLayer = {
    translateY: [0, 15],
    scale: [2, 0.8],
    opacity: [1, 0.1],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.pogledajKontroleTextBacksideWrapper} onClick={() => setIsVideoLightbox(true)}>
        <span className={`${RecoletaBold.className} ${styles.pogledajKontroleTekstBackside}`}>
          {parseByLang('Pogledaj video', 'Watch video')}
        </span>
      </div>
    ),
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.pogledajControls}>
        <Lottie animationData={lottieAnima} className={styles.lottieCustom} />
        <Image src={videoKontrole} alt='controls' width={131} height={131} loading='lazy' />
        <h1 className={`${styles.pogledajKontroleTekstMaster} ${RecoletaBold.className}`}>
          {parseByLang('Pogledaj video', 'Watch video')}
        </h1>
      </div>
    ),
  };

  return (
    <section className={styles.pogledajVideoSection} ref={ref}>
      <PaperDividTop />
      <ParallaxBanner className={styles.pogledajVideoParalax} layers={[background, headline, foreground]} />
      <Lightbox
        open={isVideoLightbox}
        close={() => setIsVideoLightbox(false)}
        slides={[
          {
            //@ts-ignore
            type: 'custom-slide',
          },
        ]}
        render={{
          slide: () => (
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=HuwvV-uBgRg'}
              config={{
                file: {
                  attributes: {
                    poster: pogledajPoster.src,
                  },
                },
              }}
              loop
              width={'100%'}
              height={'100%'}
              playsinline
              fallback={<Loading />}
            />
          ),
        }}
      />
      <PaperDividBotAlt />
    </section>
  );
};

export default PogledajVideo;
