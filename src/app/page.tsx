import AppHeader from './components/AppHeader';
import styles from './styles/page.module.scss';
export default function Home() {
  return (
    <main className={styles.homeMain}>
      <AppHeader />
    </main>
  );
}
