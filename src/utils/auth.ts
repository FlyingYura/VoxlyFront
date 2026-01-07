import type { User } from '../types';
import { 
  signInWithPopup, 
  signOut as firebaseSignOut, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';
import api from '../config/api';

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('currentUser');
  if (!userStr) return null;
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null && localStorage.getItem('firebaseIdToken') !== null;
};

export const loginWithGoogle = async (): Promise<User> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const firebaseUser = result.user;
    const idToken = await firebaseUser.getIdToken();

    localStorage.setItem('firebaseIdToken', idToken);

    const response = await api.post('/api/auth/google', { idToken });

    if (response.data.success) {
      const user = response.data.user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    } else {
      throw new Error('Failed to authenticate with backend');
    }
  } catch (error: any) {
    console.error('Google login error:', error);
    throw error;
  }
};

export const register = async (email: string, password: string, name: string): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    
    await updateProfile(firebaseUser, { displayName: name });
    
    const idToken = await firebaseUser.getIdToken();
    localStorage.setItem('firebaseIdToken', idToken);

    const response = await api.post('/api/auth/google', { idToken });
    
    if (response.data.success) {
      const user = response.data.user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    } else {
      throw new Error(response.data.error || 'Registration failed');
    }
  } catch (error: any) {
    console.error('Registration error:', error);
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('Користувач з таким email вже існує');
    } else if (error.code === 'auth/weak-password') {
      throw new Error('Пароль занадто слабкий');
    } else if (error.code === 'auth/invalid-email') {
      throw new Error('Невірний формат email');
    }
    throw error;
  }
};

export const login = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    
    const idToken = await firebaseUser.getIdToken();
    localStorage.setItem('firebaseIdToken', idToken);

    const response = await api.post('/api/auth/login', { idToken });
    
    if (response.data.success) {
      const user = response.data.user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    } else {
      throw new Error(response.data.error || 'Login failed');
    }
  } catch (error: any) {
    console.error('Login error:', error);
    if (error.code === 'auth/user-not-found') {
      throw new Error('Користувача з таким email не знайдено');
    } else if (error.code === 'auth/wrong-password') {
      throw new Error('Невірний пароль');
    } else if (error.code === 'auth/invalid-email') {
      throw new Error('Невірний формат email');
    }
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Firebase logout error:', error);
  }
  
  localStorage.removeItem('currentUser');
  localStorage.removeItem('firebaseIdToken');
};

export const refreshUserData = async (): Promise<User | null> => {
  try {
    const response = await api.get('/api/users/me');
    
    if (response.data.success) {
      const user = response.data.user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }
    return null;
  } catch (error) {
    console.error('Refresh user data error:', error);
    return null;
  }
};

export const updateUser = async (updates: Partial<User>): Promise<User> => {
  try {
    const response = await api.put('/api/users/me', updates);
    
    if (response.data.success) {
      const user = response.data.user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    } else {
      throw new Error(response.data.error || 'Update failed');
    }
  } catch (error: any) {
    console.error('Update user error:', error);
    throw error;
  }
};

