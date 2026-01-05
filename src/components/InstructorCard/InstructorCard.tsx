import React from 'react';
import { Instructor } from '../../types';
import Card from '../Card/Card';
import './InstructorCard.css';

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star">☆</span>);
    }

    return stars;
  };

  const formatStudents = (students: number) => {
    return students >= 1000 ? `${(students/1000).toFixed(1)}k+` : `${students}+`;
  };

  return (
    <Card className="instructor-card">
      {/* Круглий контейнер для фото */}
      <div className="instructor-photo-container">
        {instructor.image ? (
          <img 
            src={instructor.image} 
            alt={instructor.name}
            className="instructor-photo"
            onError={(e) => {
              // Якщо фото не завантажилося, показуємо фолбек
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.insertAdjacentHTML(
                'beforeend', 
                `<div class="instructor-fallback" data-initial="${instructor.name.charAt(0)}">${instructor.name.charAt(0)}</div>`
              );
            }}
          />
        ) : (
          <div 
            className="instructor-fallback" 
            data-initial={instructor.name.charAt(0)}
          >
            {instructor.name.charAt(0)}
          </div>
        )}
      </div>
      
      <div className="instructor-info">
        <h3 className="instructor-name">{instructor.name}</h3>
        
        <div className="instructor-language">{instructor.language} мова</div>
        
        <div className="instructor-rating">
          <div className="stars">
            {renderStars(instructor.rating)}
          </div>
          <span className="rating-value">{instructor.rating.toFixed(1)}</span>
        </div>
        
        <div className="instructor-details">
          <div className="experience-item">
            <span className="experience-label">Досвід</span>
            <span className="experience-value">{instructor.experience}</span>
          </div>
          <div className="students-item">
            <span className="students-label">Студентів</span>
            <span className="students-value">{formatStudents(instructor.students)}</span>
          </div>
        </div>
        
        <p className="instructor-description">{instructor.description || instructor.bio}</p>
      </div>
    </Card>
  );
};

export default InstructorCard;