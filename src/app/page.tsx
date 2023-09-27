import styles from './page.module.css';
import {endpoints} from 'base/config';
import CourseTitle from 'base/components/CourseTitle/CourseTitle';
import type {StudentListApiResponse} from 'base/types/students';
import StudentsSection from 'base/components/StudentsSection/StudentsSection';

export const runtime = 'edge';

async function getData() {
  const res = await fetch(endpoints.api.students);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<StudentListApiResponse>;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <CourseTitle
        end={new Date(data.endDate)}
        name={data.name}
        campus={data.campus}
        start={new Date(data.startDate)}
      />
      <StudentsSection students={data.students} />
    </main>
  );
}
