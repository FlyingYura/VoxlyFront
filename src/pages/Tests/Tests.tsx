import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { courses } from '../../utils/data';
import { getCurrentUser } from '../../utils/auth';
import { calculateCourseProgress } from '../../utils/progress';
import api from '../../config/api';
import type { Test } from '../../types';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import './Tests.css';

const Tests: React.FC = () => {
  const navigate = useNavigate();
  const { testId, courseId } = useParams<{ testId: string; courseId: string }>();
  const [user, setUser] = useState(getCurrentUser());
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [questionResults, setQuestionResults] = useState<Record<string, { isCorrect: boolean; userAnswer: string | string[]; correctAnswer: string | string[] }>>({});
  const [showAnswersReview, setShowAnswersReview] = useState(false);
  const resultCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setUser(currentUser);
  }, [navigate]);

  useEffect(() => {
    if (!testId || !courseId) {
      navigate('/my-courses');
      return;
    }

    const course = courses.find(c => c.id === courseId);
    const test = course?.tests?.find(t => t.id === testId);
    if (test) {
      setSelectedTest(test);
      setAnswers({});
      setIsSubmitted(false);
      setScore(null);
      setQuestionResults({});
      setShowAnswersReview(false);
      setTimeLeft(test.timeLimit ? test.timeLimit * 60 : null);
    } else {
      navigate('/my-courses');
    }
  }, [testId, courseId, navigate]);

  if (!user) return null;

  const handleAnswerChange = (questionId: string, answer: string | string[], type: string) => {
    if (isSubmitted) return;
    
    if (type === 'multiple') {
      const currentAnswers = (answers[questionId] as string[]) || [];
      const newAnswers = currentAnswers.includes(answer as string)
        ? currentAnswers.filter(a => a !== answer)
        : [...currentAnswers, answer as string];
      setAnswers(prev => ({ ...prev, [questionId]: newAnswers }));
    } else {
      setAnswers(prev => ({ ...prev, [questionId]: answer }));
    }
  };

  const handleSubmit = async () => {
    if (!selectedTest || isSubmitted || !user) return;

    let totalScore = 0;
    let maxScore = 0;
    const results: Record<string, { isCorrect: boolean; userAnswer: string | string[]; correctAnswer: string | string[] }> = {};

    selectedTest.questions.forEach(question => {
      maxScore += question.points;
      const userAnswer = answers[question.id];
      const correctAnswer = question.correctAnswer;
      let isCorrect = false;

      if (question.type === 'multiple') {
        const userAnswers = Array.isArray(userAnswer) ? userAnswer.sort() : [];
        const correctAnswers = Array.isArray(correctAnswer) ? correctAnswer.sort() : [];
        isCorrect = JSON.stringify(userAnswers) === JSON.stringify(correctAnswers);
      } else {
        isCorrect = userAnswer === correctAnswer;
      }

      results[question.id] = {
        isCorrect,
        userAnswer: userAnswer || (question.type === 'multiple' ? [] : ''),
        correctAnswer
      };

      if (isCorrect) {
        totalScore += question.points;
      }
    });

    setQuestionResults(results);
    setScore(totalScore);
    setIsSubmitted(true);
    setTimeLeft(null);

    try {
      const response = await api.post('/api/users/me/test-results', {
        testId: selectedTest.id,
        score: totalScore,
        maxScore: maxScore,
        answers: answers,
      });

      if (response.data.success) {
        const updatedUser = response.data.user;
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        setUser(updatedUser);

        if (courseId) {
          try {
            const course = courses.find(c => c.id === courseId);
            if (course && course.roadmap) {
              let existingCompletedSubtopics: string[] = [];
              try {
                const progressResponse = await api.get(`/api/users/me/progress/${courseId}`);
                if (progressResponse.data.success && progressResponse.data.progress) {
                  existingCompletedSubtopics = progressResponse.data.progress.completedSubtopics || [];
                }
              } catch (error) {
                console.error('Error fetching existing progress:', error);
              }

              const { progressPercentage } = calculateCourseProgress(
                course,
                updatedUser.testResults || [],
                existingCompletedSubtopics
              );

              const completedTopicIds = course.roadmap
                .filter(topic => {
                  if (topic.testId) {
                    const testResult = (updatedUser.testResults || []).find(
                      (r: any) => r.testId === topic.testId
                    );
                    if (testResult) {
                      const percentage = (testResult.score / testResult.maxScore) * 100;
                      if (percentage >= 80) return true;
                    }
                  }
                  
                  const topicTestResult = (updatedUser.testResults || []).find(
                    (r: any) => r.testId === topic.id
                  );
                  if (topicTestResult) {
                    const percentage = (topicTestResult.score / topicTestResult.maxScore) * 100;
                    if (percentage >= 80) return true;
                  }
                  
                  if (topic.subtopics) {
                    for (const subtopic of topic.subtopics) {
                      if (subtopic.type === 'test' && subtopic.testId) {
                        const subtopicTestResult = (updatedUser.testResults || []).find(
                          (r: any) => r.testId === subtopic.testId
                        );
                        if (subtopicTestResult) {
                          const percentage = (subtopicTestResult.score / subtopicTestResult.maxScore) * 100;
                          if (percentage >= 80) return true;
                        }
                      }
                    }
                  }
                  
                  return false;
                })
                .map(topic => topic.id);

              let testTopic = course.roadmap.find(t => t.testId === selectedTest.id);
              
              if (!testTopic) {
                testTopic = course.roadmap.find(t => 
                  t.subtopics?.some(st => st.testId === selectedTest.id)
                );
              }
              
              if (!testTopic) {
                testTopic = course.roadmap.find(t => t.id === selectedTest.id);
              }
              
              if (testTopic && testTopic.subtopics) {
                const testResult = (updatedUser.testResults || []).find(
                  (r: any) => r.testId === selectedTest.id
                );
                if (testResult) {
                  const testPercentage = (testResult.score / testResult.maxScore) * 100;
                  if (testPercentage >= 80) {
                    const topicSubtopicIds = testTopic.subtopics.map(st => st.id);
                    existingCompletedSubtopics = [...new Set([...existingCompletedSubtopics, ...topicSubtopicIds])];
                  }
                }
              }

              await api.post('/api/users/me/progress', {
                courseId,
                progress: progressPercentage,
                completedTopics: completedTopicIds,
                completedSubtopics: existingCompletedSubtopics,
                currentTopic: course.roadmap.find(t => !completedTopicIds.includes(t.id))?.id || null,
              });
            }
          } catch (progressError) {
            console.error('Error updating progress:', progressError);
          }
        }
      } else {
        throw new Error('Failed to save test result');
      }
    } catch (error: any) {
      console.error('Error saving test result:', error);
      alert('Помилка при збереженні результату тесту. Спробуйте ще раз.');
    }
  };

  useEffect(() => {
    if (selectedTest?.timeLimit && timeLeft !== null && timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev === null || prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [selectedTest, timeLeft, isSubmitted]);

  useEffect(() => {
    if (isSubmitted && score !== null && resultCardRef.current) {
      resultCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isSubmitted, score]);

  useEffect(() => {
    if (isSubmitted && score !== null && resultCardRef.current) {
      resultCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isSubmitted, score]);


  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getAnswerStatus = (questionId: string, option: string) => {
    if (!isSubmitted || !showAnswersReview) return '';
    const result = questionResults[questionId];
    if (!result) return '';
    
    const isSelected = questionResults[questionId].userAnswer === option || 
      (Array.isArray(questionResults[questionId].userAnswer) && 
       (questionResults[questionId].userAnswer as string[]).includes(option));
    const isCorrect = Array.isArray(result.correctAnswer) 
      ? result.correctAnswer.includes(option)
      : result.correctAnswer === option;
    
    if (isSelected && isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'incorrect';
    if (!isSelected && isCorrect) return 'should-be-selected';
    return '';
  };

  const handleBack = () => {
    navigate(`/course/${courseId}`);
  };

  const handleBackToCourse = () => {
    navigate(`/course/${courseId}`);
  };

  const handleViewAnswers = () => {
    setShowAnswersReview(true);
    setTimeout(() => {
      const answersSection = document.querySelector('.answers-review');
      if (answersSection) {
        answersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  if (selectedTest && !isSubmitted) {
    return (
      <div className="tests-page">
        <div className="container">
          <div className="test-header">
            <h1>{selectedTest.title}</h1>
            {timeLeft !== null && (
              <div className="timer">
                Залишилось: {formatTime(timeLeft)}
              </div>
            )}
            <Button variant="outline" onClick={handleBack}>
              Назад
            </Button>
          </div>

          <Card>
            <p className="test-description">{selectedTest.description}</p>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <div className="questions">
                {selectedTest.questions.map((question, index) => (
                  <div key={question.id} className="question-card">
                    <h3 className="question-title">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="question-options">
                      {question.type === 'single' && question.options?.map(option => (
                        <label 
                          key={option} 
                          className={`option-label ${getAnswerStatus(question.id, option)}`}
                        >
                          <input
                            type="radio"
                            name={question.id}
                            value={option}
                            checked={answers[question.id] === option}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value, 'single')}
                            disabled={isSubmitted}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                      {question.type === 'multiple' && question.options?.map(option => (
                        <label 
                          key={option} 
                          className={`option-label ${getAnswerStatus(question.id, option)}`}
                        >
                          <input
                            type="checkbox"
                            checked={(answers[question.id] as string[])?.includes(option) || false}
                            onChange={() => handleAnswerChange(question.id, option, 'multiple')}
                            disabled={isSubmitted}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                      {question.type === 'text' && (
                        <div className="text-answer-wrapper">
                          <textarea
                            className={`text-answer ${isSubmitted && showAnswersReview ? (questionResults[question.id]?.isCorrect ? 'correct' : 'incorrect') : ''}`}
                            value={(answers[question.id] as string) || ''}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value, 'text')}
                            placeholder="Введіть відповідь..."
                            disabled={isSubmitted}
                          />
                          {isSubmitted && showAnswersReview && questionResults[question.id] && (
                            <div className="text-answer-feedback">
                              <div className={`feedback ${questionResults[question.id].isCorrect ? 'correct' : 'incorrect'}`}>
                                {questionResults[question.id].isCorrect ? (
                                  <span>✓ Правильно!</span>
                                ) : (
                                  <>
                                    <span>✗ Неправильно</span>
                                    <span className="correct-answer">Правильна відповідь: {(() => {
                                      const correctAnswer = questionResults[question.id].correctAnswer;
                                      return Array.isArray(correctAnswer) 
                                        ? correctAnswer.join(', ')
                                        : correctAnswer;
                                    })()}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="question-points">
                      {question.points} балів
                      {isSubmitted && showAnswersReview && questionResults[question.id] && (
                        <span className={`points-earned ${questionResults[question.id].isCorrect ? 'earned' : 'not-earned'}`}>
                          {questionResults[question.id].isCorrect ? `+${question.points}` : '0'}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {!isSubmitted && (
                <Button type="submit" variant="primary" className="submit-button">
                  Завершити тест
                </Button>
              )}
            </form>
          </Card>
        </div>
      </div>
    );
  }

  if (selectedTest && isSubmitted && score !== null) {
    const maxScore = selectedTest.questions.reduce((sum, q) => sum + q.points, 0);
    const percentage = Math.round((score / maxScore) * 100);
    const passed = percentage >= 67;
    const weakTopics: string[] = [];

    selectedTest.questions.forEach((question, index) => {
      if (!questionResults[question.id]?.isCorrect) {
        weakTopics.push(`Питання ${index + 1}`);
      }
    });

    return (
      <div className="tests-page">
        <div className="container">
          <Card className="result-card" ref={resultCardRef}>
            <h1>Результати тесту</h1>
            <div className="score-display">
              <div className="score-circle">
                <svg viewBox="0 0 100 100" className="score-svg">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e8e5e0"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={passed ? "#8B7355" : "#d32f2f"}
                    strokeWidth="8"
                    strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="score-text">
                  <span className="score-percentage">{percentage}%</span>
                </div>
              </div>
              <div className="score-value">{score} / {maxScore}</div>
              <div className={`test-status ${passed ? 'passed' : 'not-passed'}`}>
                {passed ? 'Тест складено' : 'Тест не складено'}
              </div>
            </div>

            {weakTopics.length > 0 && (
              <div className="weak-topics">
                <p>Були допущені помилки на такі питання:</p>
                <div className="weak-topics-list">
                  {weakTopics.map((topic, index) => (
                    <span key={index} className="weak-topic-badge">{topic}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="result-actions">
              <Button variant="primary" onClick={handleBackToCourse}>
                Повернутися до курсу
              </Button>
              {!showAnswersReview && (
                <Button variant="outline" onClick={handleViewAnswers}>
                  Переглянути відповіді
                </Button>
              )}
            </div>
          </Card>

          {showAnswersReview && (
            <Card className="answers-review">
              <h2>Перегляд відповідей</h2>
              <div className="review-questions">
                {selectedTest.questions.map((question, index) => {
                  const result = questionResults[question.id];
                  return (
                    <div key={question.id} className={`review-question ${result?.isCorrect ? 'correct' : 'incorrect'}`}>
                      <h3>
                        {index + 1}. {question.question}
                        {result?.isCorrect ? (
                          <span className="status-icon correct">✓</span>
                        ) : (
                          <span className="status-icon incorrect">✗</span>
                        )}
                      </h3>
                      {question.type !== 'text' && question.options && (
                        <div className="review-options">
                          {question.options.map(option => {
                            const status = getAnswerStatus(question.id, option);
                            return (
                              <div key={option} className={`review-option ${status}`}>
                                <span className="option-text">{option}</span>
                                {status === 'correct' && <span className="status-badge">Правильно</span>}
                                {status === 'incorrect' && <span className="status-badge">Неправильно</span>}
                                {status === 'should-be-selected' && <span className="status-badge">Правильна відповідь</span>}
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {question.type === 'text' && result && (
                        <div className="review-text-answer">
                          <div className="user-answer">
                            <strong>Ваша відповідь:</strong> {result.userAnswer}
                          </div>
                          {!result.isCorrect && (
                            <div className="correct-answer">
                              <strong>Правильна відповідь:</strong> {Array.isArray(result.correctAnswer) 
                                ? result.correctAnswer.join(', ')
                                : result.correctAnswer}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          )}
        </div>
      </div>
    );
  }

  if (!selectedTest) {
    return null;
  }

  return null;
};

export default Tests;
