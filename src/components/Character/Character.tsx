import { useState } from "react";
import styled from "styled-components";       {/*스타일 리스트 이미지불러오기*/}

import normaImg from "../../assets/character-normal.png";
import hoverImg from "../../assets/character-hover.png";    /* 미사용이라 경고뜸 */

/* 캐릭터 영역 만들기  styled.div 스타일리스트 적용한 div*/
const CharacterBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
/* 스타일 리스트 적용된 이미지 */
const CharacterImage = styled.img`
    width: 300px;
    max-width: 80%;
    height: auto;
    object-fit: contain;
    `;

/* 스테이트 만들기 */
/* [마우스위치저장,값변경] 스테이트: 마우스가 없으면 false true로 변경되면서 이미지도 변경*/
function Character() {
    const [isHover, setIsHover] = useState(false);
/* 삼항 연산자 사용 참이면 앞에 아니면 뒤*/
    return(
        <CharacterBox>
            <CharacterImage
                src={isHover ? hoverImg : normaImg}
                alt="캐릭터" /*() 뒤에 =>가 붙으면 화살표 함수 동작하면 실행하셈*/
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                />
        </CharacterBox>
    );
}
export default Character;

