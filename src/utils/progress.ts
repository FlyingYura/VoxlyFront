import type { Course, CourseTopic, TestResult } from '../types';

export const calculateCourseProgress = (
  course: Course,
  userTestResults: TestResult[],
  completedSubtopics?: string[]
): { completedTopics: number; totalTopics: number; progressPercentage: number } => {
  if (!course.roadmap || course.roadmap.length === 0) {
    return { completedTopics: 0, totalTopics: 0, progressPercentage: 0 };
  }

  const topicsWithTests = course.roadmap
    .filter(topic => {
      if (topic.testId) return true;
      if (topic.subtopics?.some(st => st.type === 'test' && st.testId)) return true;
      if (userTestResults.some(result => result.testId === topic.id)) return true;
      return false;
    })
    .sort((a, b) => a.order - b.order);

  const totalTopics = topicsWithTests.length;
  let completedTopics = 0;

  for (const topic of topicsWithTests) {
    if (isTopicCompleted(topic, userTestResults)) {
      completedTopics++;
    } else {
      break;
    }
  }

  let totalProgress = 0;
  let totalItems = 0;

  course.roadmap.forEach(topic => {
    if (topic.subtopics && topic.subtopics.length > 0) {
      let topicTestPassed = false;
      
      if (topic.testId) {
        const testResult = userTestResults.find(result => result.testId === topic.testId);
        if (testResult) {
          const percentage = (testResult.score / testResult.maxScore) * 100;
          topicTestPassed = percentage >= 80;
        }
      }
      
      if (!topicTestPassed) {
        const topicTestResult = userTestResults.find(result => result.testId === topic.id);
        if (topicTestResult) {
          const percentage = (topicTestResult.score / topicTestResult.maxScore) * 100;
          topicTestPassed = percentage >= 80;
        }
      }
      
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
      
      if (topicTestPassed) {
        totalProgress += topic.subtopics.length;
        totalItems += topic.subtopics.length;
        return;
      }
      
      const completedSubtopicsInTopic = topic.subtopics.filter(
        st => completedSubtopics?.includes(st.id)
      ).length;
      totalProgress += completedSubtopicsInTopic;
      totalItems += topic.subtopics.length;
    } else if (topic.testId) {
      const testResult = userTestResults.find(result => result.testId === topic.testId);
      if (testResult) {
        const percentage = (testResult.score / testResult.maxScore) * 100;
        totalProgress += percentage >= 80 ? 1 : 0;
      }
      totalItems += 1;
    }
  });

  const progressPercentage = totalItems > 0 
    ? Math.round((totalProgress / totalItems) * 100) 
    : (totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0);

  return { completedTopics, totalTopics, progressPercentage };
};

export const isTopicCompleted = (
  topic: CourseTopic,
  userTestResults: TestResult[]
): boolean => {
  if (topic.testId) {
    const testResult = userTestResults.find(result => result.testId === topic.testId);
    if (testResult) {
      const percentage = (testResult.score / testResult.maxScore) * 100;
      if (percentage >= 80) return true;
    }
  }

  if (topic.subtopics && topic.subtopics.length > 0) {
    const topicTestResult = userTestResults.find(result => result.testId === topic.id);
    if (topicTestResult) {
      const percentage = (topicTestResult.score / topicTestResult.maxScore) * 100;
      if (percentage >= 80)       return true;
    }

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

export const calculateTopicProgress = (
  topic: CourseTopic,
  userTestResults: TestResult[],
  completedSubtopics?: string[]
): number => {
  if (isTopicCompleted(topic, userTestResults)) {
    return 100;
  }

  if (topic.subtopics && topic.subtopics.length > 0) {
    const topicTestResult = userTestResults.find(result => result.testId === topic.id);
    if (topicTestResult) {
      const percentage = (topicTestResult.score / topicTestResult.maxScore) * 100;
      if (percentage >= 80) {
        return 100;
      }
    }

    for (const subtopic of topic.subtopics) {
      if (subtopic.type === 'test' && subtopic.testId) {
        const subtopicTestResult = userTestResults.find(result => result.testId === subtopic.testId);
        if (subtopicTestResult) {
            const percentage = (subtopicTestResult.score / subtopicTestResult.maxScore) * 100;
            if (percentage >= 80) {
              return 100;
            }
        }
      }
    }

    const completedCount = topic.subtopics.filter(
      st => completedSubtopics?.includes(st.id)
    ).length;
    return Math.round((completedCount / topic.subtopics.length) * 100);
  }

  if (!topic.testId) {
    return 0;
  }

  const testResult = userTestResults.find(result => result.testId === topic.testId);
  if (!testResult) {
    return 0;
  }

  const percentage = (testResult.score / testResult.maxScore) * 100;
  return Math.min(percentage, 79);
};

