// En un archivo separado, ThemeContext.js:

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isBlue, setIsBlue] = useState(false);

  const toggleTheme = () => {
    setIsBlue(!isBlue);
  };

  const theme = {
    isBlue,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
