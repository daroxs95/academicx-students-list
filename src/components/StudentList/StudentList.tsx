import {useState} from 'react';
import StudentListItem from 'base/components/StudentListItem/StudentListItem';
import type {Student} from 'base/types/students';
import {constructImageUrl} from 'base/utils/url';
import {Swiper, SwiperSlide} from 'swiper/react';
import type {SwiperClass} from 'swiper/react';
import {Navigation, Scrollbar, A11y} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

type Props = {
  students: Student[];
  selectedStudent: Student | null;
  onSelectStudent?: (student: Student) => void;
  itemWidth?: number;
};

function StudentList({students, selectedStudent, onSelectStudent, itemWidth}: Props) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={'auto'}
      centeredSlides
      onSwiper={swiper => setSwiper(swiper)}
      modules={[Navigation, Scrollbar, A11y]}
      className="fade_in"
    >
      {/* {swiper && students.map(student => ( */}
      {students.map(student => (
        <SwiperSlide key={student.id} style={{width: itemWidth}}>
          <StudentListItem
            name={`${student.firstName} ${student.lastName}`}
            program={student.programName}
            image={constructImageUrl(student.photo.file)}
            active={student.id === selectedStudent?.id}
            onClick={() => {
              swiper?.slideTo(students.indexOf(student));
              if (onSelectStudent) onSelectStudent(student);
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default StudentList;
