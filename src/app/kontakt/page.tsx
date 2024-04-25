import React, { Suspense } from 'react';
import styles from '../styles/contact.module.scss';
import AppFooter from '../components/AppFooter';
import kontaktHero from '../img/kontakt-slike/kontaktHero.png';
import AppHeader from '../components/AppHeader';
import Loading from './loading';
import FAQsection from '../sections/FAQsection';
import dynamic from 'next/dynamic';

export default async function Kontakt() {
  const LazyContent = dynamic(() => import('./PageContent'));
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.sectionMain}>
        <LazyContent title={`KONTAKTIRAJTE NAS I\nREZERVIRAJTE SVOJ TERMIN`} imgSrc={kontaktHero} />

        <FAQsection />
      </main>
      <AppFooter />
    </Suspense>
  );
}
