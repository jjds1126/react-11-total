import {useContext} from "react";
import {ThemeContext} from "../ThemeContext.tsx";

function Navigation() {
    const { isDark } = useContext(ThemeContext)
    const menuStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        listStyle: 'none',
        whiteSpace: 'nowrap' as const,
        color: isDark ? '#fff' : '#222',
    }

    return (
        <nav>
            <ul style={{
                    ...menuStyle,
                    color: isDark ? '#fff' : '#222',
                }}
            >
                <li style={{ color: 'inherit' }}>Home</li>
                <li style={{ color: 'inherit' }}>Todo</li>
                <li style={{ color: 'inherit' }}>Coin</li>
                <li style={{ color: 'inherit' }}>Movie</li>
                <li style={{ color: 'inherit' }}>Rocket</li>
                <li style={{ color: 'inherit' }}>Book</li>
            </ul>
        </nav>
    )
}

export default Navigation