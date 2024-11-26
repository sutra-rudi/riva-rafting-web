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

import { useRouter, useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

interface AppHeader {
  appSocialLinks: Record<string, string>;
}

const AppHeader = ({ appSocialLinks }: AppHeader) => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const [isActivitiesDropdown, setIsActivitiesDropdown] = React.useState<boolean>(false);

  const promoSekcijaDemoPodaci = [
    {
      title: parseByLang('Kayak ture', 'Kayak Tours'),
      url: parseByLang(`/aktivnosti/kayak-tura/?lang=${checkParams}`, `/activities/kayak/?lang=${checkParams}`),
    },
    {
      title: parseByLang('Rafting tura', 'Rafting Tour'),
      url: parseByLang(
        `/aktivnosti/Rafting/?lang=${checkParams}`,
        `/activities/Rafting-on-Zrmanja/?lang=${checkParams}`
      ),
    },
    {
      title: parseByLang('Špiljarenje', 'Caving'),
      url: parseByLang(`/aktivnosti/Spiljarenje/?lang=${checkParams}`, `/activities/Cave-Modric/?lang=${checkParams}`),
    },
    {
      title: parseByLang('Jahanje', 'Horseback Riding'),
      url: parseByLang(`/aktivnosti/Jahanje/?lang=${checkParams}`, `/activities/horse-riding/?lang=${checkParams}`),
    },
    {
      title: parseByLang('Vožnja bicikla', 'Cycling'),
      url: parseByLang(`/aktivnosti/Biciklizam/?lang=${checkParams}`, `/activities/bike-tour/?lang=${checkParams}`),
    },
    {
      title: parseByLang(
        'Gornji tok rijeke Zrmanje od slapa Berberov buk do slapa Ogarov buk',
        'KAYAK FROM BERBEROV BUK TO OGAROV WATERFALL'
      ),
      url: parseByLang(
        `/aktivnosti/Kajak-Berberov-Ogarov/?lang=${checkParams}`,
        `/activities/Kayak-Berberov-Ogarov/?lang=${checkParams}`
      ),
    },
    {
      title: parseByLang('Stand up paddle', 'Stand Up Paddle'),
      url: parseByLang(
        `/aktivnosti/Stand-Up-Paddle/?lang=${checkParams}`,
        `/activities/Stand-Up-Paddle-Zrmanja/?lang=${checkParams}`
      ),
    },
    {
      title: parseByLang('Vožnja brodom', 'Boat Tour'),
      url: parseByLang(
        `/aktivnosti/Zrmanja-brodom/?lang=${checkParams}`,
        `/activities/Zrmanja-by-boat/?lang=${checkParams}`
      ),
    },
    {
      title: parseByLang('Pješačka tura', 'Hiking Tour'),
      url: parseByLang(
        `/aktivnosti/pjesacka-tura/?lang=${checkParams}`,
        `/activities/walking-tour/?lang=${checkParams}`
      ),
    },
    {
      title: parseByLang('Jeep safari', 'Jeep Safari'),
      url: parseByLang(
        `/aktivnosti/Jeep-safari/?lang=${checkParams}`,
        `/activities/Velebit-Jeep-safari/?lang=${checkParams}`
      ),
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
    { text: 'Mićanovi Dvori', href: 'https://micanovidvori.com' },
    { text: 'Zrmanja Camping Village', href: 'https://www.zrmanja-camping.hr/' },
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
        <Link className={styles.noEffectLogo} href={`/?lang=${checkParams}`}>
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
              <Link href='mailto:info@riva-rafting-centar.hr'>
                <Image width={20} height={20} alt='icon' src={facebookIcon} />
              </Link>
            </div>
            <div className={styles.socialBlockImage}>
              <Link href={typeof appSocialLinks !== 'undefined' ? appSocialLinks.instagram : ''}>
                <Image width={20} height={20} alt='icon' src={instaIcon} />
              </Link>
            </div>
            <div className={styles.socialBlockImage}>
              <Link href={typeof appSocialLinks !== 'undefined' ? appSocialLinks.facebook : ''}>
                <Image width={20} height={20} alt='icon' src={teleIcon} />
              </Link>
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
