import React, { Suspense } from 'react';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import styles from '../styles/page.module.scss';
import DodatneInformacije from '../sections/DodatneInformacije';
import NajpopularnijeTure from '../sections/NajpopularnijeTure';

import Loading from './loading';
export default function Aktivnosti() {
  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.aktivnostiMain}>
        <AppHeader />
        <DodatneInformacije isLanding={false} />
        <NajpopularnijeTure isLanding={false} />
        <AppFooter />
      </main>
    </Suspense>
  );
}
