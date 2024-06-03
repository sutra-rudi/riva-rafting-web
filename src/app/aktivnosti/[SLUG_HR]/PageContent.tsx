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
        <h1 className={RecoletaBold.className}>{pageContentData?.['NASLOV AKTIVNOSTI HERO']}</h1>
        <AppButton content='Rezervirajte svoj termin' />
      </div>
    ),
  };

  return (
    <div className={styles.heroWrapp}>
      <PaperDividTop />
      <ParallaxBanner className={styles.aktivnostHero} layers={[background, headline]} />

      <div className={styles.masterContainer}>
        <PaperDividBot />
        <div className={styles.contentContainer}>
          <AktivnostGallery listaSlika={gallery} />

          <article className={styles.activityArticle}>
            <div className={styles.articleTopContent}>
              <h6>{pageContentData?.NADNASLOV}</h6>
              <h2>{pageContentData?.NASLOV}</h2>
              <div className={styles.articleContentTextContainer}>
                {pageContentData?.TEKST.split('\n').map((t: any, i: any) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
              <div className={styles.articleButtonStack}>
                <AppButton content='Rezerviraj termin' />
                <AppButton content='Imaš pitanje?' />
              </div>
            </div>

            <div className={styles.articleDetails}>
              <div className={styles.articleBlock}>
                <h4 className={styles.articleBlockHeading}>{pageContentData?.['OSNOVNE INFORMACIJE O TURI']}</h4>
                <div className={styles.articleInfo}>
                  <ul>
                    <li>
                      <span className={styles.boldSpan}>DESTINACIJA:</span>
                      <span>{pageContentData?.['DESTINACIJA:']}</span>
                    </li>
                    <li>
                      <span className={styles.boldSpan}>CIJENA:</span>
                      <span>{pageContentData?.['CIJENA:']}</span>
                    </li>
                    <li>
                      <span className={styles.boldSpan}>AKTIVNOST:</span>
                      <span>{pageContentData?.['AKTIVNOST:']}</span>
                    </li>
                    <li>
                      <span className={styles.boldSpan}>MINIMALNA DOB:</span>
                      <span>{pageContentData?.['MINIMALNA_DOB:']}</span>
                    </li>
                    <li>
                      <span className={styles.boldSpan}>ZAHTJEVNOST:</span>
                      <span>{pageContentData?.['ZAHTJEVNOST:']}</span>
                    </li>
                    <li>
                      <span className={styles.boldSpan}>VELIČINA GRUPE:</span>
                      <span>{pageContentData?.['VELIČINA_GRUPE:']}</span>
                    </li>
                    <li>
                      <span className={styles.boldSpan}>TRAJANJE:</span>
                      <span>{pageContentData?.['TRAJANJE:']}</span>
                    </li>
                    {pageContentData?.['DULJINA:'] !== '' && (
                      <li>
                        <span className={styles.boldSpan}>DULJINA:</span>
                        <span>{pageContentData?.['DULJINA:']}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className={styles.articleBlock}>
                <div className={styles.articleBlockHeading}>
                  <h4>{pageContentData?.['NASLOV: PLAN TURE']}</h4>
                </div>

                <div className={styles.articleInfo}>
                  <ul>
                    {pageContentData?.['Sadržaj bulleti'].split('\n').map((str: string, index: number) => (
                      <li key={index}>{str}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.articleBlock}>
                <div className={styles.articleBlockHeading}>
                  <h4>{pageContentData?.['NASLOV: Uzeti sa sobom']}</h4>
                </div>

                <div className={styles.articleInfo}>
                  <div className={styles.articleInfoWithHeading}>
                    <p>OBAVEZNO:</p>
                    <ul>{parseBulletPoints(pageContentData?.OBAVEZNO as string)}</ul>
                  </div>

                  <div className={styles.articleInfoWithHeading}>
                    <p>PO ŽELJI:</p>
                    <ul>{parseBulletPoints(pageContentData?.['PO ŽELJI'] as string)}</ul>
                  </div>

                  <div className={styles.articleInfoWithHeading}>
                    <p>SAVJETUJEMO:</p>
                    <ul>{parseBulletPoints(pageContentData?.['Sadržaj ‘Savjetujemo’'] as string)}</ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
