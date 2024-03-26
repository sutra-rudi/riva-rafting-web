'use client';

import React from 'react';
import styles from '../styles/turePonuda.module.scss';
import TureArticle from '../components/TureArticle';
import tureOne from '../img/ture1.png';
import tureTwo from '../img/ture2.png';
import PaperDividBot from '../components/PaperDividBot';

const staticDemoData = [
  {
    subtitle: 'Od Mora do Velebita: Grupne Avanture s Potpisom',
    title: 'Zajedno u Avanturi: Grupni Izleti koji Spajaju',
    content:
      'Imate grupu prijatelja, radne kolege ili obitelj s kojom provodite puno vremena? Možda biste trebali razmisliti o odlasku na kvalitetan grupni odmor. Turistička agencija Riva rafting ima bogato iskustvo i stručnost u organizaciji grupnih izleta i odmora. Vaš izlet možete čak prilagoditi vašim željama i interesima. Uz našu pomoć i detaljno planiranje, možemo kreirati grupni odmor koji će biti ispunjen predivnim uspomenama. Slobodno nas kontaktirajte.',
    isCTA: true,
    imageSRC: tureOne,
  },
  {
    subtitle: 'Ponosni Domaćini Tradicije i Avanture',
    title: 'Dvadeset Godina Avanture: Proslava Prirode i Sporta na Zrmanja Outdoor Festivalu',
    content: `Zrmanja Outdoor Festival, od 2005. godine, predstavlja ključni događaj za ljubitelje avanture i aktivnog odmora, održavajući se u slikovitom okruženju Obrovca. Festival je prepoznat po bogatom programu koji uključuje raznovrsne aktivnosti poput vaterpola, kajaka, stand-up paddleboardinga (SUP) i gradskih trailova, privlačeći zaljubljenike u prirodu iz cijelog svijeta. Sudionici imaju priliku uživati u uzbudljivim sportovima dok istražuju ljepote rijeke Zrmanje i njene okolice, što čini ovaj festival nezaobilaznim iskustvom za avanturiste svih dobnih skupina.\n\nOsim sportskih izazova, Zrmanja Adventure Festival ima i duboku misiju očuvanja prirode, posebno naglašavajući važnost zaštite rijeke Zrmanje i njenih pritoka od svih oblika devastacije. Festival nije samo prilika za zabavu i rekreaciju, već i platforma za podizanje svijesti o važnosti očuvanja prirodnih ljepota i nasljeđa koje nas okružuje.\n\nS obzirom na dugogodišnju tradiciju i raznolikost ponude, Zrmanja Outdoor Festival postao je više od sportskog događaja; to je festival koji slavi prirodu, avanturu, i zajedništvo, dok istovremeno pruža nezaboravne uspomene i iskustva sudionicima svake godine.
      `,

    isCTA: false,
    imageSRC: tureTwo,
  },
];

const TurePonuda = () => {
  return (
    <section className={styles.turePonudaSekcija}>
      <PaperDividBot />
      {/* MAIN CONT START */}
      <div className={styles.masterContainer}>
        {staticDemoData.map((article) => (
          <TureArticle
            key={article.title}
            title={article.title}
            isCTA={article.isCTA}
            content={article.content}
            subtitle={article.subtitle}
            imageSRC={article.imageSRC}
          />
        ))}
      </div>
      {/* MAIN CONT END */}
    </section>
  );
};

export default TurePonuda;
