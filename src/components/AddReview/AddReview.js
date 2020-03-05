import React from "react";
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import useSignUpForm from '../customhook';
import "../allcss/AddReview.css";
import Search from '../Homepage/search';

const AddReview = () => {
const submit=()=>{
    alert(`company:${inputs.company}
    jobtitle:${inputs.jobtitle}
    years of experience:${inputs.year}
    Ratings:${inputs.salary}
    slary:${inputs.salary}
    review:${inputs.review}`)

}

    const {inputs, handleInputChange, handleSubmit} = useSignUpForm({company:'',jobtitle:'',year:'',ratings:'',salary:'',review:''}, submit);
return (
  <>
  
<MDBContainer style={{backgroundColor:"lightgrey",width:"40%",marginTop:"8%",marginBottom:"20%"}}>
  <MDBRow>
    <MDBCol md="6">
      <form onSubmit={handleSubmit}>
        <p id='addreviewheader'>Add Review</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text" >
          Company Name
        </label >
        <input type="text" className="form-control" id="form1"  name="company" value={inputs.company} onChange={handleInputChange} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text"  >
          Job title
        </label >
        <input type="text" className="form-control" id="form2"   name="jobtitle" value={inputs.jobtitle} onChange={handleInputChange} />
        <br />
      
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Years of Experience
        </label>
        <input type="number" id="form3"  className="form-control" min="1" max="20" name="year" value={inputs.year} onChange={handleInputChange}/>
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Ratings
        </label>
        <input type="number" className="form-control" id="form4"  placeholder="1 to 5"  min="1" max="5"name="ratings" value={inputs.ratings} onChange={handleInputChange}/>
        <br/>
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          salary
        </label>
        <input type="number" className="form-control" id="form5"  placeholder="Enter Base salary" name="salary" value={inputs.salary} onChange={handleInputChange}/>
        <label htmlFor="defaultFormContactMessageEx" className="grey-text" >
          Write a Review
        </label>
        <textarea type="text" className="form-control" id="form6"  rows="3" name="review" value={inputs.review} onChange={handleInputChange}/>
        <div className="text-center mt-4">
                  <input type="submit" value="submit" id="button" />
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </>
      );
    };

    export default AddReview;