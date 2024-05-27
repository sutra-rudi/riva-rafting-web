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

export default async function Home({ searchParams }: any) {
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
      </main>
      <AppFooter />
    </Suspense>
  );
}
