import React from 'react';
import styles from '../styles/najpopularnijeTure.module.scss';
import imgUrlJedan from '../img/najpopularnije1.png';
import imgUrlDva from '../img/najpopularnije2.png';
import imgUrlTri from '../img/najpopularnije3.png';
import NajpopularnijeTureCard from '../components/NajpopularnijeTureCard';
import sectionImage from '../img/najpopularnije-bg.png';
import Image from 'next/image';
import PaperDividBotAlt from '../components/PaperDivitBotAlt';

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
  return (
    <section className={styles.najpopularnijeTure}>
      <h2 className={styles.sectionHeading}>NAŠE NAJPOPULARNIJE TURE:</h2>
      <div className={styles.najpopularnijeTureContainer}>
        {staticDemoContent.map((contentData, index) => {
          return <NajpopularnijeTureCard key={index} {...contentData} />;
        })}
      </div>
      {props.isLanding && (
        <div className={styles.imageHolder}>
          <div className={styles.gradientImageOverlay}>
            <h2>Sviđa ti se što vidiš? Bookiraj svoju avanturu na +385 23 689 920 ili na info@riva-rafting.hr</h2>
          </div>
          <Image src={sectionImage} alt='deco image' fill />
          <PaperDividBotAlt />
        </div>
      )}
    </section>
  );
};

export default NajpopularnijeTure;
