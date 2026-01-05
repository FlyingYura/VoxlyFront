import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../../utils/data';
import { getCurrentUser } from '../../utils/auth';
import Card from '../../components/Card/Card';
import './Materials.css';

const Materials: React.FC = () => {
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
    (user.enrolledCourses?.includes(course.id) || user.paidCourses?.includes(course.id)) &&
    course.materials && course.materials.length > 0
  );

  const selectedCourseData = courses.find(c => c.id === selectedCourse);
  const materials = selectedCourseData?.materials || [];

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case 'PDF': return 'PDF';
      case 'Відео': return 'ВІД';
      case 'Аудіо': return 'АУД';
      case 'Презентація': return 'ПРЕЗ';
      default: return 'ДОК';
    }
  };

  return (
    <div className="materials-page">
      <div className="container">
        <h1>Навчальні матеріали</h1>

        {userCourses.length === 0 ? (
          <Card>
            <p>У вас немає доступних матеріалів. <a href="/courses">Переглянути курси</a></p>
          </Card>
        ) : (
          <>
            <div className="course-selector">
              <label htmlFor="course-select">Оберіть курс:</label>
              <select
                id="course-select"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="course-select"
              >
                <option value="">Всі курси</option>
                {userCourses.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>

            {selectedCourse && materials.length === 0 && (
              <Card>
                <p>Матеріали для цього курсу ще не додано.</p>
              </Card>
            )}

            {selectedCourse && materials.length > 0 && (
              <div className="materials-grid">
                {materials.map(material => (
                  <Card key={material.id} className="material-card">
                    <div className="material-header">
                      <span className="material-icon">{getMaterialIcon(material.type)}</span>
                      <span className="material-type">{material.type}</span>
                    </div>
                    <h3 className="material-title">{material.title}</h3>
                    <p className="material-description">{material.description}</p>
                    <div className="material-footer">
                      <span className="material-date">
                        Завантажено: {new Date(material.uploadDate).toLocaleDateString('uk-UA')}
                      </span>
                      <a href={material.url} className="material-link" target="_blank" rel="noopener noreferrer">
                        Відкрити
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {!selectedCourse && (
              <div className="all-courses-materials">
                {userCourses.map(course => {
                  const courseMaterials = course.materials || [];
                  if (courseMaterials.length === 0) return null;

                  return (
                    <div key={course.id} className="course-materials-section">
                      <h2>{course.title}</h2>
                      <div className="materials-grid">
                        {courseMaterials.map(material => (
                          <Card key={material.id} className="material-card">
                            <div className="material-header">
                              <span className="material-icon">{getMaterialIcon(material.type)}</span>
                              <span className="material-type">{material.type}</span>
                            </div>
                            <h3 className="material-title">{material.title}</h3>
                            <p className="material-description">{material.description}</p>
                            <div className="material-footer">
                              <span className="material-date">
                                {new Date(material.uploadDate).toLocaleDateString('uk-UA')}
                              </span>
                              <a href={material.url} className="material-link" target="_blank" rel="noopener noreferrer">
                                Відкрити
                              </a>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Materials;

