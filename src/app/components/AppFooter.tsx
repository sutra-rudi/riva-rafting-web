import React from 'react';
import styles from '../styles/appFooter.module.scss';
import footerBg from '../img/footer-bg-main.png';
import appLogo from '../img/APP-LOGO-FOOTER.svg';
import Image from 'next/image';
import facebookIcon from '../img/FACEBOOK-FOOTER.svg';
import instaIcon from '../img/INSTA-FOOTER.svg';
import teleIcon from '../img/TELE-FOOTER.svg';

import PaperDividTop from './PaperDividTop';
const AppFooter = () => {
  return (
    <footer className={styles.appFooter}>
      <PaperDividTop />

      <div className={styles.socialFooterStack}>
        <p>Zapratite nas:</p>
        <div className={styles.socialIconStack}>
          <Image src={facebookIcon} alt='icon' width={32} height={32} />
          <Image src={instaIcon} alt='icon' width={32} height={32} />
          <Image src={teleIcon} alt='icon' width={32} height={32} />
        </div>
      </div>

      <Image fill src={footerBg} alt='footerBackground' />
      <div className={styles.contentContainer}>
        <div className={styles.appLogoContainer}>
          <Image fill src={appLogo} alt='app logo' />
        </div>

        <div className={styles.footerBlock}>
          <p>Aktivnosti koje nudimo</p>
          <div className={styles.linkStack}>
            <a href=''>Rafting tura</a>
            <a href=''>Špiljarenje</a>
            <a href=''>Vožnja bicikla</a>
            <a href=''>Jahanje</a>
            <a href=''>Pješačka tura</a>
            <a href=''>Jeep safari</a>
            <a href=''>Kayak ture</a>
            <a href=''>Stand up paddle</a>
          </div>
        </div>
        <div className={styles.footerBlock}>
          <p>Linkovi</p>
          <div className={styles.linkStack}>
            <a href=''>O nama</a>
            <a href=''>Kontakt forma</a>
            <a href=''>FAQ</a>
            <a href=''>Obrovački kraj</a>
            <a href=''>Zrmanja Camping village</a>
            <a href=''>Mičanovi dvori</a>
          </div>
        </div>

        <div className={styles.footerBlock}>
          <p>Kontaktirajte nas</p>
          <div className={styles.linkStack}>
            <a href=''>6 Obala hr. Čas. Senada Ž., Obrovac, Croatia</a>
            <a href=''>info@riva-rafting-centar.hr</a>
            <a href=''>023 689 920</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
