import React, {useEffect, useRef, useState, useMemo, useCallback} from "react";
import { render } from 'react-dom';
import Ball from "./Ball";

function getWinNumbers(){
  console.log("getWinNumbers");
  const candidate = Array(45).fill().map((v,i)=> i+1);
  const shuffle = [];
  while(candidate.length > 0){
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);

  return [...winNumbers, bonusNumber];
}


const Lotto = () => {
  const [winBalls, setWinBalls] = useState([]);
  const lottoNumbers = useMemo(() => getWinNumbers(), [winBalls]); // 두번째 [] 안의 요소가 바뀌면 다시 실행
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(()=>{
    runTimeouts();
    return()=>{
      timeouts.current.forEach((v)=>{
        clearTimeout(v);
      });
    }
  }, [timeouts.current]);


  const runTimeouts = () => {
    for (let i = 0; i < winNumbers.length - 1; i++){
      timeouts.current[i] = setTimeout(() => { // 이 줄은 timeouts.current 가 바뀌는 부분이 아님
        setWinBalls((prevState)=> [...prevState, winNumbers[i]]);
      }, (i+1)*1000);
    }

    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
  }

  const onClickRedo = useCallback(() =>{
    console.log("onClickRedo");
    console.log(winNumbers); // 계속 같은 숫자만 찍힘 (바껴야하는 경우라면 문제가됨)
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(true);
    timeouts.current = [];
  }, [winNumbers]); // winNumbers가 바뀌면 새로 실행된다. (바껴야 하는 요소는 여기에 적어줘야 함)

  return(
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v)=><Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  )
}

export default Lotto;