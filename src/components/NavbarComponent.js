import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Topnav = styled.nav`
    ${'' /* background-color: yellow; */}
    ${'' /* padding: 0.1px; */}
    padding: 35px 20px;
`

const Logo = styled.h1`
    display: inline-block;
    float: left;
    curosr: pointer;
    margin-top: -5px;

    @media only screen and (min-width: 720px) {
        ${'' /* background-color: red; */}
        ${'' /* display: flex; */}
        ${'' /* align-items: center; */}
        margin-right: 2.5vw;
        margin-top: 7px;
        ${'' /* float: none; */}
        ${'' /* float: ''; */}
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
    margin-top: 55px;
    border-radius: 10px;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    ${'' /* align-items: center; */}

    @media only screen and (min-width: 720px) {
        ${'' /* background-color: pink; */}
        background: transparent;
        ${'' /* padding: 5px; */}
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
        ${'' /* background-color: yellow; */}
        ${'' /* padding: 5px; */}
        ${'' /* margin-top: 2rem; */}
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${'' /* width: 50vw; */}
        width: 300px;
        margin: 0;
        ${'' /* justify-content: space-between; */}

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
        ${'' /* background-color: green; */}
        ${'' /* padding: 5px; */}
        width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${'' /* display: inline-block; */}
        margin: 0;
        ${'' /* justify-content: space-between; */}

        div {
            margin: 0;
        }
    }  
    
`

const NavItem = styled.div`
    ${'' /* margin-bottom: 2rem; */}

    a {
        color: #fff;
        text-decoration: none;
        font-weight: 700;
    }

    @media only screen and (min-width: 720px) {
        ${'' /* background-color: orange; */}
        margin: 0;

        a {
            color: #bfbfbf;
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
    
    @media only screen and (min-width: 720px) {
        color: ${props => props.login ? '#bfbfbf' : '#fff'};
        background: ${props => props.login ? 'transparent' : '#2acfcf'};
        padding: ${props => props.login ? '0' : '8px 25px'};
        ${'' /* padding: 0; */}
    }  
`


// const NavLink = styled(Link)`
//     color: #808080;
//     ${'' /* display: flex; */}
//     text-decoration: none;
//     height: 100%;
//     cursor: pointer;
//     &.active {
//         color: #000000;
//     }
// `

// const Bars = styled(FaBars)`
//     display: none;
//     color: #808080;
//     @media screen and (max-width: 768px) {
//         display: block;
//         position: absolute;
//         top: 0;
//         right: 0;
//         transform: translate(-100%, 75%);
//         font-size: 1.8rem;
//         cursor: pointer;
//     }
// `

// const NavMenu = styled.div`
//     display: flex;
//     margin-right: -24px;

//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `

// const NavBtn = styled.nav`
//     display: flex;
//     justify-content: right;
//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `

// const NavBtnLink = styled(Link)`
//     border-radius: 4px;
//     background: #808080;
//     justify-content: right;
//     color: #000000;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #808080;
//     }
// `

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
                <Logo>
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

