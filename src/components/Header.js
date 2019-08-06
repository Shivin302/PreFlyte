import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="ac">
                <div className="topnav">
                    <a href="/" className="icon major fa-plane" style={{fontSize:'10px'}}></a>
                    <a href="/" class = 'active'> PreFlyte </a>
                    <a href="/" > About Us </a>
                    <div class="topnav-right">
                    <a href="/" > Get Funded </a>
                    <a href="/" > Fund Someone </a>
                    <a href="/" > Log In </a>
                    <a href="/" > Sign Up </a>
                    </div>
                    {/* <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul> */}
                </div>
            </section>
        )
    }
}

export default Header
