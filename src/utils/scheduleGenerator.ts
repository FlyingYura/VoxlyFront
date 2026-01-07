import type { Course, ScheduleItem } from '../types';

const daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
const types: Array<'Лекція' | 'Практика'> = ['Лекція', 'Практика'];

const getDateForDay = (dayOfWeek: string, weekOffset: number = 0, startDate: Date = new Date()): Date => {
  const dayIndex = daysOfWeek.indexOf(dayOfWeek);
  if (dayIndex === -1) return startDate;
  
  const currentDay = startDate.getDay();
  const jsDayIndex = dayIndex === 6 ? 0 : dayIndex + 1;
  
  let daysUntilTarget = (jsDayIndex - currentDay + 7) % 7;
  if (daysUntilTarget === 0) daysUntilTarget = 7;
  
  const daysToAdd = daysUntilTarget + (weekOffset * 7);
  
  const targetDate = new Date(startDate);
  targetDate.setDate(startDate.getDate() + daysToAdd);
  return targetDate;
};

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const generateWeeklySchedule = (course: Course): ScheduleItem[] => {
  if (!course.roadmap || course.roadmap.length === 0) {
    return [];
  }

  let baseSchedule: ScheduleItem[] = [];
  
  if (course.schedule && course.schedule.length > 0) {
    baseSchedule = course.schedule;
  } else {
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

  const schedule: ScheduleItem[] = [];
  const startDate = new Date();
  const totalClasses = 7;
  
  const allTopics = course.roadmap || [];
  
  const firstDay = baseSchedule[0]?.dayOfWeek || 'Понеділок';
  const secondDay = baseSchedule[1]?.dayOfWeek || baseSchedule[0]?.dayOfWeek || 'Середа';
  const firstTime = baseSchedule[0]?.time || '18:00';
  const secondTime = baseSchedule[1]?.time || baseSchedule[0]?.time || '18:00';
  const duration = baseSchedule[0]?.duration || 90;
  
  for (let classIndex = 0; classIndex < totalClasses; classIndex++) {
    const topicPairIndex = Math.floor(classIndex / 2);
    const topic = allTopics[topicPairIndex % allTopics.length];
    
    const isLecture = classIndex % 2 === 0;
    const classType = isLecture ? 'Лекція' : 'Практика';
    
    const dayOfWeek = classIndex % 2 === 0 ? firstDay : secondDay;
    const time = classIndex % 2 === 0 ? firstTime : secondTime;
    
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

export const getCourseSchedule = (course: Course): ScheduleItem[] => {
  const schedule = generateWeeklySchedule(course);
  return schedule.slice(0, 7);
};

