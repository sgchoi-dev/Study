import React, { Component, useState, useDebugValue } from 'react';
import Try from './try_class';

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const cnadidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for(let i = 0; i < 4 ; i+=1){
    const chosen = cnadidate.splice(Math.floor(Math.random() * ( 9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const useStateWithLabel = (initialValue, label) => {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${label}: ${value}`);
  return [value, setValue];
};

const NumberBaseBall = () => {
  const [result, setResult] = useStateWithLabel('', 'result');
  const [value, setValue] = useStateWithLabel('', 'value');
  const [answer, setAnswer] = useStateWithLabel(getNumbers, 'answer'); // ----- ( o ) // lazy init: render 될 때마다 계속 실행되므로 함수옆 () 를 떼준다. 실행상에는 큰 차이가 없음 두번째 렌더링부터는 return 값을 알아서 무시함 but 쓸데없이 계속 호출 되는 것이 문제이므로 바꾸는게 좋다
  // const [answer, setAnswer] = useStateWithLabel(getNumbers()); // ----- ( x )
  const [tries, setTries] = useStateWithLabel([], 'tries');

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(value === answer.join('')){
      setResult("홈런");
      setTries((prevTries)=>{
        return [...prevTries, {try: value, result: '홈런!'}];
      });

      alert('게임을 다시 시작합니다!');

      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    }else{
      const answerArray = value.split('').map((v)=>parseInt(v));
      let strike = 0;
      let ball = 0;
      if( tries.length >= 9){
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join('.')} 였습니다!`);
        alert('게임을 다시 시작합니다!');
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      }else{
        for (let i = 0 ; i < 4; i+=1){
          if(answerArray[i] === answer[i]){
            strike += 1;
          }else if(answer.includes(answerArray[i])){
            ball += 1;
          }
        }
        setTries((prevTries)=>{
          return [...prevTries, {try: value, result: ` ${strike} 스트라이크, ${ball}볼입니다`}];
        })
        setValue("");
      }
    }
  }

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <h1>{result}</h1>
      <form action="" onSubmit={onSubmitForm}>
        <input type="text" maxLength={4} value={value} onChange={onChangeInput} />
        <button>입력!</button>
      </form>

      <div> 시도 : {tries.length}</div>
      <ul>
        {tries.map((v, i)=>{
          return(
            <Try key={[`${i + 1}차 시도: `]} tryInfo={v}/>
          )
        })}
      </ul>
    </div>
  )
}

export default NumberBaseBall;