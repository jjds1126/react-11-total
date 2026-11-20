import { createGlobalStyle } from "styled-components";
import { useContext } from "react"
import Header from "./components/Header"
import { Routes, Route } from 'react-router'
import HomePage from "./pages/HomePage.tsx"
import TodoPage from "./pages/TodoPage"
import CoinPage from "./pages/CoinPage.tsx";
import Movie from "./pages/Movie.tsx";
import { ThemeContext } from "./ThemeContext"

const GlobalStyle = createGlobalStyle`
    /* 크리에이트 글로벌 스타일 전체 페이지 css 적용 */
    @font-face {
        font-family: 'JejuStoneWall';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2') format('woff2');
        font-weight: normal;
        font-display: swap;
    }

    * {
        font-family: 'JejuStoneWall', sans-serif;
    }
`;


function App() {
    const { isDark } = useContext(ThemeContext)

    return (
        <>
            <GlobalStyle />
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
            <Routes>   {/*Routes 표지판 경로에 따라 페이지 보여줌*/}
                <Route path="/" element={<HomePage />} />
                <Route path="/todo" element={<TodoPage />} />
                <Route path="/coin" element={<CoinPage /> } />
                <Route path="/movie" element={<Movie />} />
            </Routes>  {/* element{</>} 보여줄 화면 뭔지 정하기 */}
        </div>
            </>
    )
}

export default App