import AppHeader from './components/AppHeader';
import DodatneInformacije from './sections/DodatneInformacije';
import styles from './styles/page.module.scss';
import { Suspense } from 'react';
import Loading from './loading';
import AppFooter from './components/AppFooter';
import HeroSekcija from './sections/HeroSekcija';
import PromoSekcijaJedan from './sections/PromoSekcijaJedan';
import TureSekcija from './sections/TureSekcija';
import TurePonuda from './sections/TurePonuda';
import PogledajVideo from './sections/PogledajVideo';
import OnamaSekcija from './sections/OnamaSekcija';
import FAQsection from './sections/FAQsection';
import GallerySection from './sections/GallerySection';
import ReviewsSection from './sections/ReviewsSection';
import { getReviews } from './queries/getReviewsQuery';
import { UserLanguage } from './types/appState';

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
      url: 'https://rivarafting.hr',
      siteName: 'Riva Rafting',
      images: [
        {
          url: 'https://cms.zrmanja-camping.hr/wp-content/uploads/2024/06/karuzel-riva-fin01.png',
          width: 800,
          height: 600,
          alt: 'Riva Rafting Adventure on Zrmanja River',
        },
        {
          url: 'https://cms.zrmanja-camping.hr/wp-content/uploads/2024/06/karuzel-riva-fin06.png',
          width: 1800,
          height: 1600,
          alt: 'Riva Rafting Adventure on Zrmanja River',
        },
      ],
      locale: 'hr_HR',
      type: 'website',
    },
  };
}

export default async function Home({ searchParams }: any) {
  const getReviewsQuery = await fetch(`${process.env.CAMPING_REVIEWS_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getReviews,
    }),
    cache: 'no-store',
  });

  const reviewsData = await getReviewsQuery.json();
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.homeMain}>
        <HeroSekcija />
        <PromoSekcijaJedan />
        <TureSekcija />
        <TurePonuda />
        <PogledajVideo />
        <OnamaSekcija />
        <DodatneInformacije isLanding />
        <FAQsection />
        <GallerySection />
        <ReviewsSection content={reviewsData} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
