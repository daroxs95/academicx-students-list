'use client';
import {useState} from 'react';
import styles from './StudentsSection.module.css';
import StudentCard from 'base/components/StudentCard/StudentCard';
import type {Student} from 'base/types/students';
import StudentList from '../StudentList/StudentList';
import {constructImageUrl} from 'base/utils/url';
import {Swiper, SwiperSlide} from 'swiper/react';
import type {SwiperClass} from 'swiper/react';
import {EffectFade} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

type Props = {
  students: Student[];
};

function StudentsSection({students}: Props) {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const onSelectStudent = (student: Student) => {
    setSelectedStudent(student);
    swiper?.slideTo(students.indexOf(student));
  };

  return (
    <div className={styles.container}>
      <div className={styles.student_detail}>
        {selectedStudent && (
          <Swiper
            slidesPerView={1}
            centeredSlides
            onSwiper={swiper => setSwiper(swiper)}
            effect="fade"
            modules={[EffectFade]}
            className="fade_in"
          >
            {students.map(student => (
              <SwiperSlide key={student.id}>
                <StudentCard
                  className={styles.student_card}
                  campus={student.campus}
                  degree={student.degree}
                  image={constructImageUrl(student.photo.file)}
                  name={`${student.firstName} ${student.lastName}`}
                  program={student.programName}
                  start={new Date(student.startDate)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {/* {selectedStudent && (
          <StudentCard
            campus={selectedStudent.campus}
            degree={selectedStudent.degree}
            image={constructImageUrl(selectedStudent.photo.file)}
            name={`${selectedStudent.firstName} ${selectedStudent.lastName}`}
            program={selectedStudent.programName}
            start={new Date(selectedStudent.startDate)}
          />
        )} */}
      </div>
      <div className={styles.student_list}>
        <StudentList
          students={students}
          selectedStudent={selectedStudent}
          onSelectStudent={onSelectStudent}
          itemWidth={160}
        />
      </div>
    </div>
  );
}

export default StudentsSection;
