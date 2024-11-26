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
import footerAltBg from '../img/footer-small-screen.png';

import PaperDividTop from './PaperDividTop';
import { useWindowSize } from '../hooks/useWindowSize';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
import HR_REGION from '../img/hr-zadar-region-riva.png';
import EN_REGION from '../img/eng-zadar-region-riva.png';
import Link from 'next/link';

interface FooterInterface {
  isAbout?: boolean;
  appSocialLinks: Record<string, string>;
}

const AppFooter = (props: FooterInterface) => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const en_links = [
    { title: 'Hiking tour', href: `/activities/walking-tour/?lang=${checkParams}` },
    { title: 'Kayak tours', href: `/activities/kayak/?lang=${checkParams}` },
    { title: 'Rafting tour', href: `/activities/Rafting-on-Zrmanja/?lang=${checkParams}` },
    {
      title: 'KAYAK FROM BERBEROV BUK TO OGAROV WATERFALL',
      href: `/activities/Kayak-Berberov-Ogarov/?lang=${checkParams}`,
    },
    { title: 'Stand Up Paddle', href: `/activities/Stand-Up-Paddle-Zrmanja/?lang=${checkParams}` },
    { title: 'Boat Tour', href: `/activities/Zrmanja-by-boat/?lang=${checkParams}` },
    { title: 'Jeep Safari', href: `/activities/Velebit-Jeep-safari/?lang=${checkParams}` },
    { title: 'Caving', href: `/activities/Cave-Modric/?lang=${checkParams}` },
    { title: 'Horseback Riding', href: `/activities/horse-riding/?lang=${checkParams}` },
    { title: 'Cycling', href: `/activities/bike-tour/?lang=${checkParams}` },
  ];

  const hr_links = [
    { title: 'Pješačka Tura', href: `/aktivnosti/pjesacka-tura/?lang=${checkParams}` },
    { title: 'Kayak Ture', href: `/aktivnosti/kayak-tura/?lang=${checkParams}` },
    { title: 'Rafting Tura', href: `/aktivnosti/Rafting/?lang=${checkParams}` },
    {
      title: 'Gornji tok rijeke Zrmanje od slapa Berberov buk do slapa Ogarov buk',
      href: `/aktivnosti/Kajak-Berberov-Ogarov/?lang=${checkParams}`,
    },
    { title: 'Stand Up Paddle', href: `/aktivnosti/Stand-Up-Paddle/?lang=${checkParams}` },
    { title: 'Vožnja Brodom', href: `/aktivnosti/Zrmanja-brodom/?lang=${checkParams}` },
    { title: 'Jeep Safari', href: `/aktivnosti/Jeep-safari/?lang=${checkParams}` },
    { title: 'Špiljarenje', href: `/aktivnosti/Spiljarenje/?lang=${checkParams}` },
    { title: 'Jahanje', href: `/aktivnosti/Jahanje/?lang=${checkParams}` },
    { title: 'Vožnja Bicikla', href: `/aktivnosti/Biciklizam/?lang=${checkParams}` },
  ];

  const clientWindowSize = useWindowSize();

  return (
    <footer style={{ marginTop: props.isAbout ? '0' : '3rem' }} className={styles.appFooter}>
      <PaperDividTop isAbout={props.isAbout} />

      <div className={styles.socialFooterStack}>
        <p>{parseByLang('Zapratite nas:', 'Follow us:')}</p>
        <div className={styles.socialIconStack}>
          <Link
            href={
              typeof props.appSocialLinks !== 'undefined' && props.appSocialLinks.facebook
                ? props.appSocialLinks.facebook
                : ''
            }
          >
            <Image src={facebookIcon} alt='icon' width={32} height={32} loading='lazy' />
          </Link>
          <Link
            href={
              typeof props.appSocialLinks !== 'undefined' && props.appSocialLinks.instagram
                ? props.appSocialLinks.instagram
                : ''
            }
          >
            <Image src={instaIcon} alt='icon' width={32} height={32} loading='lazy' />
          </Link>
          <Link href='mailto:info@riva-rafting-centar.hr'>
            <Image src={teleIcon} alt='icon' width={32} height={32} loading='lazy' />
          </Link>
        </div>
      </div>

      <Image
        fill
        src={clientWindowSize && clientWindowSize?.width > 1024 ? footerBg : footerAltBg}
        alt='footerBackground'
        placeholder='blur'
        quality={100}
        loading='lazy'
      />

      <div className={styles.footerMaster}>
        <div className={styles.appLogoContainer}>
          <Image fill src={appLogo} alt='app logo' />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.footerBlock}>
            <p>{parseByLang('Aktivnosti koje nudimo', 'Activities we offer')}</p>
            <div className={styles.activityStack}>
              <ul>
                {checkParams === UserLanguage.hr
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
            <p>{parseByLang('Linkovi', 'Links')}</p>
            <div className={styles.linkStack}>
              <a href={parseByLang(`/o-nama/?lang=${checkParams}`, `/about-us/?lang=${checkParams}`)}>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('O nama', 'About us')}</span>
              </a>
              <a href={`/kontakt/?lang=${checkParams}`}>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('Kontakt forma', 'Contact form')}</span>
              </a>
              <a href='/#FAQ'>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('FAQ', 'FAQ')}</span>
              </a>
              <a href={`/obrovacki-kraj/?lang=${checkParams}`}>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('Obrovački kraj', 'Obrovac region')}</span>
              </a>
              <a href='https://www.zrmanja-camping.hr/'>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Zrmanja Camping village</span>
              </a>
              <a href='https://micanovidvori.com'>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Mičanovi dvori</span>
              </a>
            </div>
          </div>

          <div className={styles.footerBlock}>
            <p>{parseByLang('Kontaktirajte nas', 'Contact us')}</p>
            <div className={styles.contactStack}>
              <a href='https://www.google.com/maps/dir//Obala+hr.+Čas.+Senada+Ž.+6,+23450,+Obrovac/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4761c76f06da2a03:0x8abf7d8f6eb1b3c1?sa=X&ved=1t:707&ictx=111'>{`6 Obala hr. Čas. Senada Ž.,\nObrovac, Croatia`}</a>
              <a href='mailto:info@riva-rafting-centar.hr'>info@riva-rafting-centar.hr</a>
              <a href='tel:+38523689920'>023 689 920</a>

              <Image
                src={checkParams === UserLanguage.hr ? HR_REGION : EN_REGION}
                alt='stamp of the tourism comunity'
                width={93}
                height={41}
              />
            </div>
          </div>

          <div className={styles.footerDislaimerTrack}>
            <div className={styles.disclaimerSig}>
              <div className={styles.disclaimerSigIn}>
                <a href={parseByLang(`/uvjeti-koristenja/?lang=${checkParams}`, `/terms-of-use/?lang=${checkParams}`)}>
                  {parseByLang('Uvjeti i odredbe', 'Terms & Conditions')}
                </a>

                <span>|</span>

                <a
                  href={parseByLang(
                    `/pravila-privatnosti/?lang=${checkParams}`,
                    `/privacy-policy/?lang=${checkParams}`
                  )}
                >
                  {parseByLang('Politika privatnosti', 'Privacy Policy')}
                </a>

                <span>|</span>

                <a href={parseByLang(`/podatci-o-tvrtki/?lang=${checkParams}`, `/company-info/?lang=${checkParams}`)}>
                  {parseByLang('Podaci o tvrtki', 'Company info')}
                </a>
              </div>
              <div className={styles.disclaimerSigIn}>
                <span>{parseByLang('© 2024 All Rights Reserved', '© 2024 All Rights Reserved')}</span>
                <span>|</span>

                <a href='https://www.sutra.hr/'>WEB DESIGN SUTRA.HR</a>
              </div>
            </div>

            <div className={styles.disclaimerSocial}>
              <span>{parseByLang('Zapratite nas:', 'Follow us:')}</span>
              <div className={styles.disclaimerSocialIcons}>
                <a href={typeof props.appSocialLinks !== 'undefined' ? props.appSocialLinks.facebook : ''}>
                  <Image src={facebookIcon} alt='icon' width={32} height={32} />
                </a>
                <a href={typeof props.appSocialLinks !== 'undefined' ? props.appSocialLinks.instagram : ''}>
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
