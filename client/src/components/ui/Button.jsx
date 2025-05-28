export const Button = ({ variant = "default", size = "default", className = "", children, ...props }) => {
  const variants = {
    default: "bg-gray-900 text-white hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",
    destructive: "bg-red-500 text-white hover:bg-red-500/90 dark:bg-red-900 dark:hover:bg-red-900/90",
    outline:
      "border border-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
    ghost: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
    link: "underline-offset-4 hover:underline text-gray-900 dark:text-gray-50",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  }

  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium 
        transition-colors focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-gray-400 focus-visible:ring-offset-2 
        disabled:opacity-50 disabled:pointer-events-none 
        dark:focus-visible:ring-gray-600 dark:ring-offset-gray-950
        ${variants[variant]} 
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
