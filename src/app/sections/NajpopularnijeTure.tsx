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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Roboto_Condensed } from 'next/font/google';

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
      'Istraži donji tok rijeke zrmanje od grada obrovca sve do Novigradskog mora. Tura traje 3 sata i posjetitelji ostaju očarani prekrasnim kanjonom..posjetitelji ostaju očarani',
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
  const settings = {
    dots: false,
    // speed: 1500,
    slidesToShow: 4.1,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 3000,
    cssEase: 'linear',
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.1,
          // slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.1,
          // slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.1,
          // slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.najpopularnijeTure}>
      <h2 className={styles.sectionHeading}>NAŠE NAJPOPULARNIJE TURE:</h2>
      {/* <div className={styles.najpopularnijeTureContainer}> */}
      <Slider className={styles.najpopularnijeTureContainer} {...settings}>
        {staticDemoContent.map((contentData, index) => {
          return (
            <div className={styles.swiperSlide} key={index}>
              <NajpopularnijeTureCard {...contentData} />
            </div>
          );
        })}
      </Slider>
      {/* </div> */}
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
                {/* {`Sviđa ti se što vidiš?\nBookiraj svoju avanturu na +385 23 689 920\nili na info@riva-rafting.hr`} */}
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
