import React from "react";
const SearchResult = props => {
  return (
    <div>
     
            { props.data ?(
                
                    <div className="col-sm-12 col-md-6" >
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{props.data.company}</h5>
                                <p className="card-text">{props.data.description}</p>
                                <span className="badge badge-danger">ratings:{props.data.ratings} </span>
                                <p className="card-text"><small className="text-muted">{props.data.location}</small></p>
                                
                            </div>
                        </div>
                    </div>
                
                ):("Loading...")
            }
            
        
    </div>
  );
};

export default SearchResult;
