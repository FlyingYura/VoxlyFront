export interface CourseTopic {
  id: string;
  title: string;
  description?: string;
  order: number;
  progress?: number;
  subtopics?: CourseSubtopic[];
  testId?: string;
}

export interface CourseSubtopic {
  id: string;
  title: string;
  type: 'theory' | 'video' | 'practice' | 'test';
  content?: string;
  materials?: LearningMaterial[];
  testId?: string;
  order: number;
  completed?: boolean;
}

export interface Course {
  id: string;
  title: string;
  language: string;
  level: 'Початковий' | 'Середній' | 'Продвинутий';
  duration: string;
  price: number;
  description: string;
  instructor: string;
  studentsCount: number;
  schedule?: ScheduleItem[];
  materials?: LearningMaterial[];
  tests?: Test[];
  topics?: CourseTopic[];
  roadmap?: CourseTopic[];
}

export interface ScheduleItem {
  id: string;
  courseId: string;
  dayOfWeek: string;
  time: string;
  duration: number;
  type: 'Лекція' | 'Практика' | 'Консультація';
  topic?: string;
  date?: string;
}

export interface LearningMaterial {
  id: string;
  courseId: string;
  topicId?: string;
  subtopicId?: string;
  title: string;
  type: 'PDF' | 'Відео' | 'Аудіо' | 'Презентація' | 'Текст';
  url: string;
  description: string;
  uploadDate: string;
  content?: string;
  xp?: number;
}

export interface Test {
  id: string;
  courseId: string;
  title: string;
  description: string;
  questions: TestQuestion[];
  timeLimit?: number;
}

export interface TestQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'text';
  options?: string[];
  correctAnswer: string | string[];
  points: number;
}

export interface TestResult {
  testId: string;
  userId: string;
  score: number;
  maxScore: number;
  answers: Record<string, string | string[]>;
  completedAt: string;
}

export interface Instructor {
  id: string;
  name: string;
  language: string;
  experience: string; 
  rating: number;
  students: number;
  description: string;
  image?: string; 
  specialization?: string; 
  bio?: string; 
}

export interface User {
  id: string;
  email: string;
  name: string;
  enrolledCourses: string[];
  paidCourses: string[];
  testResults: TestResult[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

