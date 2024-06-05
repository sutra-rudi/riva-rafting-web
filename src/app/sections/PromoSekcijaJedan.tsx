'use client';

import React from 'react';
import styles from '../styles/promoSekcijaJedan.module.scss';
import raftingTura from '../img/slike-hd-ture/rafting-tura.png';
import spiljarenje from '../img/slike-hd-ture/spiljarenje.png';
import jahanje from '../img/slike-hd-ture/jahanje.png';
import voznjaBicikla from '../img/slike-hd-ture/voznja-bicikla.png';
import kajakPoZrmanji from '../img/slike-hd-ture/kayak-po-zrmanji-do-jadranskog-mora.png';
import standupPaddle from '../img/slike-hd-ture/stand-up-paddle.png';
import voznjaBrodom from '../img/slike-hd-ture/voznja-brodom.png';
import pjesackaTura from '../img/slike-hd-ture/pjesacka-tura.png';
import jeepSafari from '../img/slike-hd-ture/jeep-safari.png';
import kayakTure from '../img/slike-hd-ture/kayak-ture.png';
import RaftingCard from '../components/RaftingCard';
import PaperDividBot from '../components/PaperDividBot';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

const PromoSekcijaJedan = () => {
  const [currentActiveTax, setCurrentActiveTax] = React.useState<number>(1);

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const secondHead_hr = 'Odaberi svoju avanturu';
  const secondHead_en = 'Choose your adventure';

  const promoSekcijaDemoPodaci = [
    {
      title: parseByLang('Rafting tura', 'Rafting Tour'),
      location: 'Zrmanja',
      image: raftingTura,
      locationId: 2,
      url: parseByLang('Rafting', 'Rafting-on-Zrmanja') + `/?lang=${checkParams}`,
    },
    {
      title: parseByLang('Špiljarenje', 'Caving'),
      location: 'Velebit',
      image: spiljarenje,
      locationId: 3,
      url: parseByLang('Spiljarenje', 'Cave-Modric') + `/?lang=${checkParams}`,
    },
    {
      title: parseByLang('Jahanje', 'Horseback Riding'),
      location: 'Murvica',
      image: jahanje,
      locationId: 4,
      url: parseByLang('jahanje', 'horse-riding') + `/?lang=${checkParams}`,
    },
    {
      title: parseByLang('Vožnja bicikla', 'Cycling'),
      location: 'Zrmanja',
      image: voznjaBicikla,
      locationId: 2,
      url: parseByLang('biciklizam', 'bike-tour') + `/?lang=${checkParams}`,
    },
    {
      title: parseByLang('Kajak po Zrmanji do Jadranskog mora', 'Kayaking from Zrmanja to the Adriatic Sea'),
      location: 'Zrmanja',
      image: kajakPoZrmanji,
      locationId: 2,
      url: parseByLang('Kayak-Zrmanja-More', 'Kayak-River-to-the-sea') + `/?lang=${checkParams}`,
    },
    {
      title: parseByLang('Stand up paddle', 'Stand Up Paddle'),
      location: 'Zrmanja',
      image: standupPaddle,
      locationId: 2,
      url: parseByLang('Stand-Up-Paddle', 'Stand-Up-Paddle-Zrmanja') + `/?lang=${checkParams}`,
    },
    {
      title: parseByLang('Vožnja brodom', 'Boat Tour'),
      location: 'Zrmanja',
      image: voznjaBrodom,
      locationId: 2,
      url: parseByLang('Zrmanja-brodom', 'Zrmanja-by-boat') + `/?lang=${checkParams}`,
    },
    {
      title: parseByLang('Pješačka tura', 'Hiking Tour'),
      location: 'Zrmanja',
      image: pjesackaTura,
      locationId: 2,
      url: parseByLang('pjesacka-tura', 'walking-tour') + `/?lang=${checkParams}`,
    },
    {
      title: parseByLang('Jeep safari', 'Jeep Safari'),
      location: 'Velebit',
      image: jeepSafari,
      locationId: 3,
      url: parseByLang('Jeep-safari', 'Velebit-Jeep-safari') + `/?lang=${checkParams}`,
    },
    {
      title: parseByLang('Kayak ture', 'Kayak Tours'),
      location: 'Zrmanja',
      image: kayakTure,
      locationId: 2,
      url: parseByLang('kayak-tura', 'kayak') + `/?lang=${checkParams}`,
    },
  ];

  const TaxonomyCardContainer = () => {
    return (
      <div className={styles.taxonomyCardContainer}>
        {currentActiveTax === 1
          ? promoSekcijaDemoPodaci.map((kartica, index) => (
              <RaftingCard
                key={index}
                title={kartica.title}
                imageUrl={kartica.image}
                location={kartica.location}
                delay={index - index * 0.85}
                url={kartica.url}
              />
            ))
          : promoSekcijaDemoPodaci
              .filter((kartica) => kartica.locationId === currentActiveTax)
              .map((kartica, index) => (
                <RaftingCard
                  key={kartica.title}
                  title={kartica.title}
                  imageUrl={kartica.image}
                  location={kartica.location}
                  url={kartica.url}
                  delay={index - index * 0.85}
                />
              ))}
      </div>
    );
  };

  return (
    <section className={styles.promoSekcijaJedan}>
      <PaperDividBot />
      {/* MAIN CONT START */}
      <div className={styles.masterContainer}>
        <h2 className={styles.promoSekcijaHeaderMobile}>{parseByLang(secondHead_hr, secondHead_en)}</h2>
        <TaxonomyCardContainer />
      </div>
      {/* MAIN CONT END */}
    </section>
  );
};

export default PromoSekcijaJedan;
