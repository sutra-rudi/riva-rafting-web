import Image from 'next/image';
import React from 'react';
import aboutUsImage from '../img/o-nama-demo.png';
import styles from '../styles/oNama.module.scss';
import AppButton from '../components/AppButton';

const paragraphContent = `Riva Rafting Centar, specijalizirana putnička agencija, ističe se dugogodišnjom tradicijom u organizaciji pustolovnih i sportskih aktivnosti, obuhvaćajući širok spektar selektivnih turističkih usluga u Hrvatskoj, poput raftinga, kajakanja, SUP-a, off-roada, speleologije, trekkinga i biciklizma. Ove aktivnosti, kao inovativni doprinos ukupnoj turističkoj ponudi, ključne su za razvoj team building programa i sportsko-pustolovnih događanja, što je dovelo do razvoja jedinstvenog pristupa u marketingu - manifestacijskog marketinga.\n\nUz ponudu organiziranja avantura vezanih za Zrmanju i Velebit, nudimo i usluge smještaja u našem CAMPING VILLAGE ZRMANJA i ugostiteljske usluge unutar seoskog gospodarstva MIĆANOVI DVORI.`;

const OnamaSekcija = () => {
  return (
    <section className={styles.aboutUsSection}>
      {/* MAIN CONT START */}

      <div className={styles.masterContainer}>
        <div className={styles.aboutUsContentCont}>
          <div className={styles.imageHolder}>
            <Image src={aboutUsImage} fill alt='about us' />
          </div>
          <div className={styles.aboutUsContent}>
            <h2 className={styles.sectionHeading}>O NAMA</h2>
            <p>{paragraphContent}</p>
            <div className={styles.buttonContainer}>
              <AppButton isAbout content='Saznaj više' />
              <AppButton isAbout content='Kontaktiraj nas' />
            </div>
          </div>
        </div>
      </div>
      {/* MAIN CONT END */}
    </section>
  );
};

export default OnamaSekcija;
