import React, {Component} from 'react';
import Landing from './components/stateless/Landing';
import Whoami from './components/stateful/Whoami';
import { Button,Image, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Resume from './components/stateless/Resume';

class App extends Component {

  render (){

    return (
      <div className="App">
        <Landing />
        <Whoami />
        <Resume />
        {/* <MainHeader /> */}
        {/* <Education /> */}
      </div>
    );
  }
}
export default App;
