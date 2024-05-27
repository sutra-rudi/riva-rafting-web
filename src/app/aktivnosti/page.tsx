import React, { Suspense } from 'react';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import styles from '../styles/page.module.scss';
import DodatneInformacije from '../sections/DodatneInformacije';
import Loading from './loading';
import PromoSekcijaJedan from '../sections/PromoSekcijaJedan';
export default async function Aktivnosti() {
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.aktivnostiMain}>
        <PromoSekcijaJedan />
        <DodatneInformacije isLanding={false} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
