import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub, faGit, faJenkins, faNpm, faNode, faAndroid, faJava, faPhp, faJs, faReact, faPython, faUbuntu, faDocker} from '@fortawesome/free-brands-svg-icons'

import './css/TextEditor.css'
function Tools (){
    const tools = [
        { name : "git", icon : faGit},
        { name : "github", icon : faGithub},
        { name : "jenkins", icon : faJenkins},
        { name : "nodejs", icon : faNode},
        { name : "npm", icon : faNpm},
        { name : "android", icon : faAndroid},
        { name : "linux", icon : faUbuntu},
        { name : "docker", icon : faDocker},
        { name : "reactjs", icon : faReact},
        { name : "java", icon : faJava},
        { name : "php", icon : faPhp},
        { name : "javascript", icon : faJs},
        { name : "python", icon : faPython}
    ];
    return(
        <Container id="tools">
            <Row><Col style={{marginBottom: '15px'}}><TextEditor /></Col></Row>
            <br />
            <Row>
                <Col className="text-center"><h3>Some of the tools and frameworks I work with.</h3></Col>
            </Row>
            <Row style={{contentAlign : 'center'}}>
                <ul>
                {
                    tools.map((tool, key) => {
                        return <li style={{fontSize : '3rem', listStyle : 'none', display : 'inline-block', padding : '1rem'}}><i><FontAwesomeIcon icon={tool.icon} /></i></li>
                    })
                }
                </ul>
            </Row>
        </Container>
    );
}

class TextEditor extends Component {
    render (){
        return (
            <Container>
                <Row>
                    <Col className="text-center"><h3>Your solution is here.</h3></Col>
                </Row>
                <br />
                <Row>
                    <div className="code-editor">
                        <div className="code-editor-sidebar" >
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                            </ul>
                        </div>
                        <ul>
                            <li>
                                <span className="type" >const </span>
                                <span className="variable" > you </span>
                                <span className="equals" > = </span>
                                <span className="type" > new </span>
                                <span className="class" >  DeveloperHunter</span>
                                <span className="equals">();</span>
                            </li>
                            <br />
                            <li>
                                <span className="type" >let </span>
                                <span className="variable" >needCompetentDeveloper </span>
                                <span className="equals" > = </span>
                                <span className="value" > true</span>
                                <span className="equals" >;</span>
                            </li>
                            <br />
                            <li>
                                <span className="type" >while </span>
                                <span className="equals" >(</span>
                                <span className="variable-call" >needCompetentDeveloper</span>
                                <span className="equals" >)</span>
                                <span className="equals" >{"{"}</span>
                            </li>
                            <li>
                                <span className="variable-call" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you</span>
                                <span className="equals" >.</span>
                                <span className="reference" ><Link alt="contact-me" activeClass="active" spy={true} smooth={true} offset={-70} duration={1000} activeClassName="selected"  to="contact">contactMe</Link></span>
                                <span className="equals" >();</span>
                            </li>
                            <li className="equals" >}</li>
                            <br />
                            <li>
                                <span className="variable-call" >you</span>
                                <span className="equals">.</span>
                                <span className="reference" >getToKnowMe</span>
                                <span className="equals" >()</span>
                            </li>
                            <li>
                                <span className="equals" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.</span>
                                <span className="reference">then</span>
                                <span className="equals">(() </span>
                                <span className="type"> => </span>
                                <span className="variable-call">you</span>
                                <span className="equals">.</span>
                                <span className="reference">hireMe</span>
                                <span className="equals">())</span>
                            </li>
                            <li>
                                <span className="equals" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.</span>
                                <span className="reference">catch</span>
                                <span className="equals">(() </span>
                                <span className="type"> => </span>
                                <span className="variable">you</span>
                                <span className="equals">.</span>
                                <span className="reference">referMe</span>
                                <span className="equals">());</span>
                            </li>
                        </ul>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Tools;