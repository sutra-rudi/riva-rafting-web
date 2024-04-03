import Image from 'next/image';
import React from 'react';
import papirDivider from '../img/PAPIR-RAZMAK.svg';
import styles from '../styles/paperDivider.module.scss';

const PaperDividTop = () => {
  return (
    <div className={styles.paperTop}>
      <Image src={papirDivider} fill alt='deco' priority />
    </div>
  );
};

export default PaperDividTop;
