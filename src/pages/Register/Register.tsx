import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { register, loginWithGoogle } from '../../utils/auth';
import './Register.css';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Валідація
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Будь ласка, заповніть всі поля');
      setLoading(false);
      return;
    }

    // Перевірка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Будь ласка, введіть коректний email');
      setLoading(false);
      return;
    }

    // Перевірка пароля
    if (formData.password.length < 6) {
      setError('Пароль повинен містити мінімум 6 символів');
      setLoading(false);
      return;
    }

    // Перевірка співпадіння паролів
    if (formData.password !== formData.confirmPassword) {
      setError('Паролі не співпадають');
      setLoading(false);
      return;
    }

    try {
      await register(formData.email, formData.password, formData.name);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || 'Помилка реєстрації. Спробуйте зареєструватися через Google.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Помилка реєстрації через Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <Card className="register-card">
          <h1>Реєстрація</h1>
          <p className="register-subtitle">Створіть новий акаунт</p>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="register-form">
            <Input
              type="text"
              name="name"
              label="Ім'я"
              placeholder="Введіть ваше ім'я"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              label="Пароль"
              placeholder="Мінімум 6 символів"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="confirmPassword"
              label="Підтвердження пароля"
              placeholder="Повторіть пароль"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <Button 
              type="submit" 
              variant="primary" 
              className="register-button"
              disabled={loading}
            >
              {loading ? 'Реєстрація...' : 'Зареєструватися'}
            </Button>
          </form>

          <div className="login-divider">
            <span>або</span>
          </div>

          <Button 
            type="button" 
            variant="outline" 
            className="google-login-button"
            onClick={handleGoogleRegister}
            disabled={loading}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Зареєструватися через Google
          </Button>

          <div className="login-link">
            <p>Вже є акаунт? <Link to="/login">Увійти</Link></p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;

