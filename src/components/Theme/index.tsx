import React, { useState, useEffect } from 'react';
import darkStyles from 'assets/styles/theme/dark.less';
import lightStyles from 'assets/styles/theme/light.less';

export const enum Themes {
  Dark = 'Dark',
  Light = 'Light',
}

const defaultValue = {
  theme: Themes.Dark,
  toggleTheme: () => {}, // eslint-disable-line
  styles: darkStyles,
};
const ThemeContext = React.createContext(defaultValue);
export const useTheme = () => React.useContext(ThemeContext);

const useDarkMode = () => {
  const [theme, setTheme] = useState(Themes.Dark);
  const [styles, setStyles] = useState(lightStyles);

  const toggleTheme = () => {
    if (theme === Themes.Light) {
      setTheme(Themes.Dark);
      setStyles(darkStyles);
      window.localStorage.setItem('theme', Themes.Dark);
      document.body.className = 'darkMode';
    } else {
      setTheme(Themes.Light);
      setStyles(lightStyles);
      window.localStorage.setItem('theme', Themes.Light);
      document.body.className = '';
    }
  };
  useEffect(() => {
    const theme = window.localStorage.getItem('theme') === Themes.Light ? Themes.Light : Themes.Dark;
    setTheme(theme);
    setStyles(theme === Themes.Light ? lightStyles : darkStyles);
    if (theme === Themes.Dark) {
      document.body.className = 'darkMode';
    }
  }, []);
  return { theme, toggleTheme, styles };
};

function ThemeProvider({ children }: { children?: React.ReactNode }) {
  const theme = useDarkMode();
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
