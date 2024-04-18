import Image from 'next/image';
import React from 'react';
import papirDivider from '../img/PAPIR-RAZMAK.svg';
import altPapirSivi from '../img/about-us-paper-bot.svg';
import styles from '../styles/paperDivider.module.scss';

interface PaperInterface {
  isAbout?: boolean;
}

const PaperDividTop = (props: PaperInterface) => {
  return (
    <div className={styles.paperTop}>
      {props.isAbout ? (
        <Image src={altPapirSivi} fill alt='deco' priority />
      ) : (
        <Image src={papirDivider} fill alt='deco' priority />
      )}
    </div>
  );
};

export default PaperDividTop;
