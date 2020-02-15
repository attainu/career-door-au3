import React from "react";
import SidenavigationBar from "../Sidenavigationbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
const Resume=()=>{
    return(
        <div>
            <SidenavigationBar/>
             <div className="display-profile-elements"> 
      <Container className="App">
      <h1 style={{textAlign:"center"}}>Resume Upload</h1>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Resume upload</Label>
              <Input
                type="file"
                name="myfile"
                placeholder=".txt .docs .pdf "
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
export default Resume