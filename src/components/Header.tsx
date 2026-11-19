
import Navigation from './Navigation'
import {useContext} from "react";
import {ThemeContext} from "../ThemeContext.tsx";

function Header() {
    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        <header
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                alignItems: 'center',
                padding: '20px 40px',
                backgroundColor: isDark ? '#222' : '#fff',
                borderBottom: '1px solid #e5e7eb',
            }}
        >
            <h1 style={{ fontSize: '24px', color:  isDark ? '#fff' :'#222' }}>
                My Universe
            </h1>

            <Navigation />

            <button
                onClick={toggleTheme}
                style={{
                    justifySelf: 'end',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    cursor: 'pointer'
                }}
                >
                {isDark ? '라이트 모드' : '다크 모드'}
            </button>
        </header>
    )
}

export default Header
