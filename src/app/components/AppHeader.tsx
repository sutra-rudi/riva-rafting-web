import Link from 'next/link';
import React from 'react';
import AppLogo from '../img/APP_LOGO.png';
import Image from 'next/image';
const navLinksOne: string[] = ['O nama', 'Aktivnosti', 'Kontakt'];
const navLinksTwo: string[] = ['Mićanovi Dvori', 'Zrmanja Camping Vilagge'];
import styles from '../styles/appHeader.module.scss';
import AppButton from './AppButton';
const AppHeader = () => {
  const HeaderBaseOne = () => {
    return (
      <div className={styles.navLeft}>
        {navLinksOne.map((link) => (
          <Link key={link} href={'#'}>
            {link}
          </Link>
        ))}
      </div>
    );
  };

  const HeaderBaseTwo = () => {
    return (
      <div>
        {navLinksTwo.map((link) => (
          <Link key={link} href={'#'}>
            {link}
          </Link>
        ))}
      </div>
    );
  };

  {
    /* <span className='separator'>|</span>; */
  }
  return (
    <nav className={styles.navParent}>
      <div className={styles.navLeftParent}>
        <Image src={AppLogo} alt='app logo' />
        <HeaderBaseOne />
      </div>

      <HeaderBaseTwo />
      <AppButton isNav content='BOOK YOUR ADVENTURE' />
    </nav>
  );
};

export default AppHeader;
