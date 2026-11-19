import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

type ThemeContextType = {
    isDark: boolean
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
    isDark: false,
    toggleTheme: () => {},
})

type ThemeProviderProps = {
    children: ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        setIsDark((prev) => !prev)
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider