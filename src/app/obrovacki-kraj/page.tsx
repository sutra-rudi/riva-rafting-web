import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import styles from '../styles/obrovackiKraj.module.scss';
import { Suspense } from 'react';
import Loading from './loading';
import dynamic from 'next/dynamic';

const LazyContent = dynamic(() => import('./PageContent'));

export default async function ObrovackiKraj() {
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.sectionMain}>
        <LazyContent />
        <AppFooter />
      </main>
    </Suspense>
  );
}
