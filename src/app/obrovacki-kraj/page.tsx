import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import PageContent from './PageContent';
import styles from '../styles/obrovackiKraj.module.scss';
import { Suspense } from 'react';
import Loading from './loading';

export default async function ObrovackiKraj() {
  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.sectionMain}>
        <AppHeader />
        <PageContent />
        <AppFooter />
      </main>
    </Suspense>
  );
}
