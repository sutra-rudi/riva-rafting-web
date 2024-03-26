import Link from 'next/link';
import React from 'react';
import AppLogo from '../img/APP_LOGO.png';
import svgAppLogo from '../img/RIVA-RAFTING-LOGO-SVG.svg';
import Image from 'next/image';
const navLinksOne: string[] = ['O nama', 'Aktivnosti', 'Kontakt'];
const navLinksTwo: string[] = ['Mićanovi Dvori', 'Zrmanja Camping Vilagge'];
import styles from '../styles/appHeader.module.scss';
import AppButton from './AppButton';
import LanguageSwitch from './LanguageSwitch';
const AppHeader = () => {
  const HeaderBaseOne = () => {
    return (
      <div className={styles.navLeft}>
        {navLinksOne.map((link) => (
          <Link key={link} href={'/aktivnosti'}>
            {link}
          </Link>
        ))}
      </div>
    );
  };

  const HeaderBaseTwo = () => {
    return (
      <div className={styles.navRight}>
        {navLinksTwo.map((link) => (
          <Link key={link} href={'#'}>
            {link}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <nav className={styles.navParent}>
      <div className={styles.navPromoTrack}>
        <span>TRIP ADVISOR</span>
        <span>|</span>
        <a href='tel:+0038523689920'>+385 23 689 920</a>
        <span>|</span>
        <a href='mailto:info@riva-rafting-centar.hr'>info@riva-rafting-centar.hr</a>
      </div>
      <div className={styles.navMaster}>
        <div className={styles.navInnerParent}>
          <div className={styles.navLeftParent}>
            <Link href={'/'}>
              <Image src={svgAppLogo} alt='app logo' />
            </Link>
            <HeaderBaseOne />
          </div>
          <span>|</span>

          <HeaderBaseTwo />
        </div>
        <div className={styles.navInnerParent}>
          <AppButton isNav content='BOOK YOUR ADVENTURE' />
          <LanguageSwitch />
          <div className={styles.mobileButtonTemp}>
            <div className=''></div>
            <div className=''></div>
            <div className=''></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
