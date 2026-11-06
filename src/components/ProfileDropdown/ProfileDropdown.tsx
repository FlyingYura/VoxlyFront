import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../../utils/auth';
import './ProfileDropdown.css';

const ProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const goTo = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate('/');
    setIsOpen(false);
  };

  if (!user) return null;

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <button
        className="profile-icon-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Profile menu"
        aria-expanded={isOpen}
      >
        <div className="profile-avatar-icon">
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt={user.name} className="avatar-img" />
          ) : (
            user.name.charAt(0).toUpperCase()
          )}
        </div>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <div className="dropdown-avatar">
              {user.avatarUrl ? (
                <img src={user.avatarUrl} alt={user.name} className="avatar-img" />
              ) : (
                user.name.charAt(0).toUpperCase()
              )}
            </div>
            <div className="dropdown-user-info">
              <div className="dropdown-name">{user.name}</div>
              <div className="dropdown-email">{user.email}</div>
            </div>
          </div>

          <div className="dropdown-actions">
            <button className="dropdown-item" onClick={() => goTo('/profile')}>
              Мої курси
            </button>
            <button className="dropdown-item" onClick={() => goTo('/settings')}>
              Налаштування
            </button>
            <button className="dropdown-item dropdown-item-muted" onClick={handleLogout}>
              Вийти
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
