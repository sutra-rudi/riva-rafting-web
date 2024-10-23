import 'yet-another-react-lightbox/styles.css';
import styles from './styles/page.module.scss';

import { getReviews } from './queries/getReviewsQuery';
import { UserLanguage } from './types/appState';
import dynamic from 'next/dynamic';
import { fetchData } from './utils/callApi';

const HeroSekcija = dynamic(() => import('./sections/HeroSekcija'));
const PromoSekcijaJedan = dynamic(() => import('./sections/PromoSekcijaJedan'));
const TureSekcija = dynamic(() => import('./sections/TureSekcija'));
const TurePonuda = dynamic(() => import('./sections/TurePonuda'));
const PogledajVideo = dynamic(() => import('./sections/PogledajVideo'));
const OnamaSekcija = dynamic(() => import('./sections/OnamaSekcija'));
const DodatneInformacije = dynamic(() => import('./sections/DodatneInformacije'));
const FAQsection = dynamic(() => import('./sections/FAQsection'));
const GallerySection = dynamic(() => import('./sections/GallerySection'));
const ReviewsSection = dynamic(() => import('./sections/ReviewsSection'));

export async function generateMetadata({ searchParams }: { searchParams: { lang: string } }) {
  const parseByLang = (hrString: string | string[], enString: string | string[]) => {
    if (Array.isArray(hrString) && Array.isArray(enString)) {
      return searchParams.lang === 'hr' ? hrString : enString;
    }
    return searchParams.lang === UserLanguage.hr ? hrString : enString;
  };

  return {
    generator: 'Next.js',
    applicationName: 'Riva Rafting',
    referrer: 'origin-when-cross-origin',
    keywords: parseByLang(
      ['rafting', 'avantura', 'Hrvatska', 'Zrmanja', 'rijeke', 'kanjoni', 'priroda', 'sport'],
      ['rafting', 'adventure', 'Croatia', 'Zrmanja', 'rivers', 'canyons', 'nature', 'sport']
    ),
    authors: [{ name: 'Riva Rafting' }, { name: 'Studio Sutra', url: 'https://www.sutra.hr/' }],
    creator: 'Riva Rafting Team',
    publisher: 'Riva Rafting Adventures',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: 'index, follow',
    title: parseByLang(
      'Riva Rafting - Rafting Avanture na Zrmanji, Hrvatska',
      'Riva Rafting - Rafting Adventures on the Zrmanja, Croatia'
    ),
    description: parseByLang(
      'Dobrodošli na Riva Rafting, vaše odredište za nezaboravne rafting avanture na rijeci Zrmanji u Hrvatskoj. Pridružite nam se i istražite prekrasne rijeke i kanjone.',
      'Welcome to Riva Rafting, your destination for unforgettable rafting adventures on the Zrmanja River in Croatia. Join us and explore beautiful rivers and canyons.'
    ),

    openGraph: {
      title: 'Riva Rafting - Rafting Avanture na Zrmanji, Hrvatska',
      description:
        'Dobrodošli na Riva Rafting, vaše odredište za nezaboravne rafting avanture na rijeci Zrmanji u Hrvatskoj. Pridružite nam se i istražite prekrasne rijeke i kanjone.',
      url: 'https://riva-rafting-centar.hr',
      siteName: 'Riva Rafting',
      locale: parseByLang('hr_HR', 'en_US'),
      type: 'website',
      images: [
        {
          width: 1200,
          height: 600,
          alt: parseByLang('Riva Rafting avantura na rijeci Zrmanji', 'Riva Rafting Adventure on Zrmanja River'),
        },
      ],
    },

    twitter: {
      title: 'Riva Rafting - Rafting Avanture na Zrmanji, Hrvatska',
      description:
        'Dobrodošli na Riva Rafting, vaše odredište za nezaboravne rafting avanture na rijeci Zrmanji u Hrvatskoj. Pridružite nam se i istražite prekrasne rijeke i kanjone.',
      url: 'https://riva-rafting-centar.hr',
      siteName: 'Riva Rafting',
      type: 'website',
      locale: parseByLang('hr_HR', 'en_US'),
      images: [
        {
          width: 1200,
          height: 600,
          alt: parseByLang('Riva Rafting avantura na rijeci Zrmanji', 'Riva Rafting Adventure on Zrmanja River'),
        },
      ],
    },
  };
}

export default async function Home() {
  const callVideoLinks = await fetch(`${process.env.BASE_APP_URL}api/mediaPaths`);
  const parseVideoLinks = await callVideoLinks.json();

  const getReviewsQuery = await fetchData(getReviews);

  return (
    <main className={styles.homeMain}>
      <HeroSekcija heroVideoUrl={parseVideoLinks.heroVideo.url} />
      <PromoSekcijaJedan />
      <TureSekcija />
      <TurePonuda />
      <PogledajVideo />
      <OnamaSekcija />
      <DodatneInformacije isLanding />
      <FAQsection />
      <GallerySection />
      <ReviewsSection content={getReviewsQuery} />
    </main>
  );
}
