import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import Button from '../Button/Button';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import { getCurrentUser, isAuthenticated } from '../../utils/auth';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getCurrentUser());
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img 
            src="/src/assets/voxly.png" 
            alt="Voxly - Мовна Школа" 
            className="logo-image"
          />
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/courses" 
            className={`nav-link ${isActive('/courses') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Курси
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Про нас
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Контакти
          </Link>
          {isAuthenticated() && (
            <>
              <Link 
                to="/my-courses" 
                className={`nav-link ${isActive('/my-courses') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Мої курси
              </Link>
              {user && (user.enrolledCourses?.length > 0 || user.paidCourses?.length > 0) && (
                <Link 
                  to="/schedule" 
                  className={`nav-link ${isActive('/schedule') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Розклад
                </Link>
              )}
            </>
          )}
        </nav>

        <div className="header-actions">
          {isAuthenticated() ? (
            <ProfileDropdown />
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="header-btn">
                  Вхід
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" className="header-btn">
                  Реєстрація
                </Button>
              </Link>
            </>
          )}
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;