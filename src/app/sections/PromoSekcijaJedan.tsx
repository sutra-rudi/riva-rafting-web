'use client';

import React from 'react';
import styles from '../styles/promoSekcijaJedan.module.scss';
import demoSlika from '../img/demo-slika-ponuda.png';
import RaftingCard from '../components/RaftingCard';
import AppButton from '../components/AppButton';
import PaperDividBot from '../components/PaperDividBot';

const taxonomijaPromoSekcija = [
  { title: 'Sve', id: 1 },
  { title: 'Zrmanja', id: 2 },
  { title: 'Velebit', id: 3 },
];

const promoSekcijaDemoPodaci = [
  { title: 'Tets kraćeg imena', location: 'Zrmanja', image: demoSlika },
  { title: 'Rafting tura test dužeg imena', location: 'Zrmanja', image: demoSlika },
  { title: 'Rafting tura test dužeg imena', location: 'Zrmanja', image: demoSlika },
  { title: 'Rafting tura test dužeg imena', location: 'Zrmanja', image: demoSlika },
  { title: 'Rafting tura test dužeg imena', location: 'Zrmanja', image: demoSlika },
  { title: 'Rafting tura test dužeg imena', location: 'Zrmanja', image: demoSlika },
  { title: 'Rafting tura test dužeg imena', location: 'Zrmanja', image: demoSlika },
  { title: 'Rafting tura test dužeg imena', location: 'Zrmanja', image: demoSlika },
  { title: 'Rafting tura test dužeg imena', location: 'Zrmanja', image: demoSlika },
  { title: 'Rafting tura test dužeg imena', location: 'Zrmanja', image: demoSlika },
];

const PromoSekcijaJedan = () => {
  const [currentActiveTax, setCurrentActiveTax] = React.useState<number>(1);

  const handleClick = (itemValue: number) => setCurrentActiveTax(itemValue);

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
        {promoSekcijaDemoPodaci.map((kartica, index) => (
          <RaftingCard key={index} title={kartica.title} imageUrl={kartica.image} location={kartica.location} />
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

        <TaxonomyButtons />
        <TaxonomyCardContainer />
        <AppButton content='REZERVIRAJTE SVOJ TERMIN' />

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
