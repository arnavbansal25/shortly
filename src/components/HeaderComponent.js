import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './NavbarComponent';  

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />

                {/* <img src="./assets/images/illustration-working.svg" width="100px" /> */}
            </React.Fragment>
        );
    }
}

export default Header;

