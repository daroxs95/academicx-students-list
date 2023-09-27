import React from 'react';
import styles from './CourseTitle.module.css';

type Props = {
  name: string;
  start: Date;
  end: Date;
  campus: string;
};

function CourseTitle({end, name, campus, start}: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{name}</h1>
      <h4 className={styles.date}>
        {start.toLocaleDateString()} - {end.toLocaleDateString()}
      </h4>
      <p className={styles.place}>{campus} Campus</p>
    </div>
  );
}

export default CourseTitle;
