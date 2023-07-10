import React, {memo, useState} from 'react';

const Try = memo(({tryInfo}) => {
  // tryInfo.try = 'hello'; // 이렇게 값을 바꾸면 안된다.

  const [result, setResult] = useState(tryInfo.result); // props를 바꾸고 싶다면 이렇게..?

  const onClick = () => {
    setResult('1');
  };

  return (
    <li>
      <div>{tryInfo.try}</div>
      <div onClick={onClick}>{result}</div>
    </li>
  )
})

// 자식 컴포넌트가 rerendering 되는 조건
// 1. props가 바꼈을 때
// 2. state가 바꼈을 때
// 3. 부모 component가 rerendering 될 때 (막으려면 memo 써야함 state, props바꼈을때는 바뀜)

Try.displayName = 'Try';

export default Try;
