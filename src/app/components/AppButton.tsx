import React from 'react';
import styles from '../styles/appButton.module.scss';
interface ButtonProps {
  content: string;
  isNav: boolean;
}

const AppButton = (props: ButtonProps) => {
  const { content, isNav } = props;

  return (
    <button className={isNav ? `${styles.appButton} ${styles.navButton}` : ` : ${styles.appButton}`}>{content}</button>
  );
};

export default AppButton;
