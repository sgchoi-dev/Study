import React, {Component} from 'react';

const Try = ({tryInfo}) => {
  return (
    <li>
      {tryInfo.try}
      {tryInfo.result}
    </li>
  )
}

/*class Try extends Component {
  render(){
    return (
      <li>
        {this.props.tryInfo.try}
        {this.props.tryInfo.result}
      </li>
    )
  }
}*/

export default Try;
