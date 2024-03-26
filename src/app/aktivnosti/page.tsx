import React, { Suspense } from 'react';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import styles from '../styles/page.module.scss';
import DodatneInformacije from '../sections/DodatneInformacije';
import NajpopularnijeTure from '../sections/NajpopularnijeTure';
import TripAdvisorSekcija from '../sections/TripAdvisorSekcija';
import AktivnostPrva from '../sections/AktivnostPrva';
import Loading from './loading';
export default function Aktivnosti() {
  const mapboxApiKey = process.env.MAPBOX_API_KEY;
  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.aktivnostiMain}>
        <AppHeader />
        <AktivnostPrva apiKey={mapboxApiKey as string} />
        <DodatneInformacije isLanding={false} />
        <TripAdvisorSekcija />
        <NajpopularnijeTure isLanding={false} />
        <AppFooter />
      </main>
    </Suspense>
  );
}
