import React, { Component } from 'react'

export class Display extends Component {
    render() {
        return (
            <div style = {displayStyle}>
                {this.props.display}
            </div>
        )
    }
}

const displayStyle = {
    background: "#003434",
    color: '#fff',
    marginBottom: '5px',
    textAlign: "right",
    fontSize: '3rem',
    fontWeight: '500',
    padding: '10px'
}

export default Display
