import React, { Component } from 'react';
import { Start } from './HeaderComponent';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Foot = styled.div`

`

const Boost = styled.div`
    background: #35323e;
    background-image: url("./assets/images/bg-boost-mobile.svg");
    background-size: cover;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const FootText = styled.h2`
    color: #fff;
    font-weight: 700;
`

const Start_i = styled(Start)`
    margin: 0;
`

const FooterLinks = styled.div`
    background-color:  #232127;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Logo_i = styled.h1`
    margin: 0;

    img {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
    }
`

const Footnav = styled.div`
    display: flex;
    flex-direction: column;
    ${'' /* background-color: yellow; */}
    justify-content: center;
    align-items: center;

    a {
        color: #fff;
        text-decoration: none;
        margin-bottom: 10px;
        font-size: 16px;
    }
`

const Subnav = styled.a`
    color: #bfbfbf !important;
    margin-bottom: 5px !important;
`

const Social = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`

function Footer(porps) {
    return (
        <Foot>
            <Boost>
                <FootText>Boost your links today</FootText>
                <Start_i>Get Started</Start_i>
            </Boost>

            <FooterLinks>
                <Logo_i>
                    <img src="../assets/images/logo.svg" alt="shortly-logo" />
                </Logo_i>

                <Footnav>
                    <NavLink to=''>
                        Features
                    </NavLink>
                    <Subnav href="">Link Shortening</Subnav>
                    <Subnav href="">Branded Links</Subnav>
                    <Subnav href="">Analytics</Subnav>
                </Footnav>

                <Footnav>
                    <NavLink to=''>
                        Resources
                    </NavLink>
                    <Subnav href="">Blog</Subnav>
                    <Subnav href="">Developers</Subnav>
                    <Subnav href="">Support</Subnav>
                </Footnav>

                <Footnav>
                    <NavLink to=''>
                        Company
                    </NavLink>
                    <Subnav href="">About</Subnav>
                    <Subnav href="">Our Team</Subnav>
                    <Subnav href="">Careers</Subnav>
                    <Subnav href="">Contact</Subnav>
                </Footnav>

                <Social>
                    <img src="./assets/images/icon-facebook.svg" alt="" />
                    <img src="./assets/images/icon-twitter.svg" alt="" />
                    <img src="./assets/images/icon-pinterest.svg" alt="" />
                    <img src="./assets/images/icon-instagram.svg" alt="" />
                </Social>

            </FooterLinks>
        </Foot>
    );
}

export default Footer;