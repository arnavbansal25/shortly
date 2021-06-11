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

                <br />1
                <img src="./assets/images/bg-boost-desktop.svg" width="100px" />
                <hr />2
                <img src="./assets/images/favicon-32x32.png" width="100px" />
                
                <Footer />
            </MainWrapper>
        );
    }
}

export default Main;