import React from 'react';
import styles from '../styles/appButton.module.scss';
interface ButtonProps {
  content: string;
  isNav?: boolean;
  isHero?: boolean;
  isAbout?: boolean;
}

const AppButton = (props: ButtonProps) => {
  const { content, isNav = false, isHero = false, isAbout } = props;

  return (
    <button
      className={
        isNav
          ? `${styles.appButton} ${styles.navButton}`
          : isHero
          ? `${styles.appButton} ${styles.heroButton}`
          : isAbout
          ? `${styles.appButton} ${styles.aboutButton} `
          : ` ${styles.appButton}`
      }
    >
      {content}
    </button>
  );
};

export default AppButton;
