import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { courses } from '../../utils/data';
import { getCurrentUser } from '../../utils/auth';
import { languageToFlag } from '../../utils/flags';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './CourseDetails.css';

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const user = getCurrentUser();

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="course-details-page">
        <div className="container">
          <Card className="not-found-card">
            <h1>Курс не знайдено</h1>
            <p>Можливо, він був видалений або посилання застаріле.</p>
            <Link to="/courses">
              <Button variant="primary">До списку курсів</Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  const flagUrl = languageToFlag[course.language];
  const isAuthenticated = !!user;
  const isEnrolled = !!user && (user.enrolledCourses?.includes(course.id) || user.paidCourses?.includes(course.id));
  const isPaid = !!user && user.paidCourses?.includes(course.id);

  const totalSubtopics = (course.roadmap || []).reduce(
    (sum, topic) => sum + (topic.subtopics?.length || 0),
    0
  );

  const handleCta = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (isPaid) {
      navigate(`/course/${course.id}`);
      return;
    }
    navigate(`/payment/${course.id}`);
  };

  return (
    <div className="course-details-page">
      <div className="container">
        <Link to="/courses" className="back-link">← Всі курси</Link>

        <div className="details-hero">
          <div className="details-hero-main">
            <div className="details-badges">
              <span className="details-language">{course.language}</span>
              {flagUrl && (
                <div className="details-flag">
                  <img src={flagUrl} alt={`Прапор ${course.language}`} />
                </div>
              )}
              <span className={`details-level level-${course.level.toLowerCase()}`}>{course.level}</span>
            </div>
            <h1>{course.title}</h1>
            <p className="details-description">{course.description}</p>
          </div>
        </div>

        <div className="details-grid">
          <div className="details-main">
            <Card className="details-card">
              <h2>Що ви вивчите</h2>
              <p className="details-card-intro">
                Програма складається з <strong>{course.roadmap?.length || 0} тем</strong> та{' '}
                <strong>{totalSubtopics} уроків</strong> — від базової граматики до живого мовлення.
              </p>
              <div className="details-topics">
                {(course.roadmap || []).map((topic) => (
                  <div key={topic.id} className="details-topic">
                    <div className="details-topic-header">
                      <span className="details-topic-number">{topic.order}</span>
                      <div>
                        <h3>{topic.title}</h3>
                        {topic.description && <p>{topic.description}</p>}
                      </div>
                      <span className="details-topic-count">
                        {topic.subtopics?.length || 0} уроків
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="details-card">
              <h2>Як проходить навчання</h2>
              <div className="details-methods">
                <div className="details-method">
                  <div>
                    <h3>Теорія та практика</h3>
                    <p>Кожен урок поєднує пояснення з прикладами та інтерактивними вправами.</p>
                  </div>
                </div>
                <div className="details-method">
                  <div>
                    <h3>Тести після тем</h3>
                    <p>Закріплюйте матеріал тестами — для проходження теми потрібно 80%.</p>
                  </div>
                </div>
                <div className="details-method">
                  <div>
                    <h3>Прогрес і XP</h3>
                    <p>Відстежуйте свій прогрес, відкривайте нові теми та заробляйте XP.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="details-sidebar">
            <Card className="details-card details-info-card">
              <h2>Інформація</h2>
              <div className="details-info-row">
                <span className="details-info-label">Викладач</span>
                <span className="details-info-value">{course.instructor}</span>
              </div>
              <div className="details-info-row">
                <span className="details-info-label">Тривалість</span>
                <span className="details-info-value">{course.duration}</span>
              </div>
              <div className="details-info-row">
                <span className="details-info-label">Рівень</span>
                <span className="details-info-value">{course.level}</span>
              </div>
              <div className="details-info-row">
                <span className="details-info-label">Студентів</span>
                <span className="details-info-value">{course.studentsCount}+</span>
              </div>
              <div className="details-info-row">
                <span className="details-info-label">Формат</span>
                <span className="details-info-value">Онлайн у зручний час</span>
              </div>
            </Card>

            <Card className="details-card details-cta-card">
              <span className="details-price-lg">{course.price} ₴</span>
              <Button variant="primary" className="details-cta" onClick={handleCta}>
                {!isAuthenticated
                  ? 'Увійти, щоб записатися'
                  : isPaid
                    ? 'Перейти до курсу →'
                    : isEnrolled
                      ? 'Перейти до оплати'
                      : 'Записатися'}
              </Button>
              <p className="details-cta-hint">
                {isEnrolled && !isPaid
                  ? 'Ви вже записані — залишилося оплатити курс.'
                  : 'Після оплати курс одразу буде доступний у вашому профілі.'}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
