import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { courses } from '../../utils/data';
import { getCurrentUser, refreshUserData, updateUser } from '../../utils/auth';
import api from '../../config/api';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './Payment.css';

const Payment: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState(getCurrentUser());
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    email: user?.email || ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const course = courses.find(c => c.id === courseId);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (!course) {
      navigate('/courses');
      return;
    }
  }, [user, course, navigate]);

  if (!course || !user) return null;

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Тільки цифри
    if (value.length > 16) value = value.slice(0, 16); // Максимум 16 цифр
    setPaymentData(prev => ({ ...prev, cardNumber: value }));
  };

  const handleCardHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^A-Za-zА-Яа-яіІїЇєЄ\s]/g, ''); // Тільки літери та пробіли
    setPaymentData(prev => ({ ...prev, cardHolder: value.toUpperCase() }));
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Тільки цифри
    if (value.length > 4) value = value.slice(0, 4);
    // Додаємо "/" після 2 цифр
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    setPaymentData(prev => ({ ...prev, expiryDate: value }));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Тільки цифри
    if (value.length > 3) value = value.slice(0, 3); // Максимум 3 цифри
    setPaymentData(prev => ({ ...prev, cvv: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валідація
    if (!paymentData.cardNumber || paymentData.cardNumber.length !== 16) {
      alert('Номер карти повинен містити 16 цифр');
      return;
    }
    
    if (!paymentData.cardHolder || paymentData.cardHolder.trim().length < 3) {
      alert("Ім'я на картці повинно містити мінімум 3 символи");
      return;
    }
    
    if (!paymentData.expiryDate || paymentData.expiryDate.length !== 5) {
      alert('Термін дії повинен бути у форматі MM/YY');
      return;
    }
    
    if (!paymentData.cvv || paymentData.cvv.length !== 3) {
      alert('CVV повинен містити 3 цифри');
      return;
    }

    if (!user || !courseId) {
      alert('Помилка: користувач або курс не знайдено');
      return;
    }

    setIsProcessing(true);
    
    try {
      // Отримуємо актуальні дані користувача
      const currentUser = await refreshUserData();
      if (!currentUser) {
        throw new Error('Не вдалося отримати дані користувача');
      }

      // Оновлюємо масиви курсів
      const updatedPaidCourses = currentUser.paidCourses || [];
      const updatedEnrolledCourses = currentUser.enrolledCourses || [];

      // Додаємо курс до оплачених, якщо його там ще немає
      if (!updatedPaidCourses.includes(courseId)) {
        updatedPaidCourses.push(courseId);
      }

      // Додаємо курс до записаних, якщо його там ще немає
      if (!updatedEnrolledCourses.includes(courseId)) {
        updatedEnrolledCourses.push(courseId);
      }

      // Оновлюємо користувача через API
      const updatedUser = await updateUser({
        paidCourses: updatedPaidCourses,
        enrolledCourses: updatedEnrolledCourses,
      });

      // Оновлюємо локальний стан
      setUser(updatedUser);

      alert('Оплата успішна! Ви записані на курс.');
      navigate('/my-courses');
    } catch (error: any) {
      console.error('Payment error:', error);
      alert(error.message || 'Помилка при оплаті. Спробуйте ще раз.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="payment-page">
      <div className="container">
        <h1>Оплата навчання</h1>
        
        <div className="payment-content">
          <div className="payment-info">
            <Card>
              <h2>Деталі курсу</h2>
              <div className="course-details">
                <p><strong>Назва:</strong> {course.title}</p>
                <p><strong>Мова:</strong> {course.language}</p>
                <p><strong>Рівень:</strong> {course.level}</p>
                <p><strong>Тривалість:</strong> {course.duration}</p>
                <p><strong>Викладач:</strong> {course.instructor}</p>
                <div className="total-price">
                  <p><strong>До сплати:</strong></p>
                  <span className="price">{course.price} ₴</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="payment-form-section">
            <Card>
              <h2>Дані для оплати</h2>
              <form onSubmit={handleSubmit} className="payment-form">
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  value={paymentData.email}
                  onChange={handleChange}
                  required
                  disabled
                />
                <Input
                  type="text"
                  name="cardNumber"
                  label="Номер картки"
                  placeholder="1234567890123456"
                  value={paymentData.cardNumber}
                  onChange={handleCardNumberChange}
                  required
                  maxLength={16}
                />
                <Input
                  type="text"
                  name="cardHolder"
                  label="Ім'я на картці"
                  placeholder="IVAN IVANOV"
                  value={paymentData.cardHolder}
                  onChange={handleCardHolderChange}
                  required
                />
                <div className="form-row">
                  <Input
                    type="text"
                    name="expiryDate"
                    label="Термін дії"
                    placeholder="MM/YY"
                    value={paymentData.expiryDate}
                    onChange={handleExpiryDateChange}
                    required
                    maxLength={5}
                  />
                  <Input
                    type="text"
                    name="cvv"
                    label="CVV"
                    placeholder="123"
                    value={paymentData.cvv}
                    onChange={handleCvvChange}
                    required
                    maxLength={3}
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="pay-button"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Обробка...' : `Сплатити ${course.price} ₴`}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

