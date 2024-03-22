import dynamic from 'next/dynamic';
import AppHeader from './components/AppHeader';
import DodatneInformacije from './sections/DodatneInformacije';
import HeroSekcija from './sections/HeroSekcija';
import styles from './styles/page.module.scss';
import { Suspense } from 'react';
import PromoSekcijaJedan from './sections/PromoSekcijaJedan';

export default function Home() {
  const HeroLazy = dynamic(() => import('./sections/HeroSekcija'), { ssr: false });

  return (
    <main className={styles.homeMain}>
      <AppHeader />
      <Suspense fallback={<div>Loading</div>}>
        <HeroLazy />
      </Suspense>

      <PromoSekcijaJedan />

      <DodatneInformacije />
    </main>
  );
}
