import styles from '../styles/page.module.scss';
import DodatneInformacije from '../sections/DodatneInformacije';
import PromoSekcijaJedan from '../sections/PromoSekcijaJedan';
export default async function Aktivnosti() {
  return (
    <main className={styles.aktivnostiMain}>
      <PromoSekcijaJedan />
      <DodatneInformacije isLanding={false} />
    </main>
  );
}
