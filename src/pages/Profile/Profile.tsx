import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';
import { courses } from '../../utils/data';
import { calculateCourseProgress } from '../../utils/progress';
import Card from '../../components/Card/Card';
import './Profile.css';

const Profile: React.FC = () => {
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
  }, [navigate]);

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

  const totalTests = courses.reduce((sum, course) => sum + (course.tests?.length || 0), 0);
  const completedTests = user.testResults?.length || 0;
  const totalMaterials = courses.reduce((sum, course) => sum + (course.materials?.length || 0), 0);
  const totalXP = (completedTests * 20) + (user.testResults?.reduce((sum, result) => sum + result.score, 0) || 0);

  const getProgressPercentage = (course: typeof courses[0]) => {
    const { progressPercentage } = calculateCourseProgress(course, user.testResults || []);
    // Обмежуємо прогрес від 0 до 100%
    return Math.min(100, Math.max(0, progressPercentage));
  };

  return (
    <div className="profile-page">
      <div className="container">
        <h1>Особистий кабінет</h1>

        <div className="profile-layout">
          <div className="profile-main">
            <div className="courses-section">
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
                      <Card 
                        key={course.id} 
                        className="course-item clickable"
                        onClick={() => navigate(`/course/${course.id}`)}
                      >
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
                            <button className="icon-btn" title="Завантажити">
                              ↓
                            </button>
                            <button className="icon-btn" title="Поділитися">
                              ↗
                            </button>
                            <button className="icon-btn" title="Налаштування">
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

          <div className="profile-sidebar">
            <Card className="profile-widget">
              <div className="profile-header">
                <div className="profile-avatar">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="profile-info">
                  <h3>{user.name}</h3>
                  <button className="logout-btn" title="Вийти" onClick={() => {
                    localStorage.removeItem('currentUser');
                    navigate('/');
                  }}>●</button>
                </div>
              </div>
            </Card>

            <Card className="stats-widget">
              <h3>Статистика</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">{userCourses.length}</div>
                  <div className="stat-label">Курсів</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{completedTests}</div>
                  <div className="stat-label">Тестів пройдено</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{totalMaterials}</div>
                  <div className="stat-label">Матеріалів</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{totalXP}</div>
                  <div className="stat-label">XP</div>
                </div>
              </div>
            </Card>

            <Card className="progress-widget">
              <h3>Прогрес навчання</h3>
              <div className="overall-progress">
                <div className="progress-circle">
                  <svg viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#e8e5e0"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#8B7355"
                      strokeWidth="8"
                      strokeDasharray={`${(completedTests / totalTests) * 251.2} 251.2`}
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="progress-text">
                    <span className="progress-percent">
                      {totalTests > 0 ? Math.round((completedTests / totalTests) * 100) : 0}%
                    </span>
                  </div>
                </div>
                <p>Загальний прогрес</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

