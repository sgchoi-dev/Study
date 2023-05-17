const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9)); // useState 안에 초기값을 넣어주면 됨
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  /* render가 총 네 번 일어나지 않냐고 생각할 수 있지만 '비동기' 방식이기 때문에 한 번만 일어남 */

  const inputRef = useRef(null); // ref 사용 방법도 다름 (null 은 초기값)

  /*
    객체 방식으로 적는 방법 - Method1

    const [state, setState] = React.useState({
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: '',
      result: '',
    })
  */

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    
    if(parseInt(value) === first*second){
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      //setResult('정답' + value);
      setResult((prevResult)=>{ // 기존 state 쓰는 방법 (return 문 적어줘야 함!)
        return '정답' + value;
      });
    }else{
      setValue('');
      setResult('땡');
      /* 
        setState({
          result: '땡',
          value: '',
        });

        이렇게 일부 데이터만 바꿀 경우 Method1 처럼 생성하면 쓰이지 않은 변수(first, second)는 사라져 버림
        setState 할 때 귀찮아짐 일부만 변경할 경우에는 state를 쪼개서 적는게 더 효율적임
      */
    }

    inputRef.current.focus(); // dom에 접근할 때는 current를 추가해줘야함
  };

  const onRef = (c) => {
    this.input = c;
  }

  console.log("렌더링"); // setState 할 때마다 함수 부분이 통으로 재실행된다 (속도가 조금 느려질 수 있다)
  
  return (
    <>
      <div>{first} 곱하기 {second} 는?</div>
      <form action="" onSubmit={onSubmitForm}>
        <input ref={inputRef} type="text" value={value} onChange={onChangeInput} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
}

module.exports = GuGuDan;