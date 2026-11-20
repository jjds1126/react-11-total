function Movie() {
    return (


        <div style={{
            width: "100%",
            minHeight: '780px',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: "border-box",
        }}>
            <div style={{
                flex: "none",
                height: "680px",
                width: "35%",
                marginLeft: "auto",
                marginRight: "auto",
                maxHeight: "1000px",
                marginBottom: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#555",
                borderRadius: "16px",
            }}>
                <h2>영화 메인 영역</h2>
            </div>
        <div style={{
            marginTop: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            width: "35%",
            padding: "10px",
            borderRadius: "16px",
            backgroundColor: "#333",
            display: "flex",
            justifyContent: "center",
        }}>
            <h3 style={{ color: "#fff" }}>영화 검색</h3>
        </div>
        </div>
    );
}

export default Movie;