import React from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import "./App.css";

class App extends React.Component {
  state = {
    display: "0",
    hasOperator: false,
    operationComplete: false
  };

  numClick = num => {
    if ((this.state.display === "0" && !this.state.hasOperator) || (this.state.operationComplete)) {
      this.setState({
        display: num,
        hasOperator: false,
        operationComplete: false
      });
    } else if (this.state.display !== "0" && !this.state.hasOperator) {
      this.setState({
        display: this.state.display + num,
        hasOperator: false
      });
    } else if (this.state.hasOperator) {
      this.setState({
        hasOperator: true,
        operator: this.state.operator,
        firstNum: this.state.firstNum,
        display: this.state.display !== "0" ? this.state.display + num : num
      });
    }
  };

  clear = () => {
    if (this.state.hasOperator) {
      switch (this.state.operator) {
        case "+":
          document.querySelector(".add").classList.remove("operator-selected");
          break;
        case "-":
          document.querySelector(".sub").classList.remove("operator-selected");
          break;
        case "*":
          document.querySelector(".mult").classList.remove("operator-selected");
          break;
        case "/":
          document.querySelector(".div").classList.remove("operator-selected");
          break;
      }
    }
    this.setState({
      display: "0",
      hasOperator: false,
      operationComplete: false
    });
  };

  dotClick = () => {
    if (!this.state.display.includes(".")) {
      this.setState({
        display: this.state.display + ".",
        hasOperator: false
      });
    }
  };

  opClick = op => {
    if (this.state.hasOperator) {
      switch (this.state.operator) {
        case "+":
          document.querySelector(".add").classList.remove("operator-selected");
          break;
        case "-":
          document.querySelector(".sub").classList.remove("operator-selected");
          break;
        case "*":
          document.querySelector(".mult").classList.remove("operator-selected");
          break;
        case "/":
          document.querySelector(".div").classList.remove("operator-selected");
          break;
      }
    }
    switch (op) {
      case "+":
        document.querySelector(".add").classList.add("operator-selected");
        break;
      case "-":
        document.querySelector(".sub").classList.add("operator-selected");
        break;
      case "*":
        document.querySelector(".mult").classList.add("operator-selected");
        break;
      case "/":
        document.querySelector(".div").classList.add("operator-selected");
        break;
    }

    this.setState({
      firstNum: this.state.display,
      operator: op,
      display: "0",
      hasOperator: true
    });
  };

  equal = () => {
    if (this.state.hasOperator) {
      let result = 0;
      switch (this.state.operator) {
        case "+":
          result =
            parseFloat(this.state.firstNum) + parseFloat(this.state.display);
          break;
        case "-":
          result =
            parseFloat(this.state.firstNum) - parseFloat(this.state.display);
          break;
        case "*":
          result =
            parseFloat(this.state.firstNum) * parseFloat(this.state.display);
          break;
        case "/":
          result =
            parseFloat(this.state.firstNum) / parseFloat(this.state.display);
          break;
      }
      this.setState({
        display: result,
        hasOperator: false,
        operationComplete: true
      });
      switch (this.state.operator) {
        case "+":
          document.querySelector(".add").classList.remove("operator-selected");
          break;
        case "-":
          document.querySelector(".sub").classList.remove("operator-selected");
          break;
        case "*":
          document.querySelector(".mult").classList.remove("operator-selected");
          break;
        case "/":
          document.querySelector(".div").classList.remove("operator-selected");
          break;
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Display display={this.state.display} />
        <Buttons
          numClick={this.numClick}
          clear={this.clear}
          dotClick={this.dotClick}
          opClick={this.opClick}
          equal={this.equal}
        />
      </div>
    );
  }
}

export default App;
