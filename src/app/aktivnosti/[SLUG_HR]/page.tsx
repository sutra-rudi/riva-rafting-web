export const metadata = {
  title: 'Article',
};
// import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '../loading';

import demoData from '../../../../public/webdata/webcontent.json';
import AppButton from '@/app/components/AppButton';
import styles from '../../styles/aktivnost.module.scss';
import AppHeader from '@/app/components/AppHeader';
import AppFooter from '@/app/components/AppFooter';
import DodatneInformacije from '@/app/sections/DodatneInformacije';
import TripAdvisorSekcija from '@/app/sections/TripAdvisorSekcija';
import NajpopularnijeTure from '@/app/sections/NajpopularnijeTure';
import PaperDividTop from '@/app/components/PaperDividTop';
import PaperDividBotAlt from '@/app/components/PaperDivitBotAlt';
import Image from 'next/image';

export default async function ActivityDetails({ params }: { params: { SLUG_HR: string } }) {
  const findData = demoData.find((iten) => String(iten.SLUG_HR).toLowerCase() === String(params.SLUG_HR).toLowerCase());

  // console.log(params.SLUG_HR);

  const parseBulletPoints = (strBlock: string) =>
    strBlock.split('\n').map((item, index) => <li key={index}>{item}</li>);
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.aktivnost}>
        <div className={styles.aktivnostHero}>
          <PaperDividTop />
          {/* <Image fill src={nest.find((item) => item.id === findData?.ID)?.slika.src} alt='hero' /> */}
          <div className={styles.heroHeader}>
            <h1>{findData?.NASLOV_AKTIVNOSTI_HERO_HR}</h1>
            <AppButton content='Rezervirajte svoj termin' />
          </div>
          <PaperDividBotAlt />
        </div>
        {/* MAIN CONT START */}
        <div className={styles.masterContainer}>
          <div className={styles.contentContainer}>
            {/* <StickyBox offsetTop={20} offsetBottom={20} className={styles.swiperSticky}>
                <Slider className={styles.swiperTop} asNavFor={nav2} ref={(slider) => (sliderRef1 = slider as any)}>
                  <div className={styles.swiperSlide}>
                    <Image fill src={slika1} alt='slika' />
                  </div>
                  <div className={styles.swiperSlide}>
                    <Image fill src={slika2} alt='slika' />
                  </div>
                  <div className={styles.swiperSlide}>
                    <Image fill src={slika3} alt='slika' />
                  </div>
                  <div className={styles.swiperSlide}>
                    <Image fill src={slika4} alt='slika' />
                  </div>
                  <div className={styles.swiperSlide}>
                    <Image fill src={slika5} alt='slika' />
                  </div>
                </Slider>

                <Slider
                  asNavFor={nav1}
                  ref={(slider) => (sliderRef2 = slider as any)}
                  // slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  {...settings}
                >
                  <div className={styles.swiperSlide}>
                    <Image fill src={slika1} alt='slika' />
                  </div>
                  <div className={styles.swiperSlide}>
                    <Image fill src={slika2} alt='slika' />
                  </div>
                  <div className={styles.swiperSlide}>
                    <Image fill src={slika3} alt='slika' />
                  </div>
                  <div className={styles.swiperSlide}>
                    <Image fill src={slika4} alt='slika' />
                  </div>
                  <div className={styles.swiperSlide}>
                    <Image fill src={slika5} alt='slika' />
                  </div>
                </Slider>
              </StickyBox> */}

            <article className={styles.activityArticle}>
              <div className={styles.articleTopContent}>
                <h6>{findData?.NADNASLOV}</h6>
                <h2>{findData?.NASLOV}</h2>
                <div className={styles.articleContentTextContainer}>
                  <p>{findData?.TEKST}</p>
                </div>
                <div className={styles.articleButtonStack}>
                  <AppButton content='Rezerviraj termin' />
                  <AppButton content='Imaš pitanje?' />
                </div>
              </div>

              <div className={styles.articleDetails}>
                <div className={styles.articleBlock}>
                  <h4 className={styles.articleBlockHeading}>{findData?.OSNOVNE_INFORMACIJE_O_TURI}</h4>

                  <div className={styles.articleInfo}>
                    <ul>
                      <li>
                        DESTINACIJA: <span>{findData?.['DESTINACIJA:']}</span>
                      </li>
                      <li>
                        CIJENA: <span>{findData?.['CIJENA:']}</span>
                      </li>
                      <li>
                        AKTIVNOST: <span>{findData?.['AKTIVNOST:']}</span>
                      </li>
                      <li>
                        MINIMALNA DOB: <span>{findData?.['MINIMALNA_DOB:']}</span>
                      </li>
                      <li>
                        ZAHTJEVNOST: <span>{findData?.['ZAHTJEVNOST:']}</span>
                      </li>
                      <li>
                        VELIČINA GRUPE: <span>{findData?.['VELIČINA_GRUPE:']}</span>
                      </li>
                      <li>TRAJANJE: {findData?.['TRAJANJE:']}</li>
                      <li>
                        DULJINA: <span>{findData?.['DULJINA:']}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.articleBlock}>
                  <div className={styles.articleBlockHeading}>
                    <h4>{findData?.['NASLOV:_PLAN_TURE']}</h4>
                  </div>

                  <div className={styles.articleInfo}>
                    <ul>
                      {findData?.Sadržaj_bulleti.split('\n').map((str, index) => (
                        <li key={index}>{str}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.articleBlock}>
                  <div className={styles.articleBlockHeading}>
                    <h4>{findData?.['NASLOV:Uzeti_sa_sobom']}</h4>
                  </div>

                  <div className={styles.articleInfo}>
                    <p>OBAVEZNO:</p>
                    <ul>{parseBulletPoints(findData?.OBAVEZNO as string)}</ul>
                    <p>PO ŽELJI:</p>
                    <ul>{parseBulletPoints(findData?.PO_ŽELJI as string)}</ul>
                    <p>SAVJETUJEMO:</p>
                    <ul>{parseBulletPoints(findData?.SAVJETUJEMO as string)}</ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* MAIN CONT END */}

        <div className={styles.mapboxContainer}>
          <PaperDividTop />
          <PaperDividBotAlt />
        </div>

        <DodatneInformacije isLanding={false} />
        <TripAdvisorSekcija />
        <NajpopularnijeTure isLanding={false} />
        <AppFooter />
      </main>
    </Suspense>
  );
}
