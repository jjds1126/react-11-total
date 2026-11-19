function Navigation() {
    const menuStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        listStyle: 'none',
        whiteSpace: 'nowrap' as const,
    }

    return (
        <nav>
            <ul style={menuStyle}>
                <li>Home</li>
                <li>Todo</li>
                <li>Coin</li>
                <li>Movie</li>
                <li>Rocket</li>
                <li>Book</li>
            </ul>
        </nav>
    )
}

export default Navigation