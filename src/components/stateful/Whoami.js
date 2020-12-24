import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import { HoopSpinner } from "react-spinners-kit";
import './css/whoami.css';

class Whoami extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            downloadResume : false,
            downloadFailed : false
        }

        this.downloadResume = this.downloadResume.bind(this);
    }

    downloadResume (event){
        this.setState({loading : true, downloadFailed : false});
        //TODO: Implement download resume feature later
        setTimeout(() => {
            this.setState({loading : false, downloadFailed : true});
        }, 5000);
    }

    render (){

        const {loading} = this.state;

        return (
            <Container id="whoami">
                <Row>
                    <Col>
                        <h1>Hi_</h1>
                        <p>
                            I am software developer able to build both Web and Mobile presence
                            from the ground up - from concept, navigation and programming
                            (front-end/backend), testing, deploying to maintenance.
                            Skilled at writing well-designed, testable and efficient code using
                            current best practices in Web/Mobile development. Fast learner,
                            hard worker and team player who has strong hands on experience in an array of scripting
                            and programming languages.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="btn-download" onClick={this.downloadResume} >
                            <div className="btn-download-slide" >
                                <div className="btn-download-slide-content">
                                    <FontAwesomeIcon className="fa-in-btn" icon={faDownload} />
                                    <span className="text-color-white" >Download CV</span>
                                </div>
                            </div>
                            <FontAwesomeIcon className="fa-in-btn" icon={faDownload} />
                            <span className="in-btn-text" >Download CV</span>
                        </div>
                        {this.state.downloadFailed ? <span style={{color : 'red'}}>&nbsp;&nbsp;&nbsp;File server not reachable. Please try in a few moments ... <FontAwesomeIcon icon={faUserNinja}/></span> : <span></span>}
                        <HoopSpinner
                            size={30}
                            color="#686769"
                            loading={loading}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Whoami;
