import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './NavbarComponent';

const Headerimg = styled.div`
    background-image: url("./assets/images/illustration-working.svg");
    background-repeat: no-repeat;
    background-size: 130vw;
    margin-top: 20px;
    margin-left: 30px;
    height: 86vw;
`

const Introduction = styled.div`
background-color: yellow;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 0;
`
const Headertext = styled.h2`
margin-top: 0;
    text-align: center;
    color: #232127;
    opacity: 0.9;
    font-size: 2.5rem;
    font-weight: 900;
    text-shadow: 0px 1px, 1px 0px, 1px 1px;
`

const Description = styled.p`
    margin-top: -25px;
    margin-bottom: 20px;
    color: #bfbfbf;
    text-align: center;
`

const Start = styled.button`
    color: #fff;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 18px;
    border-radius: 50px;
    border: none;
    background: #2acfcf;
    padding: 10px 15vw;
    cursor: pointer;
    margin: 0 auto;
`

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />

                <Headerimg />
                {/* <Headerimg>aa
                </Headerimg> */}
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
            </React.Fragment>
        );
    }
}

export default Header;

