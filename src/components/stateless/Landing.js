import React from 'react';
import { Button,Image, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import profile from '../../profile.jpg';
import Topmenu from '../stateful/Topmenu';


function Landing (props){

    const developerName = "Daniel Olili";
    const developerNameShort = "Daniel";

    const contact = [
      { key : "AGE", keyValue : "25" },
      { key : "PHONE", keyValue : "256 77 264-91-19" },
      { key : "EMAIL", keyValue : "olilidaniel48@gmail.com" },
      { key : "ADDRESS", keyValue : "Kampala, Uganda" }
    ];

    const socialliks = [
      { name : "Github", icon : faGithub, href : "https://github.com/Olili2017" },
      { name : "LinkedIn", icon : faLinkedin, href : "https://www.linkedin.com/in/daniel-olili-93029b111/" },
      { name : "Twitter", icon : faTwitter, href : "https://twitter.com/olilidaniel" },
    //   { name : "Upwork", icon : "https://github.com/fluidicon.png", href : "https://github.com/Olili2017" }
    ]

    return (
        <header className="main-header container-fluid">
        <Container>
        <Topmenu devname={developerNameShort}/>
        <Row>
          <Col className="d-none d-md-none d-lg-block">
            <Image className="profile-image" src={profile} rounded />
          </Col>
          <Col className="d-none d-xs-none d-sm-block d-md-block d-lg-block">
            <div>
              <p className="developer-name" >{developerName}_</p>
              <p>Full stack developer, Mobile developer</p>
              <div>
                {
                  contact.map((item, key) => {
                  return <p key={key}><big className="developer-contact-key">{item.key}</big><tt className="developer-contact-value">{item.keyValue}</tt></p>
                  })
                }

              </div>
              <div>
                {
                  socialliks.map((icon, key) => {
                    return <a className="icon" rel="noopener noreferrer" target="_blank" alt={icon.name} href={icon.href}><FontAwesomeIcon icon={icon.icon} /></a>
                    // return <i className="icon" ><a alt={icon.name} target="_blank" href={icon.href}><img alt={icon.name} title={icon.name} src={icon.icon}></img></a></i>
                  })
                }
              </div>
            </div>
          </Col>
          <Col  className="d-none d-md-none d-lg-block"></Col>
        </Row>
      </Container>
    </header>
    );
}

export default Landing;