import React, { useState } from 'react';
import type { Course } from '../../types';
import Card from '../Card/Card';
import Button from '../Button/Button';
import CoursePreviewModal from '../CoursePreviewModal/CoursePreviewModal';
import flagFR from '/src/assets/fr.svg';
import flagES from '/src/assets/sp.svg';
import flagGB from '/src/assets/uk.svg';
import flagIT from '/src/assets/it.svg';
import flagPL from '/src/assets/pl.svg';
import flagUA from '/src/assets/ua.svg';
import flagDE from '/src/assets/ger.svg';
import './CourseCard.css';

interface CourseCardProps {
  course: Course;
  onEnroll?: (courseId: string) => void;
  onPay?: (courseId: string) => void;
  showPayButton?: boolean;
}

const languageToFlag: Record<string, string> = {
  'Французька': flagFR,
  'Іспанська': flagES,
  'Англійська': flagGB,
  'Італійська': flagIT,
  'Польська': flagPL,
  'Українська': flagUA,
  'Німецька': flagDE,
};

const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll, onPay, showPayButton }) => {
  const [showModal, setShowModal] = useState(false);
  const flagUrl = languageToFlag[course.language];

  const handleView = () => {
    setShowModal(true);
  };

  const handleEnrollFromModal = () => {
    setShowModal(false);
    if (onEnroll) {
      onEnroll(course.id);
    }
  };

  const handlePayFromModal = () => {
    setShowModal(false);
    if (onPay) {
      onPay(course.id);
    }
  };

  return (
    <>
    <Card className="course-card">
      <div className="course-header">
        <span className="course-language">{course.language}</span>
        {flagUrl && (
          <div className="course-flag-circle">
            <img src={flagUrl} alt={`Flag of ${course.language}`} />
          </div>
        )}
        <span className={`course-level level-${course.level.toLowerCase()}`}>
          {course.level}
        </span>
      </div>
      
      <h3 className="course-title">{course.title}</h3>
      
      <p className="course-description">{course.description}</p>
      
      <div className="course-info">
        <div className="info-item">
          <span className="info-label">Викладач:</span>
          <span className="info-value">{course.instructor}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Тривалість:</span>
          <span className="info-value">{course.duration}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Студентів:</span>
          <span className="info-value">{course.studentsCount}</span>
        </div>
      </div>
      
      <div className="course-footer">
        <div className="course-price">
          <span className="price-amount">{course.price} ₴</span>
        </div>
        <div className="course-actions">
          {showPayButton && onPay ? (
            <Button 
              variant="secondary" 
              onClick={handleView}
            >
              Переглянути
            </Button>
          ) : onEnroll ? (
            <Button 
              variant="primary" 
              onClick={handleView}
            >
              Переглянути
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
    {showModal && (
      <CoursePreviewModal
        course={course}
        onClose={() => setShowModal(false)}
        onEnroll={showPayButton && onPay ? handlePayFromModal : handleEnrollFromModal}
        isPayment={showPayButton && !!onPay}
      />
    )}
    </>
  );
};

export default CourseCard;

