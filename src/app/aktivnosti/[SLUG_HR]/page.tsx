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

export async function generateMetadata({ params }: { params: { SLUG_HR: string } }) {
  const findData = demoData.find((iten) => String(iten.SLUG_HR).toLowerCase() === String(params.SLUG_HR).toLowerCase());

  return {
    title: findData?.NASLOV,
    openGraph: {
      title: findData?.NASLOV,
      description: String(findData?.SEO_HR),
      siteName: findData?.NASLOV_AKTIVNOSTI_HERO_HR,
      type: 'website',
      locale: 'hr',
    },
    twitter: {
      title: findData?.NASLOV,
      description: String(findData?.SEO_HR),
      siteName: findData?.NASLOV_AKTIVNOSTI_HERO_HR,
      type: 'website',
      locale: 'hr',
    },
  };
}

export default async function ActivityDetails({ params }: { params: { SLUG_HR: string } }) {
  const findData = demoData.find((iten) => String(iten.SLUG_HR).toLowerCase() === String(params.SLUG_HR).toLowerCase());

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
                <h6>{findData?.NADNASLOV}</h6>
                <h2>{findData?.NASLOV}</h2>
                <div className={styles.articleContentTextContainer}>
                  {findData?.TEKST.split('\n').map((t, i) => (
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
                        <span className={styles.boldSpan}>DESTINACIJA:</span>
                        <span>{findData?.['DESTINACIJA:']}</span>
                      </li>
                      <li>
                        <span className={styles.boldSpan}>CIJENA:</span>
                        <span>{findData?.['CIJENA:']}</span>
                      </li>
                      <li>
                        <span className={styles.boldSpan}>AKTIVNOST:</span>
                        <span>{findData?.['AKTIVNOST:']}</span>
                      </li>
                      <li>
                        <span className={styles.boldSpan}>MINIMALNA DOB:</span>
                        <span>{findData?.['MINIMALNA_DOB:']}</span>
                      </li>
                      <li>
                        <span className={styles.boldSpan}>ZAHTJEVNOST:</span>
                        <span>{findData?.['ZAHTJEVNOST:']}</span>
                      </li>
                      <li>
                        <span className={styles.boldSpan}>VELIČINA GRUPE:</span>
                        <span>{findData?.['VELIČINA_GRUPE:']}</span>
                      </li>
                      <li>
                        <span className={styles.boldSpan}>TRAJANJE:</span>
                        <span>{findData?.['TRAJANJE:']}</span>
                      </li>
                      <li>
                        <span className={styles.boldSpan}>DULJINA:</span>
                        <span>{findData?.['DULJINA:']}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.articleBlock}>
                  <div className={styles.articleBlockHeading}>
                    <h4>{findData?.['NASLOV:_PLAN_TURE']}</h4>
                  </div>

                  <div className={styles.articleInfo}>
                    <ul>
                      {findData?.Sadržaj_bulleti.split('\n').map((str, index) => (
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
                    <div className={styles.articleInfoWithHeading}>
                      <p>OBAVEZNO:</p>
                      <ul>{parseBulletPoints(findData?.OBAVEZNO as string)}</ul>
                    </div>

                    <div className={styles.articleInfoWithHeading}>
                      <p>PO ŽELJI:</p>
                      <ul>{parseBulletPoints(findData?.PO_ŽELJI as string)}</ul>
                    </div>

                    <div className={styles.articleInfoWithHeading}>
                      <p>SAVJETUJEMO:</p>
                      <ul>{parseBulletPoints(findData?.SAVJETUJEMO as string)}</ul>
                    </div>
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
