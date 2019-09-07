import React, { Component } from 'react'

export class TitleDesc extends Component {
    render() {
        return (
        <div>
            <h1 style={titleStyle}>{this.props.title}</h1>
            <h2 style={descStyle}>{this.props.desc} </h2>
        </div>
        )
    }
}
const titleStyle = {
    textAlign: "center",
    fontSize: "4em",
    display: 'block',
    marginBlockStart: '0.67em',
    marginBlockEnd: '0.67em'
}

const descStyle = {
    width: '30em',
    textAlign: "center",
    fontSize: "2em",
    margin: '0 auto'
}

export default TitleDesc
