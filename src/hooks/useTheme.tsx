"use client";
// @/hooks/useTheme.ts

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import themes from "../../themes";

type Theme = keyof typeof themes;
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  getTheme: (key: keyof (typeof themes)[Theme]) => string;
  getGlobal: (key: keyof (typeof themes)[Theme]) => string;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("green");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setThemeState(savedTheme);
    }
  }, []);

  const setTheme = (theme: Theme) => {
    setThemeState(theme);
    localStorage.setItem("theme", `${theme}`);
  };

  const getTheme = (key: keyof (typeof themes)[Theme]) => {
    return themes[theme][key];
  };

  const getGlobal = (key: keyof (typeof themes)[Theme]) => {
    return themes["global"]![key];
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, getTheme, getGlobal }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
