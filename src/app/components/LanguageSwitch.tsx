'use client';

import React from 'react';
import styles from '../styles/langSwitcher.module.scss';
import { useAppContext } from '../contexts/store';
import { ActionTypes } from '../types/actionTypes';
import { UserLanguage } from '../types/appState';
import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitch = () => {
  const {
    state: { userLang },
    dispatch,
  } = useAppContext();

  const router = useRouter();
  const pathname = usePathname();

  const handleLangSwitch = (payloadF: UserLanguage) => {
    dispatch({ type: ActionTypes.SET_USER_LANG, payload: payloadF });

    if (pathname !== '/') {
      router.push('/');
    }
  };

  return (
    <div className={styles.langSwitcherParent}>
      <div
        onClick={() => handleLangSwitch(UserLanguage.hr)}
        className={`${userLang === 'hr' ? `${styles.croa} ${styles.active}` : `${styles.croa}`} `}
      >
        HR
      </div>
      <div className={styles.separator}>/</div>
      <div
        onClick={() => handleLangSwitch(UserLanguage.en)}
        className={`${userLang === 'en' ? `${styles.engl} ${styles.active}` : `${styles.engl}`} `}
      >
        ENG
      </div>
    </div>
  );
};

export default LanguageSwitch;
