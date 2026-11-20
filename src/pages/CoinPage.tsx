import CCharacter from "../components/Character/CCharacter.tsx";
import { useEffect, useState } from "react";
import styles from "./App.module.css";


type Coin = {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    price_usd: string;
    percent_change_24h: string;
    market_cap_usd: string;
}

function CoinPage() {
    const [coins, setCoins] = useState<Coin[]>([]);  /*데이터 들어가는 배열 코인 목록을 coins에 저장*/
    const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);

    /* [선택, 변경] null= 선택없다*/

    const firstThen = (response: Response) => {

        return response.json();
    };

    const secondThen = (json: { data: Coin[]}) => {
        setCoins(json.data);
    }

    useEffect(() => {

        fetch("https://api.coinlore.net/api/tickers/?start=0&limit=50")
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


                {coins.map((coin) => {
                    return (
                        <div key={coin.id}
                        onClick={() => setSelectedCoin(coin)}>
                            <p>{coin.name} ({coin.symbol})</p>
                        </div>
                    );
                })}
        </div>

            <div className={styles.coinDetail}>
                <div className={styles.infoBox}>
                    <h2>
                        {selectedCoin ? selectedCoin.name : "코인 선택하셈"}
                    </h2>
                    <p>
                        현재 가격:  {selectedCoin
                        ? Number(selectedCoin.price_usd).toLocaleString() + "달러" : "조회 중..."}
                    </p>  {/* T0do에서 했던 삼항 toLocaleString() 천단위 쉼표*/}
                    <p>
                        시가총액:  {selectedCoin
                        ? Number(selectedCoin.price_usd).toLocaleString() + "달러" : "조회 중..."}
                    </p>
                    <p>
                        24시간 거래량:  {selectedCoin
                        ? Number(selectedCoin.price_usd).toLocaleString() + "달러" : "조회 중..."}
                    </p>
                    <p>
                        시가총액 순위:  {selectedCoin
                        ? Number(selectedCoin.price_usd).toLocaleString() + "달러" : "조회 중..."}
                    </p>                          {/*코인 데이터에서 가져옴*/}
                </div>

               <div className={styles.infoBox}>
                   <CCharacter />
               </div>
        </div>
            </div>
        </div>

    );
}

export default CoinPage;
