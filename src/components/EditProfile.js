import React from 'react';
import './profilecss.css';
import useSignUpForm from './customhook';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Container, Col,
    FormGroup, Label, Input, Button,
    
  } from 'reactstrap';

 const EditProfile = () =>{
     const editprofile=()=>{
         alert(`school:${inputs.school}
         college:${inputs.college}
         graduation:${inputs.graduation}
         Company:${inputs.company}
        position:${inputs.position}
        keyskills:${inputs.keyskills}
Technical skills:${inputs.Technicalskills}
address:${inputs.address}
        language:${inputs.language}
        Title:${inputs.title}
        description:${inputs.description}

        `)
      
     }
     const value1  =localStorage.getItem('school');
     const value2  =localStorage.getItem('college')
     const value3  =localStorage.getItem('graduation')
     const value4  =localStorage.getItem('company')
     const value5  =localStorage.getItem('position')
     const value6  =localStorage.getItem('keyskills')
     const value7  =localStorage.getItem('Technicalskills')
     const value8  =localStorage.getItem('address')
     const value9  =localStorage.getItem('language')
     const value10 =localStorage.getItem('title')
     const value11 =localStorage.getItem('description')
    const {inputs,handleInputChange, handleSubmit} = useSignUpForm({school:value1,college:value2,graduation:value3,company:value4,position:value5,keyskills:value6,Technicalskills:value7,address:value8,language:value9,title:value10,description:value11}, editprofile);

     return(
    
      
<div className="formdiv" >
    <form onSubmit={handleSubmit}>
    


    <div className="display-profile-elements"> 
      <Container className="App">
      <h1 style={{textAlign:"center",padding:"25px"}}>Resume Upload</h1>
        
          <Col>
            <FormGroup>
              <Label>Resume upload</Label>
              <Input
                type="file"
                name="myfile"/>
                <br/>
                <p>file format must be .txt, .docs, .pdf</p>
              
            </FormGroup>
          </Col>
         <br/>
         <br/>
      </Container>
    </div>
    <div className="display-profile-elements">
          
          <Container className="App">
                <h1 style={{textAlign:"center",padding:"25px"}}>Education Details</h1>
                  
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
                    
                </Container>
                      </div>







                      <div className="display-profile-elements">
           
           <Container className="App">
                 <h1 style={{textAlign:"center",padding:"25px"}}>Project Details</h1>
                   
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
                 </Container>
                       </div>          




                      <div className="display-profile-elements">
           
           <Container className="App">
                 <h1 style={{textAlign:"center",padding:"25px"}}>Personal Details</h1>
                   
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
                     
                 </Container>
           
                       </div>




             <div className="display-profile-elements">
     
 <Container className="App">
      <h1 style={{textAlign:"center",padding:"25px"}}>Employment Details</h1>
        
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
          
      </Container>

            </div> 





             <div className="display-profile-elements">
          
<Container className="App">
      <h1 style={{textAlign:"center",padding:"25px"}}>Skills</h1>
    
          <Col>
            <FormGroup>
              <Label>keyskills :</Label>
              <select onChange={handleInputChange} value={inputs.keyskills} name="keyskills">
  <option value="Engineering">Engineering</option>
  <option value="Commerce">Commerce</option>
  <option value="Arts">Arts</option>
</select>
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
          
      </Container>

            </div>


<div style={{textAlign:"center",paddingTop:"20px"}}>
<Button>Submit</Button>
</div>

    </form>


</div>

         
     );

 }
 export default EditProfile