import React from 'react';
import InstructorCard from '../../components/InstructorCard/InstructorCard';
import './About.css';

const About: React.FC = () => {
  const aboutInstructors = [
    {
      id: '1',
      name: 'Яджак Роксолана',
      language: 'Англійська',
      experience: '5+ років',
      rating: 4.9,
      students: 120,
      description: 'Сертифікований викладач з міжнародним досвідом',
      image: '/src/assets/roksa.jpg'
    },
    {
      id: '2',
      name: 'Криворучко Микола',
      language: 'Німецька',
      experience: '7+ років',
      rating: 4.8,
      students: 95,
      description: 'Носій мови, експерт з підготовки до Goethe-Zertifikat',
      image: '/src/assets/kolya.jpg'
    },
    {
      id: '3',
      name: 'Кіліан Мбаппе',
      language: 'Французька',
      experience: '4+ років',
      rating: 4.7,
      students: 85,
      description: 'Носій французької мови, спеціаліст з розмовної практики',
      image: '/src/assets/mbap.png'
    },
    {
      id: '4',
      name: 'Степанова Ірина',
      language: 'Іспанська',
      experience: '6+ років',
      rating: 4.8,
      students: 110,
      description: 'Носій іспанської мови, досвід роботи в Іспанії',
      image: '/src/assets/ira.png'
    },
    {
      id: '5',
      name: 'Курило Володимир',
      language: 'Польська',
      experience: '5+ років',
      rating: 4.6,
      students: 75,
      description: 'Спеціаліст з польської мови та культури',
      image: '/src/assets/volod.png'
    },
    {
      id: '6',
      name: 'Ільницький Денис',
      language: 'Італійська',
      experience: '4+ років',
      rating: 5,
      students: 80,
      description: 'Носій італійської мови, досвід викладання в Італії',
      image: '/src/assets/den.jpg'
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>Про нашу школу</h1>
          <p className="hero-text">
            Мовна Школа - це сучасний навчальний центр, де ви можете вивчати іноземні мови
            з професійними викладачами та досягати своїх цілей.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <h2>Наша місія</h2>
          <div className="mission-content">
            <p>
              Ми прагнемо зробити вивчення іноземних мов доступним, цікавим та ефективним
              для кожного. Наша команда досвідчених викладачів використовує сучасні методики
              навчання та індивідуальний підхід до кожного студента.
            </p>
            <p>
              Незалежно від вашого рівня - початковий, середній чи продвинутий - ми допоможемо
              вам досягти успіху у вивченні мови.
            </p>
          </div>
        </div>
      </section>

      <section className="about-features">
        <div className="container">
          <h2>Наші переваги</h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h3>Індивідуальний підхід</h3>
              <p>
                Кожен студент отримує персональну увагу та план навчання, адаптований
                під його потреби та цілі.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">02</div>
              <h3>Сучасні методики</h3>
              <p>
                Використовуємо комунікативний підхід, інтерактивні вправи та реальні
                ситуації для швидкого засвоєння матеріалу.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">03</div>
              <h3>Гнучкий графік</h3>
              <p>
                Навчайтесь у зручний для вас час. Пропонуємо як групові, так і
                індивідуальні заняття.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">04</div>
              <h3>Сертифікати</h3>
              <p>
                Після завершення курсу ви отримаєте сертифікат, який підтверджує
                ваш рівень знань.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">05</div>
              <h3>Мультимедійні матеріали</h3>
              <p>
                Доступ до сучасних навчальних матеріалів, відео, аудіо та інтерактивних
                платформ для ефективного навчання.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">06</div>
              <h3>Підтримка 24/7</h3>
              <p>
                Наша команда завжди готова допомогти вам з будь-якими питаннями щодо
                навчання та матеріалів.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-instructors">
        <div className="container">
          <h2>Наша команда</h2>
          <p className="section-intro">
            Зустрічайте наших досвідчених викладачів, які допоможуть вам досягти успіху
            у вивченні мов.
          </p>
          <div className="instructors-grid">
            {aboutInstructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Задоволених студентів</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Активних курсів</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.8</div>
              <div className="stat-label">Середня оцінка</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">7</div>
              <div className="stat-label">Мов навчання</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;