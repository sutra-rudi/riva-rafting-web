'use client';

import Link from 'next/link';
import React from 'react';
import svgAppLogo from '../img/logos/riva-logo.svg';
import Image from 'next/image';
import styles from '../styles/appHeader.module.scss';
import LanguageSwitch from './LanguageSwitch';
import { Spin as Hamburger } from 'hamburger-react';
import instaIcon from '../img/icons/MOBILE-MENU-SOCIAL-2.svg';
import facebookIcon from '../img/icons/MOBILE-MENU-SOCIAL-1.svg';
import teleIcon from '../img/icons/MOBILE-MENU-SOCIAL-3.svg';

import mobilePapir from '../img/globals/MOBILE-PAPIR.svg';
import { useAppContext } from '../contexts/store';
import { useRouter, useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

const AppHeader = () => {
  const {
    state: { userLang },
  } = useAppContext();

  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (userLang === 'hr' ? hrString : enString),
    [userLang]
  );
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const [isActivitiesDropdown, setIsActivitiesDropdown] = React.useState<boolean>(false);

  const promoSekcijaDemoPodaci = [
    {
      title: userLang === 'hr' ? 'Rafting tura' : 'Rafting Tour',
      url:
        userLang === 'hr'
          ? `/aktivnosti/Rafting/?lang=${checkParams}`
          : `/activities/Rafting-on-Zrmanja/?lang=${checkParams}`,
    },
    {
      title: userLang === 'hr' ? 'Špiljarenje' : 'Caving',
      url:
        userLang === 'hr'
          ? `/aktivnosti/Spiljarenje/?lang=${checkParams}`
          : `/activities/Cave-Modric/?lang=${checkParams}`,
    },
    {
      title: userLang === 'hr' ? 'Jahanje' : 'Horseback Riding',
      url: userLang === 'hr' ? `/aktivnosti/Jahanje/?lang=${checkParams}` : `/activities/horses/?lang=${checkParams}`,
    },
    {
      title: userLang === 'hr' ? 'Vožnja bicikla' : 'Cycling',
      url:
        userLang === 'hr' ? `/aktivnosti/Bicik/?lang=${checkParams}` : `/activities/Bike-riding/?lang=${checkParams}`,
    },
    {
      title: userLang === 'hr' ? 'Kajak po Zrmanji do Jadranskog mora' : 'Kayaking from Zrmanja to the Adriatic Sea',
      url:
        userLang === 'hr'
          ? `/aktivnosti/Kayak-Zrmanja-More/?lang=${checkParams}`
          : `/activities/Kayak-River-to-the-sea/?lang=${checkParams}`,
    },
    {
      title: userLang === 'hr' ? 'Stand up paddle' : 'Stand Up Paddle',
      url:
        userLang === 'hr'
          ? `/aktivnosti/Stand-Up-Paddle/?lang=${checkParams}`
          : `/activities/Stand-Up-Paddle-Zrmanja/?lang=${checkParams}`,
    },
    {
      title: userLang === 'hr' ? 'Vožnja brodom' : 'Boat Tour',
      url:
        userLang === 'hr'
          ? `/aktivnosti/Zrmanja-brodom/?lang=${checkParams}`
          : `/activities/Zrmanja-by-boat/?lang=${checkParams}`,
    },
    {
      title: userLang === 'hr' ? 'Pješačka tura' : 'Hiking Tour',
      url:
        userLang === 'hr'
          ? `/aktivnosti/Pjesacke-ture/?lang=${checkParams}`
          : `/activities/walking-tour/?lang=${checkParams}`,
    },
    {
      title: userLang === 'hr' ? 'Jeep safari' : 'Jeep Safari',
      url:
        userLang === 'hr'
          ? `/aktivnosti/Jeep-safari/?lang=${checkParams}`
          : `/activities/Velebit-Jeep-safari/?lang=${checkParams}`,
    },
    {
      title: userLang === 'hr' ? 'Kayak ture' : 'Kayak Tours',
      url: userLang === 'hr' ? `/aktivnosti/kayak-tura/?lang=${checkParams}` : `/activities/kayak/?lang=${checkParams}`,
    },
  ];

  const navLinksOne = [
    {
      text: parseByLang(`O nama`, `About us`),
      href: parseByLang(`/o-nama/?lang=${checkParams}`, `/about-us/?lang=${checkParams}`),
    },
    {
      text: parseByLang('Aktivnosti', 'Activities'),
      href: parseByLang(`/aktivnosti/?lang=${checkParams}`, `/activities/?lang=${checkParams}`),
    },
    { text: parseByLang('Kontakt', 'Contact'), href: `/kontakt/?lang=${checkParams}` },
    {
      text: parseByLang('Što posjetiti?', 'What to visit?'),
      href: parseByLang(`/obrovacki-kraj/?lang=${checkParams}`, `/obrovacki-kraj/?lang=${checkParams}`),
    },
  ];
  const navLinksTwo = [
    { text: 'Mićanovi Dvori', href: '/' },
    { text: 'Zrmanja Camping Vilagge', href: '/' },
    // { text: 'Što posjetiti u okolici?', href: '/obrovacki-kraj' },
  ];

  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);

  const handleNavControl = () => {
    if (!isNavOpen) {
      document.documentElement.classList.add('overflow-hidden');
      setIsNavOpen(true);
    } else {
      document.documentElement.classList.remove('overflow-hidden');
      setIsNavOpen(false);
    }
  };

  React.useEffect(() => {
    document.documentElement.classList.remove('overflow-hidden');
  }, []);

  const router = useRouter();

  const handleCustomPush = (url: string) => router.push(url);

  const HeaderBaseOne = () => {
    return (
      <div className={styles.navLeft}>
        {navLinksOne.map((link, index) => {
          if (index === 1) {
            return (
              <div className={styles.bigParent} key={link.text}>
                <Link
                  href={link.href}
                  className={styles.customNohover}
                  onMouseEnter={() => setIsActivitiesDropdown(true)}
                >
                  <span>{link.text}</span>
                </Link>

                <span
                  className={`${styles.navCustomLinks} ${isActivitiesDropdown ? styles.show : styles.hide}`}
                  onMouseLeave={() => setIsActivitiesDropdown(false)}
                >
                  {promoSekcijaDemoPodaci.map((aktiv) => (
                    <span onClick={() => handleCustomPush(aktiv.url)} key={aktiv.title}>
                      {aktiv.title}
                    </span>
                  ))}
                </span>
              </div>
            );
          }
          return (
            <Link key={link.text} href={link.href}>
              {link.text}
            </Link>
          );
        })}
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

  const parseLink =
    checkParams === UserLanguage.hr ? `/kontakt?lang=${UserLanguage.hr}` : `/kontakt?lang=${UserLanguage.en}`;

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
        <Link className={styles.noEffectLogo} href={'/'}>
          <Image src={svgAppLogo} alt='app logo' />
        </Link>
        <div className={styles.navParentMaster}>
          <div className={styles.navInnerParent}>
            <div className={styles.navLeftParent}>
              <HeaderBaseOne />
            </div>
            <span className={styles.headerLinkDivid}>|</span>

            <HeaderBaseTwo />
          </div>
          <div className={styles.navInnerParent}>
            <Link className={styles.navCta} href={parseLink}>
              <span>{parseByLang('REZERVIRAJ SVOJ BORAVAK', 'BOOK YOUR STAY')}</span>
            </Link>
            <div className={styles.navInnerParentLang}>
              <LanguageSwitch />
            </div>
            <Hamburger toggled={isNavOpen} onToggle={handleNavControl} color='#2f2a32' />
          </div>
        </div>
      </div>

      {/* MOBILE */}

      <div
        className={
          isNavOpen ? `${styles.mobileNavParent}` : `${styles.mobileNavParent} ${styles.mobileNavParentClosed}`
        }
      >
        <div className={styles.mobileNavParentInner}>
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

          <div className={styles.socialBlock}>
            <div className={styles.socialBlockImage}>
              <Image width={20} height={20} alt='icon' src={facebookIcon} />
            </div>
            <div className={styles.socialBlockImage}>
              <Image width={20} height={20} alt='icon' src={instaIcon} />
            </div>
            <div className={styles.socialBlockImage}>
              <Image width={20} height={20} alt='icon' src={teleIcon} />
            </div>
          </div>

          <Image className={styles.mobilePapir} alt='' src={mobilePapir} />
        </div>
      </div>

      {/* MOBILE */}
    </nav>
  );
};

export default AppHeader;
