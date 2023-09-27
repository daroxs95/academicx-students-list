export interface StudentListApiResponse {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  campus: string;
  students: Student[];
}

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  programName: string;
  degree: string;
  photo: Photo;
  startDate: string;
  campus: string;
}

export interface Photo {
  title: string;
  file: string;
}
