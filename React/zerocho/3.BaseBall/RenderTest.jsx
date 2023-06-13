import React, {Component} from 'react';

class Test extends Component {
  state = {
    counter: 0,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext){
    if(this.state.counter !== nextState.counter){ // 현재 setState 내부가 빈값이니까 nextState 의 값이 바뀌지 않음
      return true; // render 함
    }else{
      return false; // render 안함
    }
  }

  onClick = () =>{
    this.setState({}); // 값을 안바꾸고 setState 만 호출해도 render 되어버림
  }

  render(){
    console.log("렌더링", this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    )
  }
}

export default Test;