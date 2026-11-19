function Home() {
    const cards = [
        {
            title: '투두리스트',
            description: '일 체계적인 일정 관리와 할 일 목록 기록',
        },
        {
            title: '코인트래커',
            description: '실시간 가상화폐 시세 확인 및 정보 트래킹',
        },
        {
            title: '무비검색앱',
            description: '영화 데이터베이스 API를 활용한 영화 검색',
        },
        {
            title: '게시판',
            description: '기본적인 커뮤니티 게시판',
        },
        {
            title: '로켓앱',
            description: '스페이스X의 로켓 발사 상태 및 상세 정보 조회',
        },
        {
            title: '구글북스 검색앱',
            description: '구글 도서 데이터를 활용한 온라인 책 검색',
        },
    ]

    return (
        <main
            style={{
                padding: '38px 30px',
            }}
        >
            <section
                style={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e5e5',
                    borderRadius: '20px',
                    padding: '36px',
                    marginBottom: '28px',
                }}
            >
                <h2
                    style={{
                        color: '#287bd1',
                        fontSize: '30px',
                        marginBottom: '12px',
                    }}
                >
                    My Project Dashboard
                </h2>

                <p
                    style={{
                        color: '#999',
                        fontSize: '13px',
                    }}
                >
                    지금까지 구축한 포트폴리오 리스트입니다.
                </p>
            </section>

            <section
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '18px',
                }}
            >
                {cards.map((card) => (
                    <div
                        key={card.title}
                        style={{
                            backgroundColor: '#fff',
                            border: '1px solid #e5e5e5',
                            borderRadius: '16px',
                            height: '184px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '18px',
                        }}
                    >
                        <h3 style={{ fontSize: '17px' }}>
                            {card.title}
                        </h3>

                        <p
                            style={{
                                color: '#aaa',
                                fontSize: '12px',
                            }}
                        >
                            {card.description}
                        </p>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Home