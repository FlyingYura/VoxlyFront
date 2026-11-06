import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, updateUser } from '../../utils/auth';
import { useTheme } from '../../context/ThemeContext';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Card from '../../components/Card/Card';
import './Settings.css';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setName(currentUser.name || '');
    setEmail(currentUser.email || '');
  }, [navigate]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatus('Вкажіть ім\'я');
      return;
    }

    setSaving(true);
    setStatus('');
    try {
      await updateUser({ name: name.trim() });
      setStatus('Дані збережено');
    } catch {
      const current = getCurrentUser();
      if (current) {
        localStorage.setItem('currentUser', JSON.stringify({ ...current, name: name.trim() }));
        setStatus('Ім\'я оновлено на цьому пристрої');
      } else {
        setStatus('Не вдалося зберегти зміни');
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="settings-page">
      <div className="container">
        <h1>Налаштування</h1>
        <p className="settings-intro">Оновіть дані профілю та вигляд сайту.</p>

        <div className="settings-grid">
          <Card className="card-no-hover">
            <h2>Особисті дані</h2>
            <form onSubmit={handleSave} className="settings-form">
              <Input
                type="text"
                name="name"
                label="Ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={() => undefined}
                disabled
              />
              <p className="settings-hint">Email використовується для входу і зараз змінити його не можна.</p>
              {status && <p className="settings-status">{status}</p>}
              <Button type="submit" variant="primary" disabled={saving}>
                {saving ? 'Збереження...' : 'Зберегти'}
              </Button>
            </form>
          </Card>

          <Card className="card-no-hover">
            <h2>Тема сайту</h2>
            <p className="settings-hint">Оберіть світлу або темну тему. Вибір зберігається на цьому пристрої.</p>
            <div className="theme-options">
              <button
                type="button"
                className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
              >
                Світла
              </button>
              <button
                type="button"
                className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
              >
                Темна
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
