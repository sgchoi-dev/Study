import React, {Component} from 'react';

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
}

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function(v){
    return v[1] === imgCoord;
  })[0];
};

class RSP extends Component {
  state = {
    result: '',
    imgCoord: '0',
    score: 0,
  };

  interval;

  componentDidMount(){ // render가 첫렌더링된 후 componentDidMount 가 실행됨 rerendering 부터는 componentDidMount 실행안됨
    this.interval = setInterval(this.changeHand, 100);
  };

  changeHand = () => {
    const {imgCoord} = this.state;
    //console.log('asdf'); // 안없애주면 영원히 돈다, 메모리 누수

    if(imgCoord === rspCoords.바위){
      this.setState({
        imgCoord: rspCoords.가위,
      });
    }else if(imgCoord === rspCoords.가위){
      this.setState({
        imgCoord: rspCoords.보,
      });
    }else if(imgCoord === rspCoords.보){
      this.setState({
        imgCoord: rspCoords.바위,
      });
    }
  }

  /* componentDidUpdate(){ // rerendering 후에 실행되는 거

  } */

  componentWillUnmount(){ // component가 제거되기 직전 componentDidMount 에서 했던 작업을 제거하는 용도  (componentDidMount, componentWillUnmount는 쌍임) 부모가 자식을 없앴을 때 발생, 비동기 요청 정리
    clearInterval(this.interval);
  }

  onClickBtn = (choice) => () => {
    clearInterval(this.interval);
    const {imgCoord} = this.state;    
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if(diff === 0){
      this.setState({
        result: '비겼습니다!',
      });
    }else if([-1, 2].includes(diff)){
      this.setState((prevState) => {
        return{
          result: '이겼습니다!',
          score: prevState.score + 1,
        };
      });
    }else{
      this.setState((prevState) => {
        return{
          result: '졌습니다!',
          score: prevState.score - 1,
        };
      });
    }

    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);      
    }, 2000);
  }

  render(){
    const {result, score, imgCoord} = this.state;
    return (
      <>
        <div id='computer' style={{background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.state.imgCoord} 0 `}} />
        <div>
          <button id='rock' className='btn' onClick={this.onClickBtn('바위')}>바위</button>
          <button id='scissor' className='btn' onClick={this.onClickBtn('가위')}>가위</button>
          <button id='paper' className='btn' onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    )
  }
}

export default RSP;