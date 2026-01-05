import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>VOXLY</h3>
          <p>Ваш надійний партнер у вивченні іноземних мов</p>
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
          <h4>Контакти</h4>
          <ul>
            <li>prokopivyura@gmail.com</li>
            <li>+380980986653</li>
            <li>м. Львів, вул Зарицьких 32</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Соціальні мережі</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/yura_wyd/?hl=usa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} VOXLY. Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;

