import React, { Component } from 'react'

export class Section1 extends Component {
    render() {
        return (
            <section id="one" className="main style1">
            <div className="grid-wrapper">
                <div className="col-6">
                    <header className="major">
                        <h2>{this.props.title}</h2>
                    </header>
                    <p>{this.props.desc}</p>
                </div>
                <div className="col-6">
                    <span className="image fit"><img src={this.props.src} alt="" /></span>
                </div>
            </div>
        </section>
)
    }
}

export default Section1
