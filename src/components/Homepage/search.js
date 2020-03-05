import React from "react";
import { useState } from "react";
import axios from "axios";
import SearchResult from "./searchresults";
import {Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = props => {
  const [queryData, setQueryData] = useState();

  const handleChange = e => {
    setQueryData(e.target.value);
    console.log("Line 10", queryData);
  };

  const handleClick = async e => {
    e.preventDefault();
    console.log(queryData);

    try {
      const queryResult = await axios.post(
        "http://localhost:4000/data/searchresult",   //post route for search term based on company name
        {
          query: queryData
        }
      );
      setQueryData(queryResult.data[0]);
      console.log(queryResult);
    } catch (error) {
      if (error) throw error;
    }
  };

  return (
    <div style={{marginTop:"6%"}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Navbar.Brand href="/" style={{fontSize:"25px"}}>Career Door</Navbar.Brand>
          <ul className="navbar-nav mr-auto">
          <Nav className="mr-auto">
          <Nav.Link href="/homepage">Home</Nav.Link>
          <Nav.Link href="/Review">Company</Nav.Link>
          <Nav.Link href="/Addreview">Add Review</Nav.Link>
          <Nav.Link href="/salary">Salary</Nav.Link>
        </Nav>
           
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              onChange={e => handleChange(e)}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search By Company"
              aria-label="Search"
            />
            <button
              onClick={handleClick}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
              
            </button>
          </form>
        </div>
      </nav>
      <SearchResult data={queryData} />
    </div>
  );
};

export default Search;
