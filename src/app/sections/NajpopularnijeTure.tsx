'use client';

import React from 'react';
import styles from '../styles/najpopularnijeTure.module.scss';
import imgUrlJedan from '../img/najpopularnije1.png';
import imgUrlDva from '../img/najpopularnije2.png';
import imgUrlTri from '../img/najpopularnije3.png';
import NajpopularnijeTureCard from '../components/NajpopularnijeTureCard';
import sectionImage from '../img/najpopularnije-bg.png';
import Image from 'next/image';
import PaperDividBotAlt from '../components/PaperDivitBotAlt';
import { Parallax } from 'react-scroll-parallax';
import ferlauf from '../img/FERLAUFVELEBIT.svg';
import { Roboto_Condensed } from 'next/font/google';

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const RobotoCondensed = Roboto_Condensed({ weight: '700', subsets: ['latin'] });

const staticDemoContent = [
  {
    imageUrl: imgUrlJedan,
    content:
      'Istraži donji tok rijeke zrmanje od grada obrovca sve do Novigradskog mora. Tura traje 3 sata i posjetitelji ostaju očarani prekrasnim kanjonom..',
    duration: '3h',
    adrenaline: '5',
  },
  {
    imageUrl: imgUrlDva,
    content:
      'Istraži donji tok rijeke zrmanje od grada obrovca sve do Novigradskog mora. Tura traje 3 sata i posjetitelji ostaju očarani prekrasnim kanjonom..',
    duration: '3h',
    adrenaline: '5',
  },
  {
    imageUrl: imgUrlTri,
    content: 'Istraži donji tok rijeke zrmanje od grada obrovca sve do Novigradskog mora. Tura traje 3 sata i ',
    duration: '3h',
    adrenaline: '5',
  },

  {
    imageUrl: imgUrlTri,
    content: 'Istraži donji tok rijeke zrmanje od grada obrovca sve do Novigradskog mora. Tura traje 3 sata i ',
    duration: '3h',
    adrenaline: '5',
  },
];

interface MostPopularTours {
  isLanding: boolean;
}

const NajpopularnijeTure = (props: MostPopularTours) => {
  const splideOptions: any = {
    perPage: 4,
    // type: 'loop',
    // drag: 'free',
    // snap: true,
    // gap: '1rem',
    focus: 'center',
    gap: '1rem',
    pagination: false,
    // height: '265px',
    arrows: false,
    breakpoints: {
      768: { perPage: 2.3 },
      1024: { perPage: 4 },
      1300: { perPage: 4 },
    },
  };

  return (
    <section className={styles.najpopularnijeTure}>
      <h2 className={styles.sectionHeading}>NAŠE NAJPOPULARNIJE TURE:</h2>

      <Splide className={styles.najpopularnijeTureContainer} options={splideOptions}>
        {staticDemoContent.map((contentData, index) => {
          return (
            <SplideSlide key={index} className={styles.swiperSlide}>
              <NajpopularnijeTureCard {...contentData} />
            </SplideSlide>
          );
        })}
      </Splide>

      {props.isLanding && (
        <div className={styles.imageHolder}>
          <div className={styles.ferlauf}>
            <Image src={ferlauf} fill alt='ferlauf' />
          </div>
          <div className={styles.gradientImageOverlay}>
            <h3 className={RobotoCondensed.className}>
              <Parallax speed={-5} endScroll={-150}>
                <span>Sviđa ti se što vidiš?</span>
                <span>
                  Bookiraj svoju avanturu na <a href='tel:+38523689920'>+385 23 689 920</a>
                </span>
                <span>
                  ili na <a href='mailto:info@riva-rafting.hr'>info@riva-rafting.hr</a>
                </span>
              </Parallax>
            </h3>
          </div>

          <Image src={sectionImage} alt='deco image' fill />

          <PaperDividBotAlt />
        </div>
      )}
    </section>
  );
};

export default NajpopularnijeTure;
