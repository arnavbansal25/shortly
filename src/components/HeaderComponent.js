import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = styled.nav`
    ${'' /* background-color: lightblue; */}
    padding: 30px 15px;
`

const Logo = styled.span`
    float: left;
`

const Bar = styled.span`
    float: right;
`

const Collapse = styled.div`
    background: #3b3054;
    margin-top: 50px;
    border-radius: 10px;
    display: ${porps => porps.isOpen ? 'block' : 'none'};
    justify-content: center;
    align-items: center;
    

    @media only screen and (min-width: 500px) {
        display: flex;
        justify-content: space-between;
    }
`
const Navlinks = styled.div`
    ${'' /* background: pink; */}
    ${'' /* padding: 5px; */}
    ${'' /* display: flex; */}
    ${'' /* justify-content: space-between; */}
`
const Navbtn = styled.div`
    ${'' /* background: lightblue; */}
    ${'' /* padding: 5px; */}
    ${'' /* display: flex; */}
    ${'' /* justify-content: space-between; */}
`

const NavItem = styled.span`
    ${'' /* margin-right: 2.5vw; */}
    display: block;
    ${'' /* background: green; */}
    a {
        color: #fff;
        text-decoration: none;
        font-family: 'Poppins', serif;
    }
`

const Button = styled.button`
    ${'' /* padding: 5px; */}
    ${'' /* border-radius: 20px; */}
    ${'' /* border: none; */}
`
const SignUp = styled.button`
    background-color: #2acfcf;
    border-radius: 20px;
    ${'' /* border: none; */}
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

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: true,
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
            <Navbar>
                <Logo>
                    <img src="../assets/images/logo.svg" alt="twitter-icon" />
                </Logo>
                <Bar onClick={this.toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
                </Bar>

                <Collapse isOpen={this.state.isNavOpen}>
                    <Navlinks>
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
                    </Navlinks>
                    <Navbtn>
                        <NavItem>
                            <Button outline>
                                Login
                            </Button>
                        </NavItem>
                        <NavItem>
                            <SignUp>
                                Sign Up
                            </SignUp>
                        </NavItem>
                    </Navbtn>
                </Collapse>
                {/* <Bars /> */}
                {/* <NavMenu>
                    <NavLink to=''>
                        <img width="50" src={logo} alt="twitter-icon" />
                    </NavLink>
                    <NavLink to=''>
                        Features
                    </NavLink>
                    <NavLink to=''>
                        Pricing
                    </NavLink>
                    <NavLink to=''>
                        Resources
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to=''>Login</NavBtnLink>
                    <NavBtnLink to=''>Sign Up</NavBtnLink>
                </NavBtn> */}
            </Navbar>
        );
    }
}

export default Header;

