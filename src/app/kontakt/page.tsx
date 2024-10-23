import styles from '../styles/contact.module.scss';
import kontaktHero from '../img/kontakt-slike/kontaktHero.png';
import FAQsection from '../sections/FAQsection';
import dynamic from 'next/dynamic';
const PageContent = dynamic(() => import('./PageContent'));

export default async function Kontakt({ searchParams }: any) {
  return (
    <main className={styles.sectionMain}>
      <PageContent
        title={typeof searchParams !== 'undefined' && searchParams.lang === 'en' ? `SEND INQUIRY` : `POŠALJI UPIT`}
        imgSrc={kontaktHero}
      />

      <FAQsection />
    </main>
  );
}
