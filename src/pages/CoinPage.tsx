import { useEffect, useState } from "react";
import styles from "./App.module.css";

type Coin = {
    market: string;
    korean_name: string;
    english_name: string;
}

function CoinPage() {

    const [coins, setCoins] = useState<Coin[]>([]);

    const firstThen = (response: Response): Promise<Coin[]> => {

        return response.json();
    };

    const secondThen = (json: Coin[]) => {
        setCoins(json);
    }

    useEffect(() => {

        fetch("https://api.upbit.com/v1/market/all")
            .then(firstThen)
            .then(secondThen)

            .catch((error: unknown) => {

                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    console.log("알 수 없는 에러가 발생되었습니다" + error)
                }
            });
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>COIN</h1>
            </header>



            <div className={styles.content}>
        <div className={styles.coinList}>
            <h2>업비트 코인 목록 ({coins.length}개)</h2>


                {coins.map((coin, index) => {
                    return (
                        <div key={index}>
                            <p>{coin.korean_name} ({coin.market})</p>
                        </div>
                    );
                })}
        </div>

            <div className={styles.coinDetail}>
                <div className={styles.infoBox}>
                    <h2>코인 상세정보</h2>
                    <p>현재 가격</p>
                    <p>시가총액</p>
                    <p>24시간 거래량</p>
                    <p>시가총액 순위</p>
                </div>

                <div className={styles.imageBox}>
                </div>
        </div>
            </div>
        </div>

    );
}

export default CoinPage;
