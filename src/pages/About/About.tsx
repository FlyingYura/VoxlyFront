import React from 'react';
import InstructorCard from '../../components/InstructorCard/InstructorCard';
import { instructors } from '../../utils/data';
import './About.css';

const About: React.FC = () => {

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
            {instructors.map((instructor) => (
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