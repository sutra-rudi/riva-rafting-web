'use client';
import React from 'react';
import styles from '../styles/reviewsSection.module.scss';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';

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

  const splideOptions: any = {
    perPage: 5,
    type: 'slide',
    drag: 'free',
    snap: true,
    gap: '0.5rem',
    focus: 'center',
    pagination: false,
    arrows: false,
    autoplay: false,
    // interval: 2000,
    // rewind: true,

    breakpoints: {
      640: { perPage: 2.2 },
      960: { perPage: 3.2 },
      1200: { perPage: 5 },
    },
  };

  return (
    <section className={styles.sectionMain}>
      <Splide className={styles.swiper} options={splideOptions}>
        {shorthand.map((rec: any) => {
          return (
            <SplideSlide key={rec.node.id} className={styles.swiperSlide}>
              <Link href={rec.node.raftingRecenzijeFields.poveznicaNaRecenziju}>
                <p>
                  {parseByLang(
                    rec.node.raftingRecenzijeFields.tekstRecenzijeHr,
                    rec.node.raftingRecenzijeFields.tekstRecenzijeEn
                  )}
                </p>

                <p>{rec.node.raftingRecenzijeFields.imeMusterije}</p>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default ReviewsSection;
