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
                <h1>Get in touch</h1>
                <Row>
                    <Col>
                    <div>
                        {
                        contact.map((item, key) => {
                        return ( item.key !== "AGE" && item.key !== "ADDRESS") ? <p key={key}><big className="developer-contact-key">{item.key}</big><tt className="developer-contact-value">{item.keyValue}</tt></p> : <p></p>
                        })
                        }
                    </div>
                    <Row>
                        {
                        socialliks.map((icon, key) => {
                        return <Col><a className="icon" rel="noopener noreferrer" target="_blank" alt={icon.name} href={icon.href}><FontAwesomeIcon icon={icon.icon} />{icon.name}</a></Col>
                            // return <i className="icon" ><a alt={icon.name} target="_blank" href={icon.href}><img alt={icon.name} title={icon.name} src={icon.icon}></img></a></i>
                        })
                        }
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    </Col>
                    <Col>
                        <Row>
                            <p>Or just write me a letter here_</p>
                        </Row>
                        <Container>
                            <Form onSubmit={this.handleSubmit} netlify >
                                <Form.Group controlId="name">
                                    {/* <Form.Label>Your name</Form.Label> */}
                                    <Form.Control name="name" value={name} type="text" placeholder="Your name" onChange={this.handleFormInputChange} />
                                    {/* <Form.Text className="text-muted">
                                    I'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control value={email} name="email" type="email" placeholder="Enter email" onChange={this.handleFormInputChange} />
                                    <Form.Text className="text-muted">
                                    I'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="message">
                                    {/* <Form.Label>Password</Form.Label> */}
                                    <Form.Control value={message} name="message" as="textarea" rows="5" placeholder="Type your message here" onChange={this.handleFormInputChange} />
                                </Form.Group>
                                <Form.Group>
                                    <div data-netlify-recaptcha="true"></div>
                                </Form.Group>
                                <Button className="btn-submit" variant="primary" type="submit">
                                    Send
                                </Button>
                            </Form>
                        </Container>
                    </Col>
                    <hr />
                </Row>
                <Row className="copy-section" >
                    <Col><p>Copyright &copy; {new Date().getFullYear()} {this.props.developerName}. All Rights Reserved</p></Col>
                </Row>

            </section>
        );
    }
}

export default Contact;