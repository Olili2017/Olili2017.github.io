import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  render (){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" ></img>
          <p>My React Js APp</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Learn React</a>
        </header>
        <Education />
      </div>
    );
  }
}

class Education extends Component {

  render (){

    const schools = [
      {
        name : "some school name",
        major : "some major",
        from : 1994,
        to : 2000
      },
      {
        name : "some other school name",
        major : "some other major",
        from : 2001,
        to : 2011
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
        return <EducationLevel key={item.from} school={item} />
      });

      return levels;
    }
    return (
      <div>
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
      to : this.props.school.to
    }

  return (
    <div onClick={this.handleSelected}>
      <p>{level.name}</p>
      <p>{level.major}</p>
      <p>{level.from}</p>
      <p>{level.to}</p>
    </div>);
  }
}

export default App;
