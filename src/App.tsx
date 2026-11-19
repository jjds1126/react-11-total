import { useContext } from "react"
import Header from "./components/Header"
import { Routes, Route } from 'react-router'
import HomePage from "./pages/HomePage.tsx"
import TodoPage from "./pages/TodoPage"
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
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/todo" element={<TodoPage />} />
            </Routes>
        </div>
    )
}

export default App