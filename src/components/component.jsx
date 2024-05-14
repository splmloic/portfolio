// Component.js
import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import "../assets/index.css";

function Component() {
  const { isNightMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`component ${isNightMode ? 'night' : 'day'}`}>
      <button onClick={toggleTheme}>{isNightMode ? '🌑':'☀️'}</button>
    </div>
  );
}

export default Component;
