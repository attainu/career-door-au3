import React from "react";
import useSignUpForm from '../customhook';
import SidenavigationBar from "../Sidenavigationbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';


const Education=()=>{
const education=()=>{
    alert(`school:${inputs.school}
    college:${inputs.college}
    graduating:${inputs.college}
    `)
}

    const {inputs, handleInputChange, handleSubmit} = useSignUpForm({school:'',college:'',graduation:''}, education);

    return(

        <div>
            <SidenavigationBar/>
            <div className="display-profile-elements">
          
<Container className="App">
      <h1 style={{textAlign:"center"}}>Education Details</h1>
        <Form className="form" onSubmit={handleSubmit}>
          <Col>
            <FormGroup>
              <Label>Enter your school name</Label>
              <Input
                type="text" name="school" value={inputs.school} onChange={handleInputChange} placeholder="Enter your school"
              />
            </FormGroup>
          </Col>
         <br/>
         <br/>
         <Col>
            <FormGroup>
  <label htmlFor="college">Enter your  12th college name</label>
              <Label></Label>
              <Input
                type="text" name="college" value={inputs.college} onChange={handleInputChange} placeholder="Enter your 12th college"
              />
            </FormGroup>
          </Col>
         <br/>
         <br/>
         <Col>
            <FormGroup>
  <label htmlFor="college">Enter your graduating college name </label>
              <Label></Label>
              <Input
                type="text" name="graduation" value={inputs.graduation} onChange={handleInputChange} placeholder="Enter your graduation college"
              />
            </FormGroup>
          </Col>
         <br/>
         <br/>
          <Button>Submit</Button>
        </Form>
      </Container>
            </div>
             
        </div>
    );
}
export default Education