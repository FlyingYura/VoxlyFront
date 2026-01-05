import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../../utils/data';
import { getCurrentUser } from '../../utils/auth';
import { getCourseSchedule } from '../../utils/scheduleGenerator';
import Card from '../../components/Card/Card';
import './Schedule.css';

const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const [user] = useState(getCurrentUser());
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
  }, [user, navigate]);

  if (!user) return null;

  const userCourses = courses.filter(course => 
    user.enrolledCourses?.includes(course.id) || user.paidCourses?.includes(course.id)
  );

  // Автоматично вибираємо перший курс
  useEffect(() => {
    if (userCourses.length > 0 && !selectedCourse) {
      setSelectedCourse(userCourses[0].id);
    }
  }, [userCourses.length]);

  const selectedCourseData = courses.find(c => c.id === selectedCourse);
  const schedule = selectedCourseData ? getCourseSchedule(selectedCourseData) : [];

  // Сортуємо заняття за датами
  const sortedSchedule = [...schedule].sort((a, b) => {
    if (!a.date || !b.date) return 0;
    const dateA = new Date(a.date.split('.').reverse().join('-'));
    const dateB = new Date(b.date.split('.').reverse().join('-'));
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="schedule-page">
      <div className="container">
        <h1>Розклад занять</h1>

        {userCourses.length === 0 ? (
          <Card>
            <p>Ви ще не записані на жоден курс. <a href="/courses">Переглянути курси</a></p>
          </Card>
        ) : (
          <>
            {userCourses.length > 1 && (
              <div className="course-selector">
                <label htmlFor="course-select">Оберіть курс:</label>
                <select
                  id="course-select"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="course-select"
                >
                  {userCourses.map(course => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selectedCourse && sortedSchedule.length === 0 && (
              <Card>
                <p>Розклад для цього курсу ще не додано.</p>
              </Card>
            )}

            {selectedCourse && sortedSchedule.length > 0 && selectedCourseData && (
              <>
                {userCourses.length === 1 && (
                  <div className="schedule-course-title">
                    <h2>{selectedCourseData.title}</h2>
                  </div>
                )}
                <div className="schedule-table-wrapper">
                  <table className="schedule-table">
                    <thead>
                      <tr>
                        <th>Дата</th>
                        <th>День</th>
                        <th>Час</th>
                        <th>Тема</th>
                        <th>Тип</th>
                        <th>Тривалість</th>
                        <th>Викладач</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedSchedule.map(item => (
                        <tr key={item.id} className="schedule-row">
                          <td className="schedule-date-cell">
                            {item.date || '-'}
                          </td>
                          <td className="schedule-day-cell">{item.dayOfWeek}</td>
                          <td className="schedule-time-cell">{item.time}</td>
                          <td className="schedule-topic-cell">{item.topic || 'Заняття'}</td>
                          <td className="schedule-type-cell">
                            <span className={`schedule-type-badge schedule-type-${item.type.toLowerCase()}`}>
                              {item.type}
                            </span>
                          </td>
                          <td className="schedule-duration-cell">{item.duration} хв</td>
                          <td className="schedule-instructor-cell">{selectedCourseData.instructor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {!selectedCourse && userCourses.length > 1 && (
              <Card>
                <p>Оберіть курс, щоб переглянути розклад.</p>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Schedule;

