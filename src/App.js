import React, { Component } from 'react';
// import Test from './Test';
// import DisplayTheSecret from './components/DisplayTheSecret';
import LoggerApp from './components/LoggerApp';
import UnmountEx from './components/UnmountEx';
import ScrollDialog from './components/ScrollDialog';


const Unmount = () => {
  return (<div>HEllo saira </div>)
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: "No Data Yet",
      showUnmountEx: true,
    }
  }

  static displayName = "sairam";


  static defaultProps = {
    bandaiahArray: ['sairam']
  }

  onHandleChange = () => {
    this.setState({
      showUnmountEx: !this.state.showUnmountEx
    })
  }

  fetchData() {
    console.log("going to fetch data")
    setTimeout(
      () => {
        console.log("data retrived");
        this.setState({
          data: Math.random()
        });
      },
      2000);
  }

  componentDidMount() {
    this.fetchData();
  }


  render() {

    console.log("stete show", this.state.showUnmountEx);

    let { showUnmountEx } = this.state;
    console.log("showUnmountEx", showUnmountEx);
    return (
      <div className="App">
        <h1>HEllo sairam rams</h1>
        <p>{this.state.data}</p>

        <button onClick={() => this.onHandleChange()}>{showUnmountEx ? "hide" : "show"} Component</button>
        {showUnmountEx ? <UnmountEx /> : null}

        <ScrollDialog />
        {/* <Test /> */}
        {/* <DisplayTheSecret /> */}
        {/* <Unmount /> */}

      </div>
    );
  }
}

App = LoggerApp(App);

export default App;
