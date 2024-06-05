import React, { Suspense } from 'react';
import styles from '../styles/contact.module.scss';
import AppFooter from '../components/AppFooter';
import kontaktHero from '../img/kontakt-slike/kontaktHero.png';
import AppHeader from '../components/AppHeader';
import Loading from './loading';
import FAQsection from '../sections/FAQsection';
import PageContent from './PageContent';

export default async function Kontakt({ searchParams }: any) {
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.sectionMain}>
        <PageContent
          title={typeof searchParams !== 'undefined' && searchParams.lang === 'en' ? `SEND INQUIRY` : `POŠALJI UPIT`}
          imgSrc={kontaktHero}
        />

        <FAQsection />
      </main>
      <AppFooter />
    </Suspense>
  );
}
