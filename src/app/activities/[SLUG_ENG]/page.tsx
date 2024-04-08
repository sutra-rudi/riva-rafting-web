export const metadata = {
  title: 'Article',
};
// import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '../loading';

import demoData from '../../../../public/webdata/webcontent.json';
import AppButton from '@/app/components/AppButton';
import styles from '../../styles/aktivnost.module.scss';
import AppHeader from '@/app/components/AppHeader';
import AppFooter from '@/app/components/AppFooter';
import DodatneInformacije from '@/app/sections/DodatneInformacije';
import TripAdvisorSekcija from '@/app/sections/TripAdvisorSekcija';
// import NajpopularnijeTure from '@/app/sections/NajpopularnijeTure';
import PaperDividTop from '@/app/components/PaperDividTop';
import PaperDividBotAlt from '@/app/components/PaperDivitBotAlt';
import Image from 'next/image';
import staticImageImports from './staticImageImports';
import AktivnostGallery from './AktivnostGallery';
import MapboxMapa from './MapboxMapa';
import localFont from 'next/font/local';

const RecoletaBold = localFont({
  src: [{ path: '../../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

export default async function ActivityDetails({ params }: { params: { SLUG_ENG: string } }) {
  const findData = demoData.find(
    (iten) => String(iten.SLUG_ENG).toLowerCase() === String(params.SLUG_ENG).toLowerCase()
  );

  const mapboxApiKey = process.env.MAPBOX_API_KEY;

  const findHero = staticImageImports.find((item) => item.aktivnostId === findData?.ID);

  const findGallery = staticImageImports.find((item) => item.aktivnostId === findData?.ID);

  const parseBulletPoints = (strBlock: string) =>
    strBlock.split('\n').map((item, index) => <li key={index}>{item}</li>);

  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.aktivnost}>
        <div className={styles.aktivnostHero}>
          <PaperDividTop />
          <Image fill src={findHero?.aktivnostHeroUrl ?? ''} alt='hero' placeholder='blur' />
          <div className={styles.heroHeader}>
            <h1 className={RecoletaBold.className}>{findData?.NASLOV_AKTIVNOSTI_HERO_HR}</h1>
            <AppButton content='Rezervirajte svoj termin' />
          </div>
          <PaperDividBotAlt />
        </div>
        {/* MAIN CONT START */}
        <div className={styles.masterContainer}>
          <div className={styles.contentContainer}>
            <AktivnostGallery listaSlika={findGallery?.aktivnostGalerija!} />

            <article className={styles.activityArticle}>
              <div className={styles.articleTopContent}>
                <h6>{findData?.____PRAZNO__5}</h6>
                <h2>{findData?.ENG_NASLOV}</h2>
                <div className={styles.articleContentTextContainer}>
                  {findData?.ENG_TEKST.split('\n').map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
                </div>
                <div className={styles.articleButtonStack}>
                  <AppButton content='Rezerviraj termin' />
                  <AppButton content='Imaš pitanje?' isSecondary />
                </div>
              </div>

              <div className={styles.articleDetails}>
                <div className={styles.articleBlock}>
                  <h4 className={styles.articleBlockHeading}>{findData?.OSNOVNE_INFORMACIJE_O_TURI}</h4>

                  <div className={styles.articleInfo}>
                    <ul>
                      <li>
                        DESTINATION: <span>{findData?.['ENG_DESTINACIJA:']}</span>
                      </li>
                      <li>
                        PRICE: <span>{findData?.['ENG_CIJENA:']}</span>
                      </li>
                      <li>
                        ACTIVITY: <span>{findData?.['ENG_AKTIVNOST:']}</span>
                      </li>
                      <li>
                        MINIMUM AGE: <span>{findData?.['ENG_MINIMALNA_DOB:']}</span>
                      </li>
                      <li>
                        DIFFICULTY: <span>{findData?.['ENG_ZAHTJEVNOST:']}</span>
                      </li>
                      <li>
                        GROUP SIZE: <span>{findData?.['ENG_VELIČINA_GRUPE:']}</span>
                      </li>
                      <li>DURATION: {findData?.['ENG_TRAJANJE:']}</li>
                      <li>
                        LENGTH: <span>{findData?.['ENG_DULJINA:']}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.articleBlock}>
                  <div className={styles.articleBlockHeading}>
                    <h4>{findData?.['ENG_NASLOV:_ENG_PLAN_TURE']}</h4>
                  </div>

                  <div className={styles.articleInfo}>
                    <ul>
                      {findData?.ENG_Sadržaj_bulleti.split('\n').map((str, index) => (
                        <li key={index}>{str}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.articleBlock}>
                  <div className={styles.articleBlockHeading}>
                    <h4>{findData?.['NASLOV:Uzeti_sa_sobom']}</h4>
                  </div>

                  <div className={styles.articleInfo}>
                    <p>OBAVEZNO:</p>
                    <ul>{parseBulletPoints(findData?.OBAVEZNO as string)}</ul>
                    <p>PO ŽELJI:</p>
                    <ul>{parseBulletPoints(findData?.PO_ŽELJI as string)}</ul>
                    <p>SAVJETUJEMO:</p>
                    <ul>{parseBulletPoints(findData?.SAVJETUJEMO as string)}</ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* MAIN CONT END */}

        <MapboxMapa apiKey={mapboxApiKey as string} />

        <DodatneInformacije isLanding={false} />
        <TripAdvisorSekcija />
        {/* <NajpopularnijeTure isLanding={false} /> */}
        <AppFooter />
      </main>
    </Suspense>
  );
}
