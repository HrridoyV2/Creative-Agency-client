import React from 'react';
import ShowFeedbacks from '../ShowFeedbacks/ShowFeedbacks';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
const feedbacks = [
    {
        name: 'Nash Patrik',
        title: 'CEO, Monpol',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, consectetur. Fugit neque mollitia itaque atque.',
        img: customer1
    },
    {
        name: 'Miriam Barron',
        title: 'CEO, Monpol',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, consectetur. Fugit neque mollitia itaque atque.',
        img: customer2
    },
    {
        name: 'Bria Malone',
        title: 'CEO, Monpol',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, consectetur. Fugit neque mollitia itaque atque.',
        img: customer3
    }
]
const ClientsFeedBack = () => {
    return (
        <div style={{height:"500px"}}>
            <h2 className="title text-dark m-5">Clients <span>Feedback</span></h2>
            <div className="row">
            {
                feedbacks.map(feedback => <ShowFeedbacks feedback={feedback}></ShowFeedbacks>)

            }
        </div>
        </div>
    );
};

export default ClientsFeedBack;