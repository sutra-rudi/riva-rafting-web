import React, { Suspense } from 'react';
import styles from '../styles/contact.module.scss';
import AppFooter from '../components/AppFooter';
import kontaktHero from '../img/kontakt-slike/kontaktHero.png';
import AppHeader from '../components/AppHeader';
import PageContent from './PageContent';
import Loading from './loading';
import FAQsection from '../sections/FAQsection';

export default async function Kontakt() {
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.sectionMain}>
        <PageContent title={`KONTAKTIRAJTE NAS I\nREZERVIRAJTE SVOJ TERMIN`} imgSrc={kontaktHero} />
        <FAQsection />
        <AppFooter />
      </main>
    </Suspense>
  );
}
