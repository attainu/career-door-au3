import React from "react";
import useSignUpForm from '../customhook';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

const PersonalDetails=()=>{
    const personal=()=>{
        alert(`address:${inputs.address}
        language:${inputs.language}
        
        `)
    }
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm({address:'',language:''}, personal);

    return(
        <div>
            
            <div className="display-profile-elements">
           
<Container className="App">
      <h1 style={{textAlign:"center"}}>Personal Details</h1>
        <Form className="form" onSubmit={handleSubmit}>
          <Col>
            <FormGroup>
              <Label>Address</Label>
              <Input
               type="text" name="address" onChange={handleInputChange} value={inputs.address} placeholder="Enter your address"
              />
            </FormGroup>
          </Col>
         <br/>
         <br/>
         <Col>
            <FormGroup>
              <Label>Language</Label>
              <Input
               type="text" name="language" onChange={handleInputChange} value={inputs.language} placeholder="Enter your language"
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
export default PersonalDetails