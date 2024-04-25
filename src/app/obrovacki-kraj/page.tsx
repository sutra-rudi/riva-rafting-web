import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import styles from '../styles/obrovackiKraj.module.scss';
import { Suspense } from 'react';
import Loading from './loading';
import dynamic from 'next/dynamic';

export default async function ObrovackiKraj() {
  const LazyContent = dynamic(() => import('./PageContent'), { ssr: false });

  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.sectionMain}>
        <LazyContent />
      </main>
      <AppFooter />
    </Suspense>
  );
}
