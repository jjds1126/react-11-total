import {useContext} from "react";
import {ThemeContext} from "../ThemeContext.tsx";
import {Link} from "react-router";

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
                <li>
                    <Link to="/" style={{ color: 'inherit',
                        textDecoration: "none"
                    }}>
                    Home
                    </Link>
                </li>
                {/*---------------------------투두---------------------------------*/}
                <li>
                    <Link
                        to="/todo"
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        Todo
                    </Link>
                </li>


                {/*
                    to="/" to = 어디로 갈꺼? /=>홈 주소  to="/a" => 클릭시 a로 이동할꺼
                */}

                <li>
                    <Link to="/coin" style={{ color: 'inherit',
                        textDecoration: "none"
                    }}>
                        coin
                    </Link>
                </li>
                {/*---------------------------코인---------------------------------*/}
                <li>
                    <Link
                        to="/coin"
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                    </Link>
                </li>





                <li>
                    <Link to="/movie" style={{ color: 'inherit',
                        textDecoration: "none"
                    }}>
                        Movie
                    </Link>
                </li>
                {/*---------------------------Movie---------------------------------*/}
                <li>
                    <Link
                        to="/movie"
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                    </Link>
                </li>




                <li>
                    <Link to="/rocket" style={{ color: 'inherit',
                        textDecoration: "none"
                    }}>
                        Rocket
                    </Link>
                </li>
                {/*---------------------------Rocket---------------------------------*/}
                <li>
                    <Link
                        to="/rocket"
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                    </Link>
                </li>





                <li>
                    <Link to="/book" style={{ color: 'inherit',
                        textDecoration: "none"
                    }}>
                        Book
                    </Link>
                </li>
                {/*---------------------------Book---------------------------------*/}
                <li>
                    <Link
                        to="/book"
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation