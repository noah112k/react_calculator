import React, { Component } from 'react'

export class Buttons extends Component {
    render() {
        return (
            <div className = "buttons-container">
                <div onClick = {this.props.clear} style = {opStyle}>C</div>
                <div style = {opStyle}>+</div>
                <div style = {opStyle}>-</div>
                <div style = {opStyle}>/</div>
                <div style = {opStyle}>*</div>
                <div style = {opStyle}>=</div>
                <div onClick = {this.props.numClick.bind(this, '9')}style = {numStyle}>9</div>
                <div onClick = {this.props.numClick.bind(this, '8')}style = {numStyle}>8</div>
                <div onClick = {this.props.numClick.bind(this, '7')}style = {numStyle}>7</div>
                <div onClick = {this.props.numClick.bind(this, '6')}style = {numStyle}>6</div>
                <div onClick = {this.props.numClick.bind(this, '5')}style = {numStyle}>5</div>
                <div onClick = {this.props.numClick.bind(this, '4')}style = {numStyle}>4</div>
                <div onClick = {this.props.numClick.bind(this, '3')}style = {numStyle}>3</div>
                <div onClick = {this.props.numClick.bind(this, '2')}style = {numStyle}>2</div>
                <div onClick = {this.props.numClick.bind(this, '1')}style = {numStyle}>1</div>
                <div onClick = {this.props.numClick.bind(this, '0')}style = {numStyle}>0</div>
                <div style = {numStyle}>.</div>

            </div>
        )
    }
}

const numStyle = {
    color: '#000',
    padding: '20px',
    backgroundColor: '#ADEFD1',
    cursor: 'pointer'
}
const opStyle = {
    color: '#fff',
    padding: '20px',
    backgroundColor: '#00203F',
    cursor: 'pointer'
}
export default Buttons
