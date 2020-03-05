import React, { useEffect, useState } from "react" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Homepage/search';
import axios from "axios";




const Review = props => {
  const [TedData, setTedData] = useState([]);
  const [page, setPage] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        var no = props.match.params.page;
        const Data = await axios.get(
          `http://localhost:4000/data/${no}`          //route to fetch all company data related to name,location,Review,ratings
        );
        
        console.log("data:", Data.data);
        setTedData(Data.data.result);
        setPage(Data.data.pageInfo);
      } catch (error) {
        if (error) throw error;
      }
    }
    fetchData();
  }, );

  
  const next = () => {
    setTedData([])
     setPage(page + 1)
     axios.get(`/event/page/${page}`)
         .then(res => {
            setTedData([...res.data])
         })
         .catch(err => console.log(err))
 }
 
 const prev = () => {
     if (page === 1) { return }
    setTedData([])
     setPage(page - 1)
     axios.get(`/event/page/${page}`)
         .then(res => {
            setTedData([...res.data])
         })
         .catch(err => console.log(err))
  };
  return (
    <div>
      <Search />
      
        
          {TedData
            ? TedData.map(item => {
                return (

                  <div className="col-sm-12 col-md-6" style={{ marginLeft:"25%",width:"120%"}}>
                  <div className="card mb-3" style={{ marginLeft:"auto",marginRight:"auto",height:"40%"}}>
                      <div className="card-body" >
                          <h5 className="card-title" style={{fontSize:"25px",fontFamily:"sans-serif"}}>{item.company}</h5>
                          <p className="card-text" style={{fontSize:"25px"}}>Review:{item.review}</p>
                  <p className="card-text"><small className="text-muted" style={{fontSize:"20px"}}>location:{item.location}</small></p>
                  <span className="badge badge-danger">Ratings:{item.ratings}</span>
                  </div>
                  </div>
                  </div>
                );
              })
            : "Loading..."}
             <div className="container mb-5">
                <div className="btn-group btn-group-lg d-flex justify-content-center">
                    <button type="button" className="btn btn-dark" onClick={prev}>Previous</button>
                    <button type="button" className="btn btn-dark" onClick={next}>Next</button>
                </div>
            </div>
        
        </div>
  );
};

export default Review;
