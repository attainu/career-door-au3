import React from "react";
import useSignUpForm from '../customhook';
import SidenavigationBar from "../Sidenavigationbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';


const Projects=()=>{
    
        const project=()=>{
            alert(`keyskills:${inputs.title}
     Technical skills:${inputs.description}
            `)
        }
        const {inputs, handleInputChange, handleSubmit} = useSignUpForm({title:'',description:''}, project);
    return(
        <div>
            <SidenavigationBar/>
            <div className="display-profile-elements">
           
<Container className="App">
      <h1 style={{textAlign:"center"}}>Employment Details</h1>
        <Form className="form" onSubmit={handleSubmit}>
          <Col>
            <FormGroup>
              <Label>Project Title</Label>
              <Input
                type="text" name="title" value={inputs.title} onChange={handleInputChange} placeholder="Enter your project title"
              />
            </FormGroup>
          </Col>
         <br/>
         <br/>
         <Col>
            <FormGroup>
              <Label>Project description</Label>
              <Input
                 type="text"  name="description" value={inputs.description} onChange={handleInputChange} placeholder="Enter your Project description"
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
export default Projects