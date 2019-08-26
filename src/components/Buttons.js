import React, { Component } from "react";

export class Buttons extends Component {
  render() {
    return (
      <div className="buttons-container">
        <div onClick={this.props.clear} style={opStyle} className="c">
          C
        </div>
        <div
          onClick={this.props.opClick.bind(this, "+")}
          style={opStyle}
          className="add"
        >
          +
        </div>
        <div
          onClick={this.props.opClick.bind(this, "-")}
          style={opStyle}
          className="sub"
        >
          -
        </div>
        <div
          onClick={this.props.opClick.bind(this, "/")}
          style={opStyle}
          className="div"
        >
          /
        </div>
        <div
          onClick={this.props.opClick.bind(this, "*")}
          style={opStyle}
          className="mult"
        >
          *
        </div>
        <div onClick={this.props.equal} style={opStyle} className="equal">
          =
        </div>
        <div
          onClick={this.props.numClick.bind(this, "9")}
          style={numStyle}
          className="nine"
        >
          9
        </div>
        <div
          onClick={this.props.numClick.bind(this, "8")}
          style={numStyle}
          className="eight"
        >
          8
        </div>
        <div
          onClick={this.props.numClick.bind(this, "7")}
          style={numStyle}
          className="seven"
        >
          7
        </div>
        <div
          onClick={this.props.numClick.bind(this, "6")}
          style={numStyle}
          className="six"
        >
          6
        </div>
        <div
          onClick={this.props.numClick.bind(this, "5")}
          style={numStyle}
          className="five"
        >
          5
        </div>
        <div
          onClick={this.props.numClick.bind(this, "4")}
          style={numStyle}
          className="four"
        >
          4
        </div>
        <div
          onClick={this.props.numClick.bind(this, "3")}
          style={numStyle}
          className="three"
        >
          3
        </div>
        <div
          onClick={this.props.numClick.bind(this, "2")}
          style={numStyle}
          className="two"
        >
          2
        </div>
        <div
          onClick={this.props.numClick.bind(this, "1")}
          style={numStyle}
          className="one"
        >
          1
        </div>
        <div
          onClick={this.props.numClick.bind(this, "0")}
          style={numStyle}
          className="zero"
        >
          0
        </div>
        <div onClick={this.props.dotClick} style={numStyle} className="dot">
          .
        </div>
      </div>
    );
  }
}

const numStyle = {
  color: "#000",
  padding: "20px",
  backgroundColor: "#ADEFD1",
  cursor: "pointer"
};
const opStyle = {
  color: "#fff",
  padding: "20px",
  backgroundColor: "#00203F",
  cursor: "pointer"
};
export default Buttons;
