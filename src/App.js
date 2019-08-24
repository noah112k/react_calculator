import React from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import "./App.css";

class App extends React.Component {
  state = {
    display: "0"
  };

  numClick = num => {
    if (this.state.display !== "0") {
      this.setState({
        display: this.state.display + num
      });
    } else {
      this.setState({
        display: num
      });
    }
  };

  clear = () => {
    this.setState({
      display: "0"
    });
  };

  render() {
    return (
      <div className="App">
        <Display display={this.state.display} />
        <Buttons numClick={this.numClick} clear={this.clear} />
      </div>
    );
  }
}

export default App;
