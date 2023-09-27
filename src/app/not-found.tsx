import styles from './page.module.css';

export default async function NotFound() {
  return (
    <>
      <main
        className={styles.main}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
        }}
      >
        Upps, not found :(
      </main>
    </>
  );
}
