import React from 'react';
import { Course } from '../../types';
import Button from '../Button/Button';
import './CoursePreviewModal.css';

interface CoursePreviewModalProps {
  course: Course;
  onClose: () => void;
  onEnroll: () => void;
  isPayment?: boolean;
}

const CoursePreviewModal: React.FC<CoursePreviewModalProps> = ({ course, onClose, onEnroll, isPayment = false }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content course-preview-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="course-preview-header">
          <h2>{course.title}</h2>
          <div className="course-preview-meta">
            <span className="course-preview-language">{course.language}</span>
            <span className={`course-preview-level level-${course.level.toLowerCase()}`}>
              {course.level}
            </span>
          </div>
        </div>

        <div className="course-preview-description">
          <p>{course.description}</p>
        </div>

        <div className="course-preview-info">
          <div className="info-row">
            <span className="info-label">Викладач:</span>
            <span className="info-value">{course.instructor}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Тривалість:</span>
            <span className="info-value">{course.duration}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Студентів:</span>
            <span className="info-value">{course.studentsCount}</span>
          </div>
        </div>

        {course.roadmap && course.roadmap.length > 0 && (
          <div className="course-preview-topics">
            <h3>Що ви вивчите:</h3>
            <ul>
              {course.roadmap.map((topic) => (
                <li key={topic.id}>
                  <strong>{topic.title}</strong>
                  {topic.description && <span> - {topic.description}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="course-preview-methodology">
          <h3>Як вивчається курс:</h3>
          <p>
            Курс включає інтерактивні уроки, практичні вправи, тести та матеріали для самостійного вивчення. 
            Ви будете вивчати мову через розмовну практику, граматичні вправи та культурний контекст.
          </p>
        </div>

        <div className="course-preview-footer">
          <div className="course-preview-price">
            <span className="price-label">Ціна:</span>
            <span className="price-amount">{course.price} ₴</span>
          </div>
          <div className="course-preview-actions">
            <Button variant="outline" onClick={onClose}>
              Закрити
            </Button>
            <Button variant="primary" onClick={onEnroll}>
              {isPayment ? 'Сплатити' : 'Записатися'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreviewModal;

