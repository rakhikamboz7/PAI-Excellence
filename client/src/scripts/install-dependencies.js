import { execSync } from "child_process"

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  fg: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  },

  bg: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
  },
}

console.log(`${colors.fg.cyan}${colors.bright}=== Installing PAI-Excel Drag and Drop Dependencies ===${colors.reset}\n`)

try {
  console.log(`${colors.fg.yellow}Installing @dnd-kit packages...${colors.reset}`)
  execSync("npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities", { stdio: "inherit" })

  console.log(`\n${colors.fg.green}✓ Successfully installed drag and drop dependencies!${colors.reset}`)

  console.log(`\n${colors.fg.cyan}${colors.bright}=== Next Steps ===${colors.reset}`)
  console.log(`${colors.fg.white}1. Start your development server: ${colors.fg.green}npm run dev${colors.reset}`)
  console.log(`${colors.fg.white}2. Login as admin to test drag and drop functionality${colors.reset}`)
  console.log(`${colors.fg.white}3. Hover over components to see edit controls${colors.reset}`)
  console.log(`${colors.fg.white}4. Use the drag handle to reorder components${colors.reset}\n`)

  console.log(`${colors.fg.cyan}${colors.bright}=== Troubleshooting ===${colors.reset}`)
  console.log(`${colors.fg.white}• If drag and drop isn't working, check the browser console for errors${colors.reset}`)
  console.log(`${colors.fg.white}• Make sure you're logged in as an admin${colors.reset}`)
  console.log(`${colors.fg.white}• Try refreshing the page after login${colors.reset}`)
  console.log(`${colors.fg.white}• For support, contact the development team${colors.reset}\n`)
} catch (error) {
  console.error(`${colors.fg.red}Error installing dependencies:${colors.reset}`, error)
  // eslint-disable-next-line no-undef
  process.exit(1)
}
