'use client';

import React, { MutableRefObject } from 'react';
import styles from '../styles/aktivnostPrva.module.scss';
import Image from 'next/image';
import slika1 from '../img/karuzel1.png';
import slika2 from '../img/karuzel2.png';
import slika3 from '../img/karuzel3.png';
import slika4 from '../img/karuzel4.png';
import slika5 from '../img/imag3.png';
import StickyBox from 'react-sticky-box';
import AppButton from '../components/AppButton';
import mapboxgl from 'mapbox-gl';
import aktivnostHero from '../img/AKTIVNOSTI-HERO.png';
import PaperDividBotAlt from '../components/PaperDivitBotAlt';
import PaperDividTop from '../components/PaperDividTop';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface AktivnostInterface {
  apiKey: string;
}

const AktivnostPrva = (props: AktivnostInterface) => {
  const mapContainer = React.useRef<any>(null);
  const map = React.useRef<any>(null);
  let sliderRef1 = React.useRef<MutableRefObject<Slider | null | any>>(null);
  let sliderRef2 = React.useRef<MutableRefObject<Slider | null | any>>(null);
  const [nav1, setNav1] = React.useState<any>(null);
  const [nav2, setNav2] = React.useState<any>(null);

  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/lovreperaic/clu5id29e00ud01qs2gbfabi4',
      accessToken: props.apiKey,

      // center: [lng, lat],
      // zoom: zoom,
    });

    map.current.scrollZoom.disable();
  }, [props.apiKey]);

  React.useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const settings = {
    dots: false,
    speed: 1500,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.2,
          // slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          // slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.2,
          // slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.aktivnostPrva}>
      <div className={styles.aktivnostHero}>
        <PaperDividTop />
        <Image fill src={aktivnostHero} alt='hero' />
        <div className={styles.heroHeader}>
          <h1>Pješačka tura</h1>
          <AppButton content='Rezervirajte svoj termin' />
        </div>
        <PaperDividBotAlt />
      </div>
      {/* MAIN CONT START */}
      <div className={styles.masterContainer}>
        <div className={styles.contentContainer}>
          <StickyBox offsetTop={20} offsetBottom={20} className={styles.swiperSticky}>
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
          </StickyBox>

          <article className={styles.activityArticle}>
            <div className={styles.articleTopContent}>
              <h6>PJEŠAČKA TURA</h6>
              <h2>Pješačenje je najbolji način da dođete do posebnih dijelova našeg zavičaja</h2>
              <div className={styles.articleContentTextContainer}>
                <p>
                  Najatraktivnija pješačka staza je Kudin Most i započinje u selu Ravni Golubić odakle nas vodi grebenom
                  Vratolom do ušća Krupe u Zrmanju uz predivne poglede na niz Krupinih slapova, podno Babinog Grada.
                </p>
                <p>
                  Staza dalje vodi uzvodno uz Krupu. Neposredno pred Kudinim mostom staza se diže na rub kanjona od kuda
                  se pruža prekrasan pogled pojedine dionice kanjona Krupe što omogućava oko 150 metara visoka stijena
                  koja se okomito diže iz rijeke. Kudin most je jedino mjesto gdje se može prijeći na lijevu obalu
                  Krupe. Taj stari most je povijesni spomenik nulte kategorije satkan od 13 lukova vješto složenih od
                  tesane sedre.
                </p>
                <p>
                  U sklopu pješačke ture Kudin most, svakako predlažemo obilazak manastira Krupa koji se nalazi blizu
                  izvora rijeke Krupe, a sagrađen je 1317. godine. U sklopu manastira za posjetitelje je otvoren i muzej
                  s velikom zbirkom ikona, knjiga i drugih vrijednosti.
                </p>
              </div>
              <div className={styles.articleButtonStack}>
                <AppButton content='Rezerviraj termin' />
                <AppButton content='Imaš pitanje?' />
              </div>
            </div>

            <div className={styles.articleDetails}>
              <div className={styles.articleBlock}>
                <h4 className={styles.articleBlockHeading}>OSNOVNE INFORMACIJE O TURI</h4>

                <div className={styles.articleInfo}>
                  <ul>
                    <li>DESTINACIJA: Rijeka Zrmanja, Krupa I Krnjeza</li>
                    <li>CIJENA: 10 EUR</li>
                    <li>AKTIVNOST: Pješačka Tura</li>
                    <li>MINIMALNA DOB: 5+ godina</li>
                    <li>ZAHTJEVNOST: Srednja</li>
                    <li>VELIČINA GRUPE: min 6 osoba</li>
                    <li>TRAJANJE: 2 sata</li>
                    <li>DULJINA: 4 km</li>
                  </ul>
                </div>
              </div>

              <div className={styles.articleBlock}>
                <div className={styles.articleBlockHeading}>
                  <h4>Plan ture</h4>
                </div>

                <div className={styles.articleInfo}>
                  <ul>
                    <li>Dolazak na Mićanove Dvore</li>
                    <li>Polazak prema startu</li>
                    <li>Rezervacija (zajednički transfer)</li>
                    <li>Dolazak na start</li>
                    <li>Sigurnosni protokol i kretanje na stazu</li>
                    <li>Pauza na stazi </li>
                    <li>Povratak na start / cilj</li>
                    <li> Povratak na Mićanove Dvore</li>
                  </ul>
                </div>
              </div>

              <div className={styles.articleBlock}>
                <div className={styles.articleBlockHeading}>
                  <h4>UZETI SA SOBOM</h4>
                </div>

                <div className={styles.articleInfo}>
                  <p>OBAVEZNO:</p>
                  <ul>
                    <li>dodatna majica i kupaći kostim </li>
                    <li>tenisice za šetnju</li>
                    <li>ručnik</li>
                  </ul>
                  <p>PO ŽELJI:</p>
                  <ul>
                    <li>mobitel </li>
                    <li>fotoaparat</li>
                    <li>sunčane naočale</li>
                    <li>krema protiv sunca</li>
                  </ul>
                  <p>SAVJETUJEMO:</p>
                  <ul>
                    <li>Min. 0,5l vode</li>
                    <li>sendvič</li>
                    <li>voće</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* MAIN CONT END */}

      <div className={styles.mapboxContainer} ref={mapContainer}>
        <PaperDividTop />
        <PaperDividBotAlt />
      </div>
    </section>
  );
};

export default AktivnostPrva;
