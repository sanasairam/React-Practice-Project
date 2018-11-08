import React, { Component } from 'react';
import Test from './Test';

class App extends Component {

  static defaultProps =  {
    bandaiahArray : ['sairam']
  }

  static displayName = "sairam"; 
  render() {
    console.log("default props", this.props)
    return (
      <div className="App">
        <h1>HEllo sairam rams</h1>

        <Test />
      </div>
    );
  }
}

export default App;
