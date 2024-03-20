import React from 'react';
import styles from '../styles/appButton.module.scss';
interface ButtonProps {
  content: string;
}

const AppButton = (props: ButtonProps) => {
  const { content } = props;

  return <button className={styles.appButton}>{content}</button>;
};

export default AppButton;
