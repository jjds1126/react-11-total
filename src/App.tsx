import Header from './components/Header'
import Home from './components/Home'

function App() {
    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#f5f6fa',
                color: '#222',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <Header />
            <Home />
        </div>
    )
}

export default App