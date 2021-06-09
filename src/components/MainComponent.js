import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

// const GlobalStyle = createGlobalStyle`
//     body {
//         padding: 1rem 2rem;
//     }
// `


const MainWrapper = styled.section`
    width: 100%;
    max-width: 1250px;
    margin: 0 auto;
    ${'' /* font-family: 'Poppins'; */}
`

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainWrapper>
                <Header />

                <br />
                <br />
                <img src="./assets/images/bg-boost-desktop.svg" width="100px"/>
                <hr />1
                <img src="./assets/images/bg-boost-mobile.svg" width="100px" />
                <hr />2
                <img src="./assets/images/bg-shorten-desktop.svg" width="100px" />
                <hr />3
                <img src="./assets/images/bg-shorten-mobile.svg" width="100px" />
                <hr />4
                <img src="./assets/images/favicon-32x32.png" width="100px" />
                <hr />5
                <img src="./assets/images/icon-brand-recognition.svg" width="100px" />
                <hr />6
                <img src="./assets/images/icon-detailed-records.svg" width="100px" />
                <hr />7
                <img src="./assets/images/icon-facebook.svg" width="100px" style={{backgroundColor: "blue"}} />
                <hr />8
                <img src="./assets/images/icon-fully-customizable.svg" width="100px" />
                <hr />9
                <img src="./assets/images/icon-instagram.svg" width="100px" style={{backgroundColor: "blue"}} />
                <hr />10
                <img src="./assets/images/icon-pinterest.svg" width="100px" style={{backgroundColor: "blue"}} />
                <hr />11
                <img src="./assets/images/icon-twitter.svg" width="100px" style={{backgroundColor: "blue"}} />
                <hr />12
                <img src="./assets/images/illustration-working.svg" width="100px" />
                <hr />13
                <img src="./assets/images/logo.svg" width="100px" />
                <hr />14
                
                <Footer />
            </MainWrapper>
        );
    }
}

export default Main;