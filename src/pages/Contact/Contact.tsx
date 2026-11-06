import React, { useState } from 'react';
import type { ContactForm } from '../../types';
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

    if (!formData.name || !formData.email || !formData.message) {
      alert('Будь ласка, заповніть всі поля');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Будь ласка, введіть коректний email');
      return;
    }

    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Зв'яжіться з нами</h1>
        <p>Напишіть повідомлення або завітайте до школи</p>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <Card className="card-no-hover">
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
              <Card className="contact-info-card card-no-hover">
                <h2>Контактна інформація</h2>

                <div className="info-item">
                  <div className="info-content">
                    <h3>Адреса</h3>
                    <p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Дрогобич+Раневицька+12+82106"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        м. Дрогобич, вул. Раневицька, 12, 82106
                      </a>
                    </p>
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
