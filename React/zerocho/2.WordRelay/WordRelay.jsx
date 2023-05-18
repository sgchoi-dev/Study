const React = require('react');
const { useState, useRef } = React;

const WordRelay = (e) => {
  const [word, setWord] = useState('최슬기');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  onSubmitForm = (e) => {
    e.preventDefault();

    if(word[word.length - 1] === value[0]){
      setWord(value);
      setValue('');
      setResult('정답');
    }else{
      setValue('');
      setResult('땡');
    }

    inputRef.current.focus(); // dom에 접근할 때는 current를 추가해줘야함
  };

  onChangeInput = (e) => {
    setValue(e.target.value); // target or currentTarget
  };

  
  onRefInput = (c) => {
    this.input = c;
  };

  return (
    <>
      <div>{word}</div>
      <form action="" onSubmit={onSubmitForm}>
        <input type="text" ref={inputRef} value={value} onChange={onChangeInput} />
        <button type='submit'>입력!!!!!!!!</button>
      </form>
      <div>{result}</div>
    </>
  )
};

module.exports = WordRelay;