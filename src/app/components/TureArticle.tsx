'use client';

import React from 'react';
import style from '../styles/turePonuda.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { UserLanguage } from '../types/appState';
import { useSearchParams } from 'next/navigation';

interface TureKarticaData {
  subtitle: string;
  title: string;
  content: string;
  isCTA: boolean;
  imageSRC: StaticImageData;
}

const TureArticle = (props: TureKarticaData) => {
  const { subtitle, title, content, isCTA, imageSRC } = props;
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const parseLink =
    checkParams === UserLanguage.hr ? `/kontakt?lang=${UserLanguage.hr}` : `/kontakt?lang=${UserLanguage.en}`;
  return (
    <article className={isCTA ? `${style.tureArticle}` : `${style.tureArticle} ${style.articleReverse}`}>
      <div className={style.imgHolder}>
        <Image src={imageSRC} fill alt='Offer image' />
      </div>
      <div className={style.contentHolder}>
        <div>
          <h4 className={style.contentSubtitle}>{subtitle}</h4>
          <h2 className={style.contentTitle}>{title}</h2>
        </div>
        <p className={style.contentText}>{content}</p>

        {isCTA && (
          <Link href={parseLink} className={style.contactCtaTura}>
            <span>{checkParams === UserLanguage.hr ? 'Kontaktirajte nas' : 'Contact us'}</span>
          </Link>
        )}
      </div>
    </article>
  );
};

export default TureArticle;
