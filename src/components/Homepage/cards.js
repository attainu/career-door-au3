import React, { Fragment } from 'react';
import {Button} from 'reactstrap';
const EventsCard = props => {
  
    return (
        <Fragment>
            {
                
                props.data.map((obj, idx) =>
                    <div className="col-sm-12 col-md-6" key={idx}>
            
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{obj.name}</h5>
                                <p className="card-text">{obj.description}</p>
                                <span className="badge badge-danger">{obj.ratings} ratings</span>
                                <p className="card-text"><small className="text-muted">{obj.event}</small></p>
                                <Button variant="primary" style={{float:"right"}} onClick={this.props.onClick} >Add Review</Button>
                            </div>
                        </div>
                    </div>
                )
            }
        </Fragment>
    );
}

export default EventsCard;