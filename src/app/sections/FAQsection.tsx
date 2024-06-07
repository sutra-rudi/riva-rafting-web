'use client';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import styles from '../styles/faqSection.module.scss';

import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
const FAQsection = () => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );
  return (
    <section id='FAQ' className={styles.faqSection}>
      {/* MAIN CONT START */}
      <div className={styles.masterContainer}>
        <div className={styles.sectionHeading}>
          <h2>{parseByLang('NAJČEŠĆA PITANJA', 'FREQUENTLY ASKED QUESTIONS')}</h2>
        </div>
        <div className={styles.faqContainer}>
          <Accordion allowZeroExpanded className={styles.accordion}>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  {parseByLang(
                    'Minimalan broj osoba za pješačku turu Kudin most?',
                    'What is the minimum number of people for the Kudin Most hiking tour?'
                  )}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  {parseByLang(
                    'Minimalan broj osoba u grupi sa lokalnim vodičem je 6.',
                    'The minimum number of people in a group with a local guide is 6.'
                  )}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  {parseByLang('Koliko traje kayak/rafting tura?', 'How long does the kayak/rafting tour last?')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  {parseByLang(
                    'Rafting i kayak tura nisu istog trajanja, razlika je u približno satu vremena. Rafting tura traje oko 2:30 sata, obzirom da se raftovima ide kad je vodostaj viši i rijeka puno brža tako i sam izlet traje kraće. Kayak tura traje oko 3:30 sata i aktivna je kada je vodostaj rijeke nešto niži. Ovo je naravno zlatna sredina i svaka tura je individualna na način da je brzina i kayak i rafting ture naravno onolika kolika je brzina najsporijeg veslača u grupi.',
                    'The rafting and kayaking tours do not last the same duration; there is a difference of approximately one hour. The rafting tour lasts about 2:30 hours because it takes place when the water level is higher and the river is much faster, thus the trip is shorter. The kayak tour lasts about 3:30 hours and is active when the river water level is lower. This is, of course, the golden mean, and each tour is individual in the way that the speed of both the kayak and rafting tours is, of course, as fast as the slowest rower in the group.'
                  )}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  {parseByLang(
                    'Kako se vratimo sa cilja kayak/rafting ture na start po automobile?',
                    'How do we return from the end of the kayak/rafting tour to the start to get our cars?'
                  )}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  {parseByLang(
                    'Pri dolasku na cilj staze, gosti se presvlače u suhu odjeću koju smo dovezli našim vozilima na cilj. Nakon kratkog predaha organizira se povratak po vozila. Na službeni start voze se isključivo samo vozači automobila. Ostatak grupe ostaje na cilju gdje čekaju vozače sa osobnim automobilima da se vrate po njih.',
                    'Upon arrival at the end of the trail, guests change into dry clothes that we brought to the destination with our vehicles. After a short break, the return to the vehicles is organized. Only the drivers of the cars are driven to the official starting point. The rest of the group stays at the destination, waiting for the drivers to return with their personal vehicles.'
                  )}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  {parseByLang('Postoji li vodič u kayak turi?', 'Is there a guide on the kayak tour?')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  {parseByLang(
                    'Vodič u kayak turi postoji, te ovisno o veličini same grupe broj vodiča raste. Ponekad grupe imaju i 3 vodiča iako je najčešća situacija da grupu vode 2 vodiča.',
                    'There is a guide on the kayak tour, and depending on the size of the group, the number of guides increases. Sometimes groups have 3 guides, although the most common situation is that the group is led by 2 guides.'
                  )}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowZeroExpanded className={styles.accordion}>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  {parseByLang(
                    'Koji uzrast može ići na kayak/rafting turu?',
                    'What age group can go on the kayak/rafting tour?'
                  )}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  {parseByLang(
                    'Donja granica je 5 godina. Vrlo je važno napomenuti da u slučaju vrlo visoke vode dob djece se naravno mijenja. To se najčešće odnosi na rafting ture. Kod kayak tura ova dob je odobrena i vrlo je važno napomenuti da djeca obavezno u kayak idu sa odraslom osobom - roditelj/staratelj odgovoran za maloljetnika.',
                    'The minimum age is 5 years. It is very important to note that in the case of very high water levels, the age of children naturally changes. This most often applies to rafting tours. For kayak tours, this age is approved and it is very important to note that children must go in the kayak with an adult - a parent/guardian responsible for the minor.'
                  )}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  {parseByLang('Gdje starta kayak/rafting tura?', 'Where does the kayak/rafting tour start?')}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  {parseByLang(
                    'Službeni start rafting/kayak ture nalazi se u Kaštel Žegarskom. Na ovoj lokaciji okuplja se grupa, parkira svoje automobile, preuzima opremu potrebnu za spust i ulazi u rijeku.',
                    'The official start of the rafting/kayak tour is located in Kaštel Žegarski. At this location, the group gathers, parks their cars, picks up the necessary equipment for the descent, and enters the river.'
                  )}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  {parseByLang(
                    'Što ponijeti sa sobom na kayak/rafting turu?',
                    'What to bring with you on the kayak/rafting tour?'
                  )}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  {parseByLang(
                    'Svaki gost trebao bi imati kremu za sunce, tenisice sa kojima može u vodu, dodatnu presvlaku koju sa ručnikom šalje na cilj te po volji hranu i piće. Od strane organizatora osigurane su vodonepropusne bačvice u koje se mogu staviti predmeti koje želite sa sobom u kanjonu. Organizator nije odgovoran za elektronske uređaje poput mobilnih telefona, fotoaparata, GoPro kamera i sl. U slučaju da želite sa sobom nositi naočale za sunce ili vid, predlažemo da ih osigurate prikladnom trakom oko vrata ili osigurate za pojas za spašavanje.',
                    'Each guest should have sunscreen, sneakers that can go in the water, an additional change of clothes and a towel sent to the destination, and optionally food and drinks. Waterproof barrels are provided by the organizer in which items you want to take with you into the canyon can be placed. The organizer is not responsible for electronic devices such as mobile phones, cameras, GoPro cameras, etc. If you want to bring sunglasses or glasses, we suggest securing them with an appropriate strap around your neck or securing them to the life jacket.'
                  )}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* MAIN CONT END */}
    </section>
  );
};

export default FAQsection;
