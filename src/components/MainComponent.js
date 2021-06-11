import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import styled from 'styled-components';

const MainWrapper = styled.section`
    ${'' /* max-width: 1250px; */}
    margin: 0 auto;
    font-size: 18px;
    font-family: 'Poppins';
`

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainWrapper>
                <Header />

                <Home />

                <br />
                <br />
                <img src="./assets/images/bg-boost-desktop.svg" width="100px" />
                <hr />1
                <img src="./assets/images/bg-boost-mobile.svg" width="100px" />
                <hr />2
                <img src="./assets/images/bg-shorten-desktop.svg" width="100px" />
                <hr />4
                <img src="./assets/images/favicon-32x32.png" width="100px" />
                <hr />7
                <img src="./assets/images/icon-facebook.svg" width="100px" style={{ backgroundColor: "blue" }} />
                <hr />9
                <img src="./assets/images/icon-instagram.svg" width="100px" style={{ backgroundColor: "blue" }} />
                <hr />10
                <img src="./assets/images/icon-pinterest.svg" width="100px" style={{ backgroundColor: "blue" }} />
                <hr />11
                <img src="./assets/images/icon-twitter.svg" width="100px" style={{ backgroundColor: "blue" }} />

                <Footer />
            </MainWrapper>
        );
    }
}

export default Main;