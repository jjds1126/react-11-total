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
            <h1>업비트 코인 목록 ({coins.length}개)</h1>
            <hr />
            <select>
                {coins.map((coin, index) => {
                    return (
                        <option key={index}>
                            {coin.korean_name} ({coin.market})
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default CoinPage;
