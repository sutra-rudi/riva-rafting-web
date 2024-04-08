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
const FAQsection = () => {
  return (
    <section className={styles.faqSection}>
      {/* MAIN CONT START */}
      <div className={styles.masterContainer}>
        <div className={styles.sectionHeading}>
          <h2>NAJČEŠĆA PITANJA</h2>
        </div>
        <div className={styles.faqContainer}>
          <Accordion allowZeroExpanded className={styles.accordion}>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim
                  minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor
                  laboris sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor
                  laboris sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor
                  laboris sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor
                  laboris sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowZeroExpanded className={styles.accordion}>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim
                  minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor
                  laboris sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor
                  laboris sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor
                  laboris sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor
                  laboris sed adipisicing eu esse duis nulla non.
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
