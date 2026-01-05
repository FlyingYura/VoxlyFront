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

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate('/');
    setIsOpen(false);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setIsOpen(false);
  };

  if (!user) return null;

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <button 
        className="profile-icon-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Profile menu"
      >
        <div className="profile-avatar-icon">
          {user.name.charAt(0).toUpperCase()}
        </div>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <div className="dropdown-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="dropdown-user-info">
              <div className="dropdown-name">{user.name}</div>
              <div className="dropdown-email">{user.email}</div>
            </div>
          </div>
          
          <div className="dropdown-divider"></div>
          
          <button className="dropdown-item" onClick={handleProfileClick}>
            <span>Мій профіль</span>
          </button>
          
          <button className="dropdown-item" onClick={handleLogout}>
            <span>Вийти</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

