import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { courses } from '../../utils/data';
import { getCurrentUser } from '../../utils/auth';
import { calculateTopicProgress, calculateCourseProgress } from '../../utils/progress';
import { CourseTopic, CourseSubtopic } from '../../types';
import api from '../../config/api';
import Card from '../../components/Card/Card';
import './CourseView.css';

const CourseView: React.FC = () => {
  const { courseId, topicId, subtopicId } = useParams<{ courseId: string; topicId?: string; subtopicId?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(getCurrentUser());
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const [completedSubtopics, setCompletedSubtopics] = useState<string[]>([]);
  const [isLoadingProgress, setIsLoadingProgress] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setUser(currentUser);
  }, [navigate]);

  // Завантажуємо прогрес користувача та оновлюємо дані користувача
  useEffect(() => {
    const loadUserProgress = async () => {
      if (!courseId) return;
      
      try {
        setIsLoadingProgress(true);
        // Оновлюємо дані користувача з localStorage (можливо оновлені після тесту)
        const currentUser = getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        } else {
          return;
        }
        
        const response = await api.get(`/api/users/me/progress/${courseId}`);
        if (response.data.success && response.data.progress) {
          setCompletedSubtopics(response.data.progress.completedSubtopics || []);
        }
      } catch (error) {
        console.error('Error loading progress:', error);
      } finally {
        setIsLoadingProgress(false);
      }
    };

    loadUserProgress();
    
    // Оновлюємо дані при фокусі на вікно (наприклад, після повернення з тесту)
    const handleFocus = () => {
      const currentUser = getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        loadUserProgress();
      }
    };
    
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [courseId, topicId, subtopicId, location.pathname]); // Додаємо location.pathname для оновлення при зміні URL

  if (!courseId) {
    navigate('/my-courses');
    return null;
  }

  const course = courses.find(c => c.id === courseId);
  if (!course) {
    navigate('/my-courses');
    return null;
  }

  if (!user) {
    navigate('/login');
    return null;
  }

  const isEnrolled = user.enrolledCourses?.includes(courseId) || user.paidCourses?.includes(courseId);
  if (!isEnrolled) {
    navigate('/courses');
    return null;
  }

  useEffect(() => {
    if (topicId) {
      setExpandedTopics(prev => new Set(prev).add(topicId));
    } else if (course?.roadmap && course.roadmap.length > 0) {
      // Автоматично розгортаємо першу тему якщо немає вибраної
      const firstTopic = course.roadmap[0];
      if (firstTopic.subtopics && firstTopic.subtopics.length > 0) {
        setExpandedTopics(prev => new Set(prev).add(firstTopic.id));
      }
    }
  }, [topicId, courseId]);

  const selectedTopic = course.roadmap?.find(t => t.id === topicId);
  const selectedSubtopic = selectedTopic?.subtopics?.find(st => st.id === subtopicId);

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(topicId)) {
        newSet.delete(topicId);
      } else {
        newSet.add(topicId);
      }
      return newSet;
    });
  };

  const handleTopicClick = (topic: CourseTopic) => {
    if (topic.subtopics && topic.subtopics.length > 0) {
      const firstSubtopic = topic.subtopics[0];
      navigate(`/course/${courseId}/topic/${topic.id}/subtopic/${firstSubtopic.id}`);
    } else {
      navigate(`/course/${courseId}/topic/${topic.id}`);
    }
  };

  const handleSubtopicClick = (topicId: string, subtopic: CourseSubtopic) => {
    if (subtopic.type === 'test' && subtopic.testId) {
      navigate(`/course/${courseId}/test/${subtopic.testId}`);
    } else {
      navigate(`/course/${courseId}/topic/${topicId}/subtopic/${subtopic.id}`);
    }
  };

  const getTopicProgress = (topic: CourseTopic) => {
    return calculateTopicProgress(topic, user?.testResults || [], completedSubtopics);
  };

  // Функція для збереження прогресу при проходженні підтеми
  const saveProgress = async (subtopicId: string) => {
    if (!courseId || !user || !subtopicId) return;
    
    // Перевіряємо, чи підтема вже завершена
    if (completedSubtopics.includes(subtopicId)) {
      return;
    }

    try {
      // Оновлюємо локальний стан
      const newCompletedSubtopics = [...completedSubtopics, subtopicId];
      setCompletedSubtopics(newCompletedSubtopics);

      // Розраховуємо новий прогрес
      const course = courses.find(c => c.id === courseId);
      if (course) {
        const { progressPercentage } = calculateCourseProgress(
          course,
          user.testResults || [],
          newCompletedSubtopics
        );

        // Оновлюємо прогрес на бекенді
        await api.post('/api/users/me/progress', {
          courseId,
          progress: progressPercentage,
          completedTopics: course.roadmap
            ?.filter(topic => {
              if (!topic.testId) return false;
              const testResult = (user.testResults || []).find(
                (r: any) => r.testId === topic.testId
              );
              if (!testResult) return false;
              const percentage = (testResult.score / testResult.maxScore) * 100;
              return percentage >= 80;
            })
            .map(topic => topic.id) || [],
          completedSubtopics: newCompletedSubtopics,
          currentTopic: topicId || null,
        });
      }
    } catch (error) {
      console.error('Error saving progress:', error);
      // Відкатуємо локальний стан при помилці
      setCompletedSubtopics(completedSubtopics);
    }
  };

  return (
    <div className="course-view-page">
      <div className="course-view-container">
        <div className="course-sidebar">
          <div className="sidebar-header">
            <h2>{course.title}</h2>
            <button className="back-btn" onClick={() => navigate('/my-courses')}>
              ← Назад
            </button>
          </div>
          
          <div className="topics-list">
            {course.roadmap && course.roadmap.length > 0 ? (
              course.roadmap.map(topic => {
                const isExpanded = expandedTopics.has(topic.id);
                const progress = getTopicProgress(topic);
                const hasSubtopics = topic.subtopics && topic.subtopics.length > 0;

                return (
                  <div key={topic.id} className="topic-item">
                    <div 
                      className={`topic-header ${selectedTopic?.id === topic.id ? 'active' : ''}`}
                      onClick={() => {
                        if (hasSubtopics) {
                          toggleTopic(topic.id);
                        }
                        handleTopicClick(topic);
                      }}
                    >
                    <div className="topic-info">
                      <span className="topic-number">{topic.order}.</span>
                      <span className="topic-title">{topic.title}</span>
                    </div>
                    <div className="topic-meta">
                      {hasSubtopics && (
                        <span className="expand-icon">{isExpanded ? '▼' : '▶'}</span>
                      )}
                      <div className="topic-progress-bar">
                        <div 
                          className="topic-progress-fill" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <span className="topic-progress-text">{progress}%</span>
                    </div>
                  </div>
                  
                  {isExpanded && hasSubtopics && (
                    <div className="subtopics-list">
                      {topic.subtopics?.map((subtopic, index) => {
                        // Перевіряємо, чи підтема завершена
                        let isCompleted = completedSubtopics.includes(subtopic.id);
                        
                        // Якщо це тест, перевіряємо результат тесту за testId підтеми
                        if (subtopic.type === 'test' && subtopic.testId) {
                          const testResult = user?.testResults?.find((tr: any) => tr.testId === subtopic.testId);
                          if (testResult) {
                            const percentage = (testResult.score / testResult.maxScore) * 100;
                            isCompleted = isCompleted || percentage >= 80;
                          }
                        }
                        
                        // Також перевіряємо, чи тема має тест і він пройдено - тоді всі підтеми завершені
                        if (topic.testId) {
                          const topicTestResult = user?.testResults?.find((tr: any) => tr.testId === topic.testId);
                          if (topicTestResult) {
                            const percentage = (topicTestResult.score / topicTestResult.maxScore) * 100;
                            if (percentage >= 80) {
                              isCompleted = true; // Якщо тест теми пройдено, всі підтеми завершені
                            }
                          }
                        }
                        
                        return (
                          <div
                            key={subtopic.id}
                            className={`subtopic-item ${selectedSubtopic?.id === subtopic.id ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                            onClick={() => handleSubtopicClick(topic.id, subtopic)}
                          >
                            <span className="subtopic-number">{topic.order}.{index + 1}</span>
                            <span className="subtopic-title">{subtopic.title}</span>
                            {subtopic.type === 'test' && <span className="test-badge">Тест</span>}
                            {isCompleted && <span className="check-icon">✓</span>}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                );
              })
            ) : (
              <div className="no-roadmap">
                <p>Структура курсу ще не додана</p>
              </div>
            )}
          </div>
        </div>

        <div className="course-content">
          {selectedSubtopic ? (
            <div className="content-view">
              <h1>{selectedSubtopic.title}</h1>
              {selectedSubtopic.content && (
                <div className="content-text">
                  {selectedSubtopic.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
              
              {selectedSubtopic.materials && selectedSubtopic.materials.length > 0 && (
                <div className="materials-section">
                  <h3>Навчальні матеріали</h3>
                  <div className="materials-list">
                    {selectedSubtopic.materials.map(material => (
                      <Card key={material.id} className="material-item">
                        <div className="material-header">
                          <span className="material-type-badge">{material.type}</span>
                          {material.xp && <span className="xp-badge">{material.xp} XP</span>}
                        </div>
                        <h4>{material.title}</h4>
                        <p>{material.description}</p>
                        <div className="material-actions">
                          <button className="material-btn">Переглянути</button>
                          <button className="material-btn download">Завантажити</button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {selectedSubtopic.type === 'test' && selectedSubtopic.testId && (
                <div className="test-section">
                  <button 
                    className="start-test-btn"
                    onClick={() => navigate(`/course/${courseId}/test/${selectedSubtopic.testId}`)}
                  >
                    Почати тест
                  </button>
                </div>
              )}

              <div className="next-topic-section">
                {(() => {
                  if (!course.roadmap) return null;
                  
                  let nextTopic: CourseTopic | null = null;
                  let nextSubtopic: CourseSubtopic | null = null;
                  
                  // Знаходимо поточну тему
                  const currentTopicIndex = course.roadmap.findIndex(t => t.id === selectedTopic?.id);
                  
                  if (currentTopicIndex !== -1) {
                    const currentTopic = course.roadmap[currentTopicIndex];
                    const currentSubtopicIndex = currentTopic.subtopics?.findIndex(st => st.id === subtopicId) ?? -1;
                    
                    // Перевіряємо чи є наступна підтема в поточній темі
                    if (currentSubtopicIndex !== -1 && currentTopic.subtopics) {
                      if (currentSubtopicIndex < currentTopic.subtopics.length - 1) {
                        nextTopic = currentTopic;
                        nextSubtopic = currentTopic.subtopics[currentSubtopicIndex + 1];
                      } else if (currentTopicIndex < course.roadmap.length - 1) {
                        // Переходимо до наступної теми
                        nextTopic = course.roadmap[currentTopicIndex + 1];
                        if (nextTopic.subtopics && nextTopic.subtopics.length > 0) {
                          nextSubtopic = nextTopic.subtopics[0];
                        }
                      }
                    } else if (currentTopicIndex < course.roadmap.length - 1) {
                      // Якщо немає підтем, переходимо до наступної теми
                      nextTopic = course.roadmap[currentTopicIndex + 1];
                      if (nextTopic.subtopics && nextTopic.subtopics.length > 0) {
                        nextSubtopic = nextTopic.subtopics[0];
                      }
                    }
                  }
                  
                  if (nextTopic && nextSubtopic) {
                    return (
                      <button 
                        className="next-topic-btn"
                        onClick={async () => {
                          // Зберігаємо прогрес поточної підтеми (якщо це не тест)
                          if (selectedSubtopic && selectedSubtopic.type !== 'test' && subtopicId) {
                            await saveProgress(subtopicId);
                          }
                          
                          // Переходимо до наступної підтеми/тесту
                          if (nextSubtopic?.type === 'test' && nextSubtopic.testId) {
                            navigate(`/course/${courseId}/test/${nextSubtopic.testId}`);
                          } else {
                            navigate(`/course/${courseId}/topic/${nextTopic.id}/subtopic/${nextSubtopic.id}`);
                          }
                        }}
                      >
                        Наступна тема →
                      </button>
                    );
                  }
                  
                  return null;
                })()}
              </div>
            </div>
          ) : selectedTopic ? (
            <div className="content-view">
              <h1>{selectedTopic.title}</h1>
              {selectedTopic.description && (
                <p className="topic-description">{selectedTopic.description}</p>
              )}
              {selectedTopic.subtopics && selectedTopic.subtopics.length > 0 && (
                <div className="subtopics-grid">
                  {selectedTopic.subtopics.map((subtopic, index) => (
                    <Card 
                      key={subtopic.id}
                      className="subtopic-card"
                      onClick={() => handleSubtopicClick(selectedTopic.id, subtopic)}
                    >
                      <div className="subtopic-card-header">
                        <span className="subtopic-number">{selectedTopic.order}.{index + 1}</span>
                        {subtopic.type === 'test' && <span className="test-badge">Тест</span>}
                      </div>
                      <h3>{subtopic.title}</h3>
                      {completedSubtopics.includes(subtopic.id) && <span className="completed-badge">Завершено</span>}
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="content-view">
              <h1>{course.title}</h1>
              <p className="course-description">{course.description}</p>
              
              <div className="course-info-panel">
                <Card>
                  <h3>Про курс</h3>
                  <div className="info-item">
                    <strong>Мова:</strong> {course.language}
                  </div>
                  <div className="info-item">
                    <strong>Рівень:</strong> {course.level}
                  </div>
                  <div className="info-item">
                    <strong>Тривалість:</strong> {course.duration}
                  </div>
                  <div className="info-item">
                    <strong>Викладач:</strong> {course.instructor}
                  </div>
                </Card>
              </div>

              {course.roadmap && course.roadmap.length > 0 && (
                <div className="roadmap-preview">
                  <h2>Структура курсу</h2>
                  <div className="roadmap-items">
                    {course.roadmap.map(topic => (
                      <div key={topic.id} className="roadmap-item">
                        <div className="roadmap-item-header">
                          <span className="roadmap-number">{topic.order}</span>
                          <span className="roadmap-title">{topic.title}</span>
                          <span className="roadmap-progress">{getTopicProgress(topic)}%</span>
                        </div>
                        {topic.description && (
                          <p className="roadmap-description">{topic.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseView;
