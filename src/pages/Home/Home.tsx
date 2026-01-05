import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { courses } from '../../utils/data';
import CourseCard from '../../components/CourseCard/CourseCard';
import InstructorCard from '../../components/InstructorCard/InstructorCard';
import Button from '../../components/Button/Button';
import './Home.css';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    why1: false,
    why2: false,
    why3: false,
    why4: false,
    courses: false,
    instructors: false,
    stats: false
  });

  const why1Ref = useRef<HTMLElement>(null);
  const why2Ref = useRef<HTMLElement>(null);
  const why3Ref = useRef<HTMLElement>(null);
  const why4Ref = useRef<HTMLElement>(null);
  const coursesRef = useRef<HTMLElement>(null);
  const instructorsRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const location = useLocation();

  const featuredCourses = courses.slice(0, 3);
  
  // Інструктори для головної сторінки (3 особи)
  const featuredInstructors = [
    {
      id: '1',
      name: 'Яджак Роксолана',
      language: 'Англійська',
      experience: '5+ років',
      rating: 4.9,
      students: 120,
      description: 'Сертифікований викладач з міжнародним досвідом',
      image: '/assets/roksa.jpg'
    },
    {
      id: '2',
      name: 'Криворучко Микола',
      language: 'Німецька',
      experience: '7+ років',
      rating: 4.8,
      students: 95,
      description: 'Носій мови, експерт з підготовки до Goethe-Zertifikat',
      image: '/assets/kolya.jpg'
    },
    {
      id: '3',
      name: 'Кіліан Мбаппе',
      language: 'Французька',
      experience: '4+ років',
      rating: 4.7,
      students: 85,
      description: 'Носій французької мови, спеціаліст з розмовної практики',
      image: '/assets/mbap.png'
    }
  ];

  // filteredCourses використовується через featuredCourses

  // Прокрутка до верху при завантаженні сторінки
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Навішуємо обробник скролу для анімацій
  useEffect(() => {
    const checkVisibility = () => {
      const sections = [
        { ref: why1Ref, key: 'why1' },
        { ref: why2Ref, key: 'why2' },
        { ref: why3Ref, key: 'why3' },
        { ref: why4Ref, key: 'why4' },
        { ref: coursesRef, key: 'courses' },
        { ref: instructorsRef, key: 'instructors' },
        { ref: statsRef, key: 'stats' }
      ];

      sections.forEach(({ ref, key }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.8;
          
          if (isInView && !isVisible[key as keyof typeof isVisible]) {
            setIsVisible(prev => ({ ...prev, [key]: true }));
          }
        }
      });
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    const interval = setInterval(checkVisibility, 100);
    
    return () => {
      window.removeEventListener('scroll', checkVisibility);
      clearInterval(interval);
    };
  }, [isVisible]);

  const handleEnroll = (courseId: string) => {
    alert(`Ви записалися на курс! ID: ${courseId}`);
  };

  return (
    <div className="home">
      {/* Оновлений херо-секшен з пастельно синім фоном */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">Мови відкривають світ</h1>
            <div className="hero-actions">
              <Link to="/courses">
                <Button variant="primary">Переглянути курси</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline">Почати навчання</Button>
              </Link>
            </div>
            {/* Додана маленька кнопка "Дізнайся більше про нас" */}
            <div className="learn-more-container">
              <Link to="/about" className="learn-more-link">
                Дізнайся більше про нас
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/assets/Teaching-amico.svg" 
              alt="Вивчення мов онлайн" 
            />
          </div>
        </div>
      </section>

      {/* Секція "Чому обирають нас" */}
      <div className="why-choose-us">
        {/* Секція 1: Досвідчені викладачі */}
        <section 
          ref={why1Ref} 
          className={`why-section ${isVisible.why1 ? 'fade-in' : ''}`}
        >
          <div className="why-container">
            <div className="why-content">
              <h2>Досвідчені викладачі</h2>
              <ul className="why-points">
                <li>Тільки носії мови та сертифіковані педагоги</li>
                <li>Індивідуальний підхід до кожного студента</li>
                <li>Персональний куратор на весь період навчання</li>
                <li>Регулярне оновлення навичок та знань</li>
              </ul>
            </div>
            <div className="why-image">
              <div className="why-image-wrapper">
                <div className="why-number">01</div>
                <img 
                  src="/assets/teachers.svg" 
                  alt="Досвідчені викладачі мовної школи" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Секція 2: Сучасні методики */}
        <section 
          ref={why2Ref} 
          className={`why-section ${isVisible.why2 ? 'fade-in' : ''}`}
        >
          <div className="why-container">
            <div className="why-content">
              <h2>Сучасні методики</h2>
              <ul className="why-points">
                <li>Гейміфікація - навчання через гру</li>
                <li>Метод природного поглинання мови</li>
                <li>Регулярний моніторинг прогресу</li>
                <li>Інтерактивні матеріали та практика</li>
              </ul>
            </div>
            <div className="why-image">
              <div className="why-image-wrapper">
                <div className="why-number">02</div>
                <img 
                  src="/assets/gaming.svg" 
                  alt="Сучасні методики вивчення мов" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Секція 3: Багато мов */}
        <section 
          ref={why3Ref} 
          className={`why-section ${isVisible.why3 ? 'fade-in' : ''}`}
        >
          <div className="why-container">
            <div className="why-content">
              <h2>Багато мов</h2>
              <ul className="why-points">
                <li>Англійська - від A1 до C2</li>
                <li>Німецька, французька, іспанська</li>
                <li>Польська, італійська та інші мови</li>
                <li>Підготовка до IELTS, TOEFL, Goethe</li>
              </ul>
            </div>
            <div className="why-image">
              <div className="why-image-wrapper">
                <div className="why-number">03</div>
                <img 
                  src="/assets/method.svg" 
                  alt="Різноманітність мов для вивчення" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Секція 4: Онлайн та офлайн */}
        <section 
          ref={why4Ref} 
          className={`why-section ${isVisible.why4 ? 'fade-in' : ''}`}
        >
          <div className="why-container">
            <div className="why-content">
              <h2>Онлайн та офлайн</h2>
              <ul className="why-points">
                <li>Онлайн - з будь-якої точки світу</li>
                <li>Вас завжди чекають комфортні аудиторії</li>
                <li>Гнучкість - можна змінювати формат</li>
                <li>Запис уроків для повторення</li>
              </ul>
            </div>
            <div className="why-image">
              <div className="why-image-wrapper">
                <div className="why-number">04</div>
                <img 
                  src="/assets/online.svg" 
                  alt="Онлайн та офлайн формати навчання" 
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Секція з курсами - без фільтра */}
      <section 
        ref={coursesRef} 
        className={`courses-preview ${isVisible.courses ? 'fade-in' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">Популярні курси</h2>

          <div className="courses-grid">
            {featuredCourses.map((course, index) => (
              <div 
                key={course.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className={`${isVisible.courses ? 'fade-in' : ''}`}
              >
                <CourseCard
                  course={course}
                  onEnroll={handleEnroll}
                />
              </div>
            ))}
          </div>
          
          <div className="section-footer">
            <Link to="/courses">
              <Button variant="outline">Переглянути всі курси</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Секція з інструкторами */}
      <section 
        ref={instructorsRef} 
        className={`instructors-preview ${isVisible.instructors ? 'fade-in' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">Наші викладачі</h2>
          <div className="instructors-grid">
            {featuredInstructors.map((instructor, index) => (
              <div 
                key={instructor.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className={`${isVisible.instructors ? 'fade-in' : ''}`}
              >
                <InstructorCard instructor={instructor} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Секція статистики */}
      <section 
        ref={statsRef} 
        className={`stats ${isVisible.stats ? 'fade-in' : ''}`}
      >
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Задоволених студентів</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Успішних складань іспитів</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Професійних викладачів</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2тиж</div>
              <div className="stat-label">Перші результати</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;