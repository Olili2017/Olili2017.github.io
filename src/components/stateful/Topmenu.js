import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'

import './css/overlaymenu.css'

class Topmenu extends Component {

    constructor(props){
        super(props);
        this.state = {
            itemSelected : 0,
            isScrolled : false
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll (event){
        let top = window.scrollY

        if (top > 50){
            this.setState({isScrolled : true})
        } else {
            this.setState({isScrolled : false})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }


    render (){

        const items = [
            { display : "Who is " + this.props.devname + "?", href : "whoami", selection : 0},
            { display : "Resume/CV", href : "resume", selection : 1},
            { display : "Portfolio", href : "portfolio", selection : 2},
            { display : "Tools & Frameworks", href : "tools", selection : 3},
            { display : "Interests", href : "interests", selection : 4},
            { display : "Contact me", href : "contact", selection : 5}
        ]

        return (<div id="top">
            {
            !this.state.isScrolled ?
            (
                <Row className="menu">
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
                </Row>
            ) : (
                <Row className="menu overlay-menu" >
                    <nav className="d-none d-md-none d-lg-block" >
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
                    <div className="btn-back-top" >
                        <Link activeClass="active" spy={true} smooth={true} offset={0} duration={1000} activeClassName="selected" to="top">
                            <FontAwesomeIcon icon={faArrowAltCircleUp} style={{ width: '100%', height: '100%'}}/>
                        </Link>
                        </div>
                </Row>
            )
            }
        </div>

        );
    }
}

export default Topmenu;