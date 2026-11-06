import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Course } from '../../types';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { languageToFlag } from '../../utils/flags';
import './CourseCard.css';

interface CourseCardProps {
  course: Course;
  onPay?: (courseId: string) => void;
  showPayButton?: boolean;
  onViewDetails?: (courseId: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onPay, showPayButton, onViewDetails }) => {
  const navigate = useNavigate();
  const flagUrl = languageToFlag[course.language];

  const handleView = () => {
    if (onViewDetails) {
      onViewDetails(course.id);
    } else {
      navigate(`/courses/${course.id}`);
    }
  };

  return (
    <Card className="course-card clickable" onClick={handleView}>
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
          {showPayButton && onPay && (
            <Button
              variant="secondary"
              onClick={(e) => {
                e?.stopPropagation();
                onPay(course.id);
              }}
            >
              Оплатити
            </Button>
          )}
          <Button
            variant="primary"
            onClick={(e) => {
              e?.stopPropagation();
              handleView();
            }}
          >
            Детальніше
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
