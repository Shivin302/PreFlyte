import React, { Component } from 'react'

export class TitleDesc extends Component {
    render() {
        return (
        <div>
            <h1 style={titleStyle} >Fund Someone</h1>
            <h2 style={descStyle}> Search through our catalog of artists and entrepreneurs and become a part of someone's journey in making it big!</h2>
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
