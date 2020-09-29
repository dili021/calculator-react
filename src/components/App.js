import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; //eslint-disable-line

// function App() {
//   return (
//     <div className="app">
//       <Display />
//       <ButtonPanel />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(button) {
    const calculation = calculate(this.state, button);
    this.setState(calculation);
  }

  displayResult() {
    const { total, next, operation } = this.state;
    const result = `${total}${operation}${next}`.replace(/null/g, '');
    return result === '' ? null : result;
  }

  render() {
    return (
      <div className="app">
        <Display result={this.displayResult()} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}
export default App;
