'use client';

import React from 'react';
import style from '../styles/turePonuda.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { UserLanguage } from '../types/appState';
import { useSearchParams } from 'next/navigation';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import img1 from '../img/aktivnosti-hero-update-slike/pjesacke-ture/waking tour gallery-6.png';
import img2 from '../img/aktivnosti-hero-update-slike/kayakTura/Kayak gallery-2.png';
import img3 from '../img/aktivnosti-hero-update-slike/pjesacke-ture/waking tour gallery-4.png';
import img4 from '../img/aktivnosti-hero-update-slike/kayakTura/Kayak gallery-1.png';
import paketAranzman from '../img/paket aranzman.jpg';
import Lightbox from 'yet-another-react-lightbox';

import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface TureKarticaData {
  subtitle: string;
  title: string;
  content: string;
  isCTA: boolean;
  imageSRC: StaticImageData;
  isDoubleCta?: boolean;
}

const slideImgNewTour = [img1, img2, img3, img4];

const TureArticle = (props: TureKarticaData) => {
  const { subtitle, title, content, isCTA, imageSRC, isDoubleCta } = props;
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const [openLightbox, setOpenLightbox] = React.useState<boolean>(false);

  const slideOptions = {
    type: 'fade',
    drag: 'false',
    snap: false,
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 2500,
  };

  const parseLink =
    checkParams === UserLanguage.hr ? `/kontakt?lang=${UserLanguage.hr}` : `/kontakt?lang=${UserLanguage.en}`;

  return (
    <article className={isCTA ? `${style.tureArticle}` : `${style.tureArticle} ${style.articleReverse}`}>
      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        plugins={[Zoom]}
        slides={[
          {
            src: paketAranzman.src,
            imageFit: 'contain',
            width: paketAranzman.width,
            height: paketAranzman.height,
            alt: 'Promotional flyer for Riva Rafting tour',
          },
        ]}
      />
      <div className={style.imgHolder}>
        {isDoubleCta ? (
          <Splide className={style.swiperParent} options={slideOptions}>
            {slideImgNewTour.map((img) => (
              <SplideSlide key={img.src} className={style.swiperSlide}>
                <Image fill src={img.src} alt='Offer image' loading='lazy' />
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <Image src={imageSRC} fill alt='Offer image' loading='lazy' />
        )}
      </div>
      <div className={style.contentHolder}>
        <div>
          <h4 className={style.contentSubtitle}>{subtitle}</h4>
          <h2 className={style.contentTitle}>{title}</h2>
        </div>
        <p className={style.contentText}>{content}</p>

        {isCTA && !isDoubleCta && (
          <Link href={parseLink} className={style.contactCtaTura}>
            <span>{checkParams === UserLanguage.hr ? 'Kontaktirajte nas' : 'Contact us'}</span>
          </Link>
        )}

        {isCTA && isDoubleCta && (
          <div className={style.contactCtaTuraNoviBlok}>
            <Link href={parseLink} className={style.contactCtaTura}>
              <span>{checkParams === UserLanguage.hr ? 'Kontaktirajte nas' : 'Contact us'}</span>
            </Link>

            <div onClick={() => setOpenLightbox(true)} className={style.contactCtaTura}>
              <span>{checkParams === UserLanguage.hr ? 'Više o paketu' : 'More about package'}</span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default TureArticle;
