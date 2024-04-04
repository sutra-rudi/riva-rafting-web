'use client';

import React from 'react';
import styles from '../styles/promoSekcijaJedan.module.scss';
import raftingTura from '../img/demo-slika-ponuda.png';
import spiljarenje from '../img/spiljarenje.png';
import jahanje from '../img/jahanje.png';
import voznjaBicikla from '../img/voznja-bicikla.png';
import kajakPoZrmanji from '../img/kajak-tura-po-zrmanji.png';
import standupPaddle from '../img/standup-padle.png';
import voznjaBrodom from '../img/voznja-brodom.png';
import pjesackaTura from '../img/pjesacka-tura.png';
import jeepSafari from '../img/jeep-safari.png';
import kayakTure from '../img/kajak-tura.png';
import RaftingCard from '../components/RaftingCard';
import PaperDividBot from '../components/PaperDividBot';

import demoData from '../../../public/webdata/demodata2.json';

const taxonomijaPromoSekcija = [
  { title: 'Sve', id: 1 },
  { title: 'Zrmanja', id: 2 },
  { title: 'Velebit', id: 3 },
  { title: 'Murvica', id: 4 },
];

const promoSekcijaDemoPodaci = [
  { title: 'Rafting tura', location: 'Zrmanja', image: raftingTura, locationId: 2, url: 'Rafting' },
  { title: 'Špiljarenje', location: 'Velebit', image: spiljarenje, locationId: 3, url: 'Spiljarenje' },
  { title: 'Jahanje', location: 'Murvica', image: jahanje, locationId: 4, url: 'Jahanje' },
  { title: 'Vožnja bicikla', location: 'Zrmanja', image: voznjaBicikla, locationId: 2, url: 'Bicik' },
  {
    title: 'Kajak po Zrmanji do Jadranskog mora',
    location: 'Zrmanja',
    image: kajakPoZrmanji,
    locationId: 2,
    url: 'Kayak-Zrmanja-More',
  },
  { title: 'Stand up paddle', location: 'Zrmanja', image: standupPaddle, locationId: 2, url: 'Stand-Up-Paddle' },
  { title: 'Vožnja brodom', location: 'Zrmanja', image: voznjaBrodom, locationId: 2, url: 'Zrmanja-brodom' },
  { title: 'Pješačka tura', location: 'Zrmanja', image: pjesackaTura, locationId: 2, url: 'Pjesacke-ture' },
  { title: 'Jeep safari', location: 'Velebit', image: jeepSafari, locationId: 3, url: 'Jeep-safari' },
  { title: 'Kayak ture', location: 'Zrmanja', image: kayakTure, locationId: 2, url: 'kayak-tura' },
];

const PromoSekcijaJedan = () => {
  const [currentActiveTax, setCurrentActiveTax] = React.useState<number>(1);

  const handleClick = (itemValue: number) => setCurrentActiveTax(itemValue);

  console.log('DEMO DATA', demoData);

  const TaxonomyButtons = () => {
    return (
      <div className={styles.promoSekcijaTaxonomyContainer}>
        {taxonomijaPromoSekcija.map((item) => (
          <span
            className={
              currentActiveTax === item.id
                ? `${styles.taxonomyButton} ${styles.taxonomyButtonActive}`
                : `${styles.taxonomyButton}`
            }
            onClick={() => handleClick(item.id)}
            key={item.title}
          >
            {item.title}
          </span>
        ))}
      </div>
    );
  };

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
        <h2 className={styles.promoSekcijaHeader}>
          Istražite neograničene avanture, od uzbudljivih rafting izleta na rijeci Zrmanji do otkrivanja divljine
          Velebita. Doživite nezaboravne trenutke usred netaknute prirode.
        </h2>
        <h2 className={styles.promoSekcijaHeaderMobile}>ODABERI SVOJU AVANTURU</h2>

        {/* <TaxonomyButtons /> */}
        <TaxonomyCardContainer />

        <h3 className={styles.mobileHeadingPromo}>
          Istražite neograničene avanture, od uzbudljivih rafting izleta na rijeci Zrmanji do otkrivanja divljine
          Velebita. Doživite nezaboravne trenutke usred netaknute prirode.
        </h3>
      </div>
      {/* MAIN CONT END */}
    </section>
  );
};

export default PromoSekcijaJedan;
