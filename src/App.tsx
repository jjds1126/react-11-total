import { useContext } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import { ThemeContext } from "./ThemeContext"

function App() {
    const { isDark } = useContext(ThemeContext)

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: isDark ? '#181818' : '#f5f6fa',
                color: isDark ? '#fff' : '#222',
                fontFamily: 'Arial, sans-serif',
                transition: 'background-color 0.3s, color 0.3s',
            }}
        >
            <Header />
            <Home />
        </div>
    )
}

export default App