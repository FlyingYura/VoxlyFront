import React, { useState } from 'react';
import { ContactForm } from '../../types';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валідація
    if (!formData.name || !formData.email || !formData.message) {
      alert('Будь ласка, заповніть всі поля');
      return;
    }

    // Перевірка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Будь ласка, введіть коректний email');
      return;
    }

    // Симуляція відправки
    console.log('Форма відправлена:', formData);
    setIsSubmitted(true);
    
    // Очищення форми через 3 секунди
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Зв'яжіться з нами</h1>
        <p>Ми завжди раді відповісти на ваші питання</p>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <Card>
                <h2>Надішліть нам повідомлення</h2>
                {isSubmitted ? (
                  <div className="success-message">
                    <p>Дякуємо! Ваше повідомлення відправлено.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <Input
                      type="text"
                      name="name"
                      label="Ваше ім'я"
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
                      name="message"
                      label="Повідомлення"
                      placeholder="Напишіть ваше повідомлення..."
                      value={formData.message}
                      onChange={handleChange}
                      textarea
                      rows={6}
                      required
                    />
                    <Button type="submit" variant="primary">
                      Відправити
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            <div className="contact-info-section">
              <Card className="contact-info-card">
                <h2>Контактна інформація</h2>
                
                <div className="info-item">
                  <div className="info-content">
                    <h3>Адреса</h3>
                    <p>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=м.+Львів,+вул+Зарицьких+32" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        м. Львів, вул Зарицьких 32
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-content">
                    <h3>Телефон</h3>
                    <p><a href="tel:+380980986653">+380980986653</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-content">
                    <h3>Email</h3>
                    <p><a href="mailto:prokopivyura@gmail.com">prokopivyura@gmail.com</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-content">
                    <h3>Години роботи</h3>
                    <p>Пн-Пт: 9:00 - 20:00</p>
                    <p>Сб: 10:00 - 18:00</p>
                    <p>Нд: Вихідний</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

