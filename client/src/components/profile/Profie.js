import React, { useState } from "react";
import "./Profile.css";
import useSignUpForm from "../customhook";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "../../url";
import { Container, Col, FormGroup, Label, Input, Button } from "reactstrap";

const Profile = props => {
  const [file, setFile] = useState(null);
  const profile = () => {
    const fd = new FormData();
    fd.append("resume", file.cloudResume, file.cloudResume.name);
    inputs.cloudResume = fd;
    let result = profile(inputs).then(data => {
      console.log(data);
    });
    console.log(result);
  };

  const fileInputhandler = e => {
    setFile({ ...file, [e.target.name]: e.target.files[0] });
  };

  let { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      cloudResume: "",
      keySkills: {
        Technicalskills: ""
      },
      employement: {
        company: "",
        position: ""
      },
      education: {
        school: "",
        college: "",
        graduation: ""
      },
      projects: {
        title: "",
        description: ""
      },
      personalDetails: {
        address: "",
        language: ""
      }
    },
    profile
  );

  return (
    <div className="formdiv">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h1 className="text-center text-light">Upload the Profile Details</h1>
        <div className="display-profile-elements">
          <Container className="App">
            <h1 style={{ textAlign: "center", padding: "25px" }}>
              Resume Upload
            </h1>
            <Col>
              <FormGroup>
                <div className="input-group">
                  <div className="custom-file">
                    <Label className="custom-file-label" for="customFile">
                      Resume upload
                    </Label>
                    <Input
                      type="file"
                      name="cloudResume"
                      className="custom-file-input"
                      onChange={fileInputhandler}
                      value={inputs.cloudResume}
                    />
                  </div>
                  <span className="text-center">{inputs.cloudResume}</span>
                  <br />
                  {/* <p className="text-danger">
                      **File format must be .txt, .docs, .pdf**
                    </p> */}
                </div>
              </FormGroup>
            </Col>
            <br />
            <br />
          </Container>
        </div>
        <div className="display-profile-elements">
          <Container className="App">
            <h1 style={{ textAlign: "center", padding: "25px" }}>
              Education Details
            </h1>

            <Col>
              <FormGroup>
                <Label>Enter your school name</Label>
                <Input
                  type="text"
                  name="school"
                  value={inputs.school}
                  onChange={handleInputChange}
                  placeholder="Enter your school"
                />
              </FormGroup>
            </Col>
            <br />
            <br />
            <Col>
              <FormGroup>
                <label htmlFor="college">Enter your 12th college name</label>
                <Label></Label>
                <Input
                  type="text"
                  name="college"
                  value={inputs.college}
                  onChange={handleInputChange}
                  placeholder="Enter your 12th college"
                />
              </FormGroup>
            </Col>
            <br />
            <br />
            <Col>
              <FormGroup>
                <label htmlFor="college">
                  Enter your graduating college name{" "}
                </label>
                <Label></Label>
                <Input
                  type="text"
                  name="graduation"
                  value={inputs.graduation}
                  onChange={handleInputChange}
                  placeholder="Enter your graduation college"
                />
              </FormGroup>
            </Col>
            <br />
            <br />
          </Container>
        </div>

        <div className="display-profile-elements">
          <Container className="App">
            <h1 style={{ textAlign: "center", padding: "25px" }}>
              Project Details
            </h1>

            <Col>
              <FormGroup>
                <Label>Project Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={inputs.title}
                  onChange={handleInputChange}
                  placeholder="Enter your project title"
                />
              </FormGroup>
            </Col>
            <br />
            <br />
            <Col>
              <FormGroup>
                <Label>Project description</Label>
                <Input
                  type="text"
                  name="description"
                  value={inputs.description}
                  onChange={handleInputChange}
                  placeholder="Enter your Project description"
                />
              </FormGroup>
            </Col>
            <br />
            <br />
          </Container>
        </div>

        <div className="display-profile-elements">
          <Container className="App">
            <h1 style={{ textAlign: "center", padding: "25px" }}>
              Personal Details
            </h1>

            <Col>
              <FormGroup>
                <Label>Address</Label>
                <Input
                  type="text"
                  name="address"
                  onChange={handleInputChange}
                  value={inputs.address}
                  placeholder="Enter your address"
                />
              </FormGroup>
            </Col>
            <br />
            <br />
            <Col>
              <FormGroup>
                <Label>Language</Label>
                <Input
                  type="text"
                  name="language"
                  onChange={handleInputChange}
                  value={inputs.language}
                  placeholder="Enter your language"
                />
              </FormGroup>
            </Col>
            <br />
            <br />
          </Container>
        </div>

        <div className="display-profile-elements">
          <Container className="App">
            <h1 style={{ textAlign: "center", padding: "25px" }}>
              Employment Details
            </h1>

            <Col>
              <FormGroup>
                <Label>Company Name</Label>
                <Input
                  type="text"
                  name="company"
                  onChange={handleInputChange}
                  value={inputs.company}
                  placeholder="Enter your company"
                />
              </FormGroup>
            </Col>
            <br />
            <br />
            <Col>
              <FormGroup>
                <Label>Position</Label>
                <Input
                  type="text"
                  name="position"
                  onChange={handleInputChange}
                  value={inputs.position}
                  placeholder="Enter your position"
                />
              </FormGroup>
            </Col>
            <br />
            <br />
          </Container>
        </div>

        <div className="display-profile-elements">
          <Container className="App">
            <h1 style={{ textAlign: "center", padding: "25px" }}>Skills</h1>

            <Col>
              <FormGroup>
                <Label>keyskills :</Label>
                <select
                  className="custom-select"
                  onChange={handleInputChange}
                  value={inputs.keyskills}
                  name="keyskills"
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
              </FormGroup>
            </Col>
            <br />
            <br />
            <Col>
              <FormGroup>
                <Label>Technicalskills</Label>
                <Input
                  type="text"
                  name="Technicalskills"
                  onChange={handleInputChange}
                  value={inputs.Technicalskills}
                  placeholder="Enter your technical skills"
                />
              </FormGroup>
            </Col>
            <br />
            <br />
          </Container>
        </div>

        <div style={{ textAlign: "center", paddingTop: "20px" }}>
          <Button type="submit" className="btn btn-outline-light">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Profile;
