import React from 'react';
import './ShowFeedbacks.css'
const ShowFeedbacks = ({reviews}) => {
    return (
        <div className="col-lg-4">
            <div className="customer p-3 m-2">
    <div className="d-flex">
        <img src={reviews.photoURL} class="round mr-3" alt="..." height="50px" />
        <div >
        <h5 class="mt-0 mb-1">{reviews.name}</h5>
        <p className="text-muted">{reviews.title}</p>    
    </div>
</div>
      <p className="text">{reviews.description}</p>
    
            </div>
            
        </div>
    );
};

export default ShowFeedbacks;