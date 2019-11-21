import React, {Component} from 'react';
import Landing from './components/stateless/Landing';
import Whoami from './components/stateful/Whoami';
// import { Popover } from '@material-ui/core';
// import profile from './profile.jpg';
import { Button,Image, Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFace } from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends Component {

  render (){

    return (
      <div className="App">
        <Landing />
        <Whoami />
        {/* <MainHeader /> */}
        {/* <Education /> */}
      </div>
    );
  }
}

class MainHeader extends Component {
  render (){

    const developerName = "Daniel Olili";
    // const developerNameShort = "Daniel";

    const contact = [
      { key : "AGE", keyValue : "25" },
      { key : "PHONE", keyValue : "256 77 264-91-19" },
      { key : "EMAIL", keyValue : "olilidaniel48@gmail.com" },
      { key : "ADDRESS", keyValue : "Kampala, Uganda" }
    ];

    const socialliks = [
      { name : "Github", icon : "https://github.com/fluidicon.png", href : "https://github.com/Olili2017" },
      { name : "LinkedIn", icon : "https://github.com/fluidicon.png", href : "https://github.com/Olili2017" },
      { name : "Twitter", icon : "https://github.com/fluidicon.png", href : "https://github.com/Olili2017" },
      { name : "Upwork", icon : "https://github.com/fluidicon.png", href : "https://github.com/Olili2017" }
    ]
    return (
      <header className="main-header container-fluid">
        <Container>
        <Row>
          <Col>
            <Image xs={6} md={4} lg={4} className="profile-imag img-sm" src="https://previews.aspirity.com/spirit/assets/img/img_avatar.png" rounded />
          </Col>
          <Col>
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
                    return <i className="icon" ><a alt={icon.name} target="_blank" href={icon.href}><img alt={icon.name} title={icon.name} src={icon.icon}></img></a></i>
                  })
                }
              </div>
            </div>
          </Col>
          <Col><br /><b></b></Col>
        </Row>
      </Container>
    </header>
    );
  }
}

class Education extends Component {

  render (){

    const schools = [
      {
        name : "Makerere university, kampala",
        major : "Bsc. Computer engineering",
        from : 2014,
        to : 2019
      },
      {
        name : "Lugazi mixed school, Naalya",
        major : "Physics & Maths",
        from : 2012,
        to : 2013
      }
    ];

    /**
     * Gets my school background from array and recreates it to render as HTML
     * @param {Array} schools
     */
    const getEductationBackground = (schools) => {
      let levels;

      // collect schools and rearrange based on start year
      levels = schools.map((item, key) => {
        return <EducationLevel key={key} school={item} />
      });

      return levels;
    }
    return (
      <div id="education">
        <h3>Education background</h3>
        {getEductationBackground(schools)}
      </div>
    );
  }
}

class EducationLevel extends Component {

  constructor(props){
    super(props);
    this.state = {
      isSelelected : false
    }

    this.handleSelected = this.handleSelected.bind(this);
  }

  /**
   * Do something when school is selected
   * @param {event} event
   */
  handleSelected (event){
    console.log("school has been selected");

  }
  render (){
    // console.log(this.props);

    const level = {
      name : this.props.school.name,
      major : this.props.school.major,
      from : this.props.school.from,
      to : this.props.school.to,
      courseUnits : [
        {
          year : 2015,
          units : ["electronics", "programming"],
          description : "some desc here"
        },
        {
          year : 2016,
          units : ["networks"],
          description : "some desc two"
        }
      ]
    };

    const getStudyYearAndMaterial = (year) => {

      const courseUnit = level.courseUnits.find((units) => {
        return units.year === year;
      });

      return courseUnit;

    }

    const fillInStudyYears = (from,to) => {
      let n;
      let studyYears = [];

      for (n = from; n <= to; ++n){
        // console.log();

        studyYears.push(<Year year={n} courseUnits={getStudyYearAndMaterial(n)}/>)
      }

      return studyYears;
    }

  return (
    <div className="education-level card" onClick={this.handleSelected}>
      <p>{level.name}</p>
      <p>{level.major}</p>
      <ul className="education-duration">
        {fillInStudyYears(level.from, level.to)}
      </ul>
    </div>);
  }
}

class Year extends Component {
  constructor (props){
    super(props);
    this.toggleDetailsTooltip = this.toggleDetailsTooltip.bind(this);
  }

  toggleDetailsTooltip (event){
    //@TODO: toggle tooltip to show courses attempted
    console.log("mouse is over -- " + event.target.innerText + " course units are : " + this.props.courseUnits !== null && this.props.courseUnits !== undefined ? this.props.courseUnits.units : null);
  }

  render (){
  return (<li onMouseOver={this.toggleDetailsTooltip} key={this.props.year}><button className="btn btn-sm btn-primary" >{this.props.year}</button></li>);
  }
}

export default App;
