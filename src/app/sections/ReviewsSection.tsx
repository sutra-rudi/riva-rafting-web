'use client';
import React from 'react';
import styles from '../styles/reviewsSection.module.scss';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

interface ReviewsInterface {
  content: any;
}

const ReviewsSection = ({ content }: ReviewsInterface) => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const shorthand = content.data.allRivaRaftingRecenzije.edges;

  console.log('CONTET', shorthand);

  return (
    <section className={styles.sectionMain}>
      <div className={styles.reviewCardContainer}>
        {shorthand.map((rec: any) => {
          return (
            <div key={rec.node.id} className={styles.reviewCard}>
              <p>
                {parseByLang(
                  rec.node.raftingRecenzijeFields.tekstRecenzijeHr,
                  rec.node.raftingRecenzijeFields.tekstRecenzijeEn
                )}
              </p>

              <p>{rec.node.raftingRecenzijeFields.imeMusterije}</p>
            </div>
          );
        })}

        {/* <div className={styles.reviewCard}>
          <p>
            Imali smo predivnih 5 dana u Micanovim Dvorima. Osoblje je bilo super ljubazno i uslužno. Bili su spremni
            ispuniti svaku našu želju. Samo selo, kao i okolica, izvrsno je za opušten obiteljski odmor.
          </p>
          <p>Muller, DEBooking.com / 9.6*</p>
        </div>
        <div className={styles.reviewCard}>
          <p>
            Odlićna klopa,ambijent prva liga Kamp je prelijep sa bazenom i odbojkaskim igralistem.😀 sve u svemu odlićno
            👌
          </p>
          <p>Muller, DEBooking.com / 9.6*</p>
        </div>
        <div className={styles.reviewCard}>
          <p>
            Fantastično mjesto za aktivni boravak od raftinga do jahanja , te boravka i pješačenja prekrasnim krajevima
            uz Zrmanju i Velebit.Navečer ugodan doživljaj u konobi ili kupanje u bazenu
          </p>
          <p>Muller, DEBooking.com / 9.6*</p>
        </div>
        <div className={styles.reviewCard}>
          <p>
            Imali smo predivnih 5 dana u Micanovim Dvorima. Osoblje je bilo super ljubazno i uslužno. Bili su spremni
            ispuniti svaku našu želju. Samo selo, kao i okolica, izvrsno je za opušten obiteljski odmor.
          </p>
          <p>Muller, DEBooking.com / 9.6*</p>
        </div> */}
      </div>
    </section>
  );
};

export default ReviewsSection;
