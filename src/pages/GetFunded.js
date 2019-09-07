import React, { Component } from 'react'
import Layout from '../components/layout';
import Section1 from '../components/Section1';
import TitleDesc from '../components/TitleDesc';
import sunsetSilhouette from '../assets/stockphotos/sunsetSilhouette.jpg'
import laughingPeople from '../assets/stockphotos/laughingPeople.jpg'

export class GetFunded extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <TitleDesc title={"Get Funded"} desc={""}/>
                    <Section1 title={"Artists, Creators, and Entertainers"} src={sunsetSilhouette} desc = {"Start Your Journey ->"}/>
                    <Section1 title={"Entrepreneurs"} src={laughingPeople} desc = {"Start Your Journey ->"}/>
                </Layout>
            </div>
        )
    }
}

export default GetFunded
