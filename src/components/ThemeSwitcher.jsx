"use client"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Palette, Check } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

/**
 * ThemeSwitcher Component
 * Provides a UI for users to switch between different color themes
 * Themes are saved to localStorage and persist across sessions
 */
const ThemeSwitcher = () => {
  // Get theme context values
  const { currentTheme, themes, changeTheme } = useTheme()

  // Theme button configuration with colors and icons
  const themeButtons = [
    {
      key: "orange",
      label: "Orange",
      bgColor: "bg-orange-600",
      hoverColor: "hover:bg-orange-700",
      ringColor: "ring-orange-300",
    },
    {
      key: "blue",
      label: "Blue",
      bgColor: "bg-blue-primary",
      hoverColor: "hover:bg-blue-dark",
      ringColor: "ring-blue-300",
    },
    {
      key: "purple",
      label: "Purple",
      bgColor: "bg-purple-primary",
      hoverColor: "hover:bg-purple-dark",
      ringColor: "ring-purple-300",
    },
    {
      key: "green",
      label: "Green",
      bgColor: "bg-green-primary",
      hoverColor: "hover:bg-green-dark",
      ringColor: "ring-green-300",
    },
    {
      key: "dark",
      label: "Dark",
      bgColor: "bg-gray-800",
      hoverColor: "hover:bg-gray-900",
      ringColor: "ring-gray-400",
    },
  ]

  /**
   * Handle theme change
   * @param {string} themeKey - The key of the theme to switch to
   */
  const handleThemeChange = (themeKey) => {
    changeTheme(themeKey)
  }

  return (
    <div className="relative">
      {/* Theme switcher container */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Palette className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Choose Theme</h3>
        </div>

        {/* Theme buttons grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {themeButtons.map((themeBtn) => (
            <motion.button
              key={themeBtn.key}
              onClick={() => handleThemeChange(themeBtn.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all duration-200
                ${
                  currentTheme === themeBtn.key
                    ? `border-current ring-2 ${themeBtn.ringColor}`
                    : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                }
                bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600
              `}
              aria-label={`Switch to ${themeBtn.label} theme`}
            >
              {/* Color preview circle */}
              <div
                className={`
                  w-8 h-8 rounded-full ${themeBtn.bgColor} ${themeBtn.hoverColor} 
                  transition-colors duration-200 flex items-center justify-center
                `}
              >
                {/* Check icon for selected theme */}
                {currentTheme === themeBtn.key && <Check className="w-4 h-4 text-white" />}
              </div>

              {/* Theme label */}
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{themeBtn.label}</span>

              {/* Selected indicator */}
              {currentTheme === themeBtn.key && (
                <motion.div
                  layoutId="selectedTheme"
                  className="absolute inset-0 rounded-lg border-2 border-current"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Current theme indicator */}
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Current: <span className="font-semibold">{themes[currentTheme]?.name}</span>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default ThemeSwitcher
