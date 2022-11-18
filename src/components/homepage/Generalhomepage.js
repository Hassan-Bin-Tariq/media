import React from "react"
import "./Generalhomepage.css"
import { useHistory } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import {Button, Container, Row} from "react-bootstrap"
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


const GeneralHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    console.log(Name)
    console.log(user.setLoginUser.email);
    const [value, setValue] = useState([0, 35]);
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
                                        <ToggleButton variant="outline-success light" id="tbg-btn-8" value={8}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-9" value={9}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-10" value={10}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-11" value={11}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-12" value={12}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-13" value={13}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-14" value={14}>
                                            None
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-15" value={15}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-16" value={16}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-17" value={17}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-18" value={18}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-19" value={19}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-20" value={20}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-21" value={21}>
                                            None
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-22" value={22}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-23" value={23}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-24" value={24}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-25" value={25}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-26" value={26}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-27" value={27}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-28" value={28}>
                                            None
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-29" value={29}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-30" value={30}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-31" value={31}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-32" value={32}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-33" value={33}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-34" value={34}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-35" value={35}>
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