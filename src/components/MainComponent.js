import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />



                <Footer />
            </div>
        );
    }
}

export default Main;