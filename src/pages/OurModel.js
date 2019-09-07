import React, { Component } from 'react'
import Layout from '../components/layout';
import Section1 from '../components/Section1';
import Section4 from '../components/Section4';
import TitleDesc from '../components/TitleDesc';
import smilingMan from '../assets/stockphotos/smilingMan.jpg'

export class OurModel extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <TitleDesc title={"Our Model"} desc={"A Groundbreaking Approach to Crowdfunding"}/>
                    <Section1 title={"Investing in People who Invest in Themselves"} src={smilingMan}/>
                    <Section4 />
                </Layout>
            </div>
        )
    }
}

export default OurModel
