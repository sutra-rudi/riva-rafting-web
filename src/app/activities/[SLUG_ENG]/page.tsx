import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '../loading';
import demoData from '../../../../public/webdata/webcontent.json';
import styles from '../../styles/aktivnost.module.scss';
import AppHeader from '@/app/components/AppHeader';
import AppFooter from '@/app/components/AppFooter';
import DodatneInformacije from '@/app/sections/DodatneInformacije';
import staticImageImports from './staticImageImports';
import MapboxMapa from './MapboxMapa';

export async function generateMetadata({ params }: { params: { SLUG_ENG: string } }) {
  const findData = demoData.find(
    (iten) => String(iten.SLUG_ENG).toLowerCase() === String(params.SLUG_ENG).toLowerCase()
  );

  return {
    title: findData?.ENG_NASLOV,
    openGraph: {
      title: findData?.ENG_NASLOV,
      description: String(findData?.SEO_ENG),
      siteName: findData?.ENG_NASLOV,
      type: 'website',
      locale: 'en',
    },
    twitter: {
      title: findData?.ENG_NASLOV,
      description: String(findData?.SEO_ENG),
      siteName: findData?.ENG_NASLOV,
      type: 'website',
      locale: 'en',
    },
  };
}

export default async function ActivityDetails({ params }: { params: { SLUG_ENG: string } }) {
  const findData = demoData.find(
    (iten) => String(iten.SLUG_ENG).toLowerCase() === String(params.SLUG_ENG).toLowerCase()
  );

  const mapboxApiKey = process.env.MAPBOX_API_KEY;

  const findHero = staticImageImports.find((item) => item.aktivnostId === findData?.ID);

  const findGallery = staticImageImports.find((item) => item.aktivnostId === findData?.ID);

  const LazyContent = dynamic(() => import('./PageContent'));

  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.aktivnost}>
        {findHero !== undefined && findGallery !== undefined && (
          <LazyContent
            pageContentData={findData}
            hero={findHero.aktivnostHeroUrl}
            gallery={findGallery.aktivnostGalerija}
          />
        )}
        <MapboxMapa apiKey={mapboxApiKey as string} />
        <DodatneInformacije isLanding={false} />

        <AppFooter />
      </main>
    </Suspense>
  );
}
