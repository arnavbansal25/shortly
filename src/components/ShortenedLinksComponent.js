import React, { Component, useState } from 'react';
import { Hrline } from './NavbarComponent';
import { Start } from './HeaderComponent';
import { ShortenIt } from './HomeComponent';
import styled from 'styled-components';

const Hrline_i = styled(Hrline)`
    width: 100%;
    margin: 20px 0;

    @media only screen and (min-width: 730px) {
        display: none;
    }
`
const Card = styled.div`
    background-color: #fff;
    padding: 15px 0;
    margin-top: 30px;
    border-radius: 5px;
    border: none;

    @media only screen and (min-width: 730px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
`

const CardTitle = styled.h4`
    color: #35323e;
    font-weight: 700;
    margin: 0 20px;
    word-wrap: break-word;

    @media only screen and (min-width: 730px) {
        width: 50%;
        margin: 0;
    }
`

const CardBody = styled.div`
    color: #bfbfbf;
    font-size: 16px;
    margin: 0 20px;

    @media only screen and (min-width: 730px) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0;
        width: 50%;
    }
`

const Short = styled.h4`
    color: #2acfcf;
    margin: 0;
    margin-bottom: 20px;
    word-wrap: break-word;

    @media only screen and (min-width: 730px) {
        margin: 0;
        margin-right: 20px;
    }
`

const Copy = styled(Start)`
    color: $fff;
    background: ${props => props.click === true ? '#3b3054' : '#2acfcf'};
    cursor: pointer;

    font-family: 'Poppins';
    font-weight: 700;
    font-size: 16px;

    border-radius: 5px;}
    border: none;

    max-width: 100%;

    padding: 10px;
    margin: 0;

    &:hover {
        background: #9be3e2;
    }
 
    @media only screen and (min-width: 730px) {
        width: 25%;
        margin: 0;
    }
`

class ShortenedLinks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    // this function changes 
    handleChange(e) {
        e.preventDefault()
        navigator.clipboard.writeText(this.props.link.full_short_link)
            .then(() => this.setState({ isClicked: true }))
            .catch(() => console.log("Unable to copy."))
    }

    render() {
        return (
            <Card>
                <CardTitle>{this.props.link.original_link}</CardTitle>
                <Hrline_i />
                <CardBody>
                    <Short>{this.props.link.full_short_link}</Short>
                    <Copy id={this.props.link.code} click={this.state.isClicked} onClick={this.handleChange}>
                        {this.state.isClicked ? "Copied!" : "Copy"}
                    </Copy>
                </CardBody>
            </Card>
        );
    }
}

export default ShortenedLinks;