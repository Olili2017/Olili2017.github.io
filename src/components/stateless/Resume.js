import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Resume (){

        return(
            <Container id="resume">
                <Row>
                    <h1>Resume_</h1>
                    <p>
                    Lorem ipsum dolor sit amet, communication adipisicing elit, helpful eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud sence of humour ullamco laboris nisi ut honest ea commodo consequat.
                    Duis aute irure dolor in upper-intermediate english level velit dolore eu
                    ivivdtevoluptatem ontend developer.
                    </p>
                </Row>
                <Row>
                    <Col><Education /></Col>
                    <Col><Employment /></Col>
                </Row>
            </Container>
        );

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
            <br />
          <h4 className="sub-title" >Education</h4>
          <div className="large-list-container">{getEductationBackground(schools)}</div>
        </div>
      );
    }
  }

  class EducationLevel extends Component {

    render (){
      // console.log(this.props);

      const level = {
        name : this.props.school.name,
        major : this.props.school.major,
        from : this.props.school.from,
        to : this.props.school.to
      };

    return (
      <Container>
          <Row>
            <div className="large-list-block" >
                <p className="large-list-block-title" >{level.name}</p>
                <p className="large-list-block-date" >{level.from} - {level.to}</p>
                <p>{level.major}</p>
            </div>
          </Row>
      </Container>
      )
    }
  }


class Employment extends Component {

    render (){

      const companies = [
        {
          name : "COURIEMATE LTD",
          position : "SYSTEMS ENGINEER",
          from : "Feb 2019",
          to : "Oct 2019",
          jd : "Standing at the forefront of four company projects and two teams (local and remote), I made sure that we carried out the right implementations, used the right tools to ensure high system availability. \n\n"+
                "-  Intensively involved in system implementation and coding for both mobile and back-ends (android, spring-boot).\n" +
                "-  Designed and maintained system databases.\r\n" +
                "-  During this time I took on DevOps roles.\n" +
                "-  Managed project dependecies (Google Places, geolocation, directions and sheets APIs)\n" +
                "-  Carried out relevant company IT tasks (PM,Repairs and installations)"
        },
        {
          name : "INNOVEX UGANDA LTD",
          position : "ASS. SYSTEMS ARCHITECT",
          from : "December 2017",
          to : "Jan 2019",
          jd : "System design and development (back and front-end) in NodeJs, GraphQL, PHP and database administration."
        }
      ];

      /**
       * Gets my employment background from array and recreates it to render as HTML
       * @param {Array} companies
       */
      const getEmploymentBackground = (companies) => {
        let firms;

        // collect schools and rearrange based on start year
        firms = companies.map((item, key) => {
          return <Employmentcomponay key={key} company={item} />
        });

        return firms;
      }
      return (
        <div id="employment">
            <br />
          <h4 className="sub-title" >Employment</h4>
          <div className="large-list-container">{getEmploymentBackground(companies)}</div>
        </div>
      );
    }
  }

  class Employmentcomponay extends Component {

    render (){
      // console.log(this.props);

      const firm = {
        name : this.props.company.name,
        position : this.props.company.position,
        from : this.props.company.from,
        to : this.props.company.to,
        jd : this.props.company.jd
      };

    return (
      <Container>
          <Row>
            <div className="large-list-block" >
                <p className="large-list-block-title" >{firm.position} - <tt>{firm.name}</tt></p>
                <p className="large-list-block-date" >{firm.from} - {firm.to}</p>
                <p>{firm.jd}</p>
            </div>
          </Row>
      </Container>
      )
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


export default Resume;