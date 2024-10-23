import dynamic from 'next/dynamic';
import styles from '../styles/obrovackiKraj.module.scss';
const PageContent = dynamic(() => import('./PageContent'));

export default async function ObrovackiKraj() {
  return (
    <main className={styles.sectionMain}>
      <PageContent />
    </main>
  );
}
