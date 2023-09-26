import Image from 'next/image';
import styles from './page.module.css';
import { endpoints } from 'base/config';

export const runtime = 'edge';

async function getData() {
  const res = await fetch(endpoints.api.students);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return <main className={styles.main}>{data.name}</main>;
}
