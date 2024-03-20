import React from 'react';
import styles from '../styles/langSwitcher.module.scss';
const LanguageSwitch = () => {
  return (
    <div className={styles.langSwitcherParent}>
      <div className=''>HR</div>
      <div className=''>/</div>
      <div className=''>ENG</div>
    </div>
  );
};

export default LanguageSwitch;
