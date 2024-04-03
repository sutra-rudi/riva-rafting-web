import Image from 'next/image';
import React from 'react';
import styles from '../styles/paperDivider.module.scss';
import papirDivider from '../img/PAPIR-RAZMAK-ALT.svg';
const PaperDividBotAlt = () => {
  return (
    <div className={styles.paperBottomAlt}>
      <Image src={papirDivider} fill alt='deco' priority />
    </div>
  );
};

export default PaperDividBotAlt;
