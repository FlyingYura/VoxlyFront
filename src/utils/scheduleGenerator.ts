import type { Course, ScheduleItem } from '../types';

const daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
const types: Array<'Лекція' | 'Практика'> = ['Лекція', 'Практика'];

/**
 * Отримує дату наступного дня тижня для конкретного тижня
 */
const getDateForDay = (dayOfWeek: string, weekOffset: number = 0, startDate: Date = new Date()): Date => {
  const dayIndex = daysOfWeek.indexOf(dayOfWeek);
  if (dayIndex === -1) return startDate;
  
  // Знаходимо наступний день тижня від початкової дати
  const currentDay = startDate.getDay();
  // Конвертуємо з JavaScript дня (0=неділя) до нашого формату (0=понеділок)
  const jsDayIndex = dayIndex === 6 ? 0 : dayIndex + 1;
  
  // Дні до наступного потрібного дня тижня
  let daysUntilTarget = (jsDayIndex - currentDay + 7) % 7;
  if (daysUntilTarget === 0) daysUntilTarget = 7; // Якщо сьогодні - беремо наступний тиждень
  
  // Додаємо зміщення для тижня
  const daysToAdd = daysUntilTarget + (weekOffset * 7);
  
  const targetDate = new Date(startDate);
  targetDate.setDate(startDate.getDate() + daysToAdd);
  return targetDate;
};

/**
 * Форматує дату у форматі DD.MM.YYYY
 */
const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

/**
 * Генерує розклад для курсу: 2 заняття на тиждень, 6 тижнів (12 занять)
 */
export const generateWeeklySchedule = (course: Course): ScheduleItem[] => {
  if (!course.roadmap || course.roadmap.length === 0) {
    return [];
  }

  // Використовуємо базовий розклад з курсу або генеруємо новий
  let baseSchedule: ScheduleItem[] = [];
  
  if (course.schedule && course.schedule.length > 0) {
    // Використовуємо існуючий розклад як базовий
    baseSchedule = course.schedule;
  } else {
    // Генеруємо базовий розклад з перших тем
    const topics = course.roadmap.slice(0, 2);
    const shuffledDays = [...daysOfWeek].sort(() => Math.random() - 0.5);
    const selectedDays = shuffledDays.slice(0, 2).sort((a, b) => {
      return daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b);
    });

    baseSchedule = topics.map((topic, index) => ({
      id: `sched_${course.id}_base_${index + 1}`,
      courseId: course.id,
      dayOfWeek: selectedDays[index],
      time: index === 0 ? '18:00' : '19:00', // Різні часи для різних днів
      duration: 90,
      type: types[index % types.length],
      topic: topic.title
    }));
  }

  // Генеруємо 6-7 занять: Лекція → Практика → Лекція → Практика...
  const schedule: ScheduleItem[] = [];
  const startDate = new Date();
  const totalClasses = 7; // 7 занять максимум
  
  // Отримуємо всі теми з roadmap
  const allTopics = course.roadmap || [];
  
  // Визначаємо дні для занять (беремо перші 2 дні з базового розкладу)
  const firstDay = baseSchedule[0]?.dayOfWeek || 'Понеділок';
  const secondDay = baseSchedule[1]?.dayOfWeek || baseSchedule[0]?.dayOfWeek || 'Середа';
  const firstTime = baseSchedule[0]?.time || '18:00';
  const secondTime = baseSchedule[1]?.time || baseSchedule[0]?.time || '18:00';
  const duration = baseSchedule[0]?.duration || 90;
  
  // Генеруємо заняття послідовно
  for (let classIndex = 0; classIndex < totalClasses; classIndex++) {
    // Визначаємо індекс теми: кожна тема використовується для пари (лекція + практика)
    const topicPairIndex = Math.floor(classIndex / 2);
    const topic = allTopics[topicPairIndex % allTopics.length];
    
    // Визначаємо тип заняття: парні індекси (0, 2, 4...) - лекція, непарні (1, 3, 5...) - практика
    const isLecture = classIndex % 2 === 0;
    const classType = isLecture ? 'Лекція' : 'Практика';
    
    // Визначаємо день: чергуємо між першим і другим днем
    const dayOfWeek = classIndex % 2 === 0 ? firstDay : secondDay;
    const time = classIndex % 2 === 0 ? firstTime : secondTime;
    
    // Визначаємо тиждень: кожні 2 заняття = 1 тиждень
    const weekOffset = Math.floor(classIndex / 2);
    
    const targetDate = getDateForDay(dayOfWeek, weekOffset, startDate);
    
    schedule.push({
      id: `sched_${course.id}_${classIndex + 1}`,
      courseId: course.id,
      dayOfWeek: dayOfWeek,
      time: time,
      duration: duration,
      type: classType,
      topic: topic?.title || 'Заняття',
      date: formatDate(targetDate)
    });
  }

  return schedule;
};

/**
 * Отримує розклад для курсу (генерує 3 тижні = 6-7 занять)
 */
export const getCourseSchedule = (course: Course): ScheduleItem[] => {
  const schedule = generateWeeklySchedule(course);
  // Обмежуємо до 7 занять максимум
  return schedule.slice(0, 7);
};

