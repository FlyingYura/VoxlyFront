import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Button from '../Button/Button';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import { getCurrentUser, isAuthenticated } from '../../utils/auth';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const location = useLocation();

  const isCourseView = location.pathname.startsWith('/course/');

  useEffect(() => {
    setUser(getCurrentUser());
    setIsMenuOpen(false);
    setIsHidden(false);
  }, [location]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setIsHidden(false);
      } else if (y > lastY + 4) {
        setIsHidden(true);
      } else if (y < lastY - 4) {
        setIsHidden(false);
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`header ${isHidden ? 'header-hidden' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img
            src="/assets/voxly.png"
            alt="Voxly - Мовна Школа"
            className="logo-image"
          />
        </Link>

        {!isCourseView && (
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
            {isAuthenticated() && user && (user.enrolledCourses?.length > 0 || user.paidCourses?.length > 0) && (
              <Link
                to="/schedule"
                className={`nav-link ${isActive('/schedule') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Розклад
              </Link>
            )}
          </nav>
        )}

        <div className="header-actions">
          {isAuthenticated() ? (
            <ProfileDropdown />
          ) : !isCourseView ? (
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
          ) : null}
          {!isCourseView && (
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
