import AppHeader from './components/AppHeader';
import DodatneInformacije from './sections/DodatneInformacije';
import styles from './styles/page.module.scss';
export default function Home() {
  return (
    <main className={styles.homeMain}>
      <AppHeader />
      <DodatneInformacije />
    </main>
  );
}
