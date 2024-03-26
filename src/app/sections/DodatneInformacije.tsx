import styles from '../styles/dodatneInformacije.module.scss';
import imgone from '../img/imag1.png';
import imgtwo from '../img/imag2.png';
import imgthree from '../img/imag3.png';
import React from 'react';
import Image from 'next/image';

interface MoreInfoProps {
  isLanding: boolean;
}

const DodatneInformacije = (props: MoreInfoProps) => {
  return (
    <section
      className={
        props.isLanding
          ? `${styles.dodatneInformacije}`
          : `${styles.dodatneInformacije} ${styles.dodatneInformacijeSub}`
      }
    >
      <h1 className={styles.sectionHeading}>Dodatne Informacije</h1>

      <div className={styles.sectionListContainer}>
        <div className={styles.imageBox}>
          <div className={styles.titleHolder}>
            <div className={styles.titleHolderInner}>
              <h6>ZRMANJA CAMPING VILLAGE</h6>
              <h2>SMJEŠTAJ U NAŠEM KAMPU</h2>
            </div>
          </div>

          <Image src={imgone} fill alt='offer image' />
        </div>
        <div className={styles.imageBox}>
          <div className={styles.titleHolder}>
            <div className={styles.titleHolderInner}>
              <h6>MIĆANOVI DVORI</h6>
              <h2>DOMAĆA HRANA</h2>
            </div>
          </div>

          <Image src={imgtwo} fill alt='offer image' />
        </div>
        <div className={styles.imageBox}>
          <div className={styles.titleHolder}>
            <div className={styles.titleHolderInner}>
              <h6>OBROVAC - ZRMANJA - VELEBIT</h6>
              <h2>ŠTO POSJETITI U OKOLICI?</h2>
            </div>
          </div>

          <Image src={imgthree} fill alt='offer image' />
        </div>
      </div>
    </section>
  );
};

export default DodatneInformacije;
