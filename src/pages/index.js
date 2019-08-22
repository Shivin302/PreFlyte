import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
// import Header from '../components/header';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Gatsby Starter - Photon";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <Section1 src={pic01}/>
                {/* <Section2 /> */}
                <Section3 pic1={pic02} pic2={pic03} pic3={pic04} />
                <Section4 />
                {/* Trying to add carousel here */}
                {/* <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="item active">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg/1920px-Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg" alt="Los Angeles" style={{width: '500px', height: '300px'}} />
                        </div>

                        <div class="item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg/1920px-Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg" alt="Los Angeles" style={{width: '500px', height: '300px'}} />
                        </div>

                        <div class="item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg/1920px-Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg" alt="Los Angeles" style={{width: '500px', height: '300px'}} />
                        </div>
                    </div>

                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div> */}
            </Layout>
        );
    }
}

export default Homepage;