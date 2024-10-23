import styles from '../styles/page.module.scss';
import dynamic from 'next/dynamic';

const DodatneInformacije = dynamic(() => import('../sections/DodatneInformacije'));
const PromoSekcijaJedan = dynamic(() => import('../sections/PromoSekcijaJedan'));
export default async function Aktivnosti() {
  return (
    <main className={styles.aktivnostiMain}>
      <PromoSekcijaJedan />
      <DodatneInformacije isLanding={false} />
    </main>
  );
}
