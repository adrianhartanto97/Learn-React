import React, {Component} from 'react';
import './App.css';
import Text from './Text/Text';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    text : ''
  }

  changeTextHandler = (event) => {
    this.setState({
      text : event.target.value
    })
  }

  onDeleteCharHandler = (index) => {
    const CharArr = this.state.text.split('')
    CharArr.splice(index,1)

    this.setState({
      text : CharArr.join('')
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeTextHandler} value={this.state.text}/>
        <Text text={this.state.text}/>
        <Validation textLength={this.state.text.length} />
        <div>
          {
            this.state.text.split('').map((ch, index) => {
              return <Char char={ch} key={index} delete={() => this.onDeleteCharHandler(index)}/>
            })
          }
        </div>
      </div>  
    );
  }
  
}

export default App;
