import React from "react";
import { Container, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { profile } from "../../url";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cloudResume: null,
      Technicalskills: "",
      keyskills: "",
      company: "",
      position: "",
      school: "",
      college: "",
      graduation: "",
      title: "",
      description: "",
      address: "",
      language: ""
    };
  }
  handleChange = e => {
    console.log(this.props);
    if (e.target.name === "cloudResume") {
      this.setState({
        [e.target.name]: e.target.files[0]
      });
    } else {
      console.log("cmng");
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append(
      "cloudResume",
      this.state.cloudResume,
      this.state.cloudResume.name
    );
    let skills = {};
    skills.Technicalskills = this.state.Technicalskills;
    skills.keyskills = this.state.keyskills;
    fd.append("skills", JSON.stringify(skills));
    let employement = {};
    employement.company = this.state.company;
    employement.position = this.state.position;
    fd.set("employment", JSON.stringify(employement));

    let education = {};
    education.school = this.state.school;
    education.college = this.state.college;
    education.graduation = this.state.graduation;
    fd.set("education", JSON.stringify(education));

    let projects = {};

    projects.title = this.state.title;
    projects.description = this.state.description;

    fd.set("projects", JSON.stringify(projects));

    let personalDetails = {};

    personalDetails.address = this.state.address;
    personalDetails.language = this.state.language;

    fd.set("personalDetails", JSON.stringify(personalDetails));

    fd.set("email", JSON.stringify(this.props.data.email));

    let result = await profile(fd);
    toast.success("Profile updated successfully", {
      position: toast.POSITION.TOP_CENTER
    });
  };

  render() {
    return (
      <div className="formdiv">
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <ToastContainer />
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
                        Resume Upload
                      </Label>
                      <Input
                        type="file"
                        name="cloudResume"
                        className="custom-file-input"
                        onChange={this.handleChange}
                      />
                    </div>
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
                    value={this.state.school}
                    onChange={this.handleChange}
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
                    value={this.state.college}
                    onChange={this.handleChange}
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
                    value={this.state.graduation}
                    onChange={this.handleChange}
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
                    value={this.state.title}
                    onChange={this.handleChange}
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
                    value={this.state.description}
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                    value={this.state.address}
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
                    onChange={this.handleChange}
                    value={this.state.language}
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
                    onChange={this.handleChange}
                    value={this.state.company}
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
                    onChange={this.handleChange}
                    value={this.state.position}
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
                    onChange={this.handleChange}
                    value={this.state.keyskills}
                    name="keyskills"
                  >
                    <option value="selectstatus">Select</option>
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
                    onChange={this.handleChange}
                    value={this.state.Technicalskills}
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
  }
}

const mapStateToProps = state => {
  return {
    data: state.loggedInReducer.user
  };
};

export default connect(mapStateToProps)(FileUpload);
