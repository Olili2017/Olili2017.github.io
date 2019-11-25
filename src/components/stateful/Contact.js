import React, { Component } from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Contact extends Component {
    render (){
        const contact = this.props.contact;
        const socialliks = this.props.socialliks;

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
                            <Form name="contac-form" method="POST" data-netlify="true">
                                <Form.Group controlId="name">
                                    {/* <Form.Label>Your name</Form.Label> */}
                                    <Form.Control name="name" type="text" placeholder="Your name" />
                                    {/* <Form.Text className="text-muted">
                                    I'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    I'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="message">
                                    {/* <Form.Label>Password</Form.Label> */}
                                    <Form.Control name="message" as="textarea" rows="5" placeholder="Type your message here" />
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