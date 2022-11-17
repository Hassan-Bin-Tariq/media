import React from "react"
import "./Generalhomepage.css"
import { useHistory } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import {Button, Col, Container, Form, Row} from "react-bootstrap"
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const GeneralHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    console.log(Name)
    console.log(user.setLoginUser.email);
    const [value, setValue] = useState([1, 7]);
    const handleChange = (val) => setValue(val);
    return (
        /*<div className="Generalhomepage">  
            <h1>Hello {Name}</h1>
            <div className="button" onClick={() => history.push("/login")}>Logout</div>
        </div>*/
        <>
            <Container>
                
                <Button variant="warning" onClick={() => history.push("/login")}>Logout</Button>
                <Row className="sm-3 text-center">                  
                    <h1 className="shadow-sm text-success mt-3 p-3 text-center rounded">Welcome {Name}</h1>
                    <h2>Available Slots of the Week</h2>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Weekday</th>
                                    <th>Free Slots</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    
                                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-1" value={1}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-2" value={2}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-3" value={3}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-4" value={4}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-5" value={5}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-6" value={6}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-7" value={7}>
                                            None
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-1" value={1}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-2" value={2}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-3" value={3}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-4" value={4}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-5" value={5}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-6" value={6}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-7" value={7}>
                                            None
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-1" value={1}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-2" value={2}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-3" value={3}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-4" value={4}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-5" value={5}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-6" value={6}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-7" value={7}>
                                            None
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-1" value={1}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-2" value={2}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-3" value={3}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-4" value={4}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-5" value={5}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-6" value={6}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-7" value={7}>
                                            None
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-1" value={1}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-2" value={2}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-3" value={3}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-4" value={4}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-5" value={5}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-6" value={6}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-7" value={7}>
                                            None
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </tr>
                            </tbody>
                    </Table>
            </Row>
            <h6 className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
        </Container>
      </>
    );
}

export default GeneralHomepage