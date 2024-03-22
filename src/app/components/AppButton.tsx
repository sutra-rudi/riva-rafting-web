import React from 'react';
import styles from '../styles/appButton.module.scss';
interface ButtonProps {
  content: string;
  isNav?: boolean;
  isHero?: boolean;
}

const AppButton = (props: ButtonProps) => {
  const { content, isNav = false, isHero = false } = props;

  return (
    <button
      className={
        isNav
          ? `${styles.appButton} ${styles.navButton}`
          : isHero
          ? `${styles.appButton} ${styles.heroButton}`
          : ` : ${styles.appButton}`
      }
    >
      {content}
    </button>
  );
};

export default AppButton;
