import React from 'react';
import './Input.css';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label?: string;
  name?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  name,
  required = false,
  textarea = false,
  rows = 4,
  className = ''
}) => {
  const inputId = name || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`input-group ${className}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      {textarea ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className="input-field textarea-field"
        />
      ) : (
        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="input-field"
        />
      )}
    </div>
  );
};

export default Input;

