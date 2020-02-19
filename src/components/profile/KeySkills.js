import React from "react";
import useSignUpForm from '../customhook';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';


const KeySkills=()=>{
   const key=()=>{
       alert(`keyskills:${inputs.keyskills}
Technical skills:${inputs.Technicalskills}
       `)
   }
   const {inputs, handleInputChange, handleSubmit} = useSignUpForm({keyskills:'',Technicalskills:''}, key);

    return(
        <div>
            
            <div className="display-profile-elements">
          
<Container className="App">
      <h1 style={{textAlign:"center"}}>Skills</h1>
        <Form className="form" onSubmit={handleSubmit}>
          <Col>
            <FormGroup>
              <Label>keyskills</Label>
              <Input
                type="text" name="keyskills" onChange={handleInputChange} value={inputs.keyskills} placeholder="Enter your key skills"
              />
            </FormGroup>
          </Col>
         <br/>
         <br/>
         <Col>
            <FormGroup>
              <Label>Technicalskills</Label>
              <Input
                type="text" name="Technicalskills" onChange={handleInputChange} value={inputs.Technicalskills} placeholder="Enter your technical skills"
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
export default KeySkills