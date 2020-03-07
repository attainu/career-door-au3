import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { viewReview } from "../../url";
import { useAlert } from "react-alert";

const ViewReview = props => {
  const [reviewData, setreviewData] = useState([]);
  const [company, setCompanyData] = useState();
  const alert = useAlert();

  const handleChange = e => {
    const { name, value } = e.target;
    setCompanyData({ ...company, [name]: value });
  };
  const handleClick = e => {
    e.preventDefault();
    if (!company) {
      alert.error("Please enter the company");
    } else {
      fetchData(company);
      async function fetchData(company) {
        try {
          let result = await viewReview(company);
          setreviewData([...result]);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  console.log(reviewData);
  return (
    <div className="main-review">
      <main className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 mb-4">
              <div className="container-fluid">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    onChange={e => handleChange(e)}
                    className="form-control mr-sm-2 mt-5"
                    type="search"
                    placeholder="Search By Company"
                    aria-label="Search"
                    name="company"
                  />
                  <button
                    onClick={handleClick}
                    className="btn btn-primary mt-5"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
                <br />
              </div>
              {reviewData.length ? (
                reviewData.map(item => {
                  return (
                    <div
                      key={item.id}
                      className="col-sm-12 col-md-6"
                      style={{ marginLeft: "25%", width: "120%" }}
                    >
                      <div
                        className="card mb-3"
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          height: "40%"
                        }}
                      >
                        <div className="card-body">
                          <h5
                            className="card-title text-center"
                            style={{
                              fontSize: "25px",
                              fontFamily: "sans-serif"
                            }}
                          >
                            {item.company}
                          </h5>
                          <p className="card-text" style={{ fontSize: "20px" }}>
                            Review:{item.review}
                          </p>
                          <p className="card-text">
                            <small
                              className="text-muted"
                              style={{ fontSize: "20px" }}
                            >
                              JobTitle:{item.jobtitle}
                            </small>
                          </p>
                          <span className="badge badge-danger">
                            Ratings:{item.ratings}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="jumbotron jumbotron-fluid ml-auto">
                  <div className="container">
                    <h5 className="display-5 text-center">No Data Found</h5>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewReview;
