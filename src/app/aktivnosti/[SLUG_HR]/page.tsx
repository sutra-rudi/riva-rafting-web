import { Suspense } from 'react';
import Loading from '../loading';
import demoData from '../../../../public/webdata/webcontent.json';
import styles from '../../styles/aktivnost.module.scss';
import AppHeader from '@/app/components/AppHeader';
import AppFooter from '@/app/components/AppFooter';
import DodatneInformacije from '@/app/sections/DodatneInformacije';

import MapboxMapa from './MapboxMapa';
import PageContent from './PageContent';
import { aktivnostiHeroSlike } from './staticImageImports';

export async function generateMetadata({ params }: { params: { SLUG_HR: string } }) {
  const findData = demoData.find(
    (iten) => String(iten['SLUG HR']).toLowerCase() === String(params.SLUG_HR).toLowerCase()
  );
  const findGallery = aktivnostiHeroSlike.find((item) => item.aktivnostId === findData?.ID);
  return {
    title: findData?.NASLOV,
    openGraph: {
      title: findData?.NASLOV,
      description: String(findData?.['SEO HR']),
      siteName: findData?.['NASLOV AKTIVNOSTI HERO'],
      type: 'website',
      locale: 'hr',
    },
    twitter: {
      title: findData?.NASLOV,
      description: String(findData?.['SEO HR']),
      siteName: findData?.['NASLOV AKTIVNOSTI HERO'],
      type: 'website',
      locale: 'hr',
    },
    images: [
      {
        url: findGallery?.aktivnostHeroUrl.src,
        width: findGallery?.aktivnostHeroUrl.width,
        height: findGallery?.aktivnostHeroUrl.height,
        alt: 'Riva Rafting Adventure on Zrmanja River',
      },
      {
        url: findGallery?.aktivnostGalerija[0].src,
        width: findGallery?.aktivnostGalerija[0].width,
        height: findGallery?.aktivnostGalerija[0].height,
        alt: 'Riva Rafting Adventure on Zrmanja River',
      },
    ],
  };
}

export default async function ActivityDetails({ params }: { params: { SLUG_HR: string } }) {
  const findData = demoData.find(
    (iten) => String(iten['SLUG HR']).toLowerCase() === String(params.SLUG_HR).toLowerCase()
  );

  const mapboxApiKey = process.env.MAPBOX_API_KEY;

  const findHero = aktivnostiHeroSlike.find((item) => item.aktivnostId === findData?.ID);

  const findGallery = aktivnostiHeroSlike.find((item) => item.aktivnostId === findData?.ID);

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
      </main>
      <AppFooter />
    </Suspense>
  );
}
