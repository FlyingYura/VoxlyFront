import type { Course, CourseTopic, TestResult } from '../types';

/**
 * Розраховує прогрес курсу на основі результатів тестів та завершених підтем
 * Тема вважається пройденою, якщо тест пройдено на 80% або більше
 * Темы можна зарахувати тільки в порядку (якщо попередні теж пройдені)
 */
export const calculateCourseProgress = (
  course: Course,
  userTestResults: TestResult[],
  completedSubtopics?: string[]
): { completedTopics: number; totalTopics: number; progressPercentage: number } => {
  if (!course.roadmap || course.roadmap.length === 0) {
    return { completedTopics: 0, totalTopics: 0, progressPercentage: 0 };
  }

  // Фільтруємо теми з тестами (на рівні теми, підтеми або тест з ID = ID теми)
  const topicsWithTests = course.roadmap
    .filter(topic => {
      // Тема має тест на рівні теми
      if (topic.testId) return true;
      // Або тема має підтеми з тестами
      if (topic.subtopics?.some(st => st.type === 'test' && st.testId)) return true;
      // Або є тест з ID = ID теми
      if (userTestResults.some(result => result.testId === topic.id)) return true;
      return false;
    })
    .sort((a, b) => a.order - b.order);

  const totalTopics = topicsWithTests.length;
  let completedTopics = 0;

  // Перевіряємо теми по порядку
  for (const topic of topicsWithTests) {
    // Перевіряємо, чи тема пройдена
    if (isTopicCompleted(topic, userTestResults)) {
      completedTopics++;
    } else {
      // Якщо тема не пройдена, зупиняємося (тому що теми повинні проходитися по порядку)
      break;
    }
  }

  // Розраховуємо загальний прогрес з урахуванням підтем
  let totalProgress = 0;
  let totalItems = 0;

  course.roadmap.forEach(topic => {
    if (topic.subtopics && topic.subtopics.length > 0) {
      // Перевіряємо, чи тест теми пройдено (на рівні теми або з ID = ID теми)
      let topicTestPassed = false;
      
      if (topic.testId) {
        const testResult = userTestResults.find(result => result.testId === topic.testId);
        if (testResult) {
          const percentage = (testResult.score / testResult.maxScore) * 100;
          topicTestPassed = percentage >= 80;
        }
      }
      
      // Перевіряємо, чи тест з ID = ID теми пройдено
      if (!topicTestPassed) {
        const topicTestResult = userTestResults.find(result => result.testId === topic.id);
        if (topicTestResult) {
          const percentage = (topicTestResult.score / topicTestResult.maxScore) * 100;
          topicTestPassed = percentage >= 80;
        }
      }
      
      // Перевіряємо тести підтем
      if (!topicTestPassed) {
        for (const subtopic of topic.subtopics) {
          if (subtopic.type === 'test' && subtopic.testId) {
            const subtopicTestResult = userTestResults.find(result => result.testId === subtopic.testId);
            if (subtopicTestResult) {
              const percentage = (subtopicTestResult.score / subtopicTestResult.maxScore) * 100;
              if (percentage >= 80) {
                topicTestPassed = true;
                break;
              }
            }
          }
        }
      }
      
      // Якщо тест пройдено, тема повністю завершена
      if (topicTestPassed) {
        totalProgress += topic.subtopics.length;
        totalItems += topic.subtopics.length;
        return;
      }
      
      // Інакше рахуємо прогрес по підтемах
      const completedSubtopicsInTopic = topic.subtopics.filter(
        st => completedSubtopics?.includes(st.id)
      ).length;
      totalProgress += completedSubtopicsInTopic;
      totalItems += topic.subtopics.length;
    } else if (topic.testId) {
      // Якщо тема має тільки тест без підтем
      const testResult = userTestResults.find(result => result.testId === topic.testId);
      if (testResult) {
        const percentage = (testResult.score / testResult.maxScore) * 100;
        totalProgress += percentage >= 80 ? 1 : 0;
      }
      totalItems += 1;
    }
  });

  // Якщо є підтеми, використовуємо більш точний розрахунок
  const progressPercentage = totalItems > 0 
    ? Math.round((totalProgress / totalItems) * 100) 
    : (totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0);

  return { completedTopics, totalTopics, progressPercentage };
};

/**
 * Перевіряє, чи пройдена конкретна тема
 */
export const isTopicCompleted = (
  topic: CourseTopic,
  userTestResults: TestResult[]
): boolean => {
  // Перевіряємо, чи є тест на рівні теми
  if (topic.testId) {
    const testResult = userTestResults.find(result => result.testId === topic.testId);
    if (testResult) {
      const percentage = (testResult.score / testResult.maxScore) * 100;
      if (percentage >= 80) return true;
    }
  }

  // Якщо тема не має testId, але є підтеми з тестами, перевіряємо тести підтем
  if (topic.subtopics && topic.subtopics.length > 0) {
    // Перевіряємо, чи є тест підтеми, який відповідає ID теми (якщо тест має ID = ID теми)
    const topicTestResult = userTestResults.find(result => result.testId === topic.id);
    if (topicTestResult) {
      const percentage = (topicTestResult.score / topicTestResult.maxScore) * 100;
      if (percentage >= 80) return true;
    }

    // Також перевіряємо тести підтем
    for (const subtopic of topic.subtopics) {
      if (subtopic.type === 'test' && subtopic.testId) {
        const subtopicTestResult = userTestResults.find(result => result.testId === subtopic.testId);
        if (subtopicTestResult) {
          const percentage = (subtopicTestResult.score / subtopicTestResult.maxScore) * 100;
          if (percentage >= 80) return true;
        }
      }
    }
  }

  return false;
};

/**
 * Розраховує прогрес конкретної теми
 */
export const calculateTopicProgress = (
  topic: CourseTopic,
  userTestResults: TestResult[],
  completedSubtopics?: string[]
): number => {
  // Якщо тема пройдена (тест на 80%+), прогрес = 100%
  if (isTopicCompleted(topic, userTestResults)) {
    return 100;
  }

  // Якщо є підтеми, рахуємо прогрес по підтемах
  if (topic.subtopics && topic.subtopics.length > 0) {
    // Перевіряємо, чи є тест, який відповідає ID теми (якщо тест має ID = ID теми)
    const topicTestResult = userTestResults.find(result => result.testId === topic.id);
    if (topicTestResult) {
      const percentage = (topicTestResult.score / topicTestResult.maxScore) * 100;
      if (percentage >= 80) {
        return 100;
      }
    }

    // Перевіряємо тести підтем
    for (const subtopic of topic.subtopics) {
      if (subtopic.type === 'test' && subtopic.testId) {
        const subtopicTestResult = userTestResults.find(result => result.testId === subtopic.testId);
        if (subtopicTestResult) {
          const percentage = (subtopicTestResult.score / subtopicTestResult.maxScore) * 100;
          if (percentage >= 80) {
            return 100; // Якщо тест підтеми пройдено, тема повністю завершена
          }
        }
      }
    }

    // Якщо тест не пройдено, рахуємо по завершених підтемах
    const completedCount = topic.subtopics.filter(
      st => completedSubtopics?.includes(st.id)
    ).length;
    return Math.round((completedCount / topic.subtopics.length) * 100);
  }

  // Якщо тесту немає, повертаємо 0
  if (!topic.testId) {
    return 0;
  }

  // Перевіряємо, чи є результат тесту
  const testResult = userTestResults.find(result => result.testId === topic.testId);
  if (!testResult) {
    return 0;
  }

  // Розраховуємо відсоток, але не більше 79% (бо 80%+ = пройдено)
  const percentage = (testResult.score / testResult.maxScore) * 100;
  return Math.min(percentage, 79);
};

