"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContaxtType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContaxtType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  function handleThemeChange() {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  }

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("ThemeContext was used outside of ThemeProvider");

  return context;
}

export default ThemeProvider;
