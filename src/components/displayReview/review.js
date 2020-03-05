import React, { useEffect, useState } from "react" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Homepage/search';
import axios from "axios";


const useForceUpdate = () => useState()[1];

const Review = props => {
  const [TedData, setTedData] = useState([]);
  const [pageNo, setPageNo] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        var no = props.match.params.page;
        const Data = await axios.get(
          `http://localhost:4000/data/${no}`          //route to fetch all company data related to name,location,Review,ratings
        );
        
        console.log("data:", Data.data);
        setTedData(Data.data.result);
        setPageNo(Data.data.pageInfo);
      } catch (error) {
        if (error) throw error;
      }
    }
    fetchData();
  }, );

  const forceUpdate = useForceUpdate();

  const handleClick = async () => {
    try {
      //setPageNo(Number(pageNo) + value);
      var num = props.match.params.page;
      const TedDataPage = await axios.get(
        `http://localhost:4000/data/${num}`   
      );
      //setPageNo(no);
      forceUpdate();
      console.log("Page no:", TedDataPage.data.result);
      setTedData(TedDataPage.data.result);
      setPageNo(TedDataPage.data.pageInfo);
    } catch (error) {
      if (error) throw error;
    }
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
        </div>
  );
};

export default Review;
