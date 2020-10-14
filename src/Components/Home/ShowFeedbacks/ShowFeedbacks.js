import React from 'react';
import './ShowFeedbacks.css'
const ShowFeedbacks = ({feedback}) => {
    return (
        <div className="col-md-4">
            <div className="customer p-3 m-2">
    <div className="d-flex">
        <img src={feedback.img} class="mr-3" alt="..." height="50px" />
        <div >
        <h5 class="mt-0 mb-1">{feedback.name}</h5>
        <p className="text-muted">{feedback.title}</p>    
    </div>
</div>
      <p className="text">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    
            </div>
        </div>
    );
};

export default ShowFeedbacks;