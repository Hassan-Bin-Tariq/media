import React from "react"
import "./Generalhomepage.css"
import { useHistory } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import {Button, Container, Row} from "react-bootstrap"
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

var Mondayslots = [];
var Tuesdayslots = [];
var Wednesdayslots = [];
var Thursdayslots = [];
var Fridayslots = [];

const GeneralHomepage = (user) => {

    const history = useHistory()
    var Name = user.setLoginUser.name
    console.log(Name)
    console.log(user.setLoginUser.email);

    const [Mondayvalue, setValueMonday] = useState();
    const [Tuesdayvalue, setValueTuesday] = useState();
    const [Wednesdayvalue, setValueWednesday] = useState();
    const [Thursdayvalue, setValueThursday] = useState();
    const [Fridayvalue, setValueFriday] = useState();

    const MondayhandleChange = (val) => setValueMonday(
        val,
        Mondayslots.push(val)  //SETTING THE VALUE AND PUSHING IT IN LIST
    );
    const TuesdayhandleChange = (val) => setValueTuesday(
        val,
        Tuesdayslots.push(val)
    );
    const WednesdayhandleChange = (val) => setValueWednesday(
        val,
        Wednesdayslots.push(val)
    );
    const ThursdayhandleChange = (val) => setValueThursday(
        val,
        Thursdayslots.push(val)
    );
    const FridayhandleChange = (val) => setValueFriday(
        val,
        Fridayslots.push(val)
    );

    const SubmitForm = () => {
        var Mondaysize = (Object.keys(Mondayslots).length) - 1; //SINCE IT IS APPENDING IN LIST SO THE FINAL LIST WOULD BE IN LAST INDEX
        console.log(Mondayslots[Mondaysize]); // SIZE WILL BE POINTING AT LAST INDEX WHERE OUR FINAL SLOTS ARE
        
        var Tuesdaysize = (Object.keys(Tuesdayslots).length) - 1;
        console.log(Tuesdayslots[Tuesdaysize]); 

        var Wednesdaysize = (Object.keys(Wednesdayslots).length) - 1;
        console.log(Wednesdayslots[Wednesdaysize]); 

        var Thursdaysize = (Object.keys(Thursdayslots).length) - 1;
        console.log(Thursdayslots[Thursdaysize]); 

        var Fridaysize = (Object.keys(Fridayslots).length) - 1;
        console.log(Fridayslots[Fridaysize]); 
    }    
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
                                    
                                    <ToggleButtonGroup type="checkbox" value={Mondayvalue} onChange={MondayhandleChange}>
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
                                    <ToggleButtonGroup type="checkbox" value={Tuesdayvalue} onChange={TuesdayhandleChange}>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-8" value={1}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-9" value={2}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-10" value={3}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-11" value={4}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-12" value={5}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-13" value={6}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-14" value={7}>
                                            None
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <ToggleButtonGroup type="checkbox" value={Wednesdayvalue} onChange={WednesdayhandleChange}>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-15" value={1}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-16" value={2}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-17" value={3}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-18" value={4}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-19" value={5}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-20" value={6}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-21" value={7}>
                                            None
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <ToggleButtonGroup type="checkbox" value={Thursdayvalue} onChange={ThursdayhandleChange}>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-22" value={1}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-23" value={2}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-24" value={3}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-25" value={4}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-26" value={5}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-27" value={6}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-28" value={7}>
                                            None
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <ToggleButtonGroup type="checkbox" value={Fridayvalue} onChange={FridayhandleChange}>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-29" value={1}>
                                            8:45 - 10:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-30" value={2}>
                                            10:15 - 11:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-31" value={3}>
                                            11:45 - 1:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-32" value={4}>
                                            1:15 - 1:40
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-33" value={5}>
                                            1:45 - 3:10
                                        </ToggleButton>
                                        <ToggleButton variant="outline-success light" id="tbg-btn-34" value={6}>
                                            3:15 - 4:45
                                        </ToggleButton>
                                        <ToggleButton variant="danger" id="tbg-btn-35" value={7}>
                                            None
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                    
                                </tr>
                                
                            </tbody>
                    </Table>
            </Row>
            <Button variant="success btn-block" onClick={SubmitForm}> 
                                    Submit Form
            </Button>
            <h6 className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
        </Container>
    </>
    );
}

export default GeneralHomepage