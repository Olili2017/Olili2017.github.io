import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-scroll';

class Topmenu extends Component {

    constructor(props){
        super(props);
        this.state = {
            itemSelected : 0
        }
        // this.isNewSelected = this.isNewSelected.bind(this);
    }

    // isNewSelected(event){
    //     console.log("section is -- " + event.target.value);

    // }

    render (){

        const items = [
            { display : "Who is " + this.props.devname + "?", href : "whoami", selection : 0},
            { display : "Resume/CV", href : "resume", selection : 1},
            { display : "Portfolio", href : "portfolio", selection : 2},
            { display : "Tools & Frameworks", href : "tools", selection : 3},
            { display : "Interests", href : "interests", selection : 4},
            { display : "Contact me", href : "contact", selection : 5}
        ]

        return (
        <Row >
            <nav className="d-none d-md-none d-lg-block">
                {
                    items.map((item, key) => {
                    return <div key={key}><Link onClick={
                        () => {
                            this.setState({itemSelected : item.selection});
                        }
                    } activeClass="active" spy={true} smooth={true} offset={-70} duration={1000} activeClassName="selected" to={item.href} className={this.state.itemSelected === item.selection ? "selected" : "notselected"} >{item.display}</Link></div>
                    })
                }
            </nav>
        </Row>);
    }
}

export default Topmenu;