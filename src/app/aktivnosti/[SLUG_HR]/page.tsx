// import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '../loading';
import demoData from '../../../../public/webdata/webcontent.json';
import styles from '../../styles/aktivnost.module.scss';
import AppHeader from '@/app/components/AppHeader';
import AppFooter from '@/app/components/AppFooter';
import DodatneInformacije from '@/app/sections/DodatneInformacije';
import TripAdvisorSekcija from '@/app/sections/TripAdvisorSekcija';

import staticImageImports from './staticImageImports';
import MapboxMapa from './MapboxMapa';
import PageContent from './PageContent';

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

  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.aktivnost}>
        {findHero !== undefined && findGallery !== undefined && (
          <PageContent
            pageContentData={findData}
            hero={findHero.aktivnostHeroUrl}
            gallery={findGallery.aktivnostGalerija}
          />
        )}
        <MapboxMapa apiKey={mapboxApiKey as string} />
        <DodatneInformacije isLanding={false} />
        <TripAdvisorSekcija />
        {/* <NajpopularnijeTure isLanding={false} /> */}
        <AppFooter />
      </main>
    </Suspense>
  );
}
