import dynamic from 'next/dynamic';
import AppHeader from './components/AppHeader';
import DodatneInformacije from './sections/DodatneInformacije';
import styles from './styles/page.module.scss';
import { Suspense } from 'react';
import Loading from './loading';
import PogledajVideo from './sections/PogledajVideo';

export default async function Home() {
  const HeroLazy = dynamic(() => import('./sections/HeroSekcija'), { ssr: false });
  const PromoLazy = dynamic(() => import('./sections/PromoSekcijaJedan'), { ssr: false });
  const TureLazy = dynamic(() => import('./sections/TureSekcija'), { ssr: false });
  const TureOfferLazy = dynamic(() => import('./sections/TurePonuda'), { ssr: false });
  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.homeMain}>
        <AppHeader />

        <HeroLazy />

        <PromoLazy />
        <TureLazy />
        <TureOfferLazy />
        <PogledajVideo />
        <DodatneInformacije />
      </main>
    </Suspense>
  );
}
