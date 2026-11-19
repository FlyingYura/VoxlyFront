import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Language School Drohobych</h3>
          <p>Мовна школа в Дрогобичі</p>
        </div>

        <div className="footer-section">
          <h4>Навігація</h4>
          <ul>
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/courses">Курси</Link></li>
            <li><Link to="/about">Про нас</Link></li>
            <li><Link to="/contact">Контакти</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Адреса</h4>
          <ul>
            <li>м. Дрогобич</li>
            <li>вул. Раневицька, 12</li>
            <li>82106</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Language School Drohobych. Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
