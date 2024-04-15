import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import PageContent from './PageContent';
import styles from '../styles/obrovackiKraj.module.scss';

export default async function ObrovackiKraj() {
  return (
    <main className={styles.sectionMain}>
      <AppHeader />
      <PageContent />
      <AppFooter />
    </main>
  );
}
