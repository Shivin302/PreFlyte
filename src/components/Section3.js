import React, { Component } from 'react'
/* eslint-disable */
export class Section3 extends Component {
    render() {
        return (
            <section id="three" className="main style1 special">
            <div className="grid-wrapper">
                <div className="col-12">
                    <header className="major">
                        <h2> {this.props.title} </h2>
                    </header>
                    <p> {this.props.title_desc} </p>
                </div>

                <div className="col-4">
                    <span className="image fit"><img src={this.props.pic1} alt="" /></span>
                    <h3>{this.props.img1_title}</h3>
                    <p>{this.props.img1_desc}</p>
                    <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <span className="image fit"><img src={this.props.pic2} alt="" /></span>
                    <h3>{this.props.img2_title}</h3>
                    <p>{this.props.img2_desc}</p>
                    <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <span className="image fit"><img src={this.props.pic3} alt="" /></span>
                    <h3>{this.props.img3_title}</h3>
                    <p>{this.props.img3_desc}</p>
                    <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                    </ul>
                </div>

            </div>
        </section>
)
    }
}

export default Section3


// import React, { Component } from 'react'
// import ThreeImages from '../components/ThreeImages'
// import TitleDesc from '../components/TitleDesc'

// export class Section3 extends Component {
//     render() {
//         return (
//         <section id="three" className="main style1 special">
//             <TitleDesc />
//             <ThreeImages pic1={this.props.pic1} pic2={this.props.pic2} pic3={this.props.pic3} />
//         </section>
// )
//     }
// }

// export default Section3
