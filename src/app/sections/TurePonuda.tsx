'use client';

import React from 'react';
import styles from '../styles/turePonuda.module.scss';
import TureArticle from '../components/TureArticle';
import tureOne from '../img/ture1.png';
import tureTwo from '../img/ture2.png';
import tureThree from '../img/aktivnosti-hero-update-slike/pjesacke-ture.png';
import PaperDividBot from '../components/PaperDividBot';

import Image from 'next/image';
import pogledajVideoGradient from '../img/pogledaj-video-gradient.svg';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

const listSpecialOfferHr = [
  'Rafting ili kayak tura po rijeci Zrmanji',
  'Pješačka tura do Kudina mosta',
  'Noćenje u mobilnim kućicama Mićanovih dvora',
  'Tradicionalna večera u konobi "Tisno"',
  'Organiziran prijevoz i vođenje',
  'Vrijedi za travanj, svibanj, rujan, listopad / petak-nedjelja',
];

const listSpecialOfferEn = [
  'Rafting or kayaking tour on the Zrmanja River',
  'Hiking tour to Kudin Bridge',
  'Accommodation in Mićanovi Dvori mobile homes',
  'Traditional dinner at "Tisno" tavern',
  'Organized transportation and guidance',
  'Available in April, May, September, and October (Friday-Sunday)',
];

const staticDemoData = [
  {
    subtitle: 'Od Mora do Velebita: Grupne Avanture s Potpisom',
    title: 'Zajedno u Avanturi: Grupni Izleti koji Spajaju',
    content:
      'Imate grupu prijatelja, radne kolege ili obitelj s kojom provodite puno vremena? Možda biste trebali razmisliti o odlasku na kvalitetan grupni odmor. Turistička agencija Riva rafting ima bogato iskustvo i stručnost u organizaciji grupnih izleta i odmora. Vaš izlet možete čak prilagoditi vašim željama i interesima. Uz našu pomoć i detaljno planiranje, možemo kreirati grupni odmor koji će biti ispunjen predivnim uspomenama. Slobodno nas kontaktirajte.',
    isCTA: true,
    imageSRC: tureOne,
    isDoubleCta: false,
    EN_subtitle: 'From Sea to Velebit: Signature Group Adventures',
    EN_title: 'Together in Adventure: Connecting Group Excursions',
    EN_content:
      'Do you have a group of friends, work colleagues, or family with whom you spend a lot of time? Perhaps you should consider going on a quality group vacation. Riva Rafting Tour Agency has rich experience and expertise in organizing group trips and vacations. You can even tailor your trip to your preferences and interests. With our help and detailed planning, we can create a group vacation filled with wonderful memories. Feel free to contact us.',
  },
  {
    subtitle: 'Ponosni Domaćini Tradicije i Avanture',
    title: 'Dvadeset Godina Avanture: Proslava Prirode i Sporta na Zrmanja Outdoor Festivalu',
    content: `Zrmanja Outdoor Festival, od 2005. godine, predstavlja ključni događaj za ljubitelje avanture i aktivnog odmora, održavajući se u slikovitom okruženju Obrovca. Festival je prepoznat po bogatom programu koji uključuje raznovrsne aktivnosti poput raftinga, vaterpola, kajaka, stand-up paddleboardinga (SUP) i gradskih trailova, privlačeći zaljubljenike u prirodu iz cijelog svijeta. Sudionici imaju priliku uživati u uzbudljivim sportovima dok istražuju ljepote rijeke Zrmanje i njene okolice, što čini ovaj festival nezaobilaznim iskustvom za avanturiste svih dobnih skupina.\n\nOsim sportskih izazova, Zrmanja Adventure Festival ima i duboku misiju očuvanja prirode, posebno naglašavajući važnost zaštite rijeke Zrmanje i njenih pritoka od svih oblika devastacije. Festival nije samo prilika za zabavu i rekreaciju, već i platforma za podizanje svijesti o važnosti očuvanja prirodnih ljepota i nasljeđa koje nas okružuje.\n\nS obzirom na dugogodišnju tradiciju i raznolikost ponude, Zrmanja Outdoor Festival postao je više od sportskog događaja; to je festival koji slavi prirodu, avanturu, i zajedništvo, dok istovremeno pruža nezaboravne uspomene i iskustva sudionicima svake godine.
      `,

    isCTA: false,
    imageSRC: tureTwo,
    isDoubleCta: false,

    EN_subtitle: 'Proud Hosts of Tradition and Adventure',
    EN_title: 'Twenty Years of Adventure: Celebrating Nature and Sports at the Zrmanja Outdoor Festival',
    EN_content: `Since 2005, the Zrmanja Outdoor Festival has been a key event for adventure enthusiasts and active vacationers, taking place in the picturesque surroundings of Obrovac. The festival is known for its rich program that includes diverse activities such as rafting, water polo, kayaking, stand-up paddleboarding (SUP), and city trails, attracting nature lovers from all over the world. Participants have the opportunity to enjoy thrilling sports while exploring the beauty of the Zrmanja River and its surroundings, making this festival an unforgettable experience for adventurers of all ages.\n\nIn addition to sports challenges, the Zrmanja Adventure Festival also has a deep mission of nature conservation, emphasizing the importance of protecting the Zrmanja River and its tributaries from all forms of devastation. The festival is not just an opportunity for fun and recreation but also a platform for raising awareness about the importance of preserving the natural beauty and heritage that surrounds us.\n\nWith its long-standing tradition and diverse offerings, the Zrmanja Outdoor Festival has become more than a sports event; it is a festival that celebrates nature, adventure, and community while providing participants with unforgettable memories and experiences each year.`,
  },

  {
    subtitle: 'Proljetno i jesensko istraživanje Zrmanje ',
    title: 'Trodnevni rafting i kayak paket na rijeci Zrmanji',
    content: `Uronite u prirodne ljepote Zrmanje i njenog kanjona kroz trodnevni avanturistički paket. Od raftinga i kayaka do istraživanja skrivenih dragulja poput Kudina mosta, svaki dan je ispunjen uzbuđenjem i opuštanjem u prirodnom okruženju. Uz organiziran prijevoz, noćenje u udobnim kućicama i tradicionalne obroke, ovaj paket nudi savršen spoj adrenalina i relaksacije za svakog ljubitelja prirode.
      `,
    listInsideHr: listSpecialOfferHr,
    isCTA: true,
    imageSRC: tureThree,
    isDoubleCta: true,

    EN_subtitle: 'Spring and Autumn Exploration of the Zrmanja River',
    EN_title: 'Three-day Rafting and Kayaking Package on the Zrmanja River',
    EN_content: `Immerse yourself in the natural beauty of the Zrmanja River and its canyon through a three-day adventure package. From rafting and kayaking to exploring hidden gems like the Kudin Bridge, each day is filled with excitement and relaxation in a natural setting. With organized transportation, comfortable accommodation in cabins, and traditional meals, this package offers the perfect blend of adrenaline and relaxation for every nature lover.`,
    listInsideEn: listSpecialOfferEn,
  },
];

const TurePonuda = () => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );
  return (
    <section className={styles.turePonudaSekcija}>
      <PaperDividBot />
      <div className={styles.masterContainer}>
        {staticDemoData.map((article) => (
          <TureArticle
            key={article.title}
            title={parseByLang(article.title, article.EN_title)}
            isCTA={article.isCTA}
            isDoubleCta={article.isDoubleCta}
            content={parseByLang(article.content, article.EN_content)}
            subtitle={parseByLang(article.subtitle, article.EN_subtitle)}
            imageSRC={article.imageSRC}
            listSpecialOffer={checkParams === UserLanguage.hr ? article.listInsideHr : article.listInsideEn}
          />
        ))}
      </div>
      <Image src={pogledajVideoGradient} alt='gradi' className={styles.pogledajVideoGradient} />
    </section>
  );
};

export default TurePonuda;
