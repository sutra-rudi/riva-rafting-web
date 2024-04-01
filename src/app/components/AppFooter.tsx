import React from 'react';
import styles from '../styles/appFooter.module.scss';
import footerBg from '../img/footer-bg-main.png';
import appLogo from '../img/FOOTER-LOGO-NEW.svg';
import Image from 'next/image';
import facebookIcon from '../img/FACEBOOK-FOOTER.svg';
import instaIcon from '../img/INSTA-FOOTER.svg';
import teleIcon from '../img/TELE-FOOTER.svg';
import footerArrow from '../img/FOOTER-LINK-ARROW.svg';

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

      <div className={styles.footerMaster}>
        <div className={styles.appLogoContainer}>
          <Image fill src={appLogo} alt='app logo' />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.footerBlock}>
            <p>Aktivnosti koje nudimo</p>
            <div className={styles.activityStack}>
              <ul>
                <li>
                  <a href=''>Rafting tura</a>
                </li>
                <li>
                  <a href=''>Špiljarenje</a>
                </li>
                <li>
                  <a href=''>Vožnja bicikla</a>
                </li>
                <li>
                  <a href=''>Jahanje</a>
                </li>
                <li>
                  <a href=''>Pješačka tura</a>
                </li>
                <li>
                  <a href=''>Jeep safari</a>
                </li>
                <li>
                  <a href=''>Kayak ture</a>
                </li>
                <li>
                  <a href=''>Stand up paddle</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBlock}>
            <p>Linkovi</p>
            <div className={styles.linkStack}>
              <a href=''>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>O nama</span>
              </a>
              <a href=''>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Kontakt forma</span>
              </a>
              <a href=''>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>FAQ</span>
              </a>
              <a href=''>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Obrovački kraj</span>
              </a>
              <a href=''>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Zrmanja Camping village</span>
              </a>
              <a href=''>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Mičanovi dvori</span>
              </a>
            </div>
          </div>

          <div className={styles.footerBlock}>
            <p>Kontaktirajte nas</p>
            <div className={styles.contactStack}>
              <a href=''>{`6 Obala hr. Čas. Senada Ž.,\nObrovac, Croatia`}</a>
              <a href=''>info@riva-rafting-centar.hr</a>
              <a href=''>023 689 920</a>
            </div>
          </div>

          <div className={styles.footerDislaimerTrack}>
            <div className={styles.disclaimerSig}>
              <div className={styles.disclaimerSigIn}>
                <span>Terms & Conditions</span>
                <span>|</span>
                <span>Privacy Policy</span>
                <span>|</span>
                <span>Company info</span>
              </div>
              <div className={styles.disclaimerSigIn}>
                <span>© 2024 All Rights Reserved</span>
                <span>|</span>
                <span>WEB DESIGN SUTRA.HR</span>
              </div>
            </div>

            <div className={styles.disclaimerSocial}>
              <span>Follow us:</span>
              <div className={styles.disclaimerSocialIcons}>
                <Image src={facebookIcon} alt='icon' width={32} height={32} />
                <Image src={instaIcon} alt='icon' width={32} height={32} />
                <Image src={teleIcon} alt='icon' width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
