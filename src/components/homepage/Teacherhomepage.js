import React from "react"
import "./Teacherhomepage.css"
import { useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const TeacherHomepage = (user) => {
   
    const history = useHistory()
    var Name = user.setLoginUser.name
    console.log(Name)
    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Welcome {Name}</h1>
                <Row className="mt-2 text-center">
                    <h2>Generate Event Request</h2>
                    <Col lg={5} md={6} sm={6} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Event Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter event title" />
                            </Form.Group>
                            <Form.Group controlId="formBasicDescription">
                                <Form.Label>Event Description</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Event Description" />
                            </Form.Group>
                            <Form.Group controlId="formBasicDate">
                                <Form.Label>Event Date</Form.Label>
                                <Form.Control type="date" placeholder="Event Date" />
                            </Form.Group>
                            <Form.Group controlId="formBasicTime">
                                <Form.Label>Event Time</Form.Label>
                                <Form.Control type="time" placeholder="Event Time" />
                            </Form.Group>
                            <Form.Group controlId="formBasicVenue">
                                <Form.Label>Event Venue</Form.Label>
                                <Form.Control type="text" placeholder="Event Venue" />
                            </Form.Group>
                            <Row className="mt-2">
                                <Button variant="success btn-block" type="submit">
                                    Submit Request
                                </Button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
            </Container>
        </>
    );
}

export default TeacherHomepage
