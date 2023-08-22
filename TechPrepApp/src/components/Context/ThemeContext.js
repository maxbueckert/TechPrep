import React, { createContext, useContext, useState } from 'react';

// Create a new context
const DifficultyContext = createContext();

// Create a provider component
export const ThemeContext = ({ children }) => {
  const [isDark, setIsDark] = useState(false);


  return (
    <ThemeContext.Provider value={{ isDark, setIsDark}}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
