import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Topnav = styled.nav`
    padding: 35px 20px;
`

const Logo = styled.h1`
    display: inline-block;
    float: left;
    curosr: pointer;
    margin-top: -5px;

    @media only screen and (min-width: 720px) {
        margin-right: 2.5vw;
        margin-top: 7px;
    }
`

const Bar = styled.span`
    float: right;

    img {
        filter: invert(81%) sepia(0%) saturate(5716%) hue-rotate(112deg) brightness(95%) contrast(89%);
    }

    @media only screen and (min-width: 720px) {
        display: none;
    }
`

const Collapse = styled.div`
    width: 100%;
    background: #3b3054;
    margin: 0 auto;
    margin-top: 55px;
    border-radius: 10px;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;

    @media only screen and (min-width: 720px) {
        background: transparent;
        width: auto;
        border-radius: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
    }
`
const Nav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;

    div {
        margin-top: 2rem;
    }

    @media only screen and (min-width: 720px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 300px;
        margin: 0;

        div {
            margin: 0;
        }
    }    
`
const Navbtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.5rem;

    div {
        margin-bottom: 2rem;
    }

    @media only screen and (min-width: 720px) {
        width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;

        div {
            margin: 0;
        }
    }  
    
`

const NavItem = styled.div`
    a {
        color: #fff;
        text-decoration: none;
        font-weight: 700;
    }

    @media only screen and (min-width: 720px) {
        margin: 0;

        a {
            color: #bfbfbf;

            &:hover {
            color: #35323e;
            }
        }
    }  
`

const Hrline = styled.hr`
    width: 80%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: #bfbfbf;
    border-color: #bfbfbf;
    opacity: 0.2;

    @media only screen and (min-width: 720px) {
        display: none;
    }  
`

const Button = styled.button`
    color: #fff;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 18px;
    border-radius: 50px;
    border: none;
    background: ${props => props.login ? 'transparent' : '#2acfcf'};
    padding: ${props => props.login ? '' : '10px 25vw'};
    cursor: pointer;

    &:hover {
        color: ${props => props.login ? '#35323e' : '#fff'};
        background: ${props => props.login ? 'transparent': '#9be3e2'};
    }
    
    @media only screen and (min-width: 720px) {
        color: ${props => props.login ? '#bfbfbf' : '#fff'};
        padding: ${props => props.login ? '0' : '8px 25px'};
    }  
`

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Topnav>
                <Logo href="/">
                    <img src="../assets/images/logo.svg" alt="shortly-logo" />
                </Logo>
                <Bar onClick={this.toggleNav} >
                    <img src="../assets/images/menubar.svg" alt="menu-bar" />
                </Bar>

                <Collapse isOpen={this.state.isNavOpen}>
                    <Nav>
                        <NavItem>
                            <NavLink to=''>
                                Features
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to=''>
                                Pricing
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to=''>
                                Resources
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Hrline />
                    <Navbtn>
                        <NavItem>
                            <Button login>
                                Login
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button signup>
                                Sign Up
                            </Button>
                        </NavItem>
                    </Navbtn>
                </Collapse>
            </Topnav>
        );
    }
}

export default Navbar;
export { Logo, Hrline };
