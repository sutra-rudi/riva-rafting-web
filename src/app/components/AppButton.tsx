import React from 'react';
import styles from '../styles/appButton.module.scss';
import Image from 'next/image';
import strelicaDesno from '../img/strelica-desno-botun.svg';

interface ButtonProps {
  content: string;
  isNav?: boolean;
  isHero?: boolean;
  isAbout?: boolean;
  isSecondary?: boolean;
}

const AppButton = ({ content, isNav = false, isHero = false, isAbout = false, isSecondary = false }: ButtonProps) => {
  const buttonClassNames = isNav
    ? `${styles.appButton} ${styles.navButton}`
    : isHero && isSecondary
    ? `${styles.appButton} ${styles.secondaryButton} ${styles.heroButton}`
    : isHero
    ? `${styles.appButton} ${styles.heroButton}`
    : isAbout && isSecondary
    ? `${styles.appButton} ${styles.secondaryButton} ${styles.aboutButton}`
    : isAbout
    ? `${styles.appButton} ${styles.aboutButton}`
    : isSecondary
    ? `${styles.appButton} ${styles.secondaryButton}`
    : `${styles.appButton}`;

  return (
    <button className={buttonClassNames}>
      <span>{content}</span>
      {isAbout && <Image width={20} height={20} alt='icon img button' src={strelicaDesno} />}
    </button>
  );
};

export default AppButton;
