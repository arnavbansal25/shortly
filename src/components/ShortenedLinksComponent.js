import React from 'react';
import { Hrline } from './NavbarComponent';
import { Start } from './HeaderComponent';
import { ShortenIt } from './HomeComponent';
import styled from 'styled-components';

const Shorten = styled.div`
    margin: 0 auto;
    width: 100%;
`

const Hrline_i = styled(Hrline)`
    width: 100%;
    margin: 20px 0;
`
const Card = styled.div`
    background-color: #fff;
    padding: 20px 0;
    margin-top: 30px;
    border-radius: 5px;
    border: none;
    ${'' /* @media only screen and (min-width: 730px) {
        max-width: 300px;
        margin-top: ${props => props.a ? '0' : props.b ? '40px' : '80px'};
    } */}
`

const CardTitle = styled.h4`
    color: #35323e;
    font-weight: 700;
    margin: 0 20px;
    word-wrap: break-word;
    ${'' /* overflow: hidden; */}
`

const CardBody = styled.div`
    color: #bfbfbf;
    font-size: 16px;
    margin: 0 20px;
    ${'' /* @media only screen and (min-width: 730px) {
        text-align: left;
    } */}
`

const Short = styled.h4`
    color: #2acfcf;
    margin: 0;
    margin-bottom: 20px;
    overflow: hidden;
`

const Copy = styled(Start)`
    color: #fff;
    background: #2acfcf;
    cursor: pointer;

    font-family: 'Poppins';
    font-weight: 700;
    font-size: 16px;

    border-radius: 5px;
    border: none;

    ${'' /* width: 100%; */}
    max-width: 100%;

    padding: 10px;
    margin: 0;

    ${'' /* @media only screen and (min-width: 730px) {
        width: 15%;
        margin: 0;
    } */}
`

function ShortenedLinks({ links }) {
    console.log("LINKS ",links);
    return (
        <Shorten>
            {
                links && links.map((l) => {
                    return (
                        <Card>
                            <CardTitle>{l.original_link}</CardTitle>
                            <Hrline_i />
                            <CardBody>
                                <Short>{l.full_short_link}</Short>
                                <Copy>Copy</Copy>
                            </CardBody>
                        </Card>
                    );
                })
            }
        </Shorten>
    );
}

export default ShortenedLinks;