'use client';

import Link from 'next/link';
import React from 'react';
import svgAppLogo from '../img/APP-LOGO-FOOTER.svg';
import Image from 'next/image';
const navLinksOne = [
  { text: 'O nama', href: '/o-nama' },
  { text: 'Aktivnosti', href: '/aktivnosti' },
  { text: 'Kontakt', href: '/kontakt' },
];
const navLinksTwo = [
  { text: 'Mićanovi Dvori', href: '/' },
  { text: 'Zrmanja Camping Vilagge', href: '/' },
];
import styles from '../styles/appHeader.module.scss';
import AppButton from './AppButton';
import LanguageSwitch from './LanguageSwitch';
import { Spin as Hamburger } from 'hamburger-react';
const AppHeader = () => {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);

  const handleNavControl = () => {
    setIsNavOpen(!isNavOpen);
  };

  const HeaderBaseOne = () => {
    return (
      <div className={styles.navLeft}>
        {navLinksOne.map((link) => (
          <Link key={link.text} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
    );
  };

  const HeaderBaseTwo = () => {
    return (
      <div className={styles.navRight}>
        {navLinksTwo.map((link) => (
          <Link key={link.text} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <nav className={styles.navParent}>
      <div className={`${styles.navPromoTrack} `}>
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
          <div className={styles.navInnerParentLang}>
            <LanguageSwitch />
          </div>
          <Hamburger toggled={isNavOpen} onToggle={handleNavControl} color='#2f476f' />
        </div>
      </div>

      {/* MOBILE */}

      <div
        className={
          isNavOpen ? `${styles.mobileNavParent}` : `${styles.mobileNavParent} ${styles.mobileNavParentClosed}`
        }
      >
        <div className={styles.langSwitchBlock}>
          <LanguageSwitch />
        </div>

        <div className={styles.mobileBlock}>
          {navLinksOne.map((link, index) => (
            <Link key={link.text} href={link.href}>
              {link.text}
            </Link>
          ))}
        </div>

        <div className={styles.mobileBlockSpace}></div>

        <div className={styles.mobileBlock}>
          {navLinksTwo.map((link, index) => (
            <Link key={link.text} href={link.href}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
      {/* MOBILE */}
    </nav>
  );
};

export default AppHeader;
