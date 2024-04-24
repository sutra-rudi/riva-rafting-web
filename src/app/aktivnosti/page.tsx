import React, { Suspense } from 'react';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import styles from '../styles/page.module.scss';
import DodatneInformacije from '../sections/DodatneInformacije';
import Loading from './loading';
export default async function Aktivnosti() {
  return (
    <main className={styles.aktivnostiMain}>
      <AppHeader />
      <Suspense fallback={<Loading />}>
        <DodatneInformacije isLanding={false} />
      </Suspense>

      <AppFooter />
    </main>
  );
}
