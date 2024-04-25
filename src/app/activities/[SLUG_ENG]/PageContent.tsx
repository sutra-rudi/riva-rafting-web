'use client';

import React from 'react';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import PaperDividTop from '@/app/components/PaperDividTop';
import Image, { StaticImageData } from 'next/image';
import styles from '../../styles/aktivnost.module.scss';
import localFont from 'next/font/local';
import AktivnostGallery from './AktivnostGallery';
import AppButton from '@/app/components/AppButton';
import PaperDividBot from '@/app/components/PaperDividBot';

const RecoletaBold = localFont({
  src: [{ path: '../../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});
const PageContent = ({
  pageContentData,
  hero,
  gallery,
}: {
  pageContentData: any;
  hero: StaticImageData;
  gallery: StaticImageData[];
}) => {
  const parseBulletPoints = (strBlock: string) =>
    strBlock.split('\n').map((item, index) => <li key={index}>{item}</li>);

  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: <Image fill src={hero ?? ''} alt='hero' placeholder='blur' />,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 0.85],
    //     opacity: [0.15, 0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroHeader}>
        <h1 className={RecoletaBold.className}>{pageContentData?.NASLOV_AKTIVNOSTI_HERO_HR}</h1>
        <AppButton content='Book now' />
      </div>
    ),
  };

  return typeof window !== 'undefined' && window !== null ? (
    <>
      <PaperDividTop />
      <ParallaxBanner className={styles.aktivnostHero} layers={[background, headline]} />

      <div className={styles.masterContainer}>
        <PaperDividBot />
        <div className={styles.contentContainer}>
          <AktivnostGallery listaSlika={gallery} />

          <article className={styles.activityArticle}>
            <div className={styles.articleTopContent}>
              <h6>{pageContentData?.['____PRAZNO__5']}</h6>
              <h2>{pageContentData?.ENG_NASLOV}</h2>
              <div className={styles.articleContentTextContainer}>
                {pageContentData?.ENG_TEKST.split('\n').map((t: any, i: any) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
              <div className={styles.articleButtonStack}>
                <AppButton content='Book now' />
                <AppButton content='Have any questions?' />
              </div>
            </div>

            <div className={styles.articleDetails}>
              <div className={styles.articleBlock}>
                <h4 className={styles.articleBlockHeading}>{pageContentData?.OSNOVNE_INFORMACIJE_O_TURI}</h4>
                <div className={styles.articleInfo}>
                  <ul>
                    <li>
                      <span className={styles.boldSpan}>DESTINATION:</span>
                      <span>{pageContentData?.['ENG_DESTINACIJA:']}</span>
                    </li>
                    <li>
                      <span className={styles.boldSpan}>PRICE:</span>
                      <span>{pageContentData?.['ENG_CIJENA:']}</span>
                    </li>
                    <li>
                      <span className={styles.boldSpan}>ACTIVITY:</span>
                      <span>{pageContentData?.['ENG_AKTIVNOST:']}</span>
                    </li>
                    <li>
                      <span className={styles.boldSpan}>MINUMUM AGE:</span>
                      <span>{pageContentData?.['ENG_MINIMALNA_DOB:']}</span>
                    </li>
                    <li>
                      <span className={styles.boldSpan}>DIFFICULTY:</span>
                      <span>{pageContentData?.['ENG_ZAHTJEVNOST:']}</span>
                    </li>
                    <li>
                      <span className={styles.boldSpan}>GROUP SIZE:</span>
                      <span>{pageContentData?.['ENG_VELIČINA_GRUPE:']}</span>
                    </li>
                    <li>
                      <span className={styles.boldSpan}>DURATION:</span>
                      <span>{pageContentData?.['ENG_TRAJANJE:']}</span>
                    </li>
                    {pageContentData?.['ENG_DULJINA:'] !== '' && (
                      <li>
                        <span className={styles.boldSpan}>LENGTH:</span>
                        <span>{pageContentData?.['ENG_DULJINA:']}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className={styles.articleBlock}>
                <div className={styles.articleBlockHeading}>
                  <h4>{pageContentData?.['ENG_NASLOV:_ENG_PLAN_TURE']}</h4>
                </div>

                <div className={styles.articleInfo}>
                  <ul>
                    {pageContentData?.['ENG_Sadržaj_bulleti'].split('\n').map((str: string, index: number) => (
                      <li key={index}>{str}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.articleBlock}>
                <div className={styles.articleBlockHeading}>
                  <h4>{pageContentData?.['ENG_Uzeti_sa_sobom']}</h4>
                </div>

                <div className={styles.articleInfo}>
                  <div className={styles.articleInfoWithHeading}>
                    <p>OBAVEZNO:</p>
                    <ul>{parseBulletPoints(pageContentData?.['ENG_Sadržaj‘Obavezno’'] as string)}</ul>
                  </div>

                  <div className={styles.articleInfoWithHeading}>
                    <p>PO ŽELJI:</p>
                    <ul>{parseBulletPoints(pageContentData?.PO_ŽELJI as string)}</ul>
                  </div>

                  <div className={styles.articleInfoWithHeading}>
                    <p>{pageContentData?.['ENG_SAVJETUJEMO']}</p>
                    <ul>{parseBulletPoints(pageContentData?.['ENG_Sadržaj‘Savjetujemo’'] as string)}</ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  ) : null;
};

export default PageContent;
