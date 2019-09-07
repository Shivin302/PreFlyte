import React, { Component } from 'react'
import Layout from '../components/layout';
import Section1 from '../components/Section1';
import TitleDesc from '../components/TitleDesc';
import smilingMan from '../assets/stockphotos/smilingMan.jpg'
import playingGuitar from '../assets/stockphotos/playingGuitar.jpg'
import smokeWoman from '../assets/stockphotos/smokeWoman.jpg'


export class Success extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <TitleDesc title={"About Us"} desc={"How it All Began"}/>
                    <Section1 title={"Cameron Salehi"} src={playingGuitar} desc = {"The Legend"}/>
                    <Section1 title={"Adam Mohiuddin"} src={smokeWoman} desc = {"The Legend"}/>
                    <Section1 title={"Amir Mohiuddin"} src={smilingMan} desc = {"The Legend"}/>
                </Layout>
            </div>
        )
    }
}

export default Success
