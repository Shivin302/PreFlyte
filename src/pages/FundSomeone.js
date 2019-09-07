import React, { Component } from 'react'
import Layout from '../components/layout';
import Section3 from '../components/Section3';
import TitleDesc from '../components/TitleDesc';
import smilingMan from '../assets/stockphotos/smilingMan.jpg'
import playingGuitar from '../assets/stockphotos/playingGuitar.jpg'
import smokeWoman from '../assets/stockphotos/smokeWoman.jpg'
// import pic02 from '../assets/images/pic02.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
/* eslint-disable */

export class FundSomeone extends Component {
    title1 = "Top Artists of the Week";
    title2 = "Top Entrepreneurs of the Week";
    title_desc = "Search through our catalog of artists and entrepreneurs and become a part of someone's journey in making it big!";

    render() {
        return (
            <div>
                <Layout>
                    <TitleDesc title={"Fund Someone"} title_desc={this.title_desc} />
                    <Section3 pic1={smilingMan} pic2={playingGuitar} pic3={smokeWoman} title={this.title1} title_desc={this.title_desc} />
                    <a style={linkStyle} href="#">Click here to view the full catalog</a>
                    <Section3 pic1={smilingMan} pic2={playingGuitar} pic3={smokeWoman} title={this.title2} title_desc={this.title_desc} />
                    <a style={linkStyle} href="#">Click here to view the full catalog</a>
                </Layout>
            </div>
        );
    }
}

const linkStyle = {
    // width: '30em',
    textAlign: "center",
    fontSize: "1.5em",
    margin: '30px'
}


export default FundSomeone
