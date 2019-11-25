import React, {Component} from 'react';
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Landing from './components/stateless/Landing';
import Whoami from './components/stateful/Whoami';
// import { Button,Image, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Resume from './components/stateless/Resume';
import Contact from './components/stateful/Contact'
import Tools from './components/stateless/Tools';

class App extends Component {

  render (){

    const developerName = "Daniel Olili";
    const developerNameShort = "Daniel";

    const contact = [
      { key : "AGE", keyValue : "25" },
      { key : "PHONE", keyValue : "256(0) 772 64 9119" },
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
      <div className="App">
        <Landing developerName={developerName} developerNameShort={developerNameShort} contact={contact} socialliks={socialliks} />
        <Whoami />
        <Resume />
        <Tools />
        <Contact developerName={developerName} contact={contact} socialliks={socialliks} />
        {/* <Education /> */}
      </div>
    );
  }
}
export default App;
