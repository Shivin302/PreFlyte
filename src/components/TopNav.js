import React, { Component } from 'react'
/* eslint-disable */
export class TopNav extends Component {
    render() {
        return (
            <section id="ac">
                <div className="topnav">
                    <a href="/" className="icon major fa-plane" style={{fontSize:'10px'}}></a>
                    <a href="/" class = 'active'> PreFlyte </a>
                    <a href="/AboutUs" > About Us </a>
                    <div class="topnav-right">
                    <a href="/OurModel" > Our Model </a>
                    <a href="/SuccessStories" > Success Stories </a>
                    <a href="/GetFunded" > Get Funded </a>
                    <a href="/FundSomeone" > Fund Someone </a>
                    <a href="/LogIn" > Log In </a>
                    <a href="/SignUp" > Sign Up </a>
                    </div>
                    {/* <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul> */}
                </div>
            </section>
        )
    }
}

export default TopNav
