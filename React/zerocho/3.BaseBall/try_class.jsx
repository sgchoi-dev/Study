import React, {PureComponent} from 'react';

class Try extends PureComponent {
  constructor(props){
    super(props);
    // 다른 동작을 적을 수 있다 (활용도가 높아짐)
    this.state = { // props 값 바꿔주고 싶다면 이렇게(비권장)
      result: this.props.result,
      try: this.props.try
    };
  }

  render(){
    return (
      <li>
        {this.props.tryInfo.try}
        {this.props.tryInfo.result}
      </li>
    )
  }
}

export default Try;
