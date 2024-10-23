import demoData from '../../../../public/webdata/webcontent.json';
import styles from '../../styles/aktivnost.module.scss';
import DodatneInformacije from '@/app/sections/DodatneInformacije';
import MapboxMapa from './MapboxMapa';
const PageContent = dynamic(() => import('./PageContent'));

import aktivnostiHeroSlike from './staticImageImports';
import dynamic from 'next/dynamic';
const mapboxApiKey = process.env.MAPBOX_API_KEY;
export async function generateMetadata({ params }: { params: { SLUG_ENG: string } }) {
  const findData = demoData.find(
    (iten) => String(iten['SLUG ENG']).toLowerCase() === String(params.SLUG_ENG).toLowerCase()
  );

  const findGallery = aktivnostiHeroSlike.find((item) => item.aktivnostId === findData?.ID);

  return {
    title: findData?.['ENG NASLOV'],
    openGraph: {
      title: findData?.['ENG NASLOV'],
      description: String(findData?.['SEO ENG']),
      siteName: findData?.['NASLOV AKTIVNOSTI HERO ENG'],
      type: 'website',
      locale: 'en',
      images: [
        {
          url: findGallery?.aktivnostHeroUrl.src,
          width: 1200,
          height: 600,
          alt: 'Riva Rafting Adventure on Zrmanja River',
        },
        {
          url: findGallery?.aktivnostGalerija[0].src,
          width: 1200,
          height: 600,
          alt: 'Riva Rafting Adventure on Zrmanja River',
        },
      ],
    },
    twitter: {
      title: findData?.['ENG NASLOV'],
      description: String(findData?.['SEO ENG']),
      siteName: findData?.['NASLOV AKTIVNOSTI HERO ENG'],
      type: 'website',
      locale: 'en',
      images: [
        {
          url: findGallery?.aktivnostHeroUrl.src,
          width: 1200,
          height: 600,
          alt: 'Riva Rafting Adventure on Zrmanja River',
        },
        {
          url: findGallery?.aktivnostGalerija[0].src,
          width: 1200,
          height: 600,
          alt: 'Riva Rafting Adventure on Zrmanja River',
        },
      ],
    },
  };
}

export default async function ActivityDetails({ params }: { params: { SLUG_ENG: string } }) {
  const findData = demoData.find(
    (iten) => String(iten['SLUG ENG']).toLowerCase() === String(params.SLUG_ENG).toLowerCase()
  );

  const findHero = aktivnostiHeroSlike.find((item) => item.aktivnostId === findData?.ID);

  const findGallery = aktivnostiHeroSlike.find((item) => item.aktivnostId === findData?.ID);

  return (
    <main className={styles.aktivnost}>
      {findHero !== undefined && findGallery !== undefined && (
        <PageContent
          pageContentData={findData}
          hero={findHero.aktivnostHeroUrl}
          gallery={findGallery.aktivnostGalerija}
        />
      )}
      <MapboxMapa
        mapCenter={findData?.['KORDINATE-CENTRA']!}
        styleUrl={findData?.['Style URL'] ?? ''}
        apiKey={mapboxApiKey as string}
        zoom={findData?.ZOOM!}
      />
      <DodatneInformacije isLanding={false} />
    </main>
  );
}
