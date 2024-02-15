import React, { useState } from 'react';
import './ToggleTheme.css';

export const ToggleTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`toggle-theme ${theme}`} onClick={toggleTheme}>
      <div className="sun-moon">
        {theme === 'light' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <circle cx="12" cy="12" r="5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M11.99 4c-4.41 0-8 3.59-8 8s3.59 8 8 8c2.76 0 5.19-1.41 6.63-3.55.28-.46-.09-1.05-.58-1.05h-1.42c-.39 0-.7.31-.7.7 0 .25.14.47.35.59 1.15.67 1.94 1.82 1.94 3.26 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.44.78-2.59 1.94-3.26.21-.13.35-.34.35-.59 0-.39-.31-.7-.7-.7h-1.42c-.49 0-.86.59-.58 1.05 1.44 2.14 3.87 3.55 6.63 3.55 4.42 0 8-3.58 8-8s-3.58-8-8-8z" />
          </svg>
        )}
      </div>
    </div>
  );
};
