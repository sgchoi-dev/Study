import React, {PureComponent} from 'react';

class Try extends PureComponent {
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
