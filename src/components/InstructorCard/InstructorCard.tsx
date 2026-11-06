import React from 'react';
import type { Instructor } from '../../types';
import Card from '../Card/Card';
import './InstructorCard.css';

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  const formatStudents = (students: number) => {
    return students >= 1000 ? `${(students / 1000).toFixed(1)}k+` : `${students}+`;
  };

  return (
    <Card className="instructor-card card-no-hover">
      <div className="instructor-photo-container">
        <div className="instructor-fallback">
          {instructor.name.charAt(0)}
        </div>
      </div>

      <div className="instructor-info">
        <h3 className="instructor-name">{instructor.name}</h3>
        <div className="instructor-language">{instructor.language}</div>
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
