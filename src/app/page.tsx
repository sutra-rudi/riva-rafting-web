import dynamic from 'next/dynamic';
import AppHeader from './components/AppHeader';
import DodatneInformacije from './sections/DodatneInformacije';
import styles from './styles/page.module.scss';
import { Suspense } from 'react';
import Loading from './loading';
import AppFooter from './components/AppFooter';

export default async function Home({ searchParams }: any) {
  const HeroLazy = dynamic(() => import('./sections/HeroSekcija'), { ssr: false });
  const PromoLazy = dynamic(() => import('./sections/PromoSekcijaJedan'), { ssr: false });
  const TureLazy = dynamic(() => import('./sections/TureSekcija'), { ssr: false });
  const TureOfferLazy = dynamic(() => import('./sections/TurePonuda'), { ssr: false });
  const PogledajVideoLazy = dynamic(() => import('./sections/PogledajVideo'), { ssr: false });
  const OnamaSekcijaLazy = dynamic(() => import('./sections/OnamaSekcija'), { ssr: false });
  const FAQsectionLazy = dynamic(() => import('./sections/FAQsection'), { ssr: false });
  const GallerySectionLazy = dynamic(() => import('./sections/GallerySection'), { ssr: false });

  return (
    <main className={styles.homeMain}>
      <AppHeader />
      <Suspense fallback={<Loading />}>
        <HeroLazy />
        <PromoLazy />
        <TureLazy />
        <TureOfferLazy />
        <PogledajVideoLazy />
        <OnamaSekcijaLazy />
        <DodatneInformacije isLanding />
        <FAQsectionLazy />
        <GallerySectionLazy />
      </Suspense>

      <AppFooter />
    </main>
  );
}
