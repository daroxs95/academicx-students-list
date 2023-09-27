import React from 'react';
import Image from 'next/image';
import styles from './StudentListItem.module.css';

type Props = {
  name: string;
  program: string;
  image: string;
  active?: boolean;
  className?: string;
  onClick?: () => void;
};

function StudentListItem({name, program, image, active, className, onClick}: Props) {
  return (
    <div
      className={`${styles.container} ${active ? styles.active : ''} ${className || ''}`}
      onClick={onClick}
    >
      <div className={styles.image_container}>
        <Image draggable="false" src={image} alt={name} width={120} height={120} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.program}>{program}</div>
    </div>
  );
}

export default StudentListItem;
