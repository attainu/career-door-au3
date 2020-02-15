import React from "react";
import useSignUpForm from '../customhook';
import SidenavigationBar from "../Sidenavigationbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
const Employment=()=>{
    const employment=()=>{
        alert(`Company:${inputs.company}
        position:${inputs.position}
        
        `)
    }
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm({company:'',position:''}, employment);

    return(
        <div>
            <SidenavigationBar/>
            <div className="display-profile-elements">
     
 <Container className="App">
      <h1 style={{textAlign:"center"}}>Employment Details</h1>
        <Form className="form" onSubmit={handleSubmit}>
          <Col>
            <FormGroup>
              <Label>Company Name</Label>
              <Input
                type="text" name="company" onChange={handleInputChange} value={inputs.company} placeholder="Enter your company"
              />
            </FormGroup>
          </Col>
         <br/>
         <br/>
         <Col>
            <FormGroup>
              <Label>Position</Label>
              <Input
                type="text" name="position" onChange={handleInputChange} value={inputs.position} placeholder="Enter your position"
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
export default Employment