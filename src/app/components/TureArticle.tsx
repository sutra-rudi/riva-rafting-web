'use client';

import React from 'react';
import style from '../styles/turePonuda.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { UserLanguage } from '../types/appState';
import { useSearchParams } from 'next/navigation';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import img1 from '../img/aktivnosti-hero-update-slike/pjesacke-ture/waking tour gallery-6.png';
import img2 from '../img/aktivnosti-hero-update-slike/kayakTura/Kayak gallery-2.png';
import img3 from '../img/aktivnosti-hero-update-slike/pjesacke-ture/waking tour gallery-4.png';
import img4 from '../img/aktivnosti-hero-update-slike/kayakTura/Kayak gallery-1.png';
import paketAranzman from '../img/paket aranzman.jpg';
import Lightbox from 'yet-another-react-lightbox';

import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface TureKarticaData {
  subtitle: string;
  title: string;
  content: string;
  isCTA: boolean;
  imageSRC: StaticImageData;
  isDoubleCta?: boolean;
  listSpecialOffer?: string[];
  isJobAd?: boolean;
  lng?: string;
}

const slideImgNewTour = [img1, img2, img3, img4];

const TureArticle = (props: TureKarticaData) => {
  const { subtitle, title, content, isCTA, imageSRC, isDoubleCta, listSpecialOffer, isJobAd, lng } = props;
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const [openLightbox, setOpenLightbox] = React.useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const slideOptions = {
    type: 'fade',
    drag: 'false',
    snap: false,
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 1500,
  };

  const parseLink =
    checkParams === UserLanguage.hr ? `/kontakt?lang=${UserLanguage.hr}` : `/kontakt?lang=${UserLanguage.en}`;

  const parseJobAd = checkParams === UserLanguage.hr ? 'Pogledaj oglas' : 'Check advertisment';

  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  function DjelatnikUPutnickojAgenciji() {
    return (
      <div className={style.jobContainer}>
        <h1>DJELATNIK/DJELATNICA U PUTNIČKOJ AGENCIJI</h1>

        <button role='button' className={style.closeButton} onClick={() => setOpenModal(false)}>
          X
        </button>

        <div className={style.content}>
          <div className={style.contentBlock}>
            <div className=''>
              <h2>RADNO MJESTO:</h2>
              <p>Djelatnik/Djelatnica u putničkoj agenciji</p>

              <p>
                Mjesto rada: <strong>Obrovac</strong>
              </p>
              <p>
                Broj traženih radnika: <strong>1</strong>
              </p>
              <p>
                Vrsta zaposlenja: <strong>Na određeno; sezonski</strong>
              </p>
              <p>
                Radno vrijeme: <strong>Smjena - prijepodne</strong>
              </p>
              <p>
                Smještaj: <strong>Osiguran smještaj i topli obrok</strong>
              </p>
            </div>

            <div className=''>
              <h2>OPIS POSLOVA / ODGOVORNOSTI:</h2>
              <ul>
                <li>Komunikacija s gostima te pružanje informacija o izletima i cijenama</li>
                <li>Prodaja izleta i naplata usluga</li>
                <li>Organizacija rasporeda izleta i ostalih aktivnosti u ponudi agencije</li>
                <li>Odgovaranje na e-mail upite gostiju</li>
                <li>Ostali administrativni poslovi u sklopu rada turističke agencije</li>
                <li>Vozačka dozvola B kategorije</li>
              </ul>
            </div>
          </div>

          <div className={style.contentBlock}>
            <div className=''>
              <h2>RADNO POTREBNA ZNANJA I VJEŠTINE:</h2>
              <ul>
                <li>Srednja stručna sprema</li>
                <li>Znanje engleskog jezika (znanje dodatnih jezika je prednost)</li>
                <li>Izražene komunikacijske i prodajne vještine</li>
                <li>Informatička pismenost</li>
                <li>Pouzdanost i odgovornost</li>
                <li>Sposobnost timskog rada</li>
              </ul>
            </div>
            <div className=''>
              <h2>POSLODAVAC:</h2>
              <p>Riva Rafting Centar, Putnička Agencija d.o.o.</p>
              <p>Kontakt osoba: Đuro Župan</p>
              <span>
                Prijave i životopise šaljite na:{' '}
                <a href='mailto:info@riva-rafting-centar.hr'>info@riva-rafting-centar.hr</a>
              </span>
              <p>Natječaj je otvoren do: 15.03.2025.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function TravelAgencyEmployee() {
    return (
      <div className={style.jobContainer}>
        <h1>TRAVEL AGENCY EMPLOYEE</h1>

        <button role='button' className={style.closeButton} onClick={() => setOpenModal(false)}>
          X
        </button>

        <div className={style.content}>
          <div className={style.contentBlock}>
            <div className=''>
              <h2>JOB POSITION:</h2>
              <p>Employee in a travel agency</p>

              <p>
                Work location: <strong>Obrovac</strong>
              </p>
              <p>
                Number of workers needed: <strong>1</strong>
              </p>
              <p>
                Type of employment: <strong>Temporary; seasonal</strong>
              </p>
              <p>
                Working hours: <strong>Morning shift</strong>
              </p>
              <p>
                Accommodation: <strong>Accommodation and warm meal provided</strong>
              </p>
            </div>

            <div className=''>
              <h2>JOB DESCRIPTION / RESPONSIBILITIES:</h2>
              <ul>
                <li>Communicating with guests and providing information on tours and prices</li>
                <li>Selling tours and processing payments</li>
                <li>Organizing the schedule of tours and other activities offered by the agency</li>
                <li>Responding to guest email inquiries</li>
                <li>Other administrative tasks within the scope of the travel agency</li>
                <li>Category B driving license</li>
              </ul>
            </div>
          </div>

          <div className={style.contentBlock}>
            <div className=''>
              <h2>REQUIRED KNOWLEDGE AND SKILLS:</h2>
              <ul>
                <li>High school diploma</li>
                <li>Knowledge of English (knowledge of additional languages is an advantage)</li>
                <li>Strong communication and sales skills</li>
                <li>Computer literacy</li>
                <li>Reliability and responsibility</li>
                <li>Ability to work in a team</li>
              </ul>
            </div>
            <div className=''>
              <h2>EMPLOYER:</h2>
              <p>Riva Rafting Centar, Travel Agency Ltd.</p>
              <p>Contact person: Đuro Župan</p>
              <span>
                Send applications and CVs to:{' '}
                <a href='mailto:info@riva-rafting-centar.hr'>info@riva-rafting-centar.hr</a>
              </span>
              <p>The job opening is available until: March 15, 2025.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className={isCTA ? `${style.tureArticle}` : `${style.tureArticle} ${style.articleReverse}`}>
      {isJobAd && (
        <dialog className={style.dialogAd} open={openModal}>
          {lng === UserLanguage.hr ? <DjelatnikUPutnickojAgenciji /> : <TravelAgencyEmployee />}
        </dialog>
      )}
      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        plugins={[Zoom]}
        slides={[
          {
            src: paketAranzman.src,
            imageFit: 'contain',
            width: paketAranzman.width,
            height: paketAranzman.height,
            alt: 'Promotional flyer for Riva Rafting tour',
          },
        ]}
      />
      <div className={style.imgHolder}>
        {isDoubleCta ? (
          <Splide className={style.swiperParent} options={slideOptions}>
            {slideImgNewTour.map((img) => (
              <SplideSlide key={img.src} className={style.swiperSlide}>
                <Image
                  fill
                  src={img.src}
                  alt='Offer image'
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL={img.blurDataURL}
                />
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <Image
            src={imageSRC}
            fill
            alt='Offer image'
            loading='lazy'
            placeholder='blur'
            blurDataURL={imageSRC.blurDataURL}
          />
        )}
      </div>
      <div className={style.contentHolder}>
        <div>
          <h4 className={style.contentSubtitle}>{subtitle}</h4>
          <h2 className={style.contentTitle}>{title}</h2>
        </div>
        <p className={style.contentText}>{content}</p>
        {listSpecialOffer && (
          <ul>
            {listSpecialOffer.map((lis) => (
              <li key={lis}>{lis}</li>
            ))}
          </ul>
        )}

        {isJobAd && (
          <button className={style.contactCtaTura} onClick={() => setOpenModal(true)}>
            <span>{parseJobAd}</span>
          </button>
        )}
        {isCTA && !isDoubleCta && (
          <Link href={parseLink} className={style.contactCtaTura}>
            <span>{checkParams === UserLanguage.hr ? 'Kontaktirajte nas' : 'Contact us'}</span>
          </Link>
        )}

        {isCTA && isDoubleCta && (
          <div className={style.contactCtaTuraNoviBlok}>
            <Link
              className={style.contactCtaTura}
              href={'https://fareharbor.com/embeds/book/rivaraftingcentar/?full-items=yes'}
            >
              <span>{parseByLang('Online rezervacija', 'Online booking')}</span>
            </Link>

            <div onClick={() => setOpenLightbox(true)} className={style.contactCtaTura}>
              <span>{checkParams === UserLanguage.hr ? 'Više o paketu' : 'More about package'}</span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default TureArticle;
