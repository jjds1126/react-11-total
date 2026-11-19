
import Navigation from './Navigation'

function Header() {
    return (
        <header
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                alignItems: 'center',
                padding: '20px 40px',
                backgroundColor: '#fff',
                borderBottom: '1px solid #e5e7eb',
            }}
        >
            <h1 style={{ fontSize: '24px', color: '#222' }}>
                My Universe
            </h1>

            <Navigation />
        </header>
    )
}

export default Header
