import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './NavbarComponent';

const Head = styled.div`
    max-width: 1250px;
    margin: 0 auto;
`

const Headerimg = styled.div`
    background-image: url("./assets/images/illustration-working.svg");
    background-repeat: no-repeat;
    background-size: 130vw;
    margin-top: 30px;
    margin-left: 30px;
    height: 86vw;

    ${'' /* min-width is intentionally kept 730px  */}
    @media only screen and (min-width: 730px) {
        position: absolute;
        margin: 0;
        margin-top: 5vw;
        right: 0;
        background-size: 70vw;
        padding: 0;
        width: 45vw;
        height: 510px;
    }

    @media only screen and (min-width: 930px) {
        background-size: 60vw;
    }

    @media only screen and (min-width: 1050px) {
        margin-top: 20px;
        background-size: 700px;
    }
`

const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 35px;

    @media only screen and (min-width: 730px) {
        margin-top: 0;
        order: 1;
        width: 50%;
        padding-top: 70px;
    }

    @media only screen and (min-width: 1250px) {
        
    }
`
const Headertext = styled.h2`
    margin: 0;
    text-align: center;
    color: #232127;
    opacity: 0.9;
    font-size: 2.5rem;
    font-weight: 900;
    text-shadow: 0px 1px, 1px 0px, 1px 1px;
    line-height: 130%;

    @media only screen and (min-width: 730px) {
        text-align: left;
        font-size: 4rem;
    }

    @media only screen and (min-width: 1250px) {
        font-size: 5rem;
    }
`

const Description = styled.p`
    margin: 0;
    color: #bfbfbf;
    text-align: center;
    font-weight: 500;
    margin-top: 5px;

    @media only screen and (min-width: 730px) {
        text-align: left;
        font-size: 20px;
    }
`

const Start = styled.button`
    color: #fff;
    background: #2acfcf;
    cursor: pointer;

    font-family: 'Poppins';
    font-weight: 700;
    font-size: 18px;
    border-radius: 50px;
    border: none;
    
    width: 100%;
    max-width: 200px;

    padding: 15px;
    margin: 0 auto;
    margin-top: 30px;

    @media only screen and (min-width: 730px) {
        margin-left: 0;        
    }
`

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Head>
                <Navbar />

                <Headerimg />

                <Introduction>
                    <Headertext>
                        More than just shorter links
                    </Headertext>
                    <Description>
                        Build your brand's recognition and get detailed insights on how your links are performing.
                    </Description>
                    <Start>
                        Get Started
                    </Start>
                </Introduction>
            </Head>
        );
    }
}

export default Header;

