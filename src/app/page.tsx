import AppButton from './components/appButton';
import styles from './styles/page.module.scss';
export default function Home() {
  return (
    <main className={styles.homeMain}>
      <h2 className={styles.pageTitle}>Riva Rafting</h2>
      <AppButton content='Botun prvi' />
    </main>
  );
}
