import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses, languages, levels } from '../../utils/data';
import { getCurrentUser } from '../../utils/auth';
import CourseCard from '../../components/CourseCard/CourseCard';
import WorldMapCourseSelector from '../../components/WorldMapCourseSelector/WorldMapCourseSelector';
import Input from '../../components/Input/Input';
import './Courses.css';

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getCurrentUser());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'students' | 'title'>('title');

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const filteredAndSortedCourses = useMemo(() => {
    let filtered = courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLanguage = !selectedLanguage || course.language === selectedLanguage;
      const matchesLevel = !selectedLevel || course.level === selectedLevel;

      return matchesSearch && matchesLanguage && matchesLevel;
    });

    // Сортування
    filtered.sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'students') {
        return b.studentsCount - a.studentsCount;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [searchTerm, selectedLanguage, selectedLevel, sortBy]);

  const handleEnroll = (courseId: string) => {
    if (!user) {
      navigate('/login');
      return;
    }

    const course = courses.find(c => c.id === courseId);
    if (course) {
      // Запис на курс
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex((u: any) => u.id === user.id);
      
      if (userIndex !== -1) {
        if (!users[userIndex].enrolledCourses.includes(courseId)) {
          users[userIndex].enrolledCourses.push(courseId);
          localStorage.setItem('users', JSON.stringify(users));
          localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
          setUser(users[userIndex]);
        }
      }
      
      // Перехід на оплату
      navigate(`/payment/${courseId}`);
    }
  };

  const handlePay = (courseId: string) => {
    navigate(`/payment/${courseId}`);
  };

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Всі курси</h1>
        <p>Оберіть курс, який вам підходить</p>
      </div>

      {/* Секція з картою */}
      <div className="map-section">
        <h2 className="map-title">
          Оберіть на карті мову якої країни ви хочете вивчити
        </h2>
        <WorldMapCourseSelector
          courses={filteredAndSortedCourses}
          onEnroll={handleEnroll}
          onPay={handlePay}
          showPayButton={(courseId) => {
            const isEnrolled = user?.enrolledCourses?.includes(courseId) ?? false;
            const isPaid = user?.paidCourses?.includes(courseId) ?? false;
            return isEnrolled && !isPaid;
          }}
        />
      </div>

      {/* Альтернативна секція */}
      <div className="alternative-section">
        <p className="alternative-title">
          Або якщо у вас проблеми з географією, то виберіть курс тут:
        </p>

        <div className="courses-filters">
          <div className="filter-group">
            <Input
              type="text"
              placeholder="Пошук курсів..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <label htmlFor="language-select">Мова:</label>
            <select
              id="language-select"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="filter-select"
            >
              <option value="">Всі мови</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="level-select">Рівень:</label>
            <select
              id="level-select"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="filter-select"
            >
              <option value="">Всі рівні</option>
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sort-select">Сортувати:</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'price' | 'students' | 'title')}
              className="filter-select"
            >
              <option value="title">За назвою</option>
              <option value="price">За ціною</option>
              <option value="students">За популярністю</option>
            </select>
          </div>
        </div>

        {filteredAndSortedCourses.length > 0 ? (
          <>
            <p className="results-count">
              Знайдено курсів: {filteredAndSortedCourses.length}
            </p>
            <div className="courses-grid">
              {filteredAndSortedCourses.map((course) => {
                const isEnrolled = user?.enrolledCourses?.includes(course.id);
                const isPaid = user?.paidCourses?.includes(course.id);
                const showPayButton = isEnrolled && !isPaid;

                return (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onEnroll={!isEnrolled ? handleEnroll : undefined}
                    onPay={showPayButton ? handlePay : undefined}
                    showPayButton={showPayButton}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className="no-results">
            <p>Курсів не знайдено. Спробуйте змінити фільтри.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;