'use client';

import React from 'react';
import styles from '../styles/langSwitcher.module.scss';
const LanguageSwitch = () => {
  const [isActiveLang, setIsActiveLang] = React.useState<Record<string, boolean>>({
    croatianLang: true,
    englishLang: false,
  });

  const handleLangSwitch = (languageStr: string) =>
    setIsActiveLang((prev) => {
      const newState = Object.fromEntries(Object.keys(prev).map((key) => [key, false]));
      newState[languageStr] = true;
      return newState;
    });

  return (
    <div className={styles.langSwitcherParent}>
      <div
        onClick={() => handleLangSwitch('croatianLang')}
        className={`${isActiveLang.croatianLang ? `${styles.croa} ${styles.active}` : `${styles.croa}`} `}
      >
        HR
      </div>
      <div className={styles.separator}>/</div>
      <div
        onClick={() => handleLangSwitch('englishLang')}
        className={`${isActiveLang.englishLang ? `${styles.engl} ${styles.active}` : `${styles.engl}`} `}
      >
        ENG
      </div>
    </div>
  );
};

export default LanguageSwitch;
