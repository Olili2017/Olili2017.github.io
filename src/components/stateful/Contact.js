import React, { Component } from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : null,
            email : null,
            message : null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

          event.preventDefault();
    }

    handleFormInputChange = e => this.setState({ [e.target.name]: e.target.value });

    render (){
        const contact = this.props.contact;
        const socialliks = this.props.socialliks;

        const { name, email, message } = this.state;

        return (
            <section id="contact" className="main-header" style={{marginBottom : '0px', paddingBottom : '0px'}}>
                <Row className="copy-section" >
                    <Col>
                        <p>Copyright &copy; {new Date().getFullYear()} {this.props.developerName}. All Rights Reserved</p>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Contact;
