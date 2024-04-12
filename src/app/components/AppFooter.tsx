'use client';

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
import { useAppContext } from '../contexts/store';
const AppFooter = () => {
  const {
    state: { userLang },
  } = useAppContext();

  const en_links = [
    { title: 'Hiking tour', href: '/activities/walking-tour' },
    { title: 'Kayak tours', href: '/activities/kayak' },
    { title: 'Rafting tour', href: '/activities/Rafting-on-Zrmanja' },
    { title: 'Kayaking from Zrmanja to the Adriatic Sea', href: '/activities/Kayak-River-to-the-sea' },
    { title: 'Stand Up Paddle', href: '/activities/Stand-Up-Paddle-Zrmanja' },
    { title: 'Boat Tour', href: '/activities/Zrmanja-by-boat' },
    { title: 'Jeep Safari', href: '/activities/Velebit-Jeep-safari' },
    { title: 'Caving', href: '/activities/Cave-Modric' },
    { title: 'Horseback Riding', href: '/activities/horses' },
    { title: 'Cycling', href: '/activities/Bike-riding' },
  ];

  const hr_links = [
    { title: 'Pješačka Tura', href: '/aktivnosti/pjesacke-ture' },
    { title: 'Kayak Ture', href: '/aktivnosti/kayak-tura' },
    { title: 'Rafting Tura', href: '/aktivnosti/Rafting' },
    { title: 'Kayak po Zrmanji do Jadranskog mora', href: '/aktivnosti/Kayak-Zrmanja-More' },
    { title: 'Stand Up Paddle', href: '/aktivnosti/Stand-Up-Paddle' },
    { title: 'Vožnja Brodom', href: '/aktivnosti/Zrmanja-brodom' },
    { title: 'Jeep Safari', href: '/aktivnosti/Jeep-safari' },
    { title: 'Špiljarenje', href: '/aktivnosti/Spiljarenje' },
    { title: 'Jahanje', href: '/aktivnosti/Jahanje' },
    { title: 'Vožnja Bicikla', href: '/aktivnosti/Bicik' },
  ];

  const parseByLang = () => {};

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

      <Image fill src={footerBg} alt='footerBackground' placeholder='blur' />

      <div className={styles.footerMaster}>
        <div className={styles.appLogoContainer}>
          <Image fill src={appLogo} alt='app logo' />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.footerBlock}>
            <p>Aktivnosti koje nudimo</p>
            <div className={styles.activityStack}>
              <ul>
                {userLang === 'hr'
                  ? hr_links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>{link.title}</a>
                      </li>
                    ))
                  : en_links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>{link.title}</a>
                      </li>
                    ))}
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
              <a href='https://www.google.com/maps/dir//Obala+hr.+Čas.+Senada+Ž.+6,+23450,+Obrovac/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4761c76f06da2a03:0x8abf7d8f6eb1b3c1?sa=X&ved=1t:707&ictx=111'>{`6 Obala hr. Čas. Senada Ž.,\nObrovac, Croatia`}</a>
              <a href='mailto:info@riva-rafting-centar.hr'>info@riva-rafting-centar.hr</a>
              <a href='tel:+38523689920'>023 689 920</a>
            </div>
          </div>

          <div className={styles.footerDislaimerTrack}>
            <div className={styles.disclaimerSig}>
              <div className={styles.disclaimerSigIn}>
                <span>
                  <a href='/uvjeti-koristenja'>Terms & Conditions</a>
                </span>
                <span>|</span>
                <span>
                  <a href='/pravila-privatnosti'>Privacy Policy</a>
                </span>
                <span>|</span>
                <span>
                  <a href='/podatci-o-tvrtki'>Company info</a>
                </span>
              </div>
              <div className={styles.disclaimerSigIn}>
                <span>© 2024 All Rights Reserved</span>
                <span>|</span>
                <span>
                  <a href='https://www.sutra.hr/'>WEB DESIGN SUTRA.HR</a>
                </span>
              </div>
            </div>

            <div className={styles.disclaimerSocial}>
              <span>Follow us:</span>
              <div className={styles.disclaimerSocialIcons}>
                <a href='https://www.facebook.com/RivaRaftingCentar/'>
                  <Image src={facebookIcon} alt='icon' width={32} height={32} />
                </a>
                <a href='https://www.instagram.com/riva_rafting_centar/ '>
                  <Image src={instaIcon} alt='icon' width={32} height={32} />
                </a>
                <a href='mailto:info@riva-rafting-centar.hr'>
                  <Image src={teleIcon} alt='icon' width={32} height={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
