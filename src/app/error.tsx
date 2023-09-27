'use client';
import {useEffect} from 'react';
import styles from './page.module.css';

export default function Error({error, reset}: {error: Error; reset: () => void}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      className={styles.main}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
      }}
    >
      Something went wrong!
      {/* <button onClick={() => reset()}>Try again</button> */}
    </main>
  );
}
