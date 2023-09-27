import React from 'react';
import Image from 'next/image';
import styles from './StudentCard.module.css';

type Props = {
  name: string;
  program: string;
  degree: string;
  campus: string;
  start: Date;
  image: string;
  className?: string;
};

function StudentCard({name, degree, program, campus, start, image, className}: Props) {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.image_container}>
        <Image src={image} alt={name} width={200} height={200} />
      </div>
      <div className={styles.info_container}>
        <div className={styles.name}>{name}</div>
        <ul className={styles.info_list}>
          <li className={styles.info_item}>
            <p>Program</p>
            <p>{program}</p>
          </li>
          <li className={styles.info_item}>
            <p>Degree</p>
            <p>{degree}</p>
          </li>
          <li className={styles.info_item}>
            <p>Campus</p>
            <p>{campus}</p>
          </li>
          <li className={styles.info_item}>
            <p>Start Date</p>
            <p>{start.toLocaleDateString()}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StudentCard;
