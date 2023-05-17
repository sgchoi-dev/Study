const React = require('react');
const { Component } = React;

class WordRelay extends React.Component{
  state = {
    word: '최슬기',
    value: '',
    result: '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    if(this.state.word[this.state.word.length - 1] === this.state.value[0]){
      this.setState({
        result: "정답 입니다",
        word: this.state.value,
        value:''
      });
    }else{
      this.setState({
        result: "땡 입니다",
        value: ''
      });
    }

    this.input.focus();
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value }); // target or currentTarget
  };

  input;
  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form action="" onSubmit={this.onSubmitForm}>
          <input type="text" ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
          <button type='submit'>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = WordRelay;