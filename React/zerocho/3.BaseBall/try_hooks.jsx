import React, {memo} from 'react';

const Try = memo(({tryInfo}) => {
  return (
    <li>
      {tryInfo.try}
      {tryInfo.result}
    </li>
  )
})

// 자식 컴포넌트가 rerendering 되는 조건
// 1. props가 바꼈을 때
// 2. state가 바꼈을 때
// 3. 부모 component가 rerendering 될 때 (막으려면 memo 써야함 state, props바꼈을때는 바뀜)

Try.displayName = 'Try';

export default Try;
