import React, { Component } from 'react';
import Loader from './LoaderComponent';
import ShortenedLinks from './ShortenedLinksComponent';
import styled from 'styled-components';
import axios from "axios";

const HomeBody = styled.div`
    background: #bfbfbf40;  ${'' /* here, 40 is the opacity level = 0.4 */}   
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    padding-bottom: 80px;
`

const Shorten = styled.div`
    background: #35323e;
    background-image: url("./assets/images/bg-shorten-mobile.svg");
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 65vw;

    width: 100%;
    height: 160px;
    
    margin: 0 auto;
    margin-top: -80px;
    
    border-radius: 10px;
    border: none;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (min-width: 730px) {
        background-image: url("./assets/images/bg-shorten-desktop.svg");
        background-position: 100%;
        background-size: cover;
        max-width: 1250px;
        flex-direction: row;
        align-items: center;
    }
`

const Searchbar = styled.div`
    margin: 0 auto;
    width: 80%;
    margin-bottom: 15px;
    
    input {
        width: 100%;
        box-sizing: border-box;     ${'' /* this is very important */}     

        font-family: 'Poppins';
        font-weight: 500;
        font-size: 16px;

        ::placeholder {
            ${'' /* {console.log(props)} */}
            color: ${props => props.error===false ? '#bfbfbf' : '#f46262'};
        }
        
        border-radius: 5px;
        border: ${props => props.error===false ? 'none' : 'solid #f46262'};;
        
        padding: 10px 15px;
    }    

    @media only screen and (min-width: 730px) {
        width: 70%;
        margin: 0;
        margin-right: 15px;
        margin-top: ${props => props.error===false ? '0' : "25px"};
    }
`

const ShortenIt = styled.button`
    color: #fff;
    background: #2acfcf;
    cursor: pointer;

    font-family: 'Poppins';
    font-weight: 700;
    font-size: 16px;

    border-radius: 5px;
    border: none;
    
    width: 80%;

    padding: 10px;
    margin: 0 auto;

    @media only screen and (min-width: 730px) {
        width: 15%;
        margin: 0;
    }
`

const Advance = styled.div`
    padding: 0 20px;
    max-width: 450px;
    margin: 0 auto;
    margin-top: 60px;
`

const Ad_head = styled.h2`
    color: #232127;
    font-weight: 700;
    text-align: center;
`

const Ad_detail = styled.p`
    color: #bfbfbf;
    text-align: center;
    font-size: 16px;
`

const Cards = styled.div`
    margin: 0 auto;
    margin-top: 60px;

    @media only screen and (min-width: 730px) {
        display: flex;
        justify-content: center;
        align-items: flex-start;        
    }
`

const Card = styled.div`
    background-color: #fff;
    padding: 20px 30px;
    max-width: 400px;
    border-radius: 5px;
    border: none;

    @media only screen and (min-width: 730px) {
        max-width: 300px;
        margin-top: ${props => props.a ? '0' : props.b ? '40px' : '80px'};
    }
`

const CardImg = styled.span`
    background-color: #3b3054;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: -60px;
    border-radius: 50%;
    width: 80px;
    height: 80px;

    @media only screen and (min-width: 730px) {
        margin: 0;
        margin-top: -60px;
    }
`

const CardTitle = styled.h4`
    color: #35323e;
    font-weight: 700;
    text-align: center;
`

const CardBody = styled.p`
    color: #bfbfbf;
    text-align: center;
    font-size: 16px;

    @media only screen and (min-width: 730px) {
        text-align: left;
    }
`

const Vr = styled.div`
    background-color: #2acfcf;
    width: 7px;
    height: 85px;
    margin: 0 auto;

    @media only screen and (min-width: 730px) {
        width: 35px;
        height: 7px;
        margin: 140px 0;
    }
`

const Shortenurl = styled.div`
    margin: 0 auto;
    width: 100%;

    @media only screen and (min-width: 730px) {
        max-width: 1250px;
    }
`

const Error = styled.span`
    color: #f46262;
    font-size: 14px;
    font-weight: 500;
    font-style: italic;

    display: inline;

    @media only screen and (min-width: 730px) {
        ${'' /* display: none; */}
        ${'' /* float: left; */}
    }
`

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userlink: '',
            arrLinks: [],
            loader: false,
            showlink: false,
            isError: false,
            errorMesssage: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ 
            loader: true,
            isError: false,
            errorMessage: ''
        });

        // const response = {
        //     "ok": true,
        //     "result": {
        //         "code": "zekgD5",
        //         "short_link": "shrtco.de\/zekgD5",
        //         "full_short_link": "https:\/\/shrtco.de\/zekgD5",
        //         "short_link2": "9qr.de\/zekgD5",
        //         "full_short_link2": "https:\/\/9qr.de\/zekgD5",
        //         "short_link3": "shiny.link\/zekgD5",
        //         "full_short_link3": "https:\/\/shiny.link\/zekgD5",
        //         "share_link": "shrtco.de\/share\/zekgD5",
        //         "full_share_link": "https:\/\/shrtco.de\/share\/zekgD5",
        //         "original_link": "https:\/\/facebook.com"
        //     }
        // }
        // this.setState({
        //     loader: false,
        //     showLink: true,
        //     arrLinks: [...this.state.arrLinks, response.result]
        // });
        axios
            .get("https://api.shrtco.de/v2/shorten?url="+this.state.userlink)
            .then((response) => {
                this.setState({ 
                    loader: false, 
                    showLink: true,
                    arrLinks: [response.data.result, ...this.state.arrLinks]
                });
            })

            .catch((error) => {
                this.setState({
                    loader: false,
                    isError: true,
                    errorMessage: "Please add a valid link"
                })
                console.log(error);
            });


    }

    render() {
        return (
            <HomeBody>
                <Shorten>
                    <Searchbar error={this.state.isError}>
                        <input type="text" id="userlink"
                            name="userlink"
                            placeholder="Shorten a link here..."
                            value={this.state.userlink}
                            onChange={(e) => {
                                this.setState({ userlink: e.target.value });
                            }}
                        />
                        <Error>{this.state.errorMessage}</Error>
                    </Searchbar>
                    <ShortenIt onClick={this.handleClick}>
                        Shorten it!
                    </ShortenIt>
                </Shorten>

                {this.state.loader ? <Loader /> : <></>}
                <Shortenurl>
                    {
                        this.state.arrLinks && this.state.arrLinks.map((l) => {
                            return (
                                <ShortenedLinks link={l} />
                            );
                        })
                    }
                </Shortenurl>


                <Advance>
                    <Ad_head>
                        Advanced Statistics
                    </Ad_head>
                    <Ad_detail>
                        Track how your links are performing across the web with our advanced statistics dashboard.
                    </Ad_detail>
                </Advance>

                <Cards>
                    <Card a>
                        <CardImg>
                            <img src="./assets/images/icon-brand-recognition.svg" alt="" />
                        </CardImg>
                        <CardTitle>Brand Recognition</CardTitle>
                        <CardBody>
                            a    Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                        </CardBody>
                    </Card>
                    <Vr />
                    <Card b>
                        <CardImg>
                            <img src="./assets/images/icon-detailed-records.svg" alt="" />
                        </CardImg>
                        <CardTitle>Detailed Records</CardTitle>
                        <CardBody>
                            Gain insights into who is clicking your links. Knowing when and where poeple engage with your content helps inform better decisions.
                        </CardBody>
                    </Card>
                    <Vr />
                    <Card c>
                        <CardImg>
                            <img src="./assets/images/icon-fully-customizable.svg" alt="" />
                        </CardImg>
                        <CardTitle>Fully Customizable</CardTitle>
                        <CardBody>
                            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                        </CardBody>
                    </Card>
                </Cards>
            </HomeBody>
        );
    }
}

export default Home;
export { ShortenIt };