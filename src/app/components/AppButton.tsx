import React from 'react';
import styles from '../styles/appButton.module.scss';
interface ButtonProps {
  content: string;
  isNav?: boolean;
  isHero?: boolean;
  isAbout?: boolean;
  isSecondary?: boolean;
}

const AppButton = (props: ButtonProps) => {
  const { content, isNav = false, isHero = false, isAbout = false, isSecondary = false } = props;

  return (
    <button
      className={
        isNav
          ? `${styles.appButton} ${styles.navButton}`
          : isHero
          ? `${styles.appButton} ${styles.heroButton}`
          : isAbout && isSecondary
          ? `${styles.appButton} ${styles.secondaryButton} ${styles.aboutButton} `
          : isAbout
          ? `${styles.appButton} ${styles.aboutButton}`
          : ` ${styles.appButton}`
      }
    >
      {content}
    </button>
  );
};

export default AppButton;
