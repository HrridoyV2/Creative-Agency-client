import React from 'react';
import ShowFeedbacks from '../ShowFeedbacks/ShowFeedbacks';
import { useState } from 'react';

const ClientsFeedBack = () => {
    const [reviews, setReviews] = useState([]);
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
    return (
        <div>
            <h2 className="title text-dark m-5">Clients <span>Feedback</span></h2>
            <div className="row">
            {
                reviews.map(reviews => <ShowFeedbacks reviews={reviews}></ShowFeedbacks>)

            }
        </div>
        </div>
    );
};

export default ClientsFeedBack;