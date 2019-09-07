import React, { Component } from 'react'
import Layout from '../components/layout';
import Section1 from '../components/Section1';
import TitleDesc from '../components/TitleDesc';
import CameronSalehi from '../assets/images/CameronSalehi.jpg'
import AdamMohiuddin from '../assets/images/AdamMohiuddin.jpg'
import AmirMohiuddin from '../assets/images/AmirMohiuddin.jpg'

export class AboutUs extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <TitleDesc title={"About Us"} desc={"How it All Began"}/>
                    <Section1 title={"Cameron Salehi"} src={CameronSalehi} desc = {"The Legend"}/>
                    <Section1 title={"Adam Mohiuddin"} src={AdamMohiuddin} desc = {"The Legend"}/>
                    <Section1 title={"Amir Mohiuddin"} src={AmirMohiuddin} desc = {"The Legend"}/>
                </Layout>
            </div>
        )
    }
}

export default AboutUs
