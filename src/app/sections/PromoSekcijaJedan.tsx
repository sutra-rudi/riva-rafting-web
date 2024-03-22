'use client';

import React from 'react';
import styles from '../styles/promoSekcijaJedan.module.scss';

const taxonomijaPromoSekcija = [
  { title: 'Sve', id: 1 },
  { title: 'Zrmanja', id: 2 },
  { title: 'Velebit', id: 3 },
];

const PromoSekcijaJedan = () => {
  const [currentActiveTax, setCurrentActiveTax] = React.useState<number>(1);

  const handleClick = (itemValue: number) => setCurrentActiveTax(itemValue);

  const TaxonomyCard = () => {
    return (
      <div className={styles.promoSekcijaTaxonomyCard}>
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

  return (
    <section className={styles.promoSekcijaJedan}>
      <h2 className={styles.promoSekcijaHeader}>
        Istražite neograničene avanture, od uzbudljivih rafting izleta na rijeci Zrmanji do otkrivanja divljine
        Velebita. Doživite nezaboravne trenutke usred netaknute prirode.
      </h2>

      <TaxonomyCard />
    </section>
  );
};

export default PromoSekcijaJedan;
