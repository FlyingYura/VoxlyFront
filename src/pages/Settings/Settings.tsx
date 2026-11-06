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
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  const [avatarStatus, setAvatarStatus] = useState('');
  const [saving, setSaving] = useState(false);
  const [savingAvatar, setSavingAvatar] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setName(currentUser.name || '');
    setEmail(currentUser.email || '');
    setAvatarUrl(currentUser.avatarUrl || null);
  }, [navigate]);

  const resizeImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        const size = 256;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas not supported'));
          return;
        }
        const side = Math.min(img.width, img.height);
        const sx = (img.width - side) / 2;
        const sy = (img.height - side) / 2;
        ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Не вдалося прочитати зображення'));
      };
      img.src = url;
    });
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setAvatarStatus('Оберіть файл зображення');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setAvatarStatus('Файл занадто великий (макс. 10 МБ)');
      return;
    }

    setSavingAvatar(true);
    setAvatarStatus('');
    try {
      const dataUrl = await resizeImage(file);
      const user = await updateUser({ avatarUrl: dataUrl });
      setAvatarUrl(user.avatarUrl || dataUrl);
      setAvatarStatus('Аватарку збережено');
    } catch {
      setAvatarStatus('Не вдалося зберегти аватарку');
    } finally {
      setSavingAvatar(false);
    }
  };

  const handleAvatarRemove = async () => {
    setSavingAvatar(true);
    setAvatarStatus('');
    try {
      const user = await updateUser({ avatarUrl: null });
      setAvatarUrl(user.avatarUrl || null);
      setAvatarStatus('Аватарку видалено');
    } catch {
      const current = getCurrentUser();
      if (current) {
        localStorage.setItem('currentUser', JSON.stringify({ ...current, avatarUrl: null }));
        setAvatarUrl(null);
        setAvatarStatus('Аватарку видалено на цьому пристрої');
      } else {
        setAvatarStatus('Не вдалося видалити аватарку');
      }
    } finally {
      setSavingAvatar(false);
    }
  };

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
            <h2>Аватар</h2>
            <div className="avatar-settings">
              <div className="avatar-preview">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Аватар" className="avatar-preview-img" />
                ) : (
                  <span>{(name || email || '?').charAt(0).toUpperCase()}</span>
                )}
              </div>
              <div className="avatar-actions">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="avatar-file-input"
                  onChange={handleAvatarChange}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={savingAvatar}
                >
                  {savingAvatar ? 'Збереження...' : 'Завантажити фото'}
                </Button>
                {avatarUrl && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleAvatarRemove}
                    disabled={savingAvatar}
                  >
                    Видалити
                  </Button>
                )}
              </div>
              {avatarStatus && <p className="settings-status">{avatarStatus}</p>}
              <p className="settings-hint">JPG або PNG до 10 МБ. Зображення автоматично кадрується в квадрат.</p>
            </div>
          </Card>

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
