import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../styles/promoSekcijaJedan.module.scss';
import arrowIcon from '../img/strelica-desno.svg';
import locationIcon from '../img/lokacija-ikonica.svg';
interface RaftingCardProps {
  title: string;
  location: string;
  imageUrl: StaticImageData;
}

const RaftingCard = (props: RaftingCardProps) => {
  const { title, location, imageUrl } = props;

  return (
    <div className={styles.raftingCard}>
      <Image className={styles.raftingImage} src={imageUrl} fill alt='rafting img' />
      <div className={styles.raftingCartInteractiveOverlay}>
        <div className={styles.interactiveOverlayTitleCont}>
          <h5 className={styles.cardTitle}>{title}</h5>
          <p className={styles.cardLocation}>
            <span>
              <Image src={locationIcon} width={13} height={13} alt='arrow' className={styles.cardLocationIcon} />
            </span>
            {location}
          </p>
        </div>
        <Image src={arrowIcon} width={33} height={33} alt='arrow' className={styles.cardArrowIcon} />
      </div>
    </div>
  );
};

export default RaftingCard;
