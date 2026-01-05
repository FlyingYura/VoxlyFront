import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../../utils/data';
import { getCurrentUser } from '../../utils/auth';
import { calculateCourseProgress } from '../../utils/progress';
import Card from '../../components/Card/Card';
import './MyCourses.css';

const MyCourses: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getCurrentUser());
  const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'in-progress'>('all');

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setUser(currentUser);
  }, []);

  if (!user) return null;

  const userCourses = courses.filter(course => 
    user.enrolledCourses?.includes(course.id) || user.paidCourses?.includes(course.id)
  );

  const completedCourses = userCourses.filter(course => {
    const { completedTopics, totalTopics } = calculateCourseProgress(course, user.testResults || []);
    return totalTopics > 0 && completedTopics === totalTopics;
  });

  const inProgressCourses = userCourses.filter(course => {
    const { completedTopics, totalTopics } = calculateCourseProgress(course, user.testResults || []);
    return totalTopics === 0 || completedTopics < totalTopics;
  });

  const displayedCourses = activeTab === 'all' 
    ? userCourses 
    : activeTab === 'completed' 
    ? completedCourses 
    : inProgressCourses;

  const getProgressPercentage = (course: typeof courses[0]) => {
    const { progressPercentage } = calculateCourseProgress(course, user.testResults || []);
    // Обмежуємо прогрес від 0 до 100%
    return Math.min(100, Math.max(0, progressPercentage));
  };

  const handleCourseClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="my-courses-page">
      <div className="container">
        <h1>Мої курси</h1>

        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Всі
          </button>
          <button 
            className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Завершені
          </button>
          <button 
            className={`tab ${activeTab === 'in-progress' ? 'active' : ''}`}
            onClick={() => setActiveTab('in-progress')}
          >
            В процесі
          </button>
        </div>

        <div className="courses-list">
          {displayedCourses.length === 0 ? (
            <Card className="no-courses">
              <p>У вас немає курсів у цій категорії.</p>
            </Card>
          ) : (
            displayedCourses.map(course => {
              const progress = getProgressPercentage(course);
              const { completedTopics, totalTopics } = calculateCourseProgress(course, user.testResults || []);

              return (
                <Card key={course.id} className="course-item" onClick={() => handleCourseClick(course.id)}>
                  <div className="course-item-header">
                    <div className="course-icon">
                      {course.language.charAt(0)}
                    </div>
                    <div className="course-info">
                      <h3>{course.title}</h3>
                      <div className="course-meta">
                        <span className="level-badge">{course.level}</span>
                        <span className="duration">{course.duration}</span>
                      </div>
                    </div>
                    <div className="course-actions">
                      <button 
                        className="icon-btn" 
                        title="Завантажити"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Логіка завантаження
                        }}
                      >
                        ↓
                      </button>
                      <button 
                        className="icon-btn" 
                        title="Поділитися"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Логіка поділу
                        }}
                      >
                        ↗
                      </button>
                      <button 
                        className="icon-btn" 
                        title="Налаштування"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Логіка налаштувань
                        }}
                      >
                        ⚙
                      </button>
                    </div>
                  </div>
                  <div className="course-progress">
                    <div className="progress-info">
                      <span>Теми вивчені: {completedTopics}/{totalTopics}</span>
                      <span>Теми в процесі: {totalTopics > completedTopics ? totalTopics - completedTopics : 0}</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                      ></div>
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;

