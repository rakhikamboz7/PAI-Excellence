"use client"
import { useTheme } from "../contexts/ThemeContext"

/**
 * ThemedButton Component
 * A button component that adapts to the current theme
 */
export const ThemedButton = ({ children, variant = "primary", size = "default", className = "", ...props }) => {
  const { theme } = useTheme()

  const variants = {
    primary: `bg-${theme.primary} hover:bg-${theme.hover} text-white`,
    secondary: `bg-${theme.secondary} hover:bg-${theme.accent} text-white`,
    outline: `border-2 border-${theme.primary} text-${theme.primary} hover:bg-${theme.primary} hover:text-white`,
    ghost: `text-${theme.primary} hover:bg-${theme.background}`,
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        rounded-lg font-semibold transition-all duration-200 
        focus:outline-none focus:ring-2 focus:ring-${theme.accent} focus:ring-offset-2
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

/**
 * ThemedCard Component
 * A card component that adapts to the current theme
 */
export const ThemedCard = ({ children, className = "", ...props }) => {
  const { theme } = useTheme()

  return (
    <div
      className={`
        bg-${theme.surface} border border-${theme.border} rounded-xl shadow-lg 
        transition-all duration-200 hover:shadow-xl
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * ThemedText Component
 * Text component that adapts to the current theme
 */
export const ThemedText = ({ children, variant = "primary", className = "", ...props }) => {
  const { theme } = useTheme()

  const variants = {
    primary: `text-${theme.text}`,
    secondary: `text-${theme.textSecondary}`,
    accent: `text-${theme.primary}`,
  }

  return (
    <span className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  )
}
