import 'yet-another-react-lightbox/styles.css';
import styles from './styles/page.module.scss';
import { getReviews } from './queries/getReviewsQuery';
import { UserLanguage } from './types/appState';
import dynamic from 'next/dynamic';
import { fetchData } from './utils/callApi';
import Loading from './loading';
import og from '../../public/Riva_rafting__OG-Image.jpg';

const HeroSekcija = dynamic(() => import('./sections/HeroSekcija'), { loading: () => <Loading /> });
const PromoSekcijaJedan = dynamic(() => import('./sections/PromoSekcijaJedan'), { loading: () => <Loading /> });
const TureSekcija = dynamic(() => import('./sections/TureSekcija'), { loading: () => <Loading /> });
const TurePonuda = dynamic(() => import('./sections/TurePonuda'), { loading: () => <Loading /> });
const PogledajVideo = dynamic(() => import('./sections/PogledajVideo'), { loading: () => <Loading /> });
const OnamaSekcija = dynamic(() => import('./sections/OnamaSekcija'), { loading: () => <Loading /> });
const DodatneInformacije = dynamic(() => import('./sections/DodatneInformacije'), { loading: () => <Loading /> });
const FAQsection = dynamic(() => import('./sections/FAQsection'), { loading: () => <Loading /> });
const GallerySection = dynamic(() => import('./sections/GallerySection'), { loading: () => <Loading /> });
const ReviewsSection = dynamic(() => import('./sections/ReviewsSection'), { loading: () => <Loading /> });

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
      images: [og.src],
    },

    twitter: {
      title: 'Riva Rafting - Rafting Avanture na Zrmanji, Hrvatska',
      description:
        'Dobrodošli na Riva Rafting, vaše odredište za nezaboravne rafting avanture na rijeci Zrmanji u Hrvatskoj. Pridružite nam se i istražite prekrasne rijeke i kanjone.',
      url: 'https://riva-rafting-centar.hr',
      siteName: 'Riva Rafting',
      type: 'website',
      locale: parseByLang('hr_HR', 'en_US'),
      images: [og.src],
    },
  };
}

async function getVideos() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const callVideoLinks = await fetch(`${process.env.BASE_APP_URL}api/mediaPaths`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!callVideoLinks.ok) {
      throw new Error(`Error: ${callVideoLinks.status}`);
    }

    const parseVideoLinks = await callVideoLinks.json();
    return parseVideoLinks;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.error('Fetch request timed out');
    } else {
      console.error('Fetch error:', error);
    }
    return null;
  }
}

export default async function Home() {
  const parseVideoLinks = await getVideos();
  const getReviewsQuery = await fetchData(getReviews);

  if (!parseVideoLinks) {
    return (
      <main className={styles.homeMain}>
        <h2>Error loading video links. Please try again later.</h2>
      </main>
    );
  }

  return (
    <main className={styles.homeMain}>
      <HeroSekcija heroVideoUrl={parseVideoLinks.heroVideo.url} />
      <PromoSekcijaJedan />
      <TureSekcija videoUrl={parseVideoLinks.tureSekcijaVideo.url} />
      <TurePonuda />
      <PogledajVideo videoUrl={parseVideoLinks.pogledajVideoSekcija.url} />
      <OnamaSekcija />
      <DodatneInformacije isLanding />
      <FAQsection />
      <GallerySection />
      <ReviewsSection content={getReviewsQuery} />
    </main>
  );
}
