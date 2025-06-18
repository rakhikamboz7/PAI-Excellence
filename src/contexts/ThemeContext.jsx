"use client"

import { createContext, useContext, useEffect, useState } from "react"

// Create Theme Context
const ThemeContext = createContext()

// Theme configuration object with all theme variants
const themes = {
  orange: {
    name: "Orange",
    primary: "orange-600",
    secondary: "amber-500",
    accent: "orange-500",
    background: "white",
    surface: "gray-50",
    text: "gray-900",
    textSecondary: "gray-600",
    border: "gray-200",
    hover: "orange-700",
  },
  blue: {
    name: "Blue",
    primary: "blue-primary",
    secondary: "blue-secondary",
    accent: "blue-accent",
    background: "blue-light",
    surface: "white",
    text: "blue-text",
    textSecondary: "blue-muted",
    border: "blue-200",
    hover: "blue-dark",
  },
  purple: {
    name: "Purple",
    primary: "purple-primary",
    secondary: "purple-secondary",
    accent: "purple-accent",
    background: "purple-light",
    surface: "white",
    text: "purple-text",
    textSecondary: "purple-muted",
    border: "purple-200",
    hover: "purple-dark",
  },
  green: {
    name: "Green",
    primary: "green-primary",
    secondary: "green-secondary",
    accent: "green-accent",
    background: "green-light",
    surface: "white",
    text: "green-text",
    textSecondary: "green-muted",
    border: "green-200",
    hover: "green-dark",
  },
  dark: {
    name: "Dark",
    primary: "dark-primary",
    secondary: "dark-secondary",
    accent: "dark-accent",
    background: "dark-dark",
    surface: "dark-light",
    text: "dark-text",
    textSecondary: "dark-muted",
    border: "gray-600",
    hover: "amber-600",
  },
}

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  // State to manage current theme
  const [currentTheme, setCurrentTheme] = useState("orange")

  // Load saved theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme")
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedTheme", currentTheme)
     document.body.classList.remove(...Object.keys(themes).map(t => `theme-${t}`));
  document.body.classList.add(`theme-${currentTheme}`);
  document.body.style.backgroundColor = `rgb(var(--color-background))`;
  }, [currentTheme])

  // Function to change theme
  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName)
    }
  }

  // Get current theme configuration
  const theme = themes[currentTheme]

  // Context value object
  const contextValue = {
    currentTheme,
    theme,
    themes,
    changeTheme,
  }

 return (
  <ThemeContext.Provider value={contextValue}>
    {/* Wrapper div with theme class for global theme application */}
    <div className={`theme-${currentTheme} min-h-screen bg-background transition-colors duration-300`}>
  {children}
</div>

  </ThemeContext.Provider>
)

}

// Custom hook to use theme context
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export default ThemeContext
